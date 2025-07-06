import { Tag } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// ================= CATEGORY SIDEBAR COMPONENT =================
export const CategorySidebar: FC<{
  tags: string[] | undefined;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ tags, selectedCategory, onCategoryChange }) => (
  <div className="space-y-3 bg-[#101822]/80">
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
