import { HeroSection } from "@/components/custom/HeroSection";
import { SkillCard } from "@/components/custom/SkillCard";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/custom/NavBar";
import HowToGetStarted from "@/components/custom/GetStarted";
import { Footer } from "@/components/custom/Footer";

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
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex flex-col space-y-24 pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* How to Get Started */}
        <HowToGetStarted />

        {/* Popular Skills Section */}
        <section className="space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Popular Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Explore in-demand skills that you can learn or teach within the
              SwapSkill community.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {popularSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer or Call to Action - Can be added here */}

      <Separator className="border-white/10 mt-20" />
      <Footer />
    </div>
  );
};
