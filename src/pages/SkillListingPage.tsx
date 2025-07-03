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
  User,
  ChevronDown,
  Grid,
  List,
  SlidersHorizontal,
  X,
  TrendingUp,
  Award,
  Users,
  BookOpen,
} from "lucide-react";

// ==================== TYPE DEFINITIONS ====================

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

type FilterState = {
  category: string;
  priceRange: [number, number];
  rating: number;
  level: string;
  location: string;
  isOnline: boolean | null;
};

type SortOption =
  | "newest"
  | "oldest"
  | "price-low"
  | "price-high"
  | "rating"
  | "popularity";

type ViewMode = "grid" | "list";

// ==================== CONSTANTS ====================

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

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popularity", label: "Most Popular" },
];

// ==================== DATA SERVICES ====================

/**
 * Fetches skills from Firebase with mock enhancements for demonstration
 * @returns Promise<Skill[]> Array of enhanced skill objects
 */
const fetchSkills = async (): Promise<Skill[]> => {
  const querySnapshot = await getDocs(collection(db, "skills"));

  // Mock enhanced data for demonstration purposes
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

// ==================== REUSABLE UI COMPONENTS ====================

/**
 * Glassmorphism button component with active state
 */
const GlassButton: FC<{
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}> = ({
  active = false,
  onClick,
  children,
  className = "",
  variant = "secondary",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border";

  const variantClasses = {
    primary: active
      ? "bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white border-white/20 shadow-lg shadow-blue-500/25"
      : "bg-white/10 text-gray-700 border-white/20 hover:bg-white/20 hover:border-white/30",
    secondary: active
      ? "bg-white/90 text-blue-600 border-blue-200/50 shadow-lg shadow-blue-500/10"
      : "bg-white/60 text-gray-700 border-white/30 hover:bg-white/80 hover:border-white/50",
    ghost:
      "bg-transparent text-gray-600 border-transparent hover:bg-white/20 hover:text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/**
 * Enhanced search input with glassmorphism effect
 */
const GlassSearchInput: FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon?: React.ReactNode;
}> = ({ value, onChange, placeholder, icon }) => (
  <div className="relative group">
    {icon && (
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors z-10">
        {icon}
      </div>
    )}
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-4 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl 
        focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-white/90
        outline-none transition-all duration-300 placeholder-gray-500
        shadow-lg shadow-black/5 ${icon ? "pl-12" : ""}`}
    />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

// ==================== SKILL CARD COMPONENT ====================

/**
 * Enhanced skill card with glassmorphism design
 */
const SkillCard: FC<{
  skill: Skill;
  viewMode: ViewMode;
  onClick: (skill: Skill) => void;
}> = ({ skill, viewMode, onClick }) => {
  const isListView = viewMode === "list";

  return (
    <Card
      className={`group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10
        bg-white/70 backdrop-blur-md border-white/30 hover:bg-white/90 hover:border-white/50
        ${isListView ? "flex overflow-hidden" : "overflow-hidden"}`}
      onClick={() => onClick(skill)}
    >
      <CardContent className={`p-0 ${isListView ? "flex w-full" : ""}`}>
        {/* Gradient Header/Image */}
        <div
          className={`bg-gradient-to-br from-blue-400/80 via-purple-500/80 to-pink-500/80 backdrop-blur-sm
            ${isListView ? "w-48 flex-shrink-0" : "h-48 w-full"} 
            flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="text-white text-4xl font-bold opacity-90 z-10">
            {skill.title.charAt(0)}
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
            {skill.isOnline ? (
              <BookOpen className="w-4 h-4 text-white" />
            ) : (
              <MapPin className="w-4 h-4 text-white" />
            )}
          </div>
        </div>

        <div className={`p-6 ${isListView ? "flex-1" : ""}`}>
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">
                {skill.title}
              </h3>

              {/* Badge Container */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                  bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-700 border border-blue-200/50 backdrop-blur-sm"
                >
                  {skill.category}
                </span>
                {skill.level && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                    bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-700 border border-green-200/50 backdrop-blur-sm"
                  >
                    {skill.level}
                  </span>
                )}
                {skill.isOnline && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                    bg-gradient-to-r from-purple-500/10 to-purple-600/10 text-purple-700 border border-purple-200/50 backdrop-blur-sm"
                  >
                    Online
                  </span>
                )}
              </div>
            </div>

            {/* Price Section */}
            {skill.price && (
              <div className="text-right ml-4">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  ${skill.price}
                </div>
                <div className="text-xs text-gray-500">per session</div>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {skill.description}
          </p>

          {/* Metadata Section */}
          <div className="space-y-3">
            {/* Teacher and Rating Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {skill.teacherName || "Teacher"}
                </span>
              </div>
              {skill.rating && (
                <div className="flex items-center gap-1 bg-yellow-50/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-yellow-200/50">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-700">
                    {skill.rating}
                  </span>
                </div>
              )}
            </div>

            {/* Location and Duration Row */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{skill.location || "Location TBD"}</span>
              </div>
              {skill.duration && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{skill.duration}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {skill.tags && skill.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap pt-2">
                {skill.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-600 rounded-lg text-xs border border-gray-200/50 hover:bg-gray-200/80 transition-colors"
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

// ==================== SIDEBAR COMPONENTS ====================

/**
 * Modern sidebar with glassmorphism and better UX
 */
const ModernSidebar: FC<{
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onClearFilters: () => void;
  skillCount: number;
}> = ({ filters, onFilterChange, onClearFilters, skillCount }) => {
  return (
    <aside className="w-80 flex-shrink-0">
      <div className="sticky top-8 space-y-6">
        {/* Stats Card */}
        <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Discovery Stats</h3>
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-xl border border-blue-200/30">
              <div className="text-2xl font-bold text-blue-600">
                {skillCount}
              </div>
              <div className="text-xs text-blue-700">Skills Found</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm rounded-xl border border-green-200/30">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-xs text-green-700">Expert Teachers</div>
            </div>
          </div>
        </div>

        {/* Filters Card */}
        <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-500" />
              Filters
            </h2>
            <button
              onClick={onClearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-500" />
                Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <GlassButton
                    key={category}
                    active={filters.category === category}
                    onClick={() => onFilterChange("category", category)}
                    className="w-full justify-start text-left"
                    variant="secondary"
                  >
                    {category}
                  </GlassButton>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                Quick Filters
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <GlassButton
                  active={filters.isOnline === true}
                  onClick={() =>
                    onFilterChange(
                      "isOnline",
                      filters.isOnline === true ? null : true
                    )
                  }
                  variant="secondary"
                  className="text-xs"
                >
                  Online Only
                </GlassButton>
                <GlassButton
                  active={filters.rating >= 4.5}
                  onClick={() =>
                    onFilterChange("rating", filters.rating >= 4.5 ? 0 : 4.5)
                  }
                  variant="secondary"
                  className="text-xs"
                >
                  Top Rated
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// ==================== MOBILE FILTER MODAL ====================

/**
 * Mobile filter modal with improved UX
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
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto border-t border-white/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-500" />
            Filters
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100/80 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((category) => (
                <GlassButton
                  key={category}
                  active={filters.category === category}
                  onClick={() => onFilterChange("category", category)}
                  className="text-xs"
                  variant="secondary"
                >
                  {category}
                </GlassButton>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClearFilters}
              className="flex-1 py-3 px-4 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl text-gray-700 font-medium hover:bg-white/80 transition-all"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================

/**
 * Main Skill Listing Platform Component
 * Features glassmorphism design, modern layout, and professional UX
 */
const SkillListingPlatform: FC = () => {
  // ==================== STATE MANAGEMENT ====================
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: "All Categories",
    priceRange: [0, 1000],
    rating: 0,
    level: "All Levels",
    location: "",
    isOnline: null,
  });

  // ==================== DATA FETCHING ====================
  const {
    data: skills,
    isLoading,
    isError,
  } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  // ==================== COMPUTED VALUES ====================

  /**
   * Filter and sort skills based on current state
   */
  const filteredAndSortedSkills = useMemo(() => {
    if (!skills) return [];

    // Apply filters
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
      const matchesOnline =
        filters.isOnline === null || skill.isOnline === filters.isOnline;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLevel &&
        matchesRating &&
        matchesOnline
      );
    });

    // Apply sorting
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

  // ==================== EVENT HANDLERS ====================

  /**
   * Handle filter changes
   */
  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: any) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  /**
   * Reset all filters to default state
   */
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

  /**
   * Handle skill card clicks
   */
  const handleSkillClick = useCallback((skill: Skill) => {
    console.log("Skill clicked:", skill);
    // TODO: Navigate to skill detail page or open modal
  }, []);

  // ==================== LOADING STATES ====================

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500/30 border-t-blue-500 mx-auto mb-6"></div>
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-700 font-medium">
              Loading amazing skills...
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Discovering the best teachers for you
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-20 h-20 bg-red-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-200/50">
            <X className="w-10 h-10 text-red-600" />
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't load the skills. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==================== MAIN RENDER ====================

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
      {/* Responsive Header with Glassmorphism */}
      <header className="bg-white/70 backdrop-blur-md border-b border-white/30 shadow-lg shadow-black/5 sticky top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:justify-between w-full">
            <div className="w-full md:w-auto">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Discover Skills
              </h1>
              <p className="text-gray-600 mt-2 text-base sm:text-lg">
                Learn from the best teachers in your area
              </p>
            </div>
            {/* Responsive Search Bar */}
            <div className="w-full md:w-80 lg:w-96">
              <GlassSearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search skills, teachers, or categories..."
                icon={<Search className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 w-full">
        <div className="flex flex-col gap-8 lg:flex-row w-full">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <ModernSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              skillCount={filteredAndSortedSkills.length}
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">
            {/* Responsive Controls Bar */}
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg shadow-black/5 w-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between w-full">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-blue-200/30 w-fit">
                    <span className="text-sm font-medium text-gray-700">
                      {filteredAndSortedSkills.length} skills found
                    </span>
                  </div>
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowMobileFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl text-sm font-medium hover:bg-white/80 transition-all"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                  </button>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  {/* Responsive Sort Dropdown */}
                  <div className="relative w-1/2 sm:w-auto">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="appearance-none w-full bg-white/60 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 focus:bg-white/90 transition-all outline-none"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Responsive View Mode Toggle */}
                  <div className="flex bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-1 ml-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-gray-600 hover:bg-white/60"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-gray-600 hover:bg-white/60"
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
              <div className="text-center py-12 sm:py-16 w-full flex flex-col items-center justify-center">
                <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl p-8 sm:p-12 shadow-lg shadow-black/5 max-w-md w-full mx-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-200/50">
                    <Search className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    No skills found
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    We couldn't find any skills matching your criteria. Try
                    adjusting your search or filters.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
                    : "space-y-4 sm:space-y-6"
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

            {/* Load More Button (for future pagination) */}
            {filteredAndSortedSkills.length > 0 && (
              <div className="text-center mt-8 sm:mt-12 w-full">
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl text-gray-700 font-medium hover:bg-white/90 hover:border-white/50 transition-all shadow-lg shadow-black/5 w-full sm:w-auto">
                  Load More Skills
                </button>
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
