import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogItem } from '../../../types/blogData';


const BlogCard: React.FC<BlogItem> = ({ title, date, imageUrl, link }) => {
  return (
    <Link 
      to={`/blogs/${link}`} 
      className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-[15px] font-bold text-gray-800 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
          {date}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;