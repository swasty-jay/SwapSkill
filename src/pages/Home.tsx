import { HeroSection } from "@/components/custom/HeroSection";
import { SkillCard } from "@/components/custom/SkillCard";
import { Navbar } from "@/components/custom/NavBar";
import HowToGetStarted from "@/components/custom/GetStarted";
import Footer from "@/components/custom/Footer";

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
    <div className="flex flex-col min-h-screen bg-[#121212] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex flex-col space-y-24 pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* How to Get Started */}
        <HowToGetStarted />

        {/* Popular Skills Section */}
      </main>

      {/* Footer or Call to Action - Can be added here */}

      <div className="border-t border-white/10 mt-20"></div>

      <Footer />
    </div>
  );
};
