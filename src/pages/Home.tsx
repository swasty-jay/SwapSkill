import { HeroSection } from "@/components/custom/HeroSection";
import Testimonials from "@/components/custom/Testimonial";
import Faqs from "@/components/custom/Faqs";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-white overflow-x-hidden">
      <HeroSection />

      <main className="flex flex-col space-y-24 pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <Testimonials />
        <Faqs />
      </main>
    </div>
  );
};
