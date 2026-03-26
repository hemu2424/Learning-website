import React from 'react';
import type { FooterLink } from './footerData';
//import { FooterLink } from './footerData';

interface FooterColumnProps {
  title?: string;
  links: FooterLink[];
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, className }) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {title && (
        <h3 className="text-sm font-bold uppercase tracking-wider text-black">
          {title}
        </h3>
      )}
      <ul className="flex flex-col gap-2.5">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-[14px] text-gray-700 hover:text-orange-500 transition-colors leading-snug block"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;