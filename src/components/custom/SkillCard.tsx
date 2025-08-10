import { type FC } from "react";
import { ChevronRight, MapPin, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

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
    className="group relative overflow-hidden bg-gray-900 border border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full min-h-[280px]"
  >
    <CardContent className="p-4 sm:p-5 flex flex-col h-full">
      {/* Header with category badge and arrow */}
      <div className="flex items-start justify-between mb-4 sm:mb-5 ">
        <Badge
          variant="secondary"
          className="bg-gray-800 text-gray-300 hover:bg-gray-700 font-medium bellefair text-xs px-2 sm:px-3 py-1 rounded-full flex-shrink-0 border-gray-600"
        >
          {skill.category}
        </Badge>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300 transition-colors flex-shrink-0 ml-2" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg sm:text-xl text-white mb-3 sm:mb-4 cinzel line-clamp-2 group-hover:text-gray-100 transition-colors">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm belleza sm:text-base leading-relaxed line-clamp-3 mb-auto">
        {skill.description}
      </p>

      {/* Footer with location and user */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-400 pt-4 mt-4 border-t border-gray-700">
        <div className="flex items-center gap-2 min-w-0 flex-1 belleza">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium truncate">{skill.location}</span>
        </div>
        <div className="flex items-center belleza gap-2 min-w-0 flex-1 sm:justify-end">
          <User className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium truncate">{skill.userName}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);
