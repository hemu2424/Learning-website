import React from 'react';
import type { CommunityItem } from './communityData';
//import { CommunityItem } from './communityData';

const CommunityCard: React.FC<CommunityItem> = ({ name, logoUrl }) => {
  return (
    <div className="flex flex-col items-center gap-2 items-center">
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

export default CommunityCard;