// import { Home, BookOpen, Users, ArrowLeft, Lightbulb } from "lucide-react";
// import { useEffect, useState } from "react";

// const NotFound = () => {
//   const [isAnimated, setIsAnimated] = useState(false);

//   useEffect(() => {
//     setIsAnimated(true);
//   }, []);

//   const popularSkills = [
//     { name: "Web Development", icon: "💻", color: "bg-blue-100 text-blue-600" },
//     {
//       name: "Graphic Design",
//       icon: "🎨",
//       color: "bg-purple-100 text-purple-600",
//     },
//     { name: "Photography", icon: "📸", color: "bg-green-100 text-green-600" },
//     {
//       name: "Language Learning",
//       icon: "🗣️",
//       color: "bg-yellow-100 text-yellow-600",
//     },
//     {
//       name: "Music Production",
//       icon: "🎵",
//       color: "bg-pink-100 text-pink-600",
//     },
//     {
//       name: "Digital Marketing",
//       icon: "📱",
//       color: "bg-indigo-100 text-indigo-600",
//     },
//   ];

//   const quickActions = [
//     {
//       title: "Browse Skills",
//       description: "Explore thousands of skills from our community",
//       icon: <BookOpen className="text-blue-600" size={24} />,
//       color: "bg-blue-50 hover:bg-blue-100",
//     },
//     {
//       title: "Find Teachers",
//       description: "Connect with skilled instructors near you",
//       icon: <Users className="text-green-600" size={24} />,
//       color: "bg-green-50 hover:bg-green-100",
//     },
//     {
//       title: "Share Your Skill",
//       description: "Teach others and earn while you learn",
//       icon: <Lightbulb className="text-purple-600" size={24} />,
//       color: "bg-purple-50 hover:bg-purple-100",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-15 animate-bounce"></div>
//         <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-25 animate-pulse"></div>
//         <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group">
//             <ArrowLeft
//               size={20}
//               className="group-hover:-translate-x-1 transition-transform"
//             />
//             <span>Back to Home</span>
//           </button>
//         </div>

//         {/* Main 404 Content */}
//         <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
//           {/* 404 Animation */}
//           <div
//             className={`transition-all duration-1000 ${
//               isAnimated
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//           >
//             <div className="relative mb-8">
//               <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-none">
//                 404
//               </h1>
//               <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-bold text-gray-100 -z-10 translate-x-2 translate-y-2">
//                 404
//               </div>
//             </div>
//           </div>

//           {/* Main Message */}
//           <div
//             className={`transition-all duration-1000 delay-300 ${
//               isAnimated
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
//               Oops! Skill Not Found
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
//               Looks like the skill you're searching for has moved to a different
//               classroom. Don't worry, there are plenty of other amazing skills
//               to discover!
//             </p>
//           </div>

//           {/* Search Bar */}

//           {/* Popular Skills */}
//           <div
//             className={`transition-all duration-1000 delay-700 ${
//               isAnimated
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             } w-full max-w-4xl mb-12`}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-6">
//               Popular Skills Right Now
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//               {popularSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   className={`${skill.color} rounded-xl p-4 transition-all hover:scale-105 hover:shadow-lg`}
//                 >
//                   <div className="text-2xl mb-2">{skill.icon}</div>
//                   <div className="text-sm font-medium">{skill.name}</div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Actions */}
//           <div
//             className={`transition-all duration-1000 delay-900 ${
//               isAnimated
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             } w-full max-w-4xl mb-8`}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-6">
//               What would you like to do?
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {quickActions.map((action, index) => (
//                 <button
//                   key={index}
//                   className={`${action.color} p-6 rounded-2xl text-left transition-all hover:scale-105 hover:shadow-lg`}
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     {action.icon}
//                     <h4 className="font-semibold text-gray-800">
//                       {action.title}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-600">{action.description}</p>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Home Button */}
//           <div
//             className={`transition-all duration-1000 delay-1100 ${
//               isAnimated
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-10 opacity-0"
//             }`}
//           >
//             <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3">
//               <Home size={20} />
//               Return to Homepage
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center text-gray-500 mt-8">
//           <p>
//             Need help?{" "}
//             <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
//               Contact our support team
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
