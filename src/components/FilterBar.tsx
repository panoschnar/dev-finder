import React from "react";
import { Button } from "./Button";

interface FilterBarProps {
  filters: {
    lastName: string;
    language: string;
  };
  onFilterChange: (key: "lastName" | "language", value: string) => void;
  onBookmark: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onBookmark,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
      <input
        type="text"
        placeholder="Filter by last name..."
        value={filters.lastName}
        onChange={(e) => onFilterChange("lastName", e.target.value)}
        className="border rounded p-2 flex-1"
      />
      <select
        value={filters.language}
        onChange={(e) => onFilterChange("language", e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Languages</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="Golang">Golang</option>
      </select>
      <Button variant="secondary" onClick={onBookmark}>
        Bookmark Page
      </Button>
    </div>
  );
};
