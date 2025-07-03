// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   UserPlus,
//   Repeat,
//   ArrowRight,
//   Clock,
//   Star,
//   Users,
// } from "lucide-react";
// import clsx from "clsx";

// interface Step {
//   number: string;
//   title: string;
//   description: string;
//   details: string[];
//   icon: () => JSX.Element;
//   estimatedTime: string;
//   difficulty: "Easy" | "Medium" | "Advanced";
// }

// const steps: Step[] = [
//   {
//     number: "01",
//     title: "Create Your Profile",
//     description:
//       "Build your professional SwapSkill presence with our intuitive onboarding process.",
//     details: [
//       "Complete profile verification in under 2 minutes",
//       "Add your professional photo and bio",
//       "Connect social accounts for credibility",
//       "Set your availability and preferences",
//     ],
//     icon: () => <UserPlus className="h-7 w-7" />,
//     estimatedTime: "2-3 min",
//     difficulty: "Easy",
//   },
//   {
//     number: "02",
//     title: "Showcase Your Expertise",
//     description:
//       "Highlight your skills and create compelling offerings that attract the right connections.",
//     details: [
//       "List unlimited skills with detailed descriptions",
//       "Add portfolio samples and certifications",
//       "Set skill levels and teaching preferences",
//       "Create skill packages and session formats",
//     ],
//     icon: () => <Sparkles className="h-7 w-7" />,
//     estimatedTime: "5-10 min",
//     difficulty: "Easy",
//   },
//   {

//     icon: () => <Repeat className="h-7 w-7" />,
//     estimatedTime: "Ongoing",
//     difficulty: "Medium",
//   },
// ];

// const sharedTransition = {
//   type: "spring" as const,
//   stiffness: 120,
//   damping: 15,
//   duration: 0.7,
// };

// const animationVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.9 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: sharedTransition },
// };

// const leftSlideVariants = {
//   hidden: { opacity: 0, x: -60, scale: 0.9 },
//   visible: { opacity: 1, x: 0, scale: 1, transition: sharedTransition },
// };

// const rightSlideVariants = {
//   hidden: { opacity: 0, x: 60, scale: 0.9 },
//   visible: { opacity: 1, x: 0, scale: 1, transition: sharedTransition },
// };

// const iconVariants = {
//   hidden: { scale: 0, rotate: -180 },
//   visible: {
//     scale: 1,
//     rotate: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 200,
//       damping: 15,
//       delay: 0.2,
//     },
//   },
// };

// const getAnimationVariants = (index: number) => {
//   if (index === 1) return leftSlideVariants;
//   if (index === 2) return rightSlideVariants;
//   return animationVariants;
// };

// const getDifficultyColor = (difficulty: string) =>
//   clsx(
//     "px-2 py-1 rounded-full text-xs font-medium border",
//     difficulty === "Easy" &&
//       "text-green-400 bg-green-400/10 border-green-400/20",
//     difficulty === "Medium" &&
//       "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
//     difficulty === "Advanced" && "text-red-400 bg-red-400/10 border-red-400/20"
//   );

// export default function HowToGetStarted() {
//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-12"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-4 py-2 mb-6"
//         >
//           <Star className="h-4 w-4 text-[#10B981]" />
//           <span className="text-[#10B981] text-sm font-medium">
//             Simple 3-Step Process
//           </span>
//         </motion.div>

//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-white mb-4 sm:mb-6 leading-tight">
//           How to Get Started
//         </h2>

//         <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[15px] font-roboto lg:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
//           Join thousands of professionals already growing their skills through
//           meaningful exchanges. Our streamlined process gets you connected in
//           minutes, not hours.
//         </p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400"
//         >
//           <div className="flex items-center gap-1">
//             <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[#10B981]" />
//             <span>50,000+ Active Users</span>
//           </div>
//           <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
//           <div className="flex items-center gap-1">
//             <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#10B981]" />
//             <span>Setup in Under 10 Minutes</span>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         className="grid gap-8 lg:gap-12"
//       >
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             variants={getAnimationVariants(index)}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="group relative"
//           >
//             {index < steps.length - 1 && (
//               <div className="hidden lg:block absolute left-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-[#10B981]/30 to-transparent transform -translate-x-1/2 z-0" />
//             )}

//             <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xl hover:shadow-[#10B981]/5 transition-all duration-500 group-hover:border-[#10B981]/30 group-hover:bg-white/8">
//               <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
//                 <motion.div
//                   variants={iconVariants}
//                   className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 border border-[#10B981]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
//                 >
//                   <div className="text-[#10B981]">{step.icon()}</div>
//                   <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#10B981] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                     {step.number}
//                   </div>
//                 </motion.div>

//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-3 mb-2">
//                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors duration-300">
//                       {step.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
//                     {step.description}
//                   </p>

//                   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                     <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
//                       <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
//                       <span>{step.estimatedTime}</span>
//                     </div>
//                     <div className={getDifficultyColor(step.difficulty)}>
//                       {step.difficulty}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2 sm:space-y-3">
//                 {step.details.map((detail, detailIndex) => (
//                   <motion.div
//                     key={detailIndex}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.4,
//                       delay: detailIndex * 0.1 + 0.3,
//                     }}
//                     className="flex items-start gap-2 sm:gap-3 group/item"
//                   >
//                     <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981]/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-[#10B981]/30 transition-colors duration-200">
//                       <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-[#10B981]" />
//                     </div>
//                     <p className="text-gray-300 text-xs sm:text-sm group-hover/item:text-white transition-colors duration-200 leading-relaxed">
//                       {detail}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-center mt-16"
//       >
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300 text-sm sm:text-base"
//         >
//           <span>Start Your Journey Today</span>
//           <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
//         </motion.button>

//         <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
//           No credit card required • Free forever • Join in seconds
//         </p>
//       </motion.div>
//     </section>
//   );
// }

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
    <section className="py-16 px-4 max-w-6xl mx-auto bg-transparent">
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
                className={`w-2 h-2 bg-gray-300 rounded-full transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 mb-6">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-gray-300 rounded-full transition-all duration-300`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 mb-6">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-gray-300 rounded-full transition-all duration-300`}
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
