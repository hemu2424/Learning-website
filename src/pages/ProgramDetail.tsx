import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Bot,
  CheckCircle2,
  FileText,
  MessageSquare,
  PlayCircle,
  X,
  ChevronDown,
  Menu,
} from 'lucide-react';
import programVideo from '../assets/MyPrograms/79584-570048615.mp4';

type SessionItem = {
  id: string;
  title: string;
  kind: 'video' | 'assignment';
};

type ProgramConfig = {
  title: string;
  bootcamp: string;
  sessions: SessionItem[];
};

const defaultSessions: SessionItem[] = [
  { id: 'day-1', title: 'Day 1 | Getting Started with Java', kind: 'video' },
  { id: 'day-2', title: 'Day 2 | Java Logic and Loops', kind: 'video' },
  { id: 'day-3', title: 'Day 3 | Java Object-Oriented Programming (OOP) Basics', kind: 'video' },
  { id: 'assignment', title: 'Assignment Submission', kind: 'assignment' },
];

const programConfigMap: Record<string, ProgramConfig> = {
  'java-bootcamp': {
    title: 'Day 1 | Getting Started with Java',
    bootcamp: 'Java Bootcamp',
    sessions: defaultSessions,
  },
  'python-atm': {
    title: 'ATM Simulation Using Python Workshop',
    bootcamp: 'Python Workshop',
    sessions: [
      { id: 'day-1', title: 'Day 1 | ATM Simulation Setup', kind: 'video' },
      { id: 'day-2', title: 'Day 2 | Balance, Withdraw and Deposit Logic', kind: 'video' },
      { id: 'assignment', title: 'Assignment Submission', kind: 'assignment' },
    ],
  },
  'js-zero-to-hero': {
    title: 'JavaScript Zero to Hero',
    bootcamp: 'JavaScript Zero to Hero',
    sessions: [
      { id: 'day-1', title: 'Day 1 | JavaScript Foundations', kind: 'video' },
      { id: 'day-2', title: 'Day 2 | Functions and DOM Basics', kind: 'video' },
      { id: 'day-3', title: 'Day 3 | Events and Mini Project', kind: 'video' },
      { id: 'assignment', title: 'Assignment Submission', kind: 'assignment' },
    ],
  },
  'js-programming': {
    title: 'JavaScript Programming',
    bootcamp: 'JavaScript Programming',
    sessions: [
      { id: 'day-1', title: 'Day 1 | JavaScript Getting Started', kind: 'video' },
      { id: 'day-2', title: 'Day 2 | Arrays, Objects and Loops', kind: 'video' },
      { id: 'day-3', title: 'Day 3 | Build with JavaScript', kind: 'video' },
      { id: 'assignment', title: 'Assignment Submission', kind: 'assignment' },
    ],
  },
  'java-programming': {
    title: 'Java Programming',
    bootcamp: 'Java Programming',
    sessions: defaultSessions,
  },
};

const detailRailItems = [
  { label: 'Course',      icon: BookOpen     },
  { label: 'Sessions',    icon: PlayCircle,  active: true },
  { label: 'Chat',        icon: MessageSquare },
  { label: 'Assignments', icon: FileText     },
  { label: 'Certificate', icon: Award        },
  { label: 'AI Chat',     icon: Bot          },
  { label: 'Resources',   icon: CheckCircle2 },
];

