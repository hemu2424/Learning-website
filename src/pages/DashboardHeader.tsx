import React from 'react';
import { Menu } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-3 font-sans sm:px-5 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 xl:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <img
          src="https://lucdn.letsupgrade.net/assets/wordmark_light_fb44b8b9d2.png"
          alt="LetsUpgrade Logo"
          className="h-6 object-contain sm:h-7"
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="text-lg leading-none" role="img" aria-label="streak">
            🔥
          </span>
          <span className="text-sm font-bold text-orange-500">3</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 shadow-sm">
            <div className="h-1.5 w-1.5 rotate-45 bg-orange-600" />
          </div>
          <span className="text-sm font-bold text-gray-900">205</span>
        </div>

        <button className="rounded-full bg-[#949494] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[#808080] sm:px-4 sm:text-sm lg:px-5">
          <span className="hidden sm:inline">Create AI Course</span>
          <span className="sm:hidden">AI Course</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
