import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] py-18 px-4 overflow-hidden space-y-8">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-96 h-96 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse-slow" />
        </div>

        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md"
        >
          <Sparkles className="w-4 h-4 text-[#10B981]" />
          Ghana's Premier Skill Exchange Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-inter font-extrabold text-white leading-tight max-w-4xl"
        >
          <span className="block relative ">Skill for Skill.</span>
          <span className="block text-[#10B981] mt-2">Growth for All.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 max-w-xl mx-auto font-roboto text-base sm:text-lg leading-relaxed"
        >
          In a world where access often feels out of reach,{" "}
          <span className="text-[#10B981] font-medium">SwapSkill</span> connects
          Ghana's hardworking youth swapping skills, sharing experiences, and
          building real opportunities, without the barriers of expensive courses
          or hidden fees.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            size="lg"
            className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-[#10B981]/20 transition font-medium"
            onClick={() => navigate("/signup")}
          >
            Learn how it workks
          </Button>
        </motion.div>
      </section>
    </>
  );
};
