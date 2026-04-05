import React from 'react';
import Sidebar from '../pages/Sidebar';
import DashboardHeader from '../pages/DashboardHeader';
import RightSidebar from '../pages/RightSidebar';
import { Outlet } from 'react-router-dom';

// 2. We no longer need the DashboardLayoutProps interface requiring children
const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        
        <DashboardHeader />

        <div className="flex flex-1 overflow-hidden">
          
          <main className="flex-1 overflow-y-auto bg-gray-50/30 p-6">
            {/* 3. Replace {children} with <Outlet /> */}
            <Outlet />
          </main>

          <div className="overflow-y-auto">
            <RightSidebar />
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default DashboardLayout;