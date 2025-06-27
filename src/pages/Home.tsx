import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { HeroSection } from "@/components/custom/HeroSection";
import { SkillCard } from "@/components/custom/SkillCard";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/custom/NavBar";

const popularSkills = [
  {
    id: 1,
    title: "Graphic Design",
    description: "Learn or teach design skills",
  },
  { id: 2, title: "Web Development", description: "Frontend, backend & more" },
  { id: 3, title: "Photography", description: "Capture stunning moments" },
];

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className=" max-w-7xl mx-auto ">
      {/* Navbar & Hero */}
      <Navbar />
      <HeroSection />

      {/* Popular Skills Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-center space-x-3">
          <Star className="text-[#10B981]" />
          <h2 className="text-3xl font-bold text-white">Popular Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>

      <Separator className="border-white/10" />

      {/* Call to Action Section */}
    </div>
  );
};
