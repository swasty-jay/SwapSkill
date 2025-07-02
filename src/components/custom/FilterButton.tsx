import { Button } from "../ui/button";

export const FilterButton: FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ active, onClick, children, className = "" }) => (
  <Button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-blue-600 text-white shadow-md"
        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
    } ${className}`}
  >
    {children}
  </Button>
);
