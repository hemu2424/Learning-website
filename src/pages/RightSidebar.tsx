import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="w-72 p-4 space-y-4 font-sans bg-white min-h-screen border-l border-gray-100">
      
      {/* Learning Streaks Card */}
      <div className="border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 font-medium">Learning Streaks</h2>
          <CheckCircle2 size={18} className="text-green-500" />
        </div>
        
        {/* Days Header */}
        <div className="flex justify-between text-[11px] font-semibold text-gray-400 mb-2 px-1">
          <span>SUN</span>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
        </div>
        
        {/* Dates & Fire Icons */}
        <div className="flex justify-between items-center text-sm font-medium text-gray-600 px-1">
          <span className="w-6 text-center">29</span>
          
          {/* Active Streaks */}
          <div className="w-7 h-7 flex items-center justify-center bg-orange-100 rounded-full">
            <span role="img" aria-label="streak" className="text-lg">🔥</span>
          </div>
          <div className="w-7 h-7 flex items-center justify-center bg-orange-100 rounded-full">
            <span role="img" aria-label="streak" className="text-lg">🔥</span>
          </div>
          
          {/* Faded/Missed Streak */}
          <div className="w-7 h-7 flex items-center justify-center bg-orange-50 rounded-full opacity-50">
            <span role="img" aria-label="missed streak" className="text-lg">🔥</span>
          </div>
          
          {/* Upcoming Dates */}
          <span className="w-6 text-center text-gray-400">2</span>
          <span className="w-6 text-center text-gray-400">3</span>
          <span className="w-6 text-center text-gray-400">4</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        
        {/* Programs Enrolled */}
        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-2xl font-bold text-gray-900 mb-1">4</span>
          <span className="text-xs text-gray-500 font-medium leading-tight">Programs<br/>Enrolled</span>
        </div>

        {/* Sessions Attended */}
        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-2xl font-bold text-gray-900 mb-1">0</span>
          <span className="text-xs text-gray-500 font-medium leading-tight">Sessions<br/>Attended</span>
        </div>

        {/* Certificates */}
        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-center">
          <span className="text-2xl font-bold text-gray-900 mb-1">0</span>
          <span className="text-xs text-gray-500 font-medium leading-tight">Certificates</span>
        </div>

        {/* Refer & Earn */}
        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white to-orange-50">
          {/* Faint background circle decorations to mimic coins */}
          <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-yellow-200 rounded-full opacity-20"></div>
          <div className="absolute right-4 bottom-2 w-8 h-8 bg-orange-200 rounded-full opacity-20"></div>
          
          <span className="text-sm font-medium text-gray-900 mb-1 z-10">Refer & Earn</span>
          <span className="text-xs text-yellow-500 font-bold z-10">Get 20 FREE Coins</span>
        </div>
        
      </div>

      {/* Bottom Promo Component (Using the provided GIF) */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <img 
          src="https://lucdn.letsupgrade.net/assets/subscribe_to_YT_9dcb8a2543.gif" 
          alt="Subscribe to our new channel!" 
          className="w-full object-cover"
        />
      </div>
      
    </div>
  );
};

export default RightSidebar;