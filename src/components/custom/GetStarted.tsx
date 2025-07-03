import { useState, useEffect } from "react";
import { Sparkles, UserPlus, Repeat, ArrowRight } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: () => JSX.Element;
  estimatedTime: string;
  difficulty: "Easy" | "Medium" | "Advanced";
}

const steps: Step[] = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Build your professional SwapSkill presence with our intuitive onboarding process.",
    details: [
      "Complete profile verification in under 2 minutes",
      "Add your professional photo and bio",
      "Connect social accounts for credibility",
      "Set your availability and preferences",
    ],
    icon: () => <UserPlus className="h-8 w-8" />,
    estimatedTime: "2-3 min",
    difficulty: "Easy",
  },
  {
    number: "2",
    title: "Complete Setup",
    description:
      "Beyond genius really enough passed is up. Up maids me an ample stood given.",
    details: [
      "Complete profile verification in under 2 minutes",
      "Add your professional photo and bio",
      "Connect social accounts for credibility",
      "Set your availability and preferences",
    ],
    icon: () => <Sparkles className="h-8 w-8" />,
    estimatedTime: "5-10 min",
    difficulty: "Easy",
  },
  {
    number: "03",
    title: "Connect & Exchange",
    description:
      "Discover like-minded professionals and start meaningful skill exchanges that benefit everyone.",
    details: [
      "Browse curated skill matches based on your interests",
      "Send connection requests with personalized messages",
      "Schedule sessions using our integrated calendar",
      "Track progress and build lasting professional relationships",
    ],
    icon: () => <Repeat className="h-8 w-8" />,
    estimatedTime: "Ongoing",
    difficulty: "Medium",
  },
];

export default function HowToGetStarted() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-2 px-4 max-w-6xl mx-auto bg-transparent">
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-gray-600 rounded-full transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse-slow" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-roboto text-gray-100 mb-6 leading-tight">
          How to get started
        </h2>

        <p className="text-gray-100  font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals already growing their skills through
          meaningful exchanges. Our streamlined process gets you connected in
          minutes, not hours.
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative">
        {/* Connecting Lines */}
        <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <svg className="w-full h-16" viewBox="0 0 800 64" fill="none">
            {/* First curved line */}
            <path
              d="M150 32 Q250 12 350 32"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
              className="animate-pulse"
            />
            {/* Second curved line */}
            <path
              d="M450 32 Q550 12 650 32"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="8,8"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon Container */}
              <div className="relative mx-auto mb-8 group-hover:scale-105 transition-transform duration-300">
                {/* Outer Circle */}
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center relative">
                  {/* Inner Circle */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white">{step.icon()}</div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#10B981] text-white text-lg font-bold rounded-full flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-[#10B981] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-50 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Mobile connecting line */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-8 flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-[#10B981]/30 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300 hover:scale-105 active:scale-95">
          <span>Start Your Journey Today</span>
          <ArrowRight className="h-5 w-5" />
        </button>

        <p className="text-gray-500 text-sm mt-4">
          No credit card required • Free forever • Join in seconds
        </p>
      </div>
    </section>
  );
}
