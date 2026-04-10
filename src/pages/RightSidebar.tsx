import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const RightSidebar = () => {
  return (
    <aside className="w-full bg-white p-4 font-sans xl:w-72 xl:p-4">
      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-200 p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-medium text-gray-800">Learning Streaks</h2>
            <CheckCircle2 size={18} className="text-green-500" />
          </div>

          <div className="mb-2 grid grid-cols-7 gap-2 px-1 text-center text-[11px] font-semibold text-gray-400">
            <span>SUN</span>
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
          </div>

          <div className="grid grid-cols-7 items-center gap-2 px-1 text-center text-sm font-medium text-gray-600">
            <span>29</span>
            <div className="flex h-7 w-7 items-center justify-center justify-self-center rounded-full bg-orange-100">
              <span role="img" aria-label="streak" className="text-lg">
                🔥
              </span>
            </div>
            <div className="flex h-7 w-7 items-center justify-center justify-self-center rounded-full bg-orange-100">
              <span role="img" aria-label="streak" className="text-lg">
                🔥
              </span>
            </div>
            <div className="flex h-7 w-7 items-center justify-center justify-self-center rounded-full bg-orange-50 opacity-50">
              <span role="img" aria-label="missed streak" className="text-lg">
                🔥
              </span>
            </div>
            <span className="text-gray-400">2</span>
            <span className="text-gray-400">3</span>
            <span className="text-gray-400">4</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex min-h-[112px] flex-col justify-center rounded-2xl border border-gray-200 p-4">
            <span className="mb-1 text-2xl font-bold text-gray-900">4</span>
            <span className="text-xs font-medium leading-tight text-gray-500">
              Programs
              <br />
              Enrolled
            </span>
          </div>

          <div className="flex min-h-[112px] flex-col justify-center rounded-2xl border border-gray-200 p-4">
            <span className="mb-1 text-2xl font-bold text-gray-900">0</span>
            <span className="text-xs font-medium leading-tight text-gray-500">
              Sessions
              <br />
              Attended
            </span>
          </div>

          <div className="flex min-h-[112px] flex-col justify-center rounded-2xl border border-gray-200 p-4">
            <span className="mb-1 text-2xl font-bold text-gray-900">0</span>
            <span className="text-xs font-medium leading-tight text-gray-500">Certificates</span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-orange-50 p-4">
            <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-yellow-200 opacity-20" />
            <div className="absolute bottom-2 right-4 h-8 w-8 rounded-full bg-orange-200 opacity-20" />
            <span className="relative z-10 mb-1 block text-sm font-medium text-gray-900">Refer & Earn</span>
            <span className="relative z-10 text-xs font-bold text-yellow-500">Get 20 FREE Coins</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <img
            src="https://lucdn.letsupgrade.net/assets/subscribe_to_YT_9dcb8a2543.gif"
            alt="Subscribe to our new channel!"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
