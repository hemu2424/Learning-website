import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 font-sans">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img 
          src="https://lucdn.letsupgrade.net/assets/wordmark_light_fb44b8b9d2.png" 
          alt="LetsUpgrade Logo" 
          className="h-7 object-contain"
        />
      </div>

      {/* Right: Stats and Actions */}
      <div className="flex items-center gap-5">
        
        {/* Streak / Fire Indicator */}
        <div className="flex items-center gap-1.5">
          <span className="text-lg leading-none" role="img" aria-label="streak">🔥</span>
          <span className="text-orange-500 font-bold text-sm">3</span>
        </div>

        {/* LU Coins Indicator */}
        <div className="flex items-center gap-1.5">
          {/* Custom CSS shape to mimic the LU Coin icon */}
          <div className="flex items-center justify-center w-4 h-4 bg-yellow-400 rounded-full shadow-sm">
             <div className="w-1.5 h-1.5 bg-orange-600 rotate-45"></div>
          </div>
          <span className="font-bold text-sm text-gray-900">205</span>
        </div>

        {/* Call to Action Button */}
        <button className="bg-[#949494] hover:bg-[#808080] text-white text-sm font-medium px-5 py-1.5 rounded-full transition-colors">
          Create AI Course
        </button>
        
      </div>
    </header>
  );
};

export default DashboardHeader;