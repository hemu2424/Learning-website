import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BadgeCheck, 
  MoreVertical, 
  Book, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  Edit, 
  LogOut, 
  Settings, 
  Link as LinkIcon, 
  Plus,
  ChevronRight
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate(); 
  
  // State Management
  const [activeTab, setActiveTab] = useState<'overview' | 'work' | 'resume'>('overview');
  const [leaderboardTab, setLeaderboardTab] = useState<'refer' | 'sap'>('refer');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Reference for the dropdown menu to detect clicks outside
  const menuRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the menu is open, and the click happened outside the menuRef element, close it
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle Logout Function
  const handleLogout = () => {
    // 1. Close the menu
    setIsProfileMenuOpen(false);
    
    // 2. Add your actual logout logic here (e.g., clearing tokens, local storage, etc.)
    console.log("User logged out");
    
    // 3. Navigate back to home or login page
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-20 relative">
      
      {/* Top Header & Logo */}
      <div className="flex justify-center pt-8 pb-4">
        <img 
          src="https://lucdn.letsupgrade.net/assets/brandmark_light_fa56375844.png" 
          alt="LetsUpgrade Logo" 
          className="w-16 h-16 object-contain"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Profile Header Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-md flex-shrink-0"></div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl font-bold text-gray-900">Himanshu Poriya</h1>
                <BadgeCheck className="w-5 h-5 text-white fill-green-500" />
              </div>
              <p className="text-sm text-gray-500 mb-2">@hporiya07898</p>
            </div>
          </div>

          {/* THREE DOT MENU WRAPPER */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            >
              <MoreVertical size={24} />
            </button>

            {/* THE DROPDOWN MENU */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* 1. Edit Profile Option */}
                <button 
                  onClick={() => {
                    setIsProfileMenuOpen(false);
                    navigate('/profile/edit'); // Navigates to edit route
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
                >
                  <Edit size={16} className="text-gray-400" />
                  Edit Profile
                </button>
                
                {/* 2. Logout Option */}
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center gap-3 text-sm transition-colors"
                >
                  <LogOut size={16} className="text-red-500" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-6 border-b border-gray-200 pb-4">
          01 Jan 1970 • Vadodara, Gujarat, IN
        </p>

        {/* Main Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`flex-1 pb-3 text-center text-sm font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'border-b-2 border-gray-900 text-gray-900' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('work')}
            className={`flex-1 pb-3 text-center text-sm font-medium transition-colors ${
              activeTab === 'work' 
                ? 'border-b-2 border-gray-900 text-gray-900' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Work
          </button>
          <button 
            onClick={() => setActiveTab('resume')}
            className={`flex-1 pb-3 text-center text-sm font-medium transition-colors ${
              activeTab === 'resume' 
                ? 'border-b-2 border-gray-900 text-gray-900' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Resume
          </button>
        </div>

        {/* Conditional Content Based on Main Tab */}
        
        {/* ---------------- OVERVIEW TAB ---------------- */}
        {activeTab === 'overview' && (
          <div className="animate-in fade-in duration-300">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <Book size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">4</p>
                  <p className="text-xs text-gray-500">Programs Enrolled</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">0</p>
                  <p className="text-xs text-gray-500">Programs Finished</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">0</p>
                  <p className="text-xs text-gray-500">Certificates</p>
                </div>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">-</p>
                  <p className="text-xs text-gray-500">Work Experience</p>
                </div>
              </div>
            </div>

            {/* Leaderboard Section */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gray-200 flex-1"></div>
                <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase">Leaderboard</h2>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              {/* Sub-tabs for Leaderboard */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-50 p-1 rounded-lg inline-flex">
                  <button 
                    onClick={() => setLeaderboardTab('refer')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      leaderboardTab === 'refer' ? 'bg-white shadow text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Refer & Earn
                  </button>
                  <button 
                    onClick={() => setLeaderboardTab('sap')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      leaderboardTab === 'sap' ? 'bg-white shadow text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    SAP
                  </button>
                </div>
              </div>

              {/* Leaderboard Content based on Sub-tab state */}
              {leaderboardTab === 'refer' ? (
                <div className="border border-gray-100 rounded-xl p-6 shadow-sm bg-white text-center">
                  <div className="flex justify-between items-center mb-6 px-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-600">0</p>
                      <p className="text-xs text-gray-500">Referrals</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-200 to-green-400 mb-2"></div>
                      <p className="text-sm font-medium text-gray-700">Himanshu Poriya</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">0</p>
                      <p className="text-xs text-green-600 font-medium">Completed Certifications</p>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-medium mt-2">
                    <AlertCircle size={14} />
                    You have currently ZERO referrals. Refer Now
                  </div>
                </div>
              ) : (
                <div className="border border-yellow-400 rounded-xl overflow-hidden shadow-sm relative cursor-pointer group">
                  <img 
                    src="https://lucdn.letsupgrade.net/assets/sap_mobile_834356f6bd.webp" 
                    alt="Student Ambassador Program" 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 to-transparent p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-amber-600 italic mb-2">Not A Student Ambassador Yet?</h3>
                    <p className="text-sm text-gray-700 max-w-[200px]">Want to UP your leadership skills and become the voice of LetsUpgrade ?</p>
                    <div className="absolute top-6 right-6 flex items-center text-amber-600 font-medium text-sm">
                      Apply Now <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-600 mb-1">About Himanshu Poriya on LetsUpgrade</h3>
                <p className="text-sm text-gray-500">-</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-gray-600 mb-1">Gender</h3>
                <p className="text-sm text-gray-500">Male</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-600 mb-1">Location</h3>
                <p className="text-sm text-gray-500">Vadodara, Gujarat, IN</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-600 mb-1">Email</h3>
                <p className="text-sm text-gray-500">hporiya06@gmail.com</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-600 mb-1">Phone</h3>
                <p className="text-sm text-gray-500">+919426719070</p>
              </div>
            </div>

            {/* Action Buttons & Footer */}
            <div className="mt-10 mb-6 flex flex-col items-center">
              {/* I've kept these bottom buttons, but they now do the exact same thing as the dropdown menu */}
              <div className="flex gap-4 mb-4">
                <button 
                  onClick={() => navigate('/profile/edit')}
                  className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Edit size={16} />
                  Edit Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-2 bg-[#ff3344] hover:bg-red-600 text-white rounded-md transition-colors text-sm font-medium shadow-sm"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
              <p className="text-xs text-gray-400">Joined on 06 Jul 2023 • 3 years</p>
            </div>
          </div>
        )}

        {/* ---------------- WORK TAB ---------------- */}
        {activeTab === 'work' && (
          <div className="animate-in fade-in duration-300">
            
            {/* Projects Section */}
            <div className="mb-12">
              <h2 className="text-lg font-bold text-gray-900 mb-8">Projects</h2>
              <div className="flex flex-col items-center justify-center text-center opacity-60">
                <Settings size={48} strokeWidth={1} className="text-gray-400 mb-4" />
                <h3 className="text-gray-400 font-semibold mb-1">No Projects Found</h3>
                <p className="text-gray-400 text-sm">Add your first project to get started.</p>
              </div>
            </div>

            {/* Links Section */}
            <div className="mb-12">
              <h2 className="text-lg font-bold text-gray-900 mb-8">Links</h2>
              <div className="flex flex-col items-center justify-center text-center opacity-60">
                <div className="flex gap-2 mb-4 text-gray-400">
                  <Book size={32} strokeWidth={1} />
                  <LinkIcon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-gray-400 font-semibold mb-1">No Links Found</h3>
                <p className="text-gray-400 text-sm">Add your first link now.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-20">
              <p className="text-xs text-gray-400">Joined on 06 Jul 2023 • 3 years</p>
            </div>

            {/* Floating Action Button */}
            <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-black transition-transform hover:scale-105 active:scale-95 z-50">
              <Plus size={24} />
            </button>
          </div>
        )}

        {/* ---------------- RESUME TAB ---------------- */}
        {activeTab === 'resume' && (
          <div className="animate-in fade-in duration-300 flex flex-col items-center justify-center py-20 text-center opacity-60">
             <Book size={48} strokeWidth={1} className="text-gray-400 mb-4" />
             <h3 className="text-gray-400 font-semibold mb-1">Resume Section</h3>
             <p className="text-gray-400 text-sm">Resume details will appear here.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;