import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState, type FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FetchSkills } from "@/services/FetchSkills";

// ================= TYPES =================
interface Skill {
  id: string;
  title: string;
  description: string;
  location: string;
  userName: string;
  category: string;
  tags?: string[];
  createdAt?: Date;
}

// ================= FETCH UNIQUE TAGS FROM SKILL DOCUMENTS =================
const fetchTagsFromSkills = async (): Promise<string[]> => {
  const snapshot = await getDocs(collection(db, "Skills"));

  // Collect all tags from each skill document
  const allTags = snapshot.docs.flatMap((doc) => doc.data().tags || []);

  // Remove duplicates using Set and sort alphabetically
  const uniqueTags = Array.from(new Set(allTags)).sort();

  return uniqueTags as string[];
};

// ================= CATEGORY SIDEBAR COMPONENT =================
import CategorySidebar from "@/components/custom/CategorySidebar";
import { SkillCard } from "@/components/custom/SkillCard";

// ================= SEARCH HEADER COMPONENT =================
const SearchHeader: FC<{
  searchTerm: string;
  onSearchChange: (term: string) => void;
  tags: string[] | undefined;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({
  searchTerm,
  onSearchChange,
  tags,
  selectedCategory,
  onCategoryChange,
}) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-[#101822] border-b border-gray-200 shadow-sm gap-4">
    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden flex-shrink-0"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-80 p-4 sm:p-6">
          <CategorySidebar
            tags={tags}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </SheetContent>
      </Sheet>

      {/* Page title */}
      <div className="min-w-0 flex-1">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
          Discover Skills
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">
          Find and connect with skilled professionals
        </p>
      </div>
    </div>

    {/* Search input */}
    <div className="relative w-full sm:w-80 max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <Input
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
      />
    </div>
  </div>
);

// ================= LOADING SKELETON COMPONENT =================
const LoadingSkeleton: FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {[...Array(8)].map((_, index) => (
      <Card key={index} className="animate-pulse">
        <CardContent className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-200 rounded"></div>
          </div>
          <div className="h-5 sm:h-6 w-3/4 bg-gray-200 rounded mb-2 sm:mb-3"></div>
          <div className="space-y-2 mb-3 sm:mb-4">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
          <div className="flex gap-2 mb-3 sm:mb-4">
            <div className="h-4 sm:h-5 w-12 bg-gray-200 rounded-full"></div>
            <div className="h-4 sm:h-5 w-16 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 rounded"></div>
            <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

// ================= MAIN COMPONENT =================
const SkillListingPage: FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch skills data
  const { data: skills, isLoading } = useQuery({
    queryKey: ["Skills"],
    queryFn: FetchSkills,
  });

  // Fetch tags/categories
  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTagsFromSkills,
  });

  // Filter and search logic
  const filteredSkills = useMemo(() => {
    if (!skills) return [];

    return skills.filter((skill: Skill) => {
      // Category filtering - check both category field and tags array
      const matchesCategory =
        selectedCategory === "All" ||
        skill.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        (skill.tags || []).some(
          (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
        );

      // Search filtering - search in title, description, category, and tags
      const matchesSearch =
        searchTerm === "" ||
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (skill.tags || []).some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchTerm]);

  // Handle skill card click
  const handleSkillClick = (skillId: string) => {
    navigate(`/skills/${skillId}`);
  };

  return (
    <div className="flex mt-18 w-full bg-white/20">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 lg:w-80 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 lg:p-6 h-full overflow-y-auto">
          <CategorySidebar
            tags={tags}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Search Header */}
        <SearchHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          tags={tags}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Skills Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredSkills.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No skills found
              </h3>
              <p className="text-gray-500 max-w-md text-sm">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-4 sm:mb-6">
                <p className="text-sm text-gray-600">
                  Showing {filteredSkills.length} skill
                  {filteredSkills.length !== 1 ? "s" : ""}
                  {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredSkills.map((skill: Skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    onClick={() => handleSkillClick(skill.id)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillListingPage;
