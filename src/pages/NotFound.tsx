import { useState, useEffect } from "react";
import {
  Home,
  ArrowLeft,
  Compass,
  BookOpen,
  Users,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const NotFound = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const navigationOptions = [
    {
      title: "Browse Skills",
      description: "Discover amazing skills from our community",
      icon: <BookOpen className="text-blue-600" size={20} />,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      path: "/skills",
    },
    {
      title: "Find Teachers",
      description: "Connect with experienced instructors",
      icon: <Users className="text-green-600" size={20} />,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      path: "/teachers",
    },
    {
      title: "Community",
      description: "Join discussions and share experiences",
      icon: <MessageCircle className="text-purple-600" size={20} />,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      path: "/community",
    },
    {
      title: "Help Center",
      description: "Get support and find answers",
      icon: <Compass className="text-orange-600" size={20} />,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      path: "/help",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-100 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-yellow-100 rounded-full opacity-25 animate-bounce"></div>

        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group">
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="hidden sm:inline">Go Back</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SE</span>
            </div>
            <span className="font-bold text-gray-800 hidden sm:inline">
              SkillExchange
            </span>
          </div>
        </div>

        {/* Main 404 Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* 404 Illustration */}
          <div
            className={`transition-all duration-1000 ${
              isAnimated
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } mb-8`}
          >
            <div className="relative">
              {/* Large 404 */}
              <div className="text-8xl sm:text-9xl lg:text-[10rem] font-bold text-gray-100 leading-none select-none">
                404
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                  <Compass className="text-white" size={24} />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-blue-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Main Message */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isAnimated
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } mb-12`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Sorry, we can't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 justify-center">
                <Home size={20} />
                Back to Home
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all flex items-center gap-3 justify-center">
                <ArrowLeft size={20} />
                Previous Page
              </button>
            </div>
          </div>

          {/* Navigation Options */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isAnimated
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } w-full max-w-4xl`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Where would you like to go?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {navigationOptions.map((option, index) => (
                <button
                  key={index}
                  className={`${option.color} p-6 rounded-2xl text-left transition-all hover:scale-105 hover:shadow-lg border-2 group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {option.icon}
                      <h3 className="font-semibold text-gray-800">
                        {option.title}
                      </h3>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-gray-400 group-hover:text-gray-600 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {option.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isAnimated
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl w-full`}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you believe this is an error or you need assistance, our
              support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-lg transition-colors">
                Report Issue
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 mt-8 text-sm">
          <p>© 2025 SkillExchange. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
