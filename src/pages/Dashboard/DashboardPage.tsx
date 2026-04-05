
const DashboardPage = () => {
  return (
    // Just return the content directly. The layout is handled by AppRoutes.
    <div className="max-w-5xl mx-auto space-y-6">
      
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here's your learning overview.</p>
      </div>

      {/* Example Content Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 h-[400px] flex items-center justify-center shadow-sm">
        <p className="text-gray-400 font-medium">
          Select a program from the sidebar to view its content here.
        </p>
      </div>

    </div>
  );
};

export default DashboardPage;