import { useState, useEffect } from "react";
import {
  Sparkles,
  UserPlus,
  Repeat,
  ArrowRight,
  ChevronDown,
  Play,
  Check,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
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
    icon: <UserPlus className="h-6 w-6 text-white" />,
  },
  {
    number: "02",
    title: "List Your Skills",
    description:
      "Showcase your expertise and what you're eager to learn. A great profile attracts the best matches.",
    details: [
      "Add skills you can teach and skills you want to learn",
      "Write a compelling summary of your experience",
      "Set proficiency levels for each skill",
      "Your profile is your passport to the community",
    ],
    icon: <Sparkles className="h-6 w-6 text-white" />,
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
    icon: <Repeat className="h-6 w-6 text-white" />,
  },
];

const StepCard = ({
  step,
  index,
  isVisible,
}: {
  step: Step;
  index: number;
  isVisible: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const transitionDelay = `${index * 150}ms`;

  return (
    <div
      className={`group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay }}
    >
      <div className="relative">
        {/* Background glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent 
          rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Main card */}
        <div
          className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-3xl 
          hover:border-emerald-500/30 transition-all duration-500 overflow-hidden group-hover:shadow-2xl 
          group-hover:shadow-emerald-500/10"
        >
          {/* Top gradient line */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

          <div className="p-8 lg:p-10">
            {/* Header section */}
            <div className="flex items-start gap-6 mb-6">
              {/* Step number and icon */}
              <div className="relative flex-shrink-0">
                <div className="relative">
                  {/* Icon background with improved styling */}
                  <div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 
                    flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    {step.icon}
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 border-2 border-emerald-500 
                    flex items-center justify-center"
                  >
                    <span className="text-emerald-500 text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title and description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Expand/collapse button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 
                transition-all duration-300 font-medium"
            >
              <span>{isExpanded ? "Show Less" : "Learn More"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                isExpanded
                  ? "max-h-96 opacity-100 mt-6"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-3">
                {step.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 
                      flex items-center justify-center mt-0.5"
                    >
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowToGetStarted() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Header section */}
        <div
          className={`text-center mb-20 lg:mb-28 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <Play className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">
                How it works
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-none">
            Get Started in{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                3 Steps
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400 to-emerald-400/0" />
            </span>
          </h1>

          <p className="text-gray-400 text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Join thousands of professionals growing their skills through our
            streamlined process.{" "}
            <span className="text-emerald-300">
              Start your learning journey in minutes, not hours.
            </span>
          </p>
        </div>

        {/* Steps section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div
          className={`text-center mt-20 lg:mt-28 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${steps.length * 150 + 300}ms` }}
        >
          <div className="inline-flex flex-col items-center gap-8">
            <button
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r 
                from-emerald-500 to-emerald-400 text-white text-xl font-semibold px-12 py-6 
                rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 
                hover:scale-105 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey Today</span>
              <ArrowRight className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

              {/* Shine effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
            </button>

            {/* Features list */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Join in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
