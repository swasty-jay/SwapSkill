import { Card, CardContent } from "../ui/card";

const LoadingSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {[...Array(8)].map((_, index) => (
      <Card key={index} className="animate-pulse">
        <CardContent className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-700 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-700 rounded"></div>
          </div>
          <div className="h-5 sm:h-6 w-3/4 bg-gray-700 rounded mb-2 sm:mb-3"></div>
          <div className="space-y-2 mb-3 sm:mb-4">
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
          </div>
          <div className="flex gap-2 mb-3 sm:mb-4">
            <div className="h-4 sm:h-5 w-12 bg-gray-700 rounded-full"></div>
            <div className="h-4 sm:h-5 w-16 bg-gray-700 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-gray-500">
            <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-700 rounded"></div>
            <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-700 rounded"></div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);
export default LoadingSkeleton;
