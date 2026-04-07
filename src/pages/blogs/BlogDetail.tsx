import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blogData';
import Sidebar from '../../types/Sidebar';
//const sidebarItems = "Blogs, About, Contact, Refer, Explore, Community, Student Ambassador, Dashboard";
const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogPosts.find((p) => p.link === slug);

  if (!blog) return <div className="p-20 text-center">Blog not found.</div>;

  return (
    <div className="bg-[#fafafa] min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Main Content (8 Columns) */}
        <main className="lg:col-span-8 space-y-8">
          {/* Header Info */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#001534]">
              {blog.title}
            </h1>
            <p className="text-gray-400 text-sm font-medium">{blog.date}</p>
          </div>

          {/* Feature Image */}
          <div className="rounded-[40px] overflow-hidden border border-gray-100 shadow-sm bg-white">
             <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto" />
          </div>

          {/* Article Text */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="text-[#a68b6d]">{blog.subtitle}:</span> {blog.title}
            </h2> */}
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              {blog.content.map((para, index) => (
                <p key={index} className={index === 0 ? "italic font-medium" : ""}>
                  {para}
                </p>
              ))}
              <p className="font-bold text-gray-900">Let's dive in.</p>
            </div>
          </div>
        </main>

        {/* RIGHT COLUMN: Sidebar (4 Columns) */}
        <aside className="lg:col-span-4 flex justify-center lg:justify-end">
          <Sidebar imageUrl={blog.sideImage} />
        </aside>

      </div>
    </div>
  );
};

export default BlogDetail;