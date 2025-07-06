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
    className="group relative overflow-hidden bg-gray-900 border border-gray-700 hover:border-gray-600 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full"
  >
    <CardContent className="p-4 sm:p-6">
      {/* Header with category badge and arrow */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <Badge
          variant="secondary"
          className="bg-gray-800 text-gray-300 hover:bg-gray-700 font-medium text-xs px-2 sm:px-3 py-1 rounded-full flex-shrink-0 border-gray-600"
        >
          {skill.category}
        </Badge>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300 transition-colors flex-shrink-0 ml-2" />
      </div>

      {/* Title */}
      <h3 className="font-bold text-base sm:text-lg lg:text-xl text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-gray-100 transition-colors">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3 mb-3 sm:mb-4 lg:mb-6">
        {skill.description}
      </p>

      {/* Tags */}
      {/* {skill.tags && skill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {skill.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs px-2 py-1 bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
            >
              {tag}
            </Badge>
          ))}
          {skill.tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs px-2 py-1 bg-gray-800 border-gray-600 text-gray-400 hover:bg-gray-700"
            >
              +{skill.tags.length - 3}
            </Badge>
          )}
        </div>
      )} */}

      {/* Footer with location and user */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 pt-3 border-t border-gray-700">
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="font-medium truncate">{skill.location}</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1 sm:justify-end">
          <User className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="font-medium truncate">{skill.userName}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Demo component to show the card in action
export default function SkillCardDemo() {
  const sampleSkill: Skill = {
    id: "1",
    title: "Frontend Development Expertise",
    description:
      "Looking for an experienced frontend developer to help build responsive web applications using React, TypeScript, and modern CSS frameworks.",
    location: "San Francisco, CA",
    userName: "John Doe",
    category: "Development",
    tags: ["React", "TypeScript", "CSS", "JavaScript", "HTML"],
    createdAt: new Date(),
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SkillCard
            skill={sampleSkill}
            onClick={() => console.log("Card clicked")}
          />
          <SkillCard
            skill={{
              ...sampleSkill,
              id: "2",
              title: "UI/UX Design Services",
              description:
                "Professional UI/UX designer available for creating modern, user-friendly interfaces for web and mobile applications.",
              category: "Design",
              tags: ["Figma", "Adobe XD", "Sketch"],
            }}
            onClick={() => console.log("Card clicked")}
          />
          <SkillCard
            skill={{
              ...sampleSkill,
              id: "3",
              title: "Full Stack Development",
              description:
                "Comprehensive full-stack development services including backend APIs, database design, and frontend implementation.",
              category: "Development",
              tags: ["Node.js", "Python", "PostgreSQL", "React"],
            }}
            onClick={() => console.log("Card clicked")}
          />
        </div>
      </div>
    </div>
  );
}
