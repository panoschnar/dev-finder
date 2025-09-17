import React from "react";
import { Button } from "./Button";
import { languages } from "@/utils/constants";
import { shareIcon } from "@/utils/icons";

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
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      {/* Last Name Input */}
      <input
        type="text"
        placeholder="Search by last name..."
        value={filters.lastName}
        onChange={(e) => onFilterChange("lastName", e.target.value)}
        className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-blue-500 transition"
      />

      {/* Language Select */}
      <div className="relative w-full md:w-52 group">
        <select
          value={filters.language}
          onChange={(e) => onFilterChange("language", e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-blue-500 appearance-none transition cursor-pointer"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div
          className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 text-xs
               transition-transform duration-200 group-focus-within:rotate-180"
        >
          ▼
        </div>
      </div>

      {/* Bookmark Button */}
      <Button
        variant="secondary"
        onClick={onBookmark}
        className="w-full md:w-auto flex items-center justify-center gap-2"
      >
        {shareIcon} Share
      </Button>
    </div>
  );
};
