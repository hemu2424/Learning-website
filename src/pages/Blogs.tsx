import React from 'react';
import { blogPosts } from '../types/blogData';
import BlogCard from '../components/blogs/BlogCard';
// import BlogCard from './BlogCard';
// import { blogPosts } from '../../../types/blogData';


const Blogs: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 tracking-tight">
        Blogs
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;