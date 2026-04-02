import React, { useState } from 'react';
import { FaStar, FaCoins } from 'react-icons/fa';
import { IoMdCheckmarkCircle, IoMdShare, IoMdClose } from 'react-icons/io';
import { MdCheckCircle, MdDragHandle, MdPeopleAlt } from 'react-icons/md';
import { RiResetLeftFill } from 'react-icons/ri';

// --- Asset URLs ---
const prizes = {
  watch: "https://lucdn.letsupgrade.net/assets/Smart_Watch_d0a093090a.png",
  buds: "https://lucdn.letsupgrade.net/assets/Air_Buds_e04579bc9d.png",
  giftCard: "https://lucdn.letsupgrade.net/assets/Gift_Card_3c351a3512.png",
  ipad: "https://lucdn.letsupgrade.net/assets/Ipad_f61c1432d7.png"
};

const stepIcons = {
  register: "https://lucdn.letsupgrade.net/assets/writing_hand_light_12d49e625b.png",
  share: "https://lucdn.letsupgrade.net/assets/outbox_tray_a8bec7e392.png",
  friend: "https://lucdn.letsupgrade.net/assets/handshake_light_6111cac889.png",
  rewards: "https://lucdn.letsupgrade.net/assets/trophy_ba7584c0cf.png"
};

// --- Course Data for Modal ---
const courseList = [
  {
    id: 1,
    title: "Python ATM Simulation...",
    date: "10 Feb 26",
    enrolled: "24k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/atm_stimulation_696898fe12b53_bad14dff5a.webp",
    link: "https://letsupgrade.net/ref/atm"
  },
  {
    id: 2,
    title: "Guess the Number Ga...",
    date: "5 Feb 26",
    enrolled: "29.7k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/number_game_696b856c48488_157627a957.webp",
    link: "https://letsupgrade.net/ref/guess"
  },
  {
    id: 3,
    title: "Cloud and DevOps",
    date: "1 Aug 25",
    enrolled: "Launching Soon",
    image: "https://lucdn.letsupgrade.net/assets/Untitled_design_19_d19658916f.png",
    link: "https://letsupgrade.net/ref/cloud",
    badge: "LAUNCHING SOON"
  },
  {
    id: 4,
    title: "Placement Preparation...",
    date: "19 Jan 26",
    enrolled: "9.9k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/Placement_Prep_0430d35cbd.webp",
    link: "https://letsupgrade.net/ref/placement"
  },
  {
    id: 5,
    title: "SQL HAVING Clause Es...",
    date: "16 Jan 26",
    enrolled: "24k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/having_693fefaebcfb6_278f1a5a04.webp",
    link: "https://letsupgrade.net/ref/sql"
  },
  {
    id: 6,
    title: "Scroll Reveal Animatio...",
    date: "12 Feb 26",
    enrolled: "26.5k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/scroll_animations_696f5b3f0208e_c0b534c30a.webp",
    link: "https://letsupgrade.net/ref/scroll"
  },
  {
    id: 7,
    title: "Advanced Content-Bas...",
    date: "27 Feb 26",
    enrolled: "20.3k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/recommendor_system_696b85683ecd0_9bb2cc420c.webp",
    link: "https://letsupgrade.net/ref/recommend"
  },
  {
    id: 8,
    title: "Real-Time SSE Essenti...",
    date: "16 Feb 26",
    enrolled: "27k Enrolled",
    image: "https://lucdn.letsupgrade.net/assets/sse_696b856b670c3_e8a8d310d2.webp",
    link: "https://letsupgrade.net/ref/sse"
  }
];

// --- Types ---
type LeaderboardEntry = {
  id: number;
  name: string;
  signups: number;
  enrollments: number;
  completed: number;
  avatarUrl?: string;
  color?: string;
};

