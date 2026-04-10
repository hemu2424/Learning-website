import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Sidebar';
import DashboardHeader from '../pages/DashboardHeader';
import RightSidebar from '../pages/RightSidebar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
      <div className="hidden xl:flex xl:shrink-0">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full max-w-[85vw]">
            <Sidebar mobile onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex min-h-0 flex-1 flex-col xl:flex-row">
          <main className="min-w-0 flex-1 overflow-y-auto bg-gray-50/30 p-4 sm:p-5 lg:p-6">
            <Outlet />
          </main>

          <div className="hidden shrink-0 border-t border-gray-100 xl:block xl:border-l xl:border-t-0">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
