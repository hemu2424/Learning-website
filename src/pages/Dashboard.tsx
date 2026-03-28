import React from 'react';
import CourseCard from '../components/dashboard/CourseCard';
import { allCourses } from '../types/dashboardData';
import { Link } from 'react-router-dom';
// import SectionHeader from './SectionHeader';
// import CourseCard from './CourseCard';
// import { allCourses } from './dashboardData';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10 max-w-7xl mx-auto space-y-10 font-sans">
      
      {/* Greeting */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        Good Afternoon, Saikat
      </h1>

      {/* Continue Learning Section */}
      <section className="space-y-4">
        <SectionHeader title="Continue Learning" />
        <div className="border border-gray-100 rounded-[40px] h-64 flex flex-col items-center justify-center text-center p-6 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          {/* Mock empty state icon */}
          <div className="relative w-20 h-20 mb-4 opacity-30">
             <div className="absolute inset-0 bg-gray-200 rotate-12 rounded-lg"></div>
             <div className="absolute inset-0 bg-gray-300 -rotate-6 rounded-lg border-b-4 border-green-500"></div>
          </div>
          <p className="text-gray-400 font-bold text-sm">No Enrolled Programs</p>
          <p className="text-gray-300 text-xs mt-1">Join programs to track progress</p>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="space-y-6">
        <SectionHeader title="All Courses" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

    </div>
  );
};

// Reusable Section Header
const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center justify-between border-b border-gray-50 pb-2">
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    <Link to="/programs" className="text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors">
      view all
    </Link>
  </div>
);

export default Dashboard;