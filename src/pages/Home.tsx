import { HeroSection } from "@/components/custom/HeroSection";
import { Navbar } from "@/components/custom/NavBar";
import HowToGetStarted from "@/components/custom/GetStarted";
import Footer from "@/components/custom/Footer";
import Testimonials from "@/components/custom/Testimonial";
import Faqs from "@/components/custom/Faqs";
import SponsoredSlider from "@/components/custom/SponsoredSlider";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#101828] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <SponsoredSlider />

      {/* Main Content */}
      <main className="flex flex-col space-y-24 pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* How to Get Started */}
        <HowToGetStarted />
        <Testimonials />
        <Faqs />

        {/* Popular Skills Section */}
      </main>

      {/* Footer or Call to Action - Can be added here */}

      <div className="border-t border-white/10 mt-10"></div>

      <Footer />
    </div>
  );
};
