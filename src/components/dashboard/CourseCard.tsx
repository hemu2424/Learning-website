import React from 'react';
import type { Course } from '../../types/dashboardData';


const CourseCard: React.FC<Course> = ({ title, thumbnail, enrollmentCount, date, status, tag }) => {
  const isLaunchingSoon = status === 'LAUNCHING SOON';

  return (
    <button className="relative flex w-full flex-col gap-3 overflow-hidden text-left group transition-all duration-300">
      {/* Thumbnail Container */}
      <div className="relative aspect-[1.64/1] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 shadow-sm">
        <img 
          alt={title} 
          src={thumbnail} 
          className="absolute inset-0 h-full w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Glow/Blur effect (from your code) */}
        <div 
          className="absolute inset-0 bottom-0 z-0 h-full w-full -translate-y-1/2 rounded-full opacity-10 blur-3xl" 
          style={{ backgroundColor: isLaunchingSoon ? 'rgb(35, 35, 35)' : 'rgb(192, 192, 192)' }}
        />

        {/* Status/Enrollment Bar - Height normalized to h-7 (28px) for better visibility */}
        <div className={`absolute bottom-0 flex h-7 w-full items-center justify-center overflow-hidden text-[10px] md:text-xs font-bold tracking-wide
          ${isLaunchingSoon 
            ? 'bg-amber-400 text-amber-950' 
            : 'bg-neutral-100 text-neutral-600 border-t border-neutral-200'}`}
        >
          <span className="line-clamp-1 uppercase">
            {isLaunchingSoon ? 'LAUNCHING SOON' : enrollmentCount}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex w-full flex-col gap-1.5 px-0.5">
        <div className="line-clamp-1 w-full text-sm font-bold text-neutral-900 md:text-base">
          {title}
        </div>
        
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col">
            {tag && (
              <span className="line-clamp-1 text-[10px] font-bold text-rose-700 uppercase tracking-tight">
                {tag}
              </span>
            )}
            <span className="text-xs font-medium text-neutral-400">
              {date}
            </span>
          </div>

          <button className="bg-neutral-900 text-white hover:bg-black transition-all duration-300 px-4 py-1.5 rounded-full text-[11px] font-bold h-fit w-fit self-end shadow-md active:scale-95 md:flex">
            Enroll
          </button>
        </div>
      </div>
    </button>
  );
};

export default CourseCard;