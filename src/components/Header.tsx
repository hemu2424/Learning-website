import { Link } from "react-router-dom";
import { useState } from "react";
import { MarqueeText } from "./ui/home/MarqueeComponents";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // TODO: Replace this mock state with your actual authentication logic 
  // (e.g., from Redux, Zustand, or React Context)
  const isLoggedIn = true; 

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm">
        <div className="w-full flex items-center px-4 sm:px-6 lg:px-16 py-3">

          {/* Left (Desktop only) */}
          <div className="hidden md:flex flex-1 gap-6">
            <NavItem to="/about" label="About LetsUpgrade" />
            <NavItem to="/programs" label="Explore Programs" />
          </div>

          {/* Center Logo */}
          <div className="flex justify-center flex-1 md:flex-none">
            <img 
              src="/main_logo.png" 
              alt="Lets Upgrade Logo" 
              className="h-8 sm:h-10 object-contain"
            />
          </div>

          {/* Right (Desktop only) */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-6">
            <NavItem to="/blogs" label="Blogs" />
            <NavItem to="/refer" label="Refer & Earn" />

            {/* Conditional Rendering for Desktop Auth Button */}
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
            <MobileNavItem to="/about" label="About LetsUpgrade" />
            <MobileNavItem to="/programs" label="Explore Programs" />
            <MobileNavItem to="/blogs" label="Blogs" />
            <MobileNavItem to="/refer" label="Refer & Earn" />
            
            {/* Conditional Rendering for Mobile Auth Button */}
            {isLoggedIn ? (
              <MobileNavItem to="/dashboard" label="Dashboard" />
            ) : (
              <MobileNavItem to="/login" label="Login" />
            )}
          </div>
        )}
      </header>

      {/* Moving Ticker */}
      <MarqueeText 
  text="✨ USER ENROLLED IN C++ BOOTCAMP ✨ USER ENROLLED IN SQL BOOTCAMP ✨ USER JOINED PYTHON PROGRAM"
  repeat={5} 
  speed={40} 
  className="bg-black text-white py-2"
  itemClassName="text-sm font-bold tracking-wide"
 
/>
    </>
  );
};

export default Header;

// 🔥 Desktop Nav Item
const NavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md hover:bg-gray-100 transition"
    >
      {label}
    </Link>
  );
};

// 📱 Mobile Nav Item
const MobileNavItem = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
    >
      {label}
    </Link>
  );
};