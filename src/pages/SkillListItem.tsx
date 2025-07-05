import { type FC } from "react";
import { MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Skill } from "@/types/Types";

type SkillListItemProps = {
  skill: Skill;
};

const SkillListItem: FC<SkillListItemProps> = ({ skill }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/skills/${skill.id}`)}
      className="flex justify-between items-center p-4 bg-white/90 rounded-xl shadow hover:bg-white cursor-pointer transition-all border border-gray-200 mb-3"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{skill.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">
          {skill.description}
        </p>
        <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{skill.location}</span>
          <User className="w-3 h-3 ml-3" />
          <span>{skill.userName}</span>
        </div>
      </div>

      <div className="text-right">
        <div className="text-sm text-blue-600 font-medium capitalize">
          {skill.category}
        </div>
        {skill.price === 0 ? (
          <div className="text-xs text-green-600 font-medium">Free</div>
        ) : (
          <div className="text-xs text-gray-700 font-medium">
            ${skill.price}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillListItem;
