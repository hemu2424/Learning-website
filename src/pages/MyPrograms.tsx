import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, LayoutGrid, Zap } from 'lucide-react';

import MERN from '../assets/MyPrograms/MERN-Stack-scaled.webp';
import AI from '../assets/MyPrograms/ai.jpg';

type ProgramColor = 'blue' | 'purple' | 'teal' | 'coral';

interface Program {
  id: string;
  title: string;
  tag: string;
  image: string;
  bgColor: string;
  color: ProgramColor;
  sessions: number;
  progress: number;
  emoji: string;
}

// ─── ADD NEW CARDS HERE ──────────────────────────────────────────────────────
// Every object you add will automatically get the same interactive card design.
// color: 'blue' | 'purple' | 'teal' | 'coral'
const programsData: Program[] = [
  {
    id: 'MERN-bootcamp',
    title: 'MERN Bootcamp',
    tag: 'Full Stack',
    image: MERN,
    bgColor: '#0f2845',
    color: 'blue',
    sessions: 4,
    progress: 35,
    emoji: '🛠️',
  },
  {
    id: 'AI-bootcamp',
    title: 'AI Bootcamp',
    tag: 'Machine Learning',
    image: AI,
    bgColor: '#1a1630',
    color: 'purple',
    sessions: 4,
    progress: 0,
    emoji: '🤖',
  },
  // Example: just copy-paste below and change the values
  // {
  //   id: 'react-advanced',
  //   title: 'React Advanced',
  //   tag: 'Frontend',
  //   image: ReactImg,
  //   bgColor: '#0a2b20',
  //   color: 'teal',
  //   sessions: 6,
  //   progress: 80,
  //   emoji: '⚛️',
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

const colorConfig: Record<ProgramColor, { badge: string; fill: string }> = {
  blue:   { badge: 'bg-blue-500/80',   fill: 'bg-[#378ADD]' },
  purple: { badge: 'bg-violet-500/80', fill: 'bg-[#7F77DD]' },
  teal:   { badge: 'bg-emerald-600/80',fill: 'bg-[#1D9E75]' },
  coral:  { badge: 'bg-orange-600/80', fill: 'bg-[#D85A30]' },
};

function getStatus(progress: number): string {
  if (progress === 100) return 'Completed';
  if (progress > 0)   return 'In Progress';
  return 'Not Started';
}

const MyPrograms: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filters = ['All', 'In Progress', 'Completed'];

  const filtered = programsData.filter((p) => {
    const status = getStatus(p.progress);
    const matchFilter = activeFilter === 'All' || status === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  return (
    <div className="mx-auto p-4 font-sans text-gray-800">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Back to dashboard"
        >
          <ChevronLeft className="w-5 h-5 text-gray-500" />
        </button>
        <h1 className="text-xl font-bold italic tracking-tight">My Programs</h1>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search enrolled programs"
          className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 text-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-7 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              activeFilter === f
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
        {filtered.map((program) => {
          const { badge, fill } = colorConfig[program.color];
          const status = getStatus(program.progress);
          const isDone = program.progress === 100;
          const isNew  = program.progress === 0;
          const btnLabel = isDone ? 'Review' : isNew ? 'Start' : 'Continue';

          return (
            <div
              key={program.id}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden
                         transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ backgroundColor: program.bgColor }}
              >
                {/* Emoji watermark */}
                <div className="absolute inset-0 flex items-center justify-center text-[52px] opacity-[0.15] select-none pointer-events-none">
                  {program.emoji}
                </div>

                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay with badge + title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                  <span className={`self-start text-[11px] font-semibold text-white px-2.5 py-0.5 rounded-full mb-1.5 ${badge}`}>
                    {program.tag}
                  </span>
                  <h2 className="text-[15px] font-bold text-white leading-snug line-clamp-1">
                    {program.title}
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4">

                {/* Meta row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="font-semibold text-gray-700 text-sm">{program.sessions}</span>
                    sessions
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                    {status}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                    <span>Progress</span>
                    <span className="font-semibold text-gray-700">{program.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${program.progress > 0 ? fill : 'bg-gray-200'}`}
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2 mt-auto pt-3 border-t border-gray-100">
                  <button
                    onClick={() => navigate(`/program/${program.id}`)}
                    className="flex-1 py-2 rounded-lg border border-gray-200 bg-gray-50 text-xs font-medium
                               text-gray-500 hover:bg-white hover:text-gray-700 hover:border-gray-300 transition-all"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => navigate(`/program/${program.id}`)}
                    className="flex-1 py-2 rounded-lg border border-transparent bg-gray-900 text-xs font-medium
                               text-white hover:bg-gray-700 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Zap className="w-3 h-3" />
                    {btnLabel}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default MyPrograms;
