import { type FC } from "react";
import { ChevronRight, MapPin, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
// import type { Skill } from "@/types/Types";

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

// ================= SKILL CARD COMPONENT =================
export const SkillCard: FC<{ skill: Skill; onClick: () => void }> = ({
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
      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/20">
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
