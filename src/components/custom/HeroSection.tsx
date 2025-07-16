import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

// User Avatars + Stats
const UserBadges = () => {
  const userImages = [
    "https://avatar.iran.liara.run/public/6",
    "https://avatar.iran.liara.run/public/7",
    "https://avatar.iran.liara.run/public/26",
    "https://avatar.iran.liara.run/public/8",
    "https://avatar.iran.liara.run/public/14",
    "https://avatar.iran.liara.run/public/10",
  ];

  return (
    <div className="flex flex-col items-center lg:items-start space-y-3">
      {/* Avatars */}
      <div className="flex -space-x-3">
        {userImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white/20 bg-[#10b981]/10 animate-in fade-in duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <TrendingUp className="w-4 h-4 text-[#10B981]" />
        <span className="font-medium font-roboto text-white">5000+</span>
        <span className="font-roboto">Ghanaians already swapping skills</span>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative flex flex-col items-start min-h-[80vh] pt-22 pb-8 px-6 sm:px-10 lg:px-12 text-left overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-2  py-4 sm:py6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow">
          <Sparkles className="w-4 h-4 text-[#10B981] font-roboto" />
          Ghana's Premier Skill Exchange Platform
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white  font-inter leading-tight space-y-1">
          <span className="block">Smart Learning.</span>
          <span className="block text-[#10B981]">Made simple for all.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 max-w-xl text-base font-roboto sm:text-lg leading-relaxed">
          In a world where access often feels out of reach,{" "}
          <span className="text-[#10B981] font-medium">swapSkill</span> connects
          Ghana's hardworking youth swapping skills, sharing experiences, and
          building real opportunities, without the barriers of expensive courses
          or hidden fees.
        </p>

        {/* CTA + User Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-6">
          {/* Left - Button & Small Text */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="backdrop-blur-md bg-white/10 border font-roboto border-white/20 text-white hover:bg-[#10B981]/20 transition-all duration-300 font-medium px-8 py-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => console.log("Navigate to signup")}
            >
              Learn how it works
            </Button>
            <p className="text-gray-400 text-sm font-roboto">
              200+ skills are free to exchange
            </p>
          </div>

          {/* Right - User Badges */}
          <div className="flex justify-center lg:justify-end">
            <UserBadges />
          </div>
        </div>
      </div>
    </section>
  );
};
