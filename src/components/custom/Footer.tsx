import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  MapPin,
  Globe,
} from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socials: SocialLink[] = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#121212] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Main Content */}
      <div className="relative py-16 px-4 sm:px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="text-2xl font-bold font-roboto bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  SwapSkill
                </h3>
              </div>
              <p className="text-slate-400 text-base font-inter leading-relaxed mb-6">
                Ghana's premier peer-to-peer skill exchange platform.
                <span className="text-[#10B981] font-medium">
                  {" "}
                  Skill for Skill. Growth for All.
                </span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8 font-inter">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm">Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm">hello@swapskill.gh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Globe className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm">www.swapskill.gh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 bg-slate-800/50 hover:bg-[#10B981] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8 font-roboto">
            {[
              {
                title: "Platform",
                links: [
                  "Browse Skills",
                  "Offer Skills",
                  "How It Works",
                  "Success Stories",
                  "Community Guidelines",
                ],
              },
              {
                title: "Company",
                links: [
                  "About Us",
                  "Our Mission",
                  "Careers",
                  "Press Kit",
                  "Blog",
                ],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Contact Us",
                  "Safety Center",
                  "Report Issue",
                  "FAQs",
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold text-lg mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#10B981]" />
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-[#10B981] transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 font-roboto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h4 className="text-white font-semibold text-lg mb-3">
                Stay in the Loop
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                Get the latest updates, success stories, and exclusive tips
                delivered to your inbox.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] transition-all"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribed}
                  className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-white font-medium py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubscribed ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-inter">
            <span className="px-2 py-1  bg-[#10B981]/10 text-[#10B981] rounded-md font-medium">
              EST. 2024
            </span>
            <span>Made with ❤️ in Ghana</span>
          </div>
          <div className="flex flex-wrap font-inter items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-[#10B981] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#10B981] transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="text-slate-400 text-sm font-inter">
            © {new Date().getFullYear()} SwapSkill. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
