import { HeroSection } from "@/components/custom/HeroSection";
// import HowToGetStarted from "@/components/custom/GetStarted";
import Testimonials from "@/components/custom/Testimonial";
import Faqs from "@/components/custom/Faqs";
// import SponsoredSlider from "@/components/custom/SponsoredSlider";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#101822] text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* <SponsoredSlider /> */}

      {/* Main Content */}
      <main className="flex flex-col space-y-24 pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* How to Get Started */}
        {/* <HowToGetStarted /> */}
        <Testimonials />
        <Faqs />
      </main>
    </div>
  );
};
