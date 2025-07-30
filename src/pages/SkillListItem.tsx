import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Search } from "lucide-react";
import { useState, type FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FetchSkills } from "@/services/FetchSkills";

import CategorySidebar from "@/components/custom/CategorySidebar";
import { SkillCard } from "@/components/custom/SkillCard";
import SearchHeader from "@/components/custom/SearchHeader";
import LoadingSkeleton from "@/components/custom/LoadingSkeleton";

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

// ================= SEARCH HEADER COMPONENT =================

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
    <div className="flex mt-16 w-full bg-[#101822]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 lg:w-80 bg-[#101822] border-r border-r-white/20 backdrop-blur-sm shadow-sm">
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
            <div className="flex flex-col items-center belleza justify-center h-64 text-center px-4">
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
                <p className="text-sm text-gray-600 belleza">
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
