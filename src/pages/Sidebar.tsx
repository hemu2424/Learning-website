import React, { useEffect, useRef, useState } from 'react';
import {
  LayoutDashboard,
  Flame,
  Library,
  ShieldCheck,
  Crown,
  Gift,
  CircleDollarSign,
  Flag,
  Handshake,
  MoreVertical,
  BadgeCheck,
  LogOut,
  Edit
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, dot, onClick }: NavItemProps) => {
  return (
    <div
      onClick={onClick} /* <--- YOU ARE MISSING THIS LINE RIGHT HERE! ---> */
      className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl cursor-pointer transition-colors ${active
          ? 'bg-gray-200 text-gray-900 font-medium'
          : 'text-gray-700 hover:bg-gray-50'
        }`}
    >
      <div className={`${active ? 'text-gray-800' : 'text-gray-600'}`}>
        {icon}
      </div>
      <span className="text-sm">{label}</span>

      {/* Red Notification Dot */}
      {dot && (
        <span className="flex w-1.5 h-1.5 rounded-full bg-red-500 ml-1"></span>
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // 1. Create a reference for the menu container
  const menuRef = useRef<HTMLDivElement>(null);

  // 2. Add the click-outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the menu is open AND the click happened outside the menuRef container
      if (
        isProfileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false); // Close the menu
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]); // Re-run effect if isProfileMenuOpen changes

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen flex flex-col justify-between bg-white border-r border-gray-100 px-3 py-6 font-sans">
      <div className="space-y-6">

        {/* Primary Links */}
        <div className="space-y-1">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={isActive('/dashboard')} // <--- Dynamic!
            onClick={() => navigate('/dashboard')}
          />
          <NavItem
            icon={<Flame size={20} />}
            label="Explore Programs"
             active={isActive('/explore-programs')} // <--- Dynamic!
            onClick={() => navigate('/explore-programs')}
            
          />
          <NavItem
            icon={<Library size={20} />}
            label="My Programs"
           
             active={isActive('/my-programs')} // <--- Dynamic!
             onClick={() => navigate('/my-programs')}
          />
        </div>

        {/* Secondary Links */}
        <div className="space-y-1">
          <NavItem
            icon={<ShieldCheck size={20} />}
            label="Certificates"
            active={isActive('/certificates')} // <--- Dynamic!
            onClick={() => navigate('/certificates')} // Assuming this is a nested route
          />
          <NavItem
            icon={<Crown size={20} />}
            label="Rewards"
            dot
            active={false}
            onClick={() => navigate('/refer')}
          />
          <NavItem
            icon={<Gift size={20} />}
            label="Refer & Earn"
            active={isActive('/refer')} // <--- Dynamic!
            onClick={() => navigate('/refer')}
          />
          {/* Custom colored icon for LU Coins */}
          <NavItem
            icon={<CircleDollarSign size={20} className="text-yellow-500 fill-yellow-100" />}
            label="205 LU Coins"
            active={isActive('/coins')} // <--- Dynamic!
            onClick={() => navigate('/coins')}
          />
        </div>

        {/* Tertiary Links */}
        <div className="space-y-1">
          <NavItem
            icon={<Flag size={20} />}
            label="Student Ambassador"
            active={isActive('/student-ambassador')} // <--- Dynamic!
            onClick={() => navigate('/student-ambassador')}
          />
          <NavItem
            icon={<Handshake size={20} />}
            label="Community"
            active={isActive('/community')} // <--- Dynamic!
            onClick={() => navigate('/community')}
          />
        </div>

      </div>

      {/* Bottom Profile & Footer Section */}
      <div className="mt-auto pt-6">

        {/* User Profile Card Wrapper (Added relative for dropdown positioning) */}
        <div className="relative mb-4" ref={menuRef}>

          <div
            // 1. Conditionally apply styling based on the active state
            className={`flex items-center justify-between cursor-pointer p-2 rounded-xl transition-colors ${isActive('/profile') ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            onClick={() => navigate('/profile')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-yellow-400 flex-shrink-0"></div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-gray-900">Himanshu</span>
                  <BadgeCheck size={16} className="text-white fill-green-500" />
                </div>
                <span className="text-xs text-gray-500">@hporiya07898</span>
              </div>
            </div>

            {/* The More Options Button */}
            <button

              onClick={(e) => {
                e.stopPropagation(); // Stops the click from triggering the parent's navigate('/profile')
                setIsProfileMenuOpen(!isProfileMenuOpen);
              }}
              className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
            >
              <MoreVertical size={20} className="text-gray-500" />
            </button>
          </div>

          {/* The Dropdown Menu */}
          {isProfileMenuOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/profile/edit');
                  setIsProfileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Edit size={18} />
                <span className="font-medium">Edit Profile</span>
              </button>

              <div className="h-px bg-gray-100 my-1"></div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Add logout logic here
                  console.log("User logged out");
                  setIsProfileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>

            </div>
          )}
        </div>

        {/* Footer Text */}
        <div className="text-[11px] text-gray-400 px-2 space-y-1 font-medium">
          <p>2026 © LetsUpgrade EdTech Pvt. Ltd.</p>
          <p>v3.3.0</p>
        </div>

      </div>
    </div>
  );
};

// Reusable Navigation Item Component


export default Sidebar;