// --- Dummy Data Generator ---
const generateDummyData = (count: number, startIndex: number = 1): LeaderboardEntry[] => {
  const names = ["Alex Johnson", "Priya Sharma", "David Smith", "Anita Desai", "Rahul Verma", "Sarah Connor", "John Doe", "Jane Smith"];
  const colors = ["bg-purple-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-pink-400", "bg-red-400"];
  
  return Array.from({ length: count }).map((_, i) => ({
    id: startIndex + i,
    name: names[Math.floor(Math.random() * names.length)] + " " + (startIndex + i),
    signups: Math.floor(Math.random() * 20),
    enrollments: Math.floor(Math.random() * 30),
    completed: Math.floor(Math.random() * 10),
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

const initialMonthlyData: LeaderboardEntry[] = [
  { id: 1, name: "Ashish Cherian", signups: 41, enrollments: 75, completed: 3, avatarUrl: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Neelotpal Dey", signups: 37, enrollments: 56, completed: 6, avatarUrl: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Gokulapriyan MA", signups: 21, enrollments: 142, completed: 115, color: "bg-green-400" },
  { id: 4, name: "M A Deepan", signups: 17, enrollments: 80, completed: 58, color: "bg-pink-400" },
  { id: 5, name: "Guru Prasad", signups: 10, enrollments: 10, completed: 1, color: "bg-pink-300" },
  { id: 6, name: "Shubham Rasal", signups: 10, enrollments: 96, completed: 136, avatarUrl: "https://i.pravatar.cc/150?u=6" },
  { id: 7, name: "Vitta Bhavya sree", signups: 6, enrollments: 7, completed: 1, color: "bg-purple-400" },
  { id: 8, name: "Ayush Mishra", signups: 6, enrollments: 9, completed: 3, color: "bg-teal-400" },
  { id: 9, name: "Rankireddy Gayathri Dee...", signups: 6, enrollments: 7, completed: 0, color: "bg-orange-300" },
  { id: 10, name: "Praveen Nama", signups: 5, enrollments: 9, completed: 6, color: "bg-green-400" },
  { id: 11, name: "STEPHEN RAJ T", signups: 5, enrollments: 6, completed: 0, color: "bg-teal-400" },
  { id: 12, name: "kesava koduru", signups: 5, enrollments: 6, completed: 0, color: "bg-pink-500" },
  { id: 13, name: "Sai Teja", signups: 5, enrollments: 6, completed: 0, color: "bg-orange-400" },
  { id: 14, name: "Himanshu Mallick", signups: 4, enrollments: 10, completed: 1, color: "bg-teal-300" },
  { id: 15, name: "Prem Kumar Sharma", signups: 4, enrollments: 6, completed: 4, color: "bg-indigo-500" },
];

const ReferPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Monthly' | 'Weekly'>('Monthly');
  const [visibleCount, setVisibleCount] = useState<number>(15);
  const [fullData, setFullData] = useState<LeaderboardEntry[]>(initialMonthlyData);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedStates, setCopiedStates] = useState<Record<number, boolean>>({});
  const [isAllCopied, setIsAllCopied] = useState(false);

  const handleLoadMore = () => {
    const newData = generateDummyData(15, fullData.length + 1);
    setFullData([...fullData, ...newData]);
    setVisibleCount(prevCount => prevCount + 15);
  };

  const handleTabSwitch = (tab: 'Monthly' | 'Weekly') => {
    setActiveTab(tab);
    setVisibleCount(15);
    setFullData(tab === 'Monthly' ? initialMonthlyData : generateDummyData(15, 1));
  };

  // Copy handlers
  const handleCopyLink = (id: number, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleCopyAll = () => {
    const allLinks = courseList.map(c => c.link).join('\n');
    navigator.clipboard.writeText(allLinks);
    setIsAllCopied(true);
    setTimeout(() => {
      setIsAllCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800  relative">
      
      {/* Main Page Content */}
      <div className={`transition-opacity duration-300 ${isModalOpen ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        <div className=" mx-auto   space-y-8">
          
          {/* --- Top Banner --- */}
          <div className="relative bg-[#E8F5E9] border border-green-200 rounded-xl p-6 overflow-hidden flex justify-between items-center h-48">
            <div className="z-10">
              <h1 className="text-3xl font-serif italic font-bold text-gray-900 mb-2">Refer & Earn</h1>
              <p className="text-gray-600 text-sm">Join the ranks of our top referrers and watch your rewards grow</p>
            </div>
            <div className="absolute right-[-20px] top-[-10px] flex items-center gap-2 opacity-90 scale-75 md:scale-100 z-0">
               <div className="bg-green-200 rounded-full p-4 w-24 h-24 flex items-center justify-center transform -translate-y-4 shadow-lg"><img src={prizes.watch} alt="Watch" className="w-full" /></div>
               <div className="bg-green-200 rounded-full p-4 w-24 h-24 flex items-center justify-center transform translate-y-6 shadow-lg"><img src={prizes.giftCard} alt="Amazon Card" className="w-full" /></div>
               <div className="bg-green-200 rounded-full p-4 w-24 h-24 flex items-center justify-center transform -translate-y-2 shadow-lg"><img src={prizes.buds} alt="Buds" className="w-full" /></div>
            </div>
          </div>

          {/* --- Referral Code Box --- */}
          <div className="bg-[#004D40] rounded-xl p-5 flex justify-between items-center shadow-md">
            <div>
              <p className="text-white font-medium mb-1">Your referral code</p>
              <p className="text-[#00BFA5] font-medium">hporiya07898</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00897B] hover:bg-[#00796B] transition-colors text-white px-6 py-2 rounded-full font-medium text-sm">
              Refer Now
            </button>
          </div>

          {/* --- How to Become Ambassador --- */}
          <div className="text-center mt-12 mb-8">
            <h2 className="text-2xl font-serif italic font-bold mb-2">How to Become a LetsUpgrade Ambassador</h2>
            <p className="text-gray-500 text-sm">Becoming a LetsUpgrade Ambassador: A Step-by-Step Guide</p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { icon: stepIcons.register, title: "Register / Login", desc: "Use your email and contact details to generate your unique referral link/code" },
              { icon: stepIcons.share, title: "Share", desc: "Spread the word! Share your link with friends to help them upskill in trending areas" },
              { icon: stepIcons.friend, title: "Friend's Action", desc: "Your friend signs up or enrolls using your referral link and completes the program." },
              { icon: stepIcons.rewards, title: "Reap Rewards", desc: "Climb up the leader board and unlock exciting rewards!" }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h4>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1A1A1A] text-white px-24 py-3 rounded-full font-medium hover:bg-black transition-colors">
              Refer Now
            </button>
          </div>

          {/* --- Prizes --- */}
          <div className="text-center mt-16 mb-8">
            <h2 className="text-2xl font-serif italic font-bold mb-8">Exciting Prizes Await You!</h2>
            <div className="flex justify-center items-center gap-12 md:gap-24">
              <div className="w-28 h-28 bg-[#A7F3D0] rounded-full flex items-center justify-center overflow-visible">
                <img src={prizes.watch} alt="Smart Watch" className="w-28 h-28 object-contain scale-90" />
              </div>
              <div className="w-28 h-28 bg-[#A7F3D0] rounded-full flex items-center justify-center overflow-visible">
                <img src={prizes.buds} alt="Earbuds" className="w-28 h-28 object-contain scale-90" />
              </div>
              <div className="w-28 h-28 bg-[#A7F3D0] rounded-full flex items-center justify-center overflow-visible">
                <img src={prizes.giftCard} alt="Amazon Gift Card" className="w-24 h-24 object-contain scale-90" />
              </div>
            </div>
          </div>

          {/* --- Your Position Card --- */}
          <div className="border border-gray-200 rounded-xl p-5 mt-12 flex items-center justify-between text-sm bg-white shadow-sm">
            <div className="flex flex-col gap-2 w-1/4">
              <span className="text-gray-500">Your position</span>
              <div className="flex items-center gap-2 font-medium">
                <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                <span>-</span>
              </div>
            </div>
            <div className="flex justify-between w-3/4 text-center">
              <div className="flex flex-col gap-2 w-1/3">
                <span className="text-gray-400 text-xs flex items-center justify-center gap-1"><span className="material-icons text-[14px]"><MdPeopleAlt /></span> Signups</span>
                <span className="font-bold text-blue-600">0</span>
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <span className="text-gray-400 text-xs flex items-center justify-center gap-1"><span className="material-icons text-[14px]"><MdPeopleAlt /></span> Enrollments</span>
                <span className="font-bold text-blue-600">0</span>
              </div>
              <div className="flex flex-col gap-2 w-1/3">
                <span className="text-[#00BFA5] font-medium text-xs flex items-center justify-center gap-1"><span className="material-icons text-[14px]"><MdCheckCircle /></span> Completed</span>
                <span className="font-bold text-[#00BFA5]">0</span>
              </div>
            </div>
          </div>

          {/* --- Leaderboard Component --- */}
          <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden mt-8">
            <div className="flex justify-between items-center p-5 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">Leaderboard</h3>
              <div className="flex border border-[#00BFA5] rounded-full overflow-hidden text-sm">
                <button 
                  onClick={() => handleTabSwitch('Monthly')}
                  className={`px-4 py-1.5 transition-colors ${activeTab === 'Monthly' ? 'bg-[#A7F3D0] text-[#00695C] font-medium' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => handleTabSwitch('Weekly')}
                  className={`px-4 py-1.5 transition-colors ${activeTab === 'Weekly' ? 'bg-[#A7F3D0] text-[#00695C] font-medium' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  Weekly
                </button>
              </div>
            </div>

            <div className="flex items-center px-5 py-3 border-b border-gray-100 text-xs text-gray-500 font-medium">
              <div className="w-1/2">Position</div>
              <div className="w-1/2 flex justify-between text-center">
                <div className="w-1/3 flex items-center justify-center gap-1">Signups</div>
                <div className="w-1/3 flex items-center justify-center gap-1">Enrollments</div>
                <div className="w-1/3 flex items-center justify-center gap-1 text-[#00BFA5]">Completed</div>
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {fullData.slice(0, visibleCount).map((user, idx) => (
                <div key={idx} className="flex items-center px-5 py-3 hover:bg-gray-50 transition-colors text-sm">
                  <div className="w-1/2 flex items-center gap-4">
                    <span className="text-gray-500 font-medium w-6 text-right">
                      {String(user.id).padStart(2, '0')}
                    </span>
                    {user.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full object-cover shadow-sm" />
                    ) : (
                      <div className={`w-8 h-8 rounded-full ${user.color || 'bg-gray-300'} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                      </div>
                    )}
                    <span className="font-medium text-gray-700 truncate">{user.name}</span>
                  </div>
                  <div className="w-1/2 flex justify-between text-center">
                    <div className="w-1/3 text-gray-500">{user.signups}</div>
                    <div className="w-1/3 text-gray-500">{user.enrollments}</div>
                    <div className="w-1/3 font-medium text-[#00BFA5]">{user.completed}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <button 
                onClick={handleLoadMore}
                className="w-full py-2.5 border border-gray-300 rounded-full text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Load More
              </button>
            </div>
          </div>
        </div>

        {/* --- Climb The Ranks Section --- */}
        <div className="bg-gradient-to-br from-[#006039] to-[#00A86B] mt-16 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-serif italic font-bold mb-1">Climb the Ranks</h2>
              <p className="text-green-100 text-sm font-medium uppercase tracking-wider">TIPS TO BOOST YOUR REFERRALS</p>
            </div>
            <div className="space-y-3">
              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <span className="text-[#00BFA5] material-icons text-lg"><IoMdShare /></span>
                <span className="text-sm font-medium">Share your unique link on social media</span>
              </div>
              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <span className="text-[#00BFA5] material-icons text-sm"><MdPeopleAlt /></span>
                <span className="text-sm font-medium">Engage with your network about the courses you're taking</span>
              </div>
              <div className="bg-white text-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3">
                <span className="text-[#00BFA5] material-icons text-sm"><FaStar /></span>
                <span className="text-sm font-medium">Highlight the benefits of LetsUpgrade to your friends and colleagues</span>
              </div>
            </div>
            <div className="pt-6">
              <h2 className="text-xl font-serif italic font-bold mb-4">Leaderboard Rules</h2>
              <ul className="space-y-3 text-sm text-green-50">
                <li className="flex items-center gap-2"><span className="material-icons text-lg"><RiResetLeftFill /></span> Leaderboard resets monthly</li>
                <li className="flex items-center gap-2"><span className="material-icons text-lg"><IoMdCheckmarkCircle /></span> Only completed referrals count towards your ranking</li>
                <li className="flex items-center gap-2"><span className="material-icons text-lg"><MdDragHandle /></span> Tie-breakers are decided by the highest completion rate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Footer Ready to Climb --- */}
        <div className="text-center pt-16 pb-8 px-4 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #00BFA5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-serif italic font-bold mb-2">Ready to Climb Higher?</h2>
            <p className="text-gray-500 text-sm mb-8">Remember, every referral counts. Start sharing and earning today</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1A1A1A] text-white px-24 py-3 rounded-full font-medium hover:bg-black transition-colors w-full max-w-md mx-auto block">
              Refer Now
            </button>
          </div>
        </div>
      </div>

      {/* --- Referral Modal Popup --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col hide-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 z-20 transition-colors"
            >
              <IoMdClose size={24} />
            </button>

            <div className="p-6 md:p-8 flex flex-col items-center">
              
              {/* Modal Header Icons */}
              <div className="relative w-full h-32 flex justify-center items-center mb-2">
                <div className="absolute top-2 left-1/4 transform -translate-x-6 w-12 h-12 rounded-full overflow-hidden shadow-md  bg-yellow-100 p-1">
                  <img src={prizes.watch} alt="Watch" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-2 left-[15%] w-10 h-10 rounded-full overflow-hidden shadow-md bg-yellow-100 flex items-center justify-center p-1">
                  <img src={prizes.giftCard} alt="Amazon" className="w-full h-full object-contain" />
                </div>
                
                {/* Center Coin Icon */}
                <div className="z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-100 border-4 border-yellow-50 shadow-lg flex items-center justify-center">

                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center border-2 border-yellow-200">
                     <FaCoins className="text-white text-3xl opacity-80" />
                  </div>
                </div>

                <div className="absolute top-0 right-1/4 transform translate-x-4 w-12 h-12 rounded-full overflow-hidden shadow-md bg-yellow-100 p-1">
                  <img src={prizes.buds} alt="Earbuds" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-4 right-[15%] w-15 h-12 rounded-full shadow-md border border-gray-100 bg-yellow-100 p-2">
                  <img src={prizes.ipad} alt="Tablet" className="w-full h-full object-cover rounded" />
                </div>
              </div>

              {/* Modal Typography & Main Button */}
              <h2 className="text-2xl font-serif italic font-bold text-gray-900 mb-2">Refer & Earn</h2>
              <p className="text-xs text-gray-500 text-center mb-6 max-w-sm leading-relaxed">
                Share these links with your friends and family members to earn 150 LU Coins for new Sign-up and 100 LU Coins for enrollments
              </p>
              
              <button 
                onClick={handleCopyAll}
                className="bg-[#1A1A1A] hover:bg-black transition-colors text-white font-medium py-3 px-8 rounded-full w-full flex items-center justify-center gap-2 shadow-md"
              >
                <span className="text-yellow-400 text-lg">💰</span>
                {isAllCopied ? "All Reference Copied!" : "Copy All Referral Links"}
              </button>

              <div className="w-full flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">or simply copy referral for selective ones</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {courseList.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col bg-white">
                    {/* Image Area */}
                    <div className="relative h-28 bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      {course.badge && (
                        <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm text-center py-1">
                          <span className="text-[10px] font-bold text-gray-800 tracking-wider">{course.badge}</span>
                        </div>
                      )}
                      {!course.badge && (
                        <div className="absolute bottom-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-gray-800 mx-auto left-0 right-0 w-max shadow-sm">
                          {course.enrolled}
                        </div>
                      )}
                    </div>
                    {/* Content Area */}
                    <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                      <h4 className="text-sm font-semibold text-gray-800 leading-tight truncate">{course.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">{course.date}</span>
                        <button 
                          onClick={() => handleCopyLink(course.id, course.link)}
                          className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-colors ${
                            copiedStates[course.id] 
                              ? "bg-green-500 text-white" 
                              : "bg-[#1A1A1A] text-white hover:bg-black"
                          }`}
                        >
                          {copiedStates[course.id] ? "Copied!" : "Copy Link"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
      
      {/* Hide scrollbar styles for Modal */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ReferPage;