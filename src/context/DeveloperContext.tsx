"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { IPerson } from "../utils/interfaces";
import { fetchPeople } from "../utils/mockData";

type DeveloperContextType = {
  filters: { lastName: string; language: string };
  setFilters: (filters: { lastName: string; language: string }) => void;
  people: IPerson[];
  loading: boolean;
  error: string | null;
  nextPage: number | null;
  loadMoreResults: () => void;
  inviting: IPerson | null;
  setInviting: (person: IPerson | null) => void;
  bookmarkUrl: () => void;
  clearFilters: () => void;
};

const DeveloperContext = createContext<DeveloperContextType | undefined>(undefined);

export const DeveloperProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState({ lastName: "", language: "" });
  const [people, setPeople] = useState<IPerson[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviting, setInviting] = useState<IPerson | null>(null);

  // Load more results
  const loadMoreResults = useCallback(async () => {
    if (nextPage === null || loading) return;

    setLoading(true);
    setError(null);
    try {
      const data = await fetchPeople({
        page: nextPage,
        lastName: filters.lastName,
        language: filters.language,
      });

      setPeople((prev) => [...prev, ...data.results]);
      setNextPage(data.next ?? null);
    } catch (err) {
      setError("Failed to load more developers.");
    } finally {
      setLoading(false);
    }
  }, [nextPage, loading, filters.lastName, filters.language]);

  // Reset list when filters change
  useEffect(() => {
    setPeople([]);
    setNextPage(0);
  }, [filters.lastName, filters.language]);

  // Bookmark current page with filters
  const bookmarkUrl = () => {
    const params = new URLSearchParams();
    if (filters.lastName) params.append("lastName", filters.lastName);
    if (filters.language) params.append("language", filters.language);
    navigator.clipboard.writeText(`${window.location.origin}/?${params.toString()}`);
    alert("Current URL copied to clipboard!");
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({ lastName: "", language: "" });
    setPeople([]);
    setNextPage(0);
  };

  return (
    <DeveloperContext.Provider
      value={{
        filters,
        setFilters,
        people,
        loading,
        error,
        nextPage,
        loadMoreResults,
        inviting,
        setInviting,
        bookmarkUrl,
        clearFilters,
      }}
    >
      {children}
    </DeveloperContext.Provider>
  );
};

export const useDeveloperContext = () => {
  const context = useContext(DeveloperContext);
  if (!context) {
    throw new Error("useDeveloperContext must be used within a DeveloperProvider");
  }
  return context;
};
