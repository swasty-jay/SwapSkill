import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

interface NavSection {
  title: string;
  links: string[];
}

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubscribe = async () => {
    if (!email || isLoading) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }, 1000);
  };

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com/teeva", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/teeva", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/teeva",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/teeva",
      label: "Instagram",
    },
  ];

  const navigationSections: NavSection[] = [
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
      links: ["About Us", "Our Mission", "Careers", "Press Kit", "Blog"],
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
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Main Content */}
      <div className="relative py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <h3 className="text-3xl font-bold font-inter bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Teeva
                  </h3>
                </div>

                {/* Brand Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-8">
                  Ghana's premier peer-to-peer skill exchange platform.
                  <span className="text-emerald-500 font-medium block mt-1">
                    Skill for Skill. Growth for All.
                  </span>
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
                  Follow Us
                </h4>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 bg-slate-800/50 hover:bg-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {navigationSections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 className="text-white font-semibold text-lg mb-6 relative">
                      {section.title}
                      <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500 rounded-full" />
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href="#"
                            className="text-slate-400 hover:text-emerald-500 transition-colors text-sm flex items-center gap-2 group"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                <h4 className="text-white font-semibold text-lg mb-3">
                  Stay Updated
                </h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
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
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                      disabled={isLoading || isSubscribed}
                    />
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  </div>

                  <button
                    onClick={handleSubscribe}
                    disabled={isLoading || isSubscribed || !email}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </>
                    ) : isSubscribed ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
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
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-700/50 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Company Info */}
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full font-medium">
                EST. 2024
              </span>
              <span>Made with ❤️ in Ghana</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Accessibility
              </a>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © {currentYear} Teeva. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
