import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { type FC } from "react";
import CategorySidebar from "./CategorySidebar";
import { Input } from "../ui/input";

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
export default SearchHeader;
