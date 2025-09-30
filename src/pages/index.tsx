"use client";
import { useEffect, useRef } from "react";
import { DeveloperCard } from "../components/DeveloperCard";
import { FilterBar } from "../components/FilterBar";
import { Modal } from "../components/Modal";
import { TopBar } from "@/components/TopBar";
import Loader from "@/components/Loader";
import { useDeveloperContext } from "../context/DeveloperContext";

export default function Home() {
  const {
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
  } = useDeveloperContext();

  const observerRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll observer
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextPage !== null && !loading) {
        loadMoreResults();
      }
    });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [nextPage, loading, loadMoreResults]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <TopBar />

      <FilterBar
        filters={filters}
        onFilterChange={(key, value) =>
          setFilters({
            lastName: key === "lastName" ? value : filters.lastName,
            language: key === "language" ? value : filters.language,
          })
        }
        onBookmark={bookmarkUrl}
      />

      {error && <p className="text-red-500 text-center">{error}</p>}

      {people.length === 0 && !loading ? (
        <p className="text-center text-gray-500">No results found</p>
      ) : (
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(clamp(300px,30%,400px),1fr))] gap-[clamp(1rem,2vw,2rem)]">
          {people.map((person) => (
            <DeveloperCard
              key={person.id}
              person={person}
              onInvite={setInviting}
            />
          ))}
        </div>
      )}

      {/* Observer for infinite scroll */}
      <div ref={observerRef} className="h-1" />

      {loading && <Loader />}
      {nextPage === null && !loading && people.length > 0 && (
        <p className="mt-4 text-center text-gray-500">No more results</p>
      )}

      <Modal
        open={!!inviting}
        title={`Invite ${inviting?.firstName} ${inviting?.lastName}`}
        description={`Send an invite to ${inviting?.email}?`}
        onConfirm={() => {
          alert(`Invite sent to ${inviting?.email}`);
          setInviting(null);
        }}
        onClose={() => setInviting(null)}
      />
    </div>
  );
}
