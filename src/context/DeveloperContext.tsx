"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
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

const DeveloperContext = createContext<DeveloperContextType | undefined>(
  undefined
);

export const DeveloperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //  Initial filters from URL
  const getInitialFilters = () => {
    if (typeof window === "undefined") return { lastName: "", language: "" };

    const params = new URLSearchParams(window.location.search);
    return {
      lastName: params.get("lastName") || "",
      language: params.get("language") || "",
    };
  };

  const [filters, setFilters] = useState(getInitialFilters);
  const [people, setPeople] = useState<IPerson[]>([]);
  const [nextPage, setNextPage] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inviting, setInviting] = useState<IPerson | null>(null);

  //  Keep URL in sync with filters
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.lastName) params.set("lastName", filters.lastName);
    if (filters.language) params.set("language", filters.language);

    const newUrl = `${window.location.pathname}${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    window.history.replaceState({}, "", newUrl);
  }, [filters]);

  //  Load more results (deduplication included)
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
        const existingIds = new Set(prev.map((p) => p.id));
        const newResults = data.results.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newResults];
      });

      setNextPage(data.next ?? null);
    } catch {
      setError("Failed to load more developers.");
    } finally {
      setLoading(false);
    }
  }, [nextPage, loading, filters.lastName, filters.language]);

  //  Reset list when filters change
  useEffect(() => {
    setPeople([]);
    setNextPage(0);
  }, [filters.lastName, filters.language]);

  //  Bookmark current page
  const bookmarkUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL with current filters copied to clipboard!");
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({ lastName: "", language: "" });
    setPeople([]);
    setNextPage(0);
  };

  //  Trigger initial load
  useEffect(() => {
    if (nextPage === 0) {
      loadMoreResults();
    }
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
  if (!context) {
    throw new Error(
      "useDeveloperContext must be used within a DeveloperProvider"
    );
  }
  return context;
};
