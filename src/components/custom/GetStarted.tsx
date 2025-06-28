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

// interface Step {
//   number: string;
//   title: string;
//   description: string;
//   details: string[];
//   icon: React.ReactNode;
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
//     icon: <UserPlus className="h-4 w-4" />,
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
//     icon: <Sparkles className="h-4 w-4" />,
//     estimatedTime: "5-10 min",
//     difficulty: "Easy",
//   },
//   {
//     number: "03",
//     title: "Connect & Exchange",
//     description:
//       "Discover like-minded professionals and start meaningful skill exchanges that benefit everyone.",
//     details: [
//       "Browse curated skill matches based on your interests",
//       "Send connection requests with personalized messages",
//       "Schedule sessions using our integrated calendar",
//       "Track progress and build lasting professional relationships",
//     ],
//     icon: <Repeat className="w-6 h-6" />,
//     estimatedTime: "Ongoing",
//     difficulty: "Medium",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring" as const,
//       stiffness: 100,
//       damping: 12,
//       duration: 0.6,
//     },
//   },
// };

// const iconVariants = {
//   hidden: {
//     scale: 0,
//     rotate: -180,
//   },
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

// const getDifficultyColor = (difficulty: string) => {
//   switch (difficulty) {
//     case "Easy":
//       return "text-green-400 bg-green-400/10 border-green-400/20";
//     case "Medium":
//       return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
//     case "Advanced":
//       return "text-red-400 bg-red-400/10 border-red-400/20";
//     default:
//       return "text-gray-400 bg-gray-400/10 border-gray-400/20";
//   }
// };

// function HowToGetStarted() {
//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-center mb-16"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-4 py-2 mb-6"
//         >
//           <Star className="w-6 h-6 text-[#10B981]" />
//           <span className="text-[#10B981] text-sm font-medium">
//             Simple 3-Step Process
//           </span>
//         </motion.div>

//         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//           How to Get Started
//         </h2>

//         <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
//           Join thousands of professionals who are already growing their skills
//           through meaningful exchanges. Our streamlined process gets you
//           connected in minutes, not hours.
//         </p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400"
//         >
//           <div className="flex items-center gap-2">
//             <Users className="w-6 h-6 text-[#10B981]" />
//             <span>50,000+ Active Users</span>
//           </div>
//           <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-6 h-6 text-[#10B981]" />
//             <span>Setup in Under 10 Minutes</span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Steps Grid */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         className="grid gap-8 lg:gap-12"
//       >
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             className="group relative"
//           >
//             {/* Connector Line */}
//             {index < steps.length - 1 && (
//               <div className="hidden lg:block absolute left-1/2 -bottom-12 w-[8px] h-12 bg-gradient-to-b from-[#10B981]/30 to-transparent transform -translate-x-1/2 z-0"></div>
//             )}

//             <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-[#10B981]/5 transition-all duration-500 group-hover:border-[#10B981]/30 group-hover:bg-white/8">
//               {/* Step Number and Icon */}
//               <div className="flex items-start gap-6 mb-8">
//                 <div className="flex-shrink-0">
//                   <motion.div
//                     variants={iconVariants}
//                     className="relative w-16 h-16 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 border border-[#10B981]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
//                   >
//                     <div className="text-[#10B981]">{step.icon}</div>
//                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#10B981] text-white text-xs font-bold rounded-full flex items-center justify-center">
//                       {step.number}
//                     </div>
//                   </motion.div>
//                 </div>

//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-3 mb-3">
//                     <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#10B981] transition-colors duration-300">
//                       {step.title}
//                     </h3>
//                   </div>

//                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                     {step.description}
//                   </p>

