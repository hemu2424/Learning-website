import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  imageUrl?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ imageUrl }) => {
  // Fallback image if a specific blog doesn't have a sideImage
  const defaultImage = "https://media.letsupgrade.net/blogs/generic/thumb_1766471211065.png";
  const displayImage = imageUrl || defaultImage;

  return (
    <aside className="lg:col-span-4 relative">
      <div className="hidden lg:block sticky top-28 h-fit w-full">
        <Link 
          to="/book-your-slot" 
          className="group block relative overflow-hidden rounded-[32px] bg-white border border-gray-100 shadow-xl transition-all duration-500"
        >
          <img 
            src={displayImage} 
            alt="Promotion" 
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden mt-8">
        <Link to="/book-your-slot" className="block rounded-2xl overflow-hidden shadow-md">
          <img src={displayImage} alt="Offer" className="w-full h-auto" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;