const ProgramDetail: React.FC = () => {
  const navigate  = useNavigate();
  const { id = '' } = useParams();

  const program = useMemo(
    () =>
      programConfigMap[id] ?? {
        title:    'Day 1 | Getting Started',
        bootcamp: 'Program Sessions',
        sessions: defaultSessions,
      },
    [id]
  );

  const firstPlayable =
    program.sessions.find((s) => s.kind === 'video')?.id ?? program.sessions[0]?.id ?? '';

  const [selectedSessionId, setSelectedSessionId] = useState(firstPlayable);
  const [sidebarOpen, setSidebarOpen]             = useState(false);
  const [mobileRailOpen, setMobileRailOpen]       = useState(false);

  const selectedSession =
    program.sessions.find((s) => s.id === selectedSessionId) ?? program.sessions[0];

  const handleSessionSelect = (id: string) => {
    setSelectedSessionId(id);
    setSidebarOpen(false); // auto-close on mobile after picking
  };

  return (
    // Full-bleed dark canvas — negative margin cancels any parent padding
    <div className="-m-4 sm:-m-6 flex flex-col bg-black text-white" style={{ minHeight: 'calc(100vh - 73px)' }}>

      {/* ── TOP HEADER (always visible) ───────────────────────────────────── */}
      <header className="flex items-center justify-between border-b border-white/10 bg-[#050505] px-3 py-2.5 sm:px-4 sm:py-3">
        {/* Left: hamburger (mobile) + logo + session title */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Mobile: hamburger to open sessions drawer */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex-shrink-0 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 transition-colors"
            aria-label="Open sessions"
          >
            <Menu size={18} />
          </button>

          <img
            src="https://lucdn.letsupgrade.net/assets/wordmark_light_fb44b8b9d2.png"
            alt="LetsUpgrade"
            className="h-6 sm:h-7 flex-shrink-0 object-contain"
          />

          <div className="hidden sm:block h-4 w-px bg-white/20" />

          <p className="hidden sm:block text-sm text-white/80 truncate max-w-[240px] lg:max-w-md">
            {selectedSession?.title ?? program.title}
          </p>
        </div>

        {/* Right: attendance + close */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors whitespace-nowrap"
          >
            Mark Attendance
          </button>
          <button
            type="button"
            onClick={() => navigate('/my-programs')}
            className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </header>

      {/* Session title on mobile (below header) */}
      <div className="sm:hidden border-b border-white/10 bg-[#0a0a0a] px-4 py-2 text-xs text-white/70 truncate">
        {selectedSession?.title ?? program.title}
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* ── RAIL (icon sidebar) — hidden on mobile ─────────────────────── */}
        <aside className="hidden md:flex w-14 lg:w-16 flex-shrink-0 flex-col border-r border-white/10 bg-[#050505] py-3">
          {detailRailItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`mb-2 flex w-full flex-col items-center gap-1.5 px-1 py-2 text-[10px] lg:text-[11px] transition-colors ${
                  item.active ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                <div className={`rounded-full p-1.5 ${item.active ? 'bg-white text-black' : ''}`}>
                  <Icon size={14} />
                </div>
                <span className="[writing-mode:vertical-rl] rotate-180 tracking-wide leading-none">
                  {item.label}
                </span>
              </button>
            );
          })}
        </aside>

        {/* ── MOBILE SESSIONS DRAWER (overlay) ──────────────────────────── */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 flex"
            onClick={() => setSidebarOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Drawer panel */}
            <aside
              className="relative z-10 w-4/5 max-w-xs flex flex-col bg-[#0a0a0a] border-r border-white/10 h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <h2 className="text-lg font-semibold">Sessions</h2>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="rounded-full bg-white/10 p-1.5 text-white/70 hover:bg-white/20"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="border-b border-white/10 bg-[#141414] px-4 py-2.5 text-xs text-white/60">
                {program.bootcamp}
              </div>

              <div className="flex-1 overflow-y-auto">
                {program.sessions.map((session) => {
                  const isActive = session.id === selectedSessionId;
                  const isVideo  = session.kind === 'video';
                  return (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => handleSessionSelect(session.id)}
                      className={`flex w-full items-center gap-3 border-b border-white/10 px-4 py-3.5 text-left transition-colors ${
                        isActive ? 'bg-white/10' : 'hover:bg-white/5'
                      }`}
                    >
                      <span className={isVideo ? 'text-red-500 flex-shrink-0' : 'text-indigo-400 flex-shrink-0'}>
                        {isVideo ? <PlayCircle size={14} /> : <FileText size={14} />}
                      </span>
                      <span className="text-sm text-white/85 leading-snug">{session.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Rail icons at bottom of drawer on mobile */}
              <div className="border-t border-white/10 grid grid-cols-4 gap-0">
                {detailRailItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className={`flex flex-col items-center gap-1 py-3 text-[10px] transition-colors ${
                        item.active ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      <div className={`rounded-full p-1 ${item.active ? 'bg-white text-black' : ''}`}>
                        <Icon size={13} />
                      </div>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        )}

        {/* ── SESSIONS SIDEBAR (desktop) ─────────────────────────────────── */}
        <aside className="hidden md:flex w-72 lg:w-80 xl:w-96 flex-shrink-0 flex-col border-r border-white/10 bg-[#0a0a0a]">
          <div className="border-b border-white/10 px-4 py-4">
            <h2 className="text-xl lg:text-2xl font-semibold">Sessions</h2>
          </div>

          <div className="border-b border-white/10 bg-[#141414] px-4 py-2.5 text-xs lg:text-sm text-white/60">
            {program.bootcamp}
          </div>

          <div className="flex-1 overflow-y-auto">
            {program.sessions.map((session) => {
              const isActive = session.id === selectedSessionId;
              const isVideo  = session.kind === 'video';
              return (
                <button
                  key={session.id}
                  type="button"
                  onClick={() => setSelectedSessionId(session.id)}
                  className={`flex w-full items-center gap-3 border-b border-white/10 px-4 py-4 text-left transition-colors ${
                    isActive ? 'bg-white/8' : 'hover:bg-white/5'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isVideo ? 'text-red-500' : 'text-indigo-400'}`}>
                    {isVideo ? <PlayCircle size={14} /> : <FileText size={14} />}
                  </span>
                  <span className="text-sm text-white/85 leading-snug">{session.title}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── MAIN CONTENT (video / assignment) ─────────────────────────── */}
        <section className="flex flex-1 flex-col min-w-0 bg-[#101010]">
          {selectedSession?.kind === 'assignment' ? (
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#171717] p-6 sm:p-8 text-center">
                <FileText className="mx-auto mb-4 text-indigo-400" size={32} />
                <h2 className="mb-2 text-xl sm:text-2xl font-semibold">Assignment Submission</h2>
                <p className="text-sm leading-6 text-white/60">
                  This section is ready for your assignment UI. The program route is working, and the
                  uploaded video is attached to the session player tabs.
                </p>
              </div>
            </div>
          ) : (
            <video
              key={selectedSession?.id}
              src={programVideo}
              controls
              autoPlay={false}
              className="w-full flex-1 bg-black object-contain"
              style={{ maxHeight: 'calc(100vh - 73px - 48px)' }}
            />
          )}

          {/* ── MOBILE bottom session picker ──────────────────────────── */}
          <div className="md:hidden border-t border-white/10 bg-[#0a0a0a]">
            <button
              type="button"
              onClick={() => setMobileRailOpen((v) => !v)}
              className="flex w-full items-center justify-between px-4 py-3 text-sm text-white/70"
            >
              <span className="font-medium text-white/90 truncate pr-4">
                {selectedSession?.title}
              </span>
              <ChevronDown
                size={16}
                className={`flex-shrink-0 transition-transform duration-200 ${mobileRailOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileRailOpen && (
              <div className="border-t border-white/10 max-h-52 overflow-y-auto">
                {program.sessions.map((session) => {
                  const isActive = session.id === selectedSessionId;
                  const isVideo  = session.kind === 'video';
                  return (
                    <button
                      key={session.id}
                      type="button"
                      onClick={() => {
                        setSelectedSessionId(session.id);
                        setMobileRailOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 border-b border-white/10 px-4 py-3 text-left transition-colors ${
                        isActive ? 'bg-white/10' : 'hover:bg-white/5'
                      }`}
                    >
                      <span className={`flex-shrink-0 ${isVideo ? 'text-red-500' : 'text-indigo-400'}`}>
                        {isVideo ? <PlayCircle size={13} /> : <FileText size={13} />}
                      </span>
                      <span className="text-sm text-white/80 leading-snug">{session.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramDetail;
