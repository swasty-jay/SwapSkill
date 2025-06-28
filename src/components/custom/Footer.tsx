import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0B0F19] py-12 px-4 sm:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-80 h-80 bg-[#10B981]/20 blur-3xl rounded-full animate-pulse-slow"
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 text-center sm:text-left">
        {/* Left - Logo / Brand */}
        <div className="text-white font-semibold text-lg sm:text-xl">
          SwapSkill
        </div>

        {/* Center - Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#" className="hover:text-[#10B981] transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#10B981] transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#10B981] transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#10B981] transition">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} SwapSkill. All rights reserved.
      </div>
    </footer>
  );
};
