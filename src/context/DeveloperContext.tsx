"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { IPerson } from "../utils/interfaces";
import { fetchPeople } from "../utils/mockData";
import {
  languages,
  PAGE_SIZE,
  WINDOW_AFTER,
  WINDOW_BEFORE,
} from "@/utils/constants";
import { getFiltersFromUrl } from "@/utils/helpers";

type Filters = { lastName: string; language: string };

type DeveloperContextType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
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

const DeveloperContext = createContext<DeveloperContextType | undefined>(
  undefined
);

export const DeveloperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Data state
  const [people, setPeople] = useState<IPerson[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviting, setInviting] = useState<IPerson | null>(null);
  const seenIdsRef = useRef<Set<string>>(new Set());

  const filters: Filters = getFiltersFromUrl();
  // Update filters: push to URL and reset data
  const setFilters = (newFilters: Filters) => {
    const params = new URLSearchParams();
    if (newFilters.lastName) params.set("lastName", newFilters.lastName);
    if (newFilters.language) params.set("language", newFilters.language);

    const newUrl = `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    window.history.pushState({}, "", newUrl);

    // Clear data for next fetch
    setPeople([]);
    setNextPage(0);
  };

  // Load more results (deduplicated)
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

      setPeople((prev) => {
        const newResults = data.results.filter((p) => {
          if (seenIdsRef.current.has(p.id)) return false;
          seenIdsRef.current.add(p.id);
          return true;
        });

        // Merge current with new results
        const merged = [...prev, ...newResults];

        // Set the maximum window size
        const maxWindowSize = WINDOW_BEFORE + WINDOW_AFTER + PAGE_SIZE;

        // Trim to sliding window if merged length exceeds window
        if (merged.length > maxWindowSize) {
          const trimmed = merged.slice(-maxWindowSize);
          //Update seenIdsRef so as to has the ids from trimmed array
          seenIdsRef.current = new Set(trimmed.map((p) => p.id));
          return trimmed;
        }

        return merged;
      });

      setNextPage(data.next ?? null);
    } catch (err) {
      console.error(err);
      setError("Failed to load more developers.");
    } finally {
      setLoading(false);
    }
  }, [nextPage, loading, filters.lastName, filters.language]);

  // Reset list when filters change (URL changed)
  useEffect(() => {
    setPeople([]);
    setNextPage(0);
  }, [filters.lastName, filters.language]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setPeople([]);
      setNextPage(0);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Bookmark current page
  const bookmarkUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL with current filters copied to clipboard!");
  };

  // Clear filters
  const clearFilters = () => setFilters({ lastName: "", language: "" });

  // Trigger initial load
  useEffect(() => {
    if (nextPage === 0) loadMoreResults();
  }, [nextPage, loadMoreResults]);

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
  if (!context)
    throw new Error(
      "useDeveloperContext must be used within a DeveloperProvider"
    );
  return context;
};
