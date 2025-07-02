import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/firebase/Firebase";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  type DocumentData,
} from "firebase/firestore";
import { FC, useState, useMemo, useCallback } from "react";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  DollarSign,
  User,
  ChevronDown,
  Grid,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FilterState } from "@/types/Types";
import { FilterButton } from "@/components/custom/FilterButton";
import SideBar from "@/components/custom/SideBar";

// Enhanced TypeScript interfaces
type Skill = {
  id: string;
  title: string;
  description: string;
  category: string;
  teacherId: string;
  createdAt: Date;
  price?: number;
  rating?: number;
  location?: string;
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  tags?: string[];
  teacherName?: string;
  isOnline?: boolean;
};

type SortOption =
  | "newest"
  | "oldest"
  | "price-low"
  | "price-high"
  | "rating"
  | "popularity";
type ViewMode = "grid" | "list";

// Constants for better maintainability
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

// const SKILL_LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popularity", label: "Most Popular" },
];

/**
 * Enhanced fetch function with mock data for demonstration
 */
const fetchSkills = async (): Promise<Skill[]> => {
  const querySnapshot = await getDocs(collection(db, "job-listing"));

  // Mock enhanced data for demonstration
  const mockEnhancements: Partial<Skill>[] = [
    {
      price: 25,
      rating: 4.8,
      location: "New York",
      duration: "2 hours",
      level: "Beginner",
      teacherName: "John Doe",
      isOnline: true,
    },
    {
      price: 40,
      rating: 4.5,
      location: "California",
      duration: "3 hours",
      level: "Intermediate",
      teacherName: "Jane Smith",
      isOnline: false,
    },
    {
      price: 60,
      rating: 4.9,
      location: "Texas",
      duration: "1.5 hours",
      level: "Advanced",
      teacherName: "Mike Johnson",
      isOnline: true,
    },
  ];

  return querySnapshot.docs.map(
    (doc: QueryDocumentSnapshot<DocumentData>, index) => ({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      category: doc.data().category,
      teacherId: doc.data().teacherId,
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      ...mockEnhancements[index % mockEnhancements.length],
      tags: ["popular", "trending", "new"].slice(
        0,
        Math.floor(Math.random() * 3) + 1
      ),
    })
  );
};

/**
 * Reusable Filter Button Component
 */
// const FilterButton: FC<{
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
//   className?: string;
// }> = ({ active, onClick, children, className = "" }) => (
//   <Button
//     onClick={onClick}
//     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//       active
//         ? "bg-blue-600 text-white shadow-md"
//         : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
//     } ${className}`}
//   >
//     {children}
//   </Button>
// );

/**
 * Reusable Input Component
 */
const SearchInput: FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
}> = ({ value, onChange, placeholder, icon }) => (
  <div className="relative">
    {icon && (
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {icon}
      </div>
    )}
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
        icon ? "pl-10" : ""
      }`}
    />
  </div>
);

/**
 * Skill Card Component
 */
const SkillCard: FC<{
  skill: Skill;
  viewMode: ViewMode;
  onClick: (skill: Skill) => void;
}> = ({ skill, viewMode, onClick }) => {
  const isListView = viewMode === "list";

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-md ${
        isListView ? "flex" : ""
      }`}
      onClick={() => onClick(skill)}
    >
      <CardContent className={`p-0 ${isListView ? "flex w-full" : ""}`}>
        {/* Image placeholder */}
        <div
          className={`bg-gradient-to-br from-blue-400 to-purple-600 ${
            isListView ? "w-48 flex-shrink-0" : "h-48 w-full"
          } flex items-center justify-center`}
        >
          <div className="text-white text-4xl font-bold opacity-80">
            {skill.title.charAt(0)}
          </div>
        </div>

        <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {skill.title}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {skill.category}
                </span>
                {skill.level && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {skill.level}
                  </span>
                )}
                {skill.isOnline && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Online
                  </span>
                )}
              </div>
            </div>
            {skill.price && (
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  ${skill.price}
                </div>
                <div className="text-sm text-gray-500">per session</div>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{skill.description}</p>

          <div className="space-y-3">
            {/* Teacher and Rating */}
            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {skill.teacherName || "Teacher"}
                </span>
              </div>
              {skill.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{skill.rating}</span>
                </div>
              )}
            </div> */}

            {/* Location and Duration */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{skill.location || "Location TBD"}</span>
              </div>
              {skill.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{skill.duration}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {skill.tags && skill.tags.length > 0 && (
              <div className="flex gap-1 flex-wrap">
                {skill.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * Mobile Filter Modal Component
 */
const MobileFilterModal: FC<{
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onClearFilters: () => void;
}> = ({ isOpen, onClose, filters, onFilterChange, onClearFilters }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((category) => (
                <FilterButton
                  key={category}
                  active={filters.category === category}
                  onClick={() => onFilterChange("category", category)}
                  className="text-xs"
                >
                  {category}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClearFilters}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Skill Listing Platform Component
 */
const SkillListingPlatform: FC = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Data fetching
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  const [filters, setFilters] = useState<FilterState>({
    category: "All Categories",
    priceRange: [0, 1000],
    rating: 0,
    level: "All Levels",
    location: "",
    isOnline: null,
  });

  // Filter and sort logic
  const filteredAndSortedSkills = useMemo(() => {
    if (!skills) return [];

    const filtered = skills.filter((skill) => {
      const matchesSearch =
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        filters.category === "All Categories" ||
        skill.category === filters.category;
      const matchesLevel =
        filters.level === "All Levels" || skill.level === filters.level;
      const matchesRating =
        !filters.rating || (skill.rating || 0) >= filters.rating;

      return matchesSearch && matchesCategory && matchesLevel && matchesRating;
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "oldest":
          return a.createdAt.getTime() - b.createdAt.getTime();
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [skills, searchTerm, filters, sortBy]);
  // Event handlers
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

  const handleSkillClick = useCallback((skill: Skill) => {
    console.log("Skill clicked:", skill);
    // Handle skill selection - navigate to detail page, open modal, etc.
  }, []);

  // Loading and error states
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading amazing skills...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            We couldn't load the skills. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Discover Skills
              </h1>
              <p className="text-gray-600 mt-1">
                Learn from the best teachers in your area
              </p>
            </div>

            {/* Search Bar */}
            <div className="lg:w-96">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search skills, teachers, or categories..."
                icon={<Search className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}

          <SideBar />

          {/* Main Content */}
          <main className="flex-1">
            {/* Controls Bar */}
            <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {filteredAndSortedSkills.length} skills found
                  </span>

                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 ${
                        viewMode === "list"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid/List */}
            {filteredAndSortedSkills.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No skills found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-4"
                }
              >
                {filteredAndSortedSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    viewMode={viewMode}
                    onClick={handleSkillClick}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      <MobileFilterModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
};

export default SkillListingPlatform;
