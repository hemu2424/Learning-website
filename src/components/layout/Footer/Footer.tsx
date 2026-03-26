import React from 'react';
import FooterColumn from './FooterColumn';
import SocialCard from './SocialCard';
import * as data from './footerData';
import BottomSocials from './BottomSocials';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Social Media Section */}
        <div className="mb-16">
          <h2 className="text-center font-bold text-lg mb-8 tracking-wide text-gray-900">
            LU ON SOCIAL MEDIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {data.socialLinks.map((social) => (
              <SocialCard key={social.platform} {...social} />
            ))}
          </div>
        </div>

        <hr className="mb-12 border-gray-100" />

        {/* Main Footer Grid (from previous step) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="flex flex-col gap-6">
            <div className="font-bold text-2xl flex flex-col leading-none">
              <span className="text-black">Lets</span>
              <span className="text-black">Upgrade</span>
            </div>
            <p className="text-sm font-medium text-gray-800 italic">Learn. Build. Share. Grow</p>
            <div className="text-[14px] text-gray-600 space-y-4">
              <p>LetsUpgrade, a proud part of ITM Edutech, delivering industry-ready education.</p>
              <p>On a Mission to Upskill 10 Million People for Tech Industry.</p>
            </div>
            <FooterColumn 
              links={[
                { label: 'About', href: '#' },
                { label: 'Blogs', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Trainerpreneur Program', href: '#' },
              ]} 
            />
            <div className="flex flex-col gap-8 pt-4">
    <img 
      src="https://lucdn.letsupgrade.net/assets/Startup_India_4b92fa04b8.svg" // Replace with your actual path
      alt="Startup India" 
      className="w-48 object-contain"
    />
    <BottomSocials />
  </div>
          </div>

          <FooterColumn title="Certifications" links={data.certifications} />
          <FooterColumn title="Blogs" links={data.blogs} />
          
          <div className="flex flex-col gap-12">
            <FooterColumn title="School of FutureTech" links={data.schoolOfFutureTech} />
            <FooterColumn title="Study Abroad" links={[{ label: 'MS in Big Data Analytics', href: '#' }]} />
          </div>

          <FooterColumn title="Support" links={data.support} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;