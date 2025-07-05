import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { fetchSkillById } from "@/services/FetchSkills";
import {
  MapPin,
  User,
  Tag,
  Clock,
  Star,
  ChevronLeft,
  Share2,
  Heart,
} from "lucide-react";

const SkillDetailPage = () => {
  // Mock data for demonstration - replace with your actual data fetching
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  const skill = {
    id: "1",
    title: "Advanced React Development",
    description:
      "Master the art of building scalable, performant React applications with advanced patterns, hooks, and state management techniques. This comprehensive course covers everything from component architecture to performance optimization, testing strategies, and modern React features.",
    category: "Web Development",
    location: "San Francisco, CA",
    userName: "Sarah Johnson",
  };

  // Replace this with your actual routing logic
  // const { id } = useParams();
  // const {
  //   data: skill,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["skill", id],
  //   queryFn: () => fetchSkillById(id!),
  //   enabled: !!id,
  // });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="animate-pulse">
              <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              <div className="p-8">
                <div className="h-8 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                <div className="flex gap-4 mb-6">
                  <div className="h-10 bg-gray-200 rounded-full w-24"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !skill) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Skill Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The skill you're looking for doesn't exist or has been removed.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Back to Skills</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Share2 size={20} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-white font-medium">4.8</span>
                </div>
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                {skill.title}
              </h1>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Tag className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-800">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-800">
                      {skill.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teacher</p>
                    <p className="font-semibold text-gray-800">
                      {skill.userName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About This Skill
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Teacher Profile */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {skill.userName}
                  </h3>
                  <p className="text-gray-600">Skill Instructor</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span>4.8 rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>2+ years experience</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                Start Learning
              </button>
              <button className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors">
                Contact Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailPage;
