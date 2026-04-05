import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaYoutube, FaWhatsapp, FaDiscord, FaHandshake, FaLightbulb, FaTrophy } from 'react-icons/fa';
import { IoRocketOutline } from 'react-icons/io5';
import { BiSolidBookAdd } from 'react-icons/bi';

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it free to join the LetsUpgrade community?",
      answer: "Yes, joining our community platforms is completely free!"
    },
    {
      question: "How often do you host live events?",
      answer: "We host live events, webinars, and BootCamps regularly. Join to stay updated!"
    },
    {
      question: "Can beginners join the community?",
      answer: "Absolutely! We welcome learners at all levels. Don't miss out on the opportunity to be part of a thriving tech ecosystem. Join LetsUpgrade today and take your skills to the next level!"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
      
      {/* Top Navigation Bar */}
      <div className="border-b border-gray-100 py-4 px-6 mb-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition-colors"
        >
          <IoIosArrowBack className="text-xl" />
          <span className="font-serif italic font-bold text-lg">Our Community</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="bg-[#F8F9FF] border border-blue-300 rounded-2xl p-8 md:p-12 text-center mb-16 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif italic  text-[#1A237E] font-medium mb-4">
            Join the LetsUpgrade Community
          </h1>
          <h2 className="text-sm font-bold text-gray-500 tracking-wider mb-4 uppercase">
            CONNECT, LEARN, & GROW TOGETHER
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Are you ready to supercharge your tech skills and network with like-minded professionals?
            <br className="hidden md:block" />
            Join the LetsUpgrade community today and unlock a world of opportunities!
          </p>
        </div>

        {/* Platforms Section */}
        <div className="mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-px bg-gray-400"></div>
          </div>
          <h3 className="text-center font-serif italic font-bold text-xl mb-8">
            Choose Your Platform and Stay Connected
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* YouTube Card */}
            <div className="bg-[#FFF8F8] border border-red-100 rounded-xl p-6 flex flex-col items-start justify-between min-h-[160px]">
              <div>
                <FaYoutube className="text-red-600 text-3xl mb-3" />
                <h4 className="font-bold text-red-600 text-xl mb-1">
                  260.6k+ <span className="text-gray-700 text-sm font-medium">Subscribers</span>
                </h4>
                <p className="text-xs text-gray-500 mb-4">Be the first to catch our live Bootcamps and exclusive tech content!</p>
              </div>
              <a 
                href="https://www.youtube.com/@LetsUpgrade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-black transition-colors"
              >
                Subscribe Now
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#F4FFF4] border border-green-100 rounded-xl p-6 flex flex-col items-start justify-between min-h-[160px]">
              <div>
                <FaWhatsapp className="text-[#25D366] text-3xl mb-3" />
                <h4 className="font-bold text-[#25D366] text-xl mb-1">
                  205.6k+ <span className="text-gray-700 text-sm font-medium">Members</span>
                </h4>
                <p className="text-xs text-gray-500 mb-4">Get daily updates on events, programs, and industry insights</p>
              </div>
              <a 
                href="https://whatsapp.com/channel/0029Va9xyz..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-black transition-colors"
              >
                Join Channel
              </a>
            </div>
          </div>

          {/* Discord Card (Full Width) */}
          <div className="bg-[#F8F9FF] border border-indigo-100 rounded-xl p-6 flex flex-col items-start justify-between min-h-[160px]">
            <div>
              <FaDiscord className="text-[#5865F2] text-3xl mb-3" />
              <h4 className="font-bold text-[#5865F2] text-xl mb-1">
                12.4k+ <span className="text-gray-700 text-sm font-medium">Active Users</span>
              </h4>
              <p className="text-xs text-gray-500 mb-4">Network, find code buddies, and learn together in real-time with them</p>
            </div>
            <a 
              href="https://discord.gg/letsupgrade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-black transition-colors"
            >
              Join Our Server
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-center font-serif italic font-bold text-xl mb-8">
            Ready to Level Up Your Tech Journey?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <IoRocketOutline className="text-2xl mb-3 text-gray-800" />
              <h4 className="font-medium text-sm text-gray-800 mb-1">Early Access</h4>
              <p className="text-xs text-gray-500">Early access to cutting-edge Boot Camps and tech events</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <FaHandshake className="text-2xl mb-3 text-gray-800" />
              <h4 className="font-medium text-sm text-gray-800 mb-1">Connections</h4>
              <p className="text-xs text-gray-500">Connect with industry professionals and fellow developers</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <FaLightbulb className="text-2xl mb-3 text-gray-800" />
              <h4 className="font-medium text-sm text-gray-800 mb-1">Collaborations</h4>
              <p className="text-xs text-gray-500">Engage in collaborative learning experiences</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-xl p-6">
              <FaTrophy className="text-2xl mb-3 text-gray-800" />
              <h4 className="font-medium text-sm text-gray-800 mb-1">Fun Participations</h4>
              <p className="text-xs text-gray-500">Participate in exclusive hackathons and coding challenges</p>
            </div>
          </div>
          <div className="bg-[#F9FAFB] rounded-xl p-6">
            <BiSolidBookAdd className="text-2xl mb-3 text-gray-800" />
            <h4 className="font-medium text-sm text-gray-800 mb-1">Knowledgeful Surrounding</h4>
            <p className="text-xs text-gray-500">Share and gain knowledge in a supportive environment</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-px bg-gray-400"></div>
          </div>
          <h3 className="text-center font-serif italic font-bold text-lg mb-8">
            FAQs
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden transition-all duration-200 ${openFaqIndex === index ? 'border-gray-300 shadow-sm' : 'border-gray-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className={`text-sm text-left ${openFaqIndex === index ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                    {faq.question}
                  </span>
                  <span className="text-gray-400 ml-4 flex-shrink-0">
                    {openFaqIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 pb-4 text-xs text-gray-500 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-4">
            Join an ever-growing community of 1Million+ members of dev and technology
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full bg-[#1A1A1A] text-white py-3.5 rounded-full text-sm font-semibold hover:bg-black transition-colors mb-12"
          >
            Start My LetsUpgrade Journey
          </button>
          
          <img 
            src="https://lucdn.letsupgrade.net/about_us_2_66b6f259bd.webp" 
            alt="LetsUpgrade Community Illustration" 
            className="w-full max-w-3xl mx-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Community;