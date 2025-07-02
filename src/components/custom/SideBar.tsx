import { useCallback, useState } from "react";
import { FilterButton } from "./FilterButton";
import type { FilterState } from "@/types/Types";

const CATEGORIES = [
  "All Categories",
  "Technology",
  "Creative Arts",
  "Languages",
  "Business",
  "Health & Fitness",
  "Music",
  "Cooking",
  "Crafts",
];

const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    category: "All Categories",
    priceRange: [0, 1000],
    rating: 0,
    level: "All Levels",
    location: "",
    isOnline: null,
  });

  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: any) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleClearFilters = useCallback(() => {
    setFilters({
      category: "All Categories",
      priceRange: [0, 1000],
      rating: 0,
      level: "All Levels",
      location: "",
      isOnline: null,
    });
    setSearchTerm("");
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="hidden lg:block w-80 h-full flex-shrink-0 start-left-0 overflow-y-auto p-6 bg-gray-50 border-r">
        <div className="bg-white  shadow-sm border p-6  sticky top-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
            <button
              onClick={handleClearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <FilterButton
                    key={category}
                    active={filters.category === category}
                    onClick={() => handleFilterChange("category", category)}
                    className="w-full justify-start"
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
