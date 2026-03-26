import React from 'react';
import type { SocialLink } from './footerData';


const SocialCard: React.FC<SocialLink> = ({ platform, count, href, logo }) => {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4 min-w-[200px] flex-1 bg-white hover:shadow-md transition-shadow duration-300"
    >
      <img src={logo} alt={platform} className="w-10 h-10 object-contain" />
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">{platform}</span>
        <span className="text-lg font-bold text-gray-900">{count}</span>
      </div>
    </a>
  );
};

export default SocialCard;