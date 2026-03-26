import React from 'react';
import { monochromeSocials } from './footerData';

const BottomSocials: React.FC = () => {
  return (
    <div className="flex items-center gap-2 ">
      {monochromeSocials.map(({ Icon, href, label }) => (
        <a 
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-all duration-300 ease-in-out"
        >
          {/* Using size 24 to match the visual weight of the screenshot */}
          <Icon 
            size={24} 
            strokeWidth={1.5} 
            className="cursor-pointer" 
          />
        </a>
      ))}
    </div>
  );
};

export default BottomSocials;