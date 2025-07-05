import { useQuery } from "@tanstack/react-query";
import { db } from "@/firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search, MapPin, User } from "lucide-react";
import { useState, type FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FetchSkills } from "@/services/FetchSkills";

// ================= FETCH UNIQUE TAGS FROM SKILL DOCUMENTS =================
const fetchTagsFromSkills = async () => {
  const snapshot = await getDocs(collection(db, "Skills"));

  // Collect all tags from each skill document
  const allTags = snapshot.docs.flatMap((doc) => doc.data().tags || []);

  // Remove duplicates using Set
  const uniqueTags = Array.from(new Set(allTags));

  return uniqueTags as string[];
};

// ================= MAIN COMPONENT =================
const SkillListingPage: FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: skills, isLoading } = useQuery({
    queryKey: ["Skills"],
    queryFn: FetchSkills,
  });

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTagsFromSkills,
  });

  // ============ FILTER & SEARCH LOGIC ============
  const filteredSkills = useMemo(() => {
    if (!skills) return [];
    return skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All" ||
        (skill.tags || []).includes(selectedCategory);
      const matchesSearch =
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchTerm]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ============== SIDEBAR ============== */}
      <div className="hidden md:block w-64 bg-white border-r p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <Button
          variant={selectedCategory === "All" ? "default" : "ghost"}
          className="w-full justify-start mb-2"
          onClick={() => setSelectedCategory("All")}
        >
          All Categories
        </Button>
        {tags?.map((tag) => (
          <Button
            key={tag}
            variant={selectedCategory === tag ? "default" : "ghost"}
            className="w-full justify-start mb-2 capitalize"
            onClick={() => setSelectedCategory(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      {/* ============== MAIN CONTENT ============== */}
      <div className="flex-1 flex flex-col h-full">
        {/* ======= TOP BAR WITH SEARCH & MOBILE MENU ======= */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <h2 className="text-lg font-bold mb-4">Categories</h2>
                <Button
                  variant={selectedCategory === "All" ? "default" : "ghost"}
                  className="w-full justify-start mb-2"
                  onClick={() => setSelectedCategory("All")}
                >
                  All Categories
                </Button>
                {tags?.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedCategory === tag ? "default" : "ghost"}
                    className="w-full justify-start mb-2 capitalize"
                    onClick={() => setSelectedCategory(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl font-bold">Discover Skills</h1>
          </div>
          <div className="w-60">
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-4 h-4" />}
            />
          </div>
        </div>

        {/* ======= SCROLLABLE SKILL CARDS ======= */}
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : filteredSkills.length === 0 ? (
            <p>No skills found.</p>
          ) : (
            filteredSkills.map((skill) => (
              <Card
                key={skill.id}
                onClick={() => navigate(`/skills/${skill.id}`)}
                className="hover:shadow-lg cursor-pointer transition-all"
              >
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {skill.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    <MapPin className="w-3 h-3" />
                    <span>{skill.location}</span>
                    <User className="w-3 h-3 ml-3" />
                    <span>{skill.userName}</span>
                  </div>
                  <div className="text-right mt-3 text-sm font-medium capitalize text-blue-600">
                    {skill.category}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillListingPage;
