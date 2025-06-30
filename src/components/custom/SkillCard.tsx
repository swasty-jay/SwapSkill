import { Card, CardContent } from "@/components/ui/card";
import {
  FaCode,
  FaPaintBrush,
  FaChalkboardTeacher,
  FaTools,
} from "react-icons/fa";

interface SkillCardProps {
  title: string;
  description: string;
}

export const SkillCard = ({ title, description }: SkillCardProps) => {
  // Choose icon based on title (simplified logic)
  const renderIcon = () => {
    if (title.toLowerCase().includes("design"))
      return <FaPaintBrush className="text-[#10B981] text-2xl" />;
    if (title.toLowerCase().includes("teach"))
      return <FaChalkboardTeacher className="text-[#10B981] text-2xl" />;
    if (
      title.toLowerCase().includes("code") ||
      title.toLowerCase().includes("dev")
    )
      return <FaCode className="text-[#10B981] text-2xl" />;
    return <FaTools className="text-[#10B981] text-2xl" />;
  };

  return (
    <Card className="backdrop-blur-md bg-white/5 border border-white/10 hover:shadow-xl transition text-white group relative overflow-hidden">
      <CardContent className="p-5 space-y-3 flex flex-col items-start">
        {/* Icon */}
        <div className="p-2 bg-white/10 rounded-full border border-white/20 group-hover:scale-110 transition">
          {renderIcon()}
        </div>

        {/* Title */}
        <h4 className="font-semibold text-lg">{title}</h4>

        {/* Description */}
        <p className="text-gray-300 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};
