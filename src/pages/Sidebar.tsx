import React, { useEffect, useRef, useState } from 'react';
import {
  BadgeCheck,
  CircleDollarSign,
  Crown,
  Edit,
  Flag,
  Flame,
  Gift,
  Handshake,
  LayoutDashboard,
  Library,
  LogOut,
  MoreVertical,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, dot, onClick }: NavItemProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors ${
      active ? 'bg-gray-200 font-medium text-gray-900' : 'text-gray-700 hover:bg-gray-50'
    }`}
  >
    <div className={active ? 'text-gray-800' : 'text-gray-600'}>{icon}</div>
    <span className="text-sm">{label}</span>
    {dot && <span className="ml-1 flex h-1.5 w-1.5 rounded-full bg-red-500" />}
  </button>
);

const Sidebar = ({ mobile = false, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isProfileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <aside
      className={`flex h-full flex-col justify-between border-r border-gray-100 bg-white px-3 py-4 font-sans shadow-sm ${
        mobile ? 'w-[280px] sm:w-80' : 'w-64'
      }`}
    >
      <div className="space-y-6">
        {mobile && (
          <div className="flex items-center justify-between px-2 pb-2">
            <img
              src="https://lucdn.letsupgrade.net/assets/wordmark_light_fb44b8b9d2.png"
              alt="LetsUpgrade"
              className="h-7 w-auto object-contain"
            />
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>
        )}

        <div className="space-y-1">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={isActive('/dashboard')}
            onClick={() => handleNavigate('/dashboard')}
          />
          <NavItem
            icon={<Flame size={20} />}
            label="Explore Programs"
            active={isActive('/explore-programs')}
            onClick={() => handleNavigate('/explore-programs')}
          />
          <NavItem
            icon={<Library size={20} />}
            label="My Programs"
            active={isActive('/my-programs')}
            onClick={() => handleNavigate('/my-programs')}
          />
        </div>

        <div className="space-y-1">
          <NavItem
            icon={<ShieldCheck size={20} />}
            label="Certificates"
            active={isActive('/certificates')}
            onClick={() => handleNavigate('/certificates')}
          />
          <NavItem
            icon={<Crown size={20} />}
            label="Rewards"
            dot
            active={isActive('/rewards')}
            onClick={() => handleNavigate('/rewards')}
          />
          <NavItem
            icon={<Gift size={20} />}
            label="Refer & Earn"
            active={isActive('/refer')}
            onClick={() => handleNavigate('/refer')}
          />
          <NavItem
            icon={<CircleDollarSign size={20} className="fill-yellow-100 text-yellow-500" />}
            label="205 LU Coins"
            active={isActive('/coins')}
            onClick={() => handleNavigate('/coins')}
          />
        </div>

        <div className="space-y-1">
          <NavItem
            icon={<Flag size={20} />}
            label="Student Ambassador"
            active={isActive('/student-ambassador')}
            onClick={() => handleNavigate('/student-ambassador')}
          />
          <NavItem
            icon={<Handshake size={20} />}
            label="Community"
            active={isActive('/community')}
            onClick={() => handleNavigate('/community')}
          />
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="relative mb-4" ref={menuRef}>
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-xl p-2 text-left transition-colors ${
              isActive('/profile') ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
            onClick={() => handleNavigate('/profile')}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-10 w-10 flex-shrink-0 rounded-full border-2 border-yellow-400 bg-gradient-to-br from-purple-400 to-purple-600" />

              <div className="flex min-w-0 flex-col">
                <div className="flex items-center gap-1">
                  <span className="truncate text-sm font-semibold text-gray-900">Himanshu</span>
                  <BadgeCheck size={16} className="fill-green-500 text-white" />
                </div>
                <span className="truncate text-xs text-gray-500">@hporiya07898</span>
              </div>
            </div>

            <span
              onClick={(event) => {
                event.stopPropagation();
                setIsProfileMenuOpen((value) => !value);
              }}
              className="rounded-md p-1.5 transition-colors hover:bg-gray-200"
            >
              <MoreVertical size={20} className="text-gray-500" />
            </span>
          </button>

          {isProfileMenuOpen && (
            <div className="absolute bottom-full right-0 z-50 mb-2 w-48 rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleNavigate('/profile/edit');
                  setIsProfileMenuOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Edit size={18} />
                <span className="font-medium">Edit Profile</span>
              </button>

              <div className="my-1 h-px bg-gray-100" />

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsProfileMenuOpen(false);
                }}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50"
              >
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>

        <div className="space-y-1 px-2 text-[11px] font-medium text-gray-400">
          <p>2026 © LetsUpgrade EdTech Pvt. Ltd.</p>
          <p>v3.3.0</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