//                   {/* Meta Information */}
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="flex items-center gap-2 text-sm text-gray-400">
//                       <Clock className="h-4 w-4" />
//                       <span>{step.estimatedTime}</span>
//                     </div>
//                     <div
//                       className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
//                         step.difficulty
//                       )}`}
//                     >
//                       {step.difficulty}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Details List */}
//               <div className="space-y-4">
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
//                     className="flex items-start gap-3 group/item"
//                   >
//                     <div className="flex-shrink-0 w-4 h-4 bg-[#10B981]/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-[#10B981]/30 transition-colors duration-200">
//                       <ArrowRight className="h-3 w-3 text-[#10B981]" />
//                     </div>
//                     <p className="text-gray-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed">
//                       {detail}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Hover Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#10B981]/5 via-transparent to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Call to Action */}
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
//           className="inline-flex items-center gap-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300"
//         >
//           <span>Start Your Journey Today</span>
//           <ArrowRight className="h-5 w-5" />
//         </motion.button>

//         <p className="text-gray-400 text-sm mt-4">
//           No credit card required • Free forever • Join in seconds
//         </p>
//       </motion.div>
//     </section>
//   );
// }

// export default HowToGetStarted;

import { motion } from "framer-motion";
import {
  Sparkles,
  UserPlus,
  Repeat,
  ArrowRight,
  Clock,
  Star,
  Users,
} from "lucide-react";
import clsx from "clsx";

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
    icon: () => <UserPlus className="h-7 w-7" />,
    estimatedTime: "2-3 min",
    difficulty: "Easy",
  },
  {
    number: "02",
    title: "Showcase Your Expertise",
    description:
      "Highlight your skills and create compelling offerings that attract the right connections.",
    details: [
      "List unlimited skills with detailed descriptions",
      "Add portfolio samples and certifications",
      "Set skill levels and teaching preferences",
      "Create skill packages and session formats",
    ],
    icon: () => <Sparkles className="h-7 w-7" />,
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
    icon: () => <Repeat className="h-7 w-7" />,
    estimatedTime: "Ongoing",
    difficulty: "Medium",
  },
];

const sharedTransition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 15,
  duration: 0.7,
};

const animationVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: sharedTransition },
};

const leftSlideVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: sharedTransition },
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: sharedTransition },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const getAnimationVariants = (index: number) => {
  if (index === 1) return leftSlideVariants;
  if (index === 2) return rightSlideVariants;
  return animationVariants;
};

const getDifficultyColor = (difficulty: string) =>
  clsx(
    "px-2 py-1 rounded-full text-xs font-medium border",
    difficulty === "Easy" &&
      "text-green-400 bg-green-400/10 border-green-400/20",
    difficulty === "Medium" &&
      "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    difficulty === "Advanced" && "text-red-400 bg-red-400/10 border-red-400/20"
  );

export default function HowToGetStarted() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-4 py-2 mb-6"
        >
          <Star className="h-4 w-4 text-[#10B981]" />
          <span className="text-[#10B981] text-sm font-medium">
            Simple 3-Step Process
          </span>
        </motion.div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          How to Get Started
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
          Join thousands of professionals already growing their skills through
          meaningful exchanges. Our streamlined process gets you connected in
          minutes, not hours.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-[#10B981]" />
            <span>50,000+ Active Users</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#10B981]" />
            <span>Setup in Under 10 Minutes</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 lg:gap-12"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={getAnimationVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
          >
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute left-1/2 -bottom-12 w-px h-12 bg-gradient-to-b from-[#10B981]/30 to-transparent transform -translate-x-1/2 z-0" />
            )}

            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xl hover:shadow-[#10B981]/5 transition-all duration-500 group-hover:border-[#10B981]/30 group-hover:bg-white/8">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  variants={iconVariants}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 border border-[#10B981]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-[#10B981]">{step.icon()}</div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#10B981] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {step.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{step.estimatedTime}</span>
                    </div>
                    <div className={getDifficultyColor(step.difficulty)}>
                      {step.difficulty}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {step.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: detailIndex * 0.1 + 0.3,
                    }}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#10B981]/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-[#10B981]/30 transition-colors duration-200">
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-[#10B981]" />
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm group-hover/item:text-white transition-colors duration-200 leading-relaxed">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300 text-sm sm:text-base"
        >
          <span>Start Your Journey Today</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.button>

        <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 px-4">
          No credit card required • Free forever • Join in seconds
        </p>
      </motion.div>
    </section>
  );
}
