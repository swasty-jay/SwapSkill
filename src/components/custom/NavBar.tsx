import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlignRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen]);

  return (
    <header className="border-b border-white/10 backdrop-blur-md bg-white/5 fixed top-0 right-0 left-0 z-50">
      <div className="relative max-w-6xl mx-auto flex items-center justify-between p-3">
        {/* Logo on Left */}
        <Link to="/" className="text-xl font-bold text-gray-100 z-10">
          SwapSkill
        </Link>

        {/* Center Nav Items */}
        <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="text-gray-100 hover:text-gray-400">
            Home
          </Link>
          <Link to="/explore" className="text-gray-100 hover:text-gray-400">
            Explore jobs
          </Link>
          <Link to="/about" className="text-gray-100 hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="text-gray-100 hover:text-gray-400">
            Contact Us
          </Link>
        </nav>

        {/* Button on Right */}
        <div className="hidden md:block">
          <Button
            size="lg"
            className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
            onClick={() => navigate("/signup")}
          >
            Register
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden z-10" onClick={() => setDrawerOpen(true)}>
          <AlignRight className="h-6 w-6 text-gray-50" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
          <div
            ref={drawerRef}
            className="w-64 h-full backdrop-blur-md bg-red border-l border-white/10 shadow-lg p-6 space-y-6 animate-slide-in text-white"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setDrawerOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-100 hover:text-gray-400"
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="text-gray-100 hover:text-gray-400"
                onClick={() => setDrawerOpen(false)}
              >
                Explore jobs
              </Link>
              <Link
                to="/about"
                className="text-gray-100 hover:text-gray-400"
                onClick={() => setDrawerOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-100 hover:text-gray-400"
                onClick={() => setDrawerOpen(false)}
              >
                Contact Us
              </Link>

              <Button
                className="bg-white/20 border-white/10 text-gray-100"
                onClick={() => {
                  navigate("/signup");
                  setDrawerOpen(false);
                }}
              >
                Join Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
