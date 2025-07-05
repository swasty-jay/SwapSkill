// import { useQuery } from "@tanstack/react-query";
// import { db } from "@/firebase/Firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Menu, Search, MapPin, User } from "lucide-react";
// import { useState, type FC, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { FetchSkills } from "@/services/FetchSkills";

// // ================= FETCH UNIQUE TAGS FROM SKILL DOCUMENTS =================
// const fetchTagsFromSkills = async () => {
//   const snapshot = await getDocs(collection(db, "Skills"));

//   // Collect all tags from each skill document
//   const allTags = snapshot.docs.flatMap((doc) => doc.data().tags || []);

//   // Remove duplicates using Set
//   const uniqueTags = Array.from(new Set(allTags));

//   return uniqueTags as string[];
// };

// // ================= MAIN COMPONENT =================
// const SkillListingPage: FC = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const { data: skills, isLoading } = useQuery({
//     queryKey: ["Skills"],
//     queryFn: FetchSkills,
//   });

//   const { data: tags } = useQuery({
//     queryKey: ["tags"],
//     queryFn: fetchTagsFromSkills,
//   });

//   // ============ FILTER & SEARCH LOGIC ============
//   const filteredSkills = useMemo(() => {
//     if (!skills) return [];
//     return skills.filter((skill) => {
//       const matchesCategory =
//         selectedCategory === "All" ||
//         (skill.tags || []).includes(selectedCategory);
//       const matchesSearch =
//         skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [skills, selectedCategory, searchTerm]);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* ============== SIDEBAR ============== */}
//       <div className="hidden md:block w-64 bg-white border-r p-4 overflow-y-auto">
//         <h2 className="text-lg font-bold mb-4">Categories</h2>
//         <Button
//           variant={selectedCategory === "All" ? "default" : "ghost"}
//           className="w-full justify-start mb-2"
//           onClick={() => setSelectedCategory("All")}
//         >
//           All Categories
//         </Button>
//         {tags?.map((tag) => (
//           <Button
//             key={tag}
//             variant={selectedCategory === tag ? "default" : "ghost"}
//             className="w-full justify-start mb-2 capitalize"
//             onClick={() => setSelectedCategory(tag)}
//           >
//             {tag}
//           </Button>
//         ))}
//       </div>

//       {/* ============== MAIN CONTENT ============== */}
//       <div className="flex-1 flex flex-col h-full">
//         {/* ======= TOP BAR WITH SEARCH & MOBILE MENU ======= */}
//         <div className="flex items-center justify-between p-4 border-b bg-white">
//           <div className="flex items-center gap-3">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="md:hidden">
//                   <Menu />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="left" className="w-64">
//                 <h2 className="text-lg font-bold mb-4">Categories</h2>
//                 <Button
//                   variant={selectedCategory === "All" ? "default" : "ghost"}
//                   className="w-full justify-start mb-2"
//                   onClick={() => setSelectedCategory("All")}
//                 >
//                   All Categories
//                 </Button>
//                 {tags?.map((tag) => (
//                   <Button
//                     key={tag}
//                     variant={selectedCategory === tag ? "default" : "ghost"}
//                     className="w-full justify-start mb-2 capitalize"
//                     onClick={() => setSelectedCategory(tag)}
//                   >
//                     {tag}
//                   </Button>
//                 ))}
//               </SheetContent>
//             </Sheet>
//             <h1 className="text-2xl font-bold">Discover Skills</h1>
//           </div>
//           <div className="w-60">
//             <Input
//               placeholder="Search skills..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               icon={<Search className="w-4 h-4" />}
//             />
//           </div>
//         </div>

//         {/* ======= SCROLLABLE SKILL CARDS ======= */}
//         <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : filteredSkills.length === 0 ? (
//             <p>No skills found.</p>
//           ) : (
//             filteredSkills.map((skill) => (
//               <Card
//                 key={skill.id}
//                 onClick={() => navigate(`/skills/${skill.id}`)}
//                 className="hover:shadow-lg cursor-pointer transition-all"
//               >
//                 <CardContent className="p-4">
//                   <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
//                   <p className="text-sm text-gray-600 line-clamp-2">
//                     {skill.description}
//                   </p>
//                   <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
//                     <MapPin className="w-3 h-3" />
//                     <span>{skill.location}</span>
//                     <User className="w-3 h-3 ml-3" />
//                     <span>{skill.userName}</span>
//                   </div>
//                   <div className="text-right mt-3 text-sm font-medium capitalize text-blue-600">
//                     {skill.category}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillListingPage;

import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Search, MapPin, User, ChevronRight, Tag } from "lucide-react";
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

// ================= SKILL CARD COMPONENT =================
const SkillCard: FC<{ skill: Skill; onClick: () => void }> = ({
  skill,
  onClick,
}) => (
  <Card
    onClick={onClick}
    className="group relative overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full"
  >
    <CardContent className="p-4 sm:p-6">
      {/* Header with category badge */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <Badge
          variant="secondary"
          className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium text-xs px-2 sm:px-3 py-1 rounded-full flex-shrink-0"
        >
          {skill.category}
        </Badge>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
        {skill.description}
      </p>

      {/* Tags */}
      {skill.tags && skill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {skill.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs px-2 py-1 bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
            >
              {tag}
            </Badge>
          ))}
          {skill.tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 bg-gray-50 border-gray-200 text-gray-500"
            >
              +{skill.tags.length - 3}
            </Badge>
          )}
        </div>
      )}

      {/* Footer with location and user */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1 min-w-0 flex-1">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="font-medium truncate">{skill.location}</span>
        </div>
        <div className="flex items-center gap-1 min-w-0 flex-1 justify-end">
          <User className="w-3 h-3 flex-shrink-0" />
          <span className="font-medium truncate">{skill.userName}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

// ================= CATEGORY SIDEBAR COMPONENT =================
const CategorySidebar: FC<{
  tags: string[] | undefined;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ tags, selectedCategory, onCategoryChange }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 mb-6">
      <Tag className="w-5 h-5 text-blue-600" />
      <h2 className="text-lg font-bold text-gray-900">Categories</h2>
    </div>

    <Button
      variant={selectedCategory === "All" ? "default" : "ghost"}
      className="w-full justify-start mb-2 font-medium"
      onClick={() => onCategoryChange("All")}
    >
      All Categories
      {selectedCategory === "All" && (
        <Badge variant="secondary" className="ml-auto bg-blue-600 text-white">
          Active
        </Badge>
      )}
    </Button>

    <div className="space-y-1">
      {tags?.map((tag) => (
        <Button
          key={tag}
          variant={selectedCategory === tag ? "default" : "ghost"}
          className="w-full justify-start capitalize font-medium text-sm"
          onClick={() => onCategoryChange(tag)}
        >
          {tag}
          {selectedCategory === tag && (
            <Badge
              variant="secondary"
              className="ml-auto bg-blue-600 text-white text-xs"
            >
              Active
            </Badge>
          )}
        </Button>
      ))}
    </div>
  </div>
);

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
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-white border-b border-gray-200 shadow-sm gap-4">
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
    <div className="flex h-screen bg-gray-50">
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
