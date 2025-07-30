import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Handle click outside drawer to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    // Add event listener when drawer is open
    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore body scroll when drawer is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  // Navigation items configuration - DRY principle
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Explore Jobs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Handle navigation and close drawer - reusable function
  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  // Close drawer function
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Fixed Header - Floating on Mobile */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Mobile Floating Container */}
        <div className="md:hidden mx-4 mt-4 rounded-2xl border border-white/10 backdrop-blur-md bg-white/10 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo - Left Side on Mobile */}
            <Link
              to="/"
              className="text-xl font-bold text-gray-100 hover:text-gray-300 transition-colors"
            >
              SwapSkill
            </Link>

            {/* Mobile Menu Button - Right Side */}
            <button
              className="p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-gray-100" />
            </button>
          </div>
        </div>

        {/* Desktop Full-Width Container */}
        <div className="hidden md:block border-b border-white/10 backdrop-blur-md bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Left Side on Desktop */}
              <Link
                to="/"
                className="text-xl font-bold belleza text-gray-100 hover:text-gray-300 transition-colors"
              >
                SwapSkill
              </Link>

              {/* Desktop Navigation - Center */}
              <nav className="flex items-center belleza space-x-8 absolute left-1/2 transform -translate-x-1/2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-100 hover:text-gray-300 transition-colors font-medium text-sm lg:text-base"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop Register Button - Right Side */}
              <div>
                <Button
                  size="lg"
                  className="backdrop-blur-md bg-[#10B981]/50 border belleza border-white/20 text-white hover:bg-[#10B981]/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl rounded-xl"
                  onClick={() => navigate("/SkillListingPage")}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeDrawer}
        >
          {/* Drawer Panel - Slides from Left */}
          <div
            ref={drawerRef}
            className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-[#101828]/70 animate-slide-in via-slate-800 to-slate-900 border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <Link
                to="/"
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                onClick={closeDrawer}
              >
                Teeva
              </Link>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6 text-gray-300" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col px-6 py-8 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-gray-100 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 font-medium group"
                    onClick={closeDrawer}
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer with Action Buttons */}
              <div className="mt-auto p-6 border-t border-white/10 space-y-4 bg-white/5">
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 border border-white/20 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl"
                  onClick={() => handleNavigation("/skilllistingpage")}
                >
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 font-medium transition-all duration-200 bg-transparent rounded-xl"
                  onClick={() => handleNavigation("/login")}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
