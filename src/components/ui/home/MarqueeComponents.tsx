import React from "react";

// --- Types ---
type MarqueeTextProps = {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
  itemClassName?: string;
  gap?: string;
};

type ImageItem = { src: string; name: string };
type ImageMarqueeProps = {
  items: ImageItem[];
  speed?: number;
  reverse?: boolean;
};

type AdvisorItem = {
  name: string;
  role: string;
  image: string;
  companyLogo: string;
};

// --- 1. Basic Text Marquee ---
export const MarqueeText = ({
  text,
  repeat = 10,
  speed = 30,
  className = "",
  itemClassName = "",
  gap = "",
}: MarqueeTextProps) => {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap pointer-events-none ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex"
          style={{ animation: `marquee ${speed}s linear infinite` }}
        >
          {Array(repeat)
            .fill(text)
            .map((item, index) => (
              <span key={index} className={`${itemClassName} ${gap}`}>
                {item}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
};

// --- 2. Image/Logo Marquee ---
export const ImageMarquee = ({
  items,
  speed = 60,
  reverse = false,
}: ImageMarqueeProps) => {
  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="flex whitespace-nowrap animate-marquee gap-3"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-[150px] px-2"
          >
            <div className="h-12 flex items-center justify-center">
              <img
                src={item.src}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-2 text-xs text-center text-gray-700 truncate w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. Advisor Card Marquee ---
export const AdvisorMarquee = ({
  items,
  speed = 60,
  reverse = false,
}: {
  items: AdvisorItem[];
  speed?: number;
  reverse?: boolean;
}) => {
  return (
    <div className="overflow-hidden w-full relative mt-12 mb-10">
      <div
        className="flex whitespace-nowrap animate-marquee gap-6"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-shrink-0 w-[140px] px-2 group"
          >
            <div className="w-full h-[150px] bg-[#f7f7f7] rounded-t-[4rem] rounded-b-xl flex items-end justify-center overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
            </div>
            <h4 className="mt-4 text-[12px] font-extrabold text-gray-900 text-center truncate w-full tracking-wide">
              {item.name}
            </h4>
            <p className="mt-0.5 text-[12px] text-gray-500 text-center truncate w-full">
              {item.role}
            </p>
            <div className="h-6 flex items-center justify-center mt-1 w-full">
              {item.companyLogo && (
                <img
                  src={item.companyLogo}
                  alt="Company"
                  className="object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};