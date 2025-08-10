import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface CategorySidebarProps {
  tags: string[] | undefined;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  tags,
  selectedCategory,
  onCategoryChange,
}) => (
  <div className="belleza space-y-3 ">
    <div className="flex items-center gap-2 mb-6">
      <Tag className="w-5 h-5 text-blue-600" />
      <h2 className="text-lg font-bold text-gray-100">Categories</h2>
    </div>

    <Button
      variant={selectedCategory === "All" ? "default" : "ghost"}
      className={`w-full justify-start mb-2 font-medium text-xl text-gray-500 belleza${
        selectedCategory !== "All"
          ? " bg-white/10 backdrop-blur-md border belleza border-white/20"
          : ""
      }`}
      onClick={() => onCategoryChange("All")}
    >
      All Categories
      {selectedCategory === "All" && (
        <Badge
          variant="secondary"
          className="ml-auto  text-gray-100 bg-white/20 backdrop-blur-md"
        >
          Active
        </Badge>
      )}
    </Button>

    {/* Background Glow */}
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse" />
    </div>

    <div className="space-y-1 ">
      {tags?.map((tag) => (
        <Button
          key={tag}
          variant={selectedCategory === tag ? "default" : "ghost"}
          className="w-full justify-start capitalize font-semibold  text-sm text-gray-200 belleza"
          onClick={() => onCategoryChange(tag)}
        >
          {tag}
          {selectedCategory === tag && (
            <Badge
              variant="secondary"
              className="ml-auto bg-[#10B981] text-white text-xs"
            >
              Active
            </Badge>
          )}
        </Button>
      ))}
    </div>
  </div>
);

export default CategorySidebar;
