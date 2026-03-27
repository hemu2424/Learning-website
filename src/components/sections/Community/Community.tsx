import React from 'react';
import { communityList, type CommunityItem } from '../../../types/communityData';

const CommunityCard: React.FC<CommunityItem> = ({ name, logoUrl }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Logo Container */}
      <div className="w-full aspect-square bg-white border border-gray-100 rounded-2xl flex items-center justify-center  shadow-sm hover:shadow-md transition-shadow">
        <img 
          src={logoUrl} 
          alt={name} 
          className="max-w-full max-h-full object-contain filter  hover:grayscale-0 transition-all duration-300" 
        />
      </div>
      
      {/* Label */}
      <span className="text-[10px] md:text-[11px] text-gray-700 text-center font-medium leading-tight px-1">
        {name}
      </span>
    </div>
  );
};

const Community: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#fafafa] overflow-hidden">
      
      
    {/* 2. Watermark Layer */}
  {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-10">
    <h1 className="text-[12vw] font-black text-gray-200/50 uppercase tracking-tighter whitespace-nowrap">
      Multiple Community
    </h1>
  </div> */}

      {/* 3. Main Content Container */}
      <div className="relative z-10 border border-[#a68b6d]/30 p-8 md:p-20 rounded-[40px] max-w-7xl mx-auto bg-white/40 backdrop-blur-[2px]">
       <div 
    className="absolute inset-0 pointer-events-none opacity-10 z-0"
    style={{
      backgroundImage: `radial-gradient(#4b5563 2px, transparent 2px)`,
      backgroundSize: '20px 20px',
    }}
  /> 
  
        {/* Headers */}
        <div className="text-center mb-20 space-y-4">
            
          <h4 className="text-sm md:text-2xl font-bold tracking-[0.3em] text-[#a68b6d] uppercase">
            OUR COMMUNITY
          </h4>
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#a68b6d] leading-tight">
            Multiple Community Memberships
          </h2>
          <p className="text-gray-500 text-sm md:text-sm max-w-2xl mx-auto font-medium">
            A tight-knit learning community of thousands of students, 
            working professionals & industry leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-x-5 gap-y-10">
          {communityList.map((item) => (
            <CommunityCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;