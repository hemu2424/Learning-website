

import Community from "../components/sections/Community/Community";
import card1 from "../assets/home/hand.webp"
import card2 from "../assets/home/girl_laptop.webp"
import card3 from "../assets/home/team.png"
import card4 from "../assets/home/liberty.avif"

import dmImg from "../assets/home/digital_marketing.webp";
import promptImg from "../assets/home/promt_eng.webp";
import javaImg from "../assets/home/Java_bootcamp.webp";
import gitImg from "../assets/home/Git_Github_bootcamp.webp";
import cppImg from "../assets/home/C++_image.webp";

const programs = [
  { title: "Java Bootcamp", image: javaImg, enrolled: "19.7k", date: "30 MAR 26" },
  { title: "Git & GitHub Bootcamp", image: gitImg, enrolled: "10.8k", date: "02 APR 26" },
  { title: "C++ Bootcamp", image: cppImg, enrolled: "18.4k", date: "06 APR 26" },
  { title: "Digital Marketing Bootcamp", image: dmImg, enrolled: "34k", date: "26 MAR 26" },
  { title: "JavaScript Bootcamp", image: promptImg, enrolled: "20.3k", date: "23 MAR 26" },
];

type MarqueeTextProps = {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
  itemClassName?: string; // 👈 for styling each text item
  gap?: string;
};

const MarqueeText = ({
  text,
  repeat = 10,
  speed = 80,
  className = "",
  itemClassName = "",
  gap = "",
}: MarqueeTextProps) => {
  return (
    <div className={`flex whitespace-nowrap pointer-events-none ${className}`}>
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {Array(repeat)
            .fill(text)
            .map((item, index) => (
              <span
                key={index}
                className={`${itemClassName} ${gap}`}
              >
                {item}
              </span>
            ))}
        </div>
      ))}
    </div>
  );
};
const Home = () => {


  return (
    <div>
      <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden overflow-y-auto scroll-smooth bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

        {/* 🔥 Background Marquee */}
        <div className="absolute inset-0 flex mt-14">
          <MarqueeText
  text="SHARE GROW LEARN BUILD"
  repeat={8}
  speed={300}
  className="opacity-30"
  itemClassName="text-[40px] sm:text-[60px] md:text-[90px] font-black uppercase text-yellow-500 leading-none"
  gap="mr-10"
/>
        </div>

        {/* 🔥 Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center mt-8 px-4 sm:mt-16">

          <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Future Proof Your <br />
            Career With{" "}
            <span className="text-yellow-500">LetsUpgrade</span>
          </h1>


          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Explore Tech, Design, Management, Business, Product and Data with LetsUpgrade.
            Learn directly from top Industry experts
          </p>

          {/* CTA SMALL */}
          <div className="mt-4 flex justify-center gap-6 text-xs text-gray-600">
            <span>🔥 LIVE CLASSES</span>
            <span>🎓 GET CERTIFIED</span>
          </div>

          {/* CARDS GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

            {/* CARD 1 */}
            <div className="relative rounded-2xl overflow-hidden hover:scale-105 transition">
              <img src={card1} className="w-full h-[200px] sm:h-full object-cover" />
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute inset-0 flex flex-col justify-start p-6 text-white gap-3">
                <h3 className="font-semibold text-3xl">
                  Explore Free Certificate Program
                </h3>
                <div className="flex justify-end">
                  <button className="border px-4 py-1 rounded-full text-xl">
                    Get Certified
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
           <div className="relative rounded-2xl overflow-hidden hover:scale-105 transition">
  <img src={card2} className="absolute inset-0 w-full h-full object-cover" />

  <div className="absolute inset-0 bg-black/20"></div>

  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-start text-white">
    <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl">
      Working Professional Courses
    </h3>

    <div className="flex justify-end">
      <button className="border px-4 py-1 rounded-full text-sm sm:text-base md:text-xl">
        Get Started
      </button>
    </div>
  </div>
</div>

            {/* RIGHT STACK */}
            <div className="flex flex-col gap-6">

              <div className="relative rounded-2xl overflow-hidden h-60 hover:scale-105 transition">

  <img
    src={card3}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/10"></div>

  <div className="absolute inset-0 z-10 p-4 flex justify-between items-start text-white">
    <span className="text-lg sm:text-xl">
      India's Best B.Tech CSE
    </span>

    <button className="border px-3 py-1 rounded-2xl text-sm sm:text-base">
      Apply Now
    </button>
  </div>

</div>

              <div className="relative bg-black text-white rounded-2xl p-4 h-60 flex justify-between items-start hover:scale-105 transition overflow-hidden">
                <img src={card4} className="absolute inset-0 w-full h-[90] object-cover" />
                <span className="z-10 text-xl">AI Core Skill</span>
                <button className="z-10 border px-3 py-1 rounded-2xl text-xl">
                  Enrol Program
                </button>
              </div>

            </div>

          </div>

          {/* CERTIFICATE SECTION */}
          <div className="px-4">
          <div className="mt-16 bg-[#111] text-white rounded-2xl   overflow-hidden">

            <div className="relative z-10 flex w-full items-center justify-center gap-2 md:container py-4">

              {/* Left Line */}
              <div className="h-px flex-1 bg-gradient-to-l from-yellow-500/50 via-yellow-400/50 to-transparent"></div>

              {/* Text */}
              <div className="px-3 text-xs md:text-xl font-semibold tracking-wide text-amber-400 uppercase whitespace-nowrap">
                Certificate Programs
              </div>

              {/* Right Line */}
              <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-transparent"></div>

            </div>


            {/* Heading with background marquee */}
            <div className="relative overflow-hidden text-center py-2">
             
              <div className="absolute inset-0 overflow-hidden">
<MarqueeText
  text="INDUSTRY LEADING CERTIFICATION"
  repeat={8}
  speed={300}
  className="absolute top-1/2 -translate-y-1/2 opacity-15"
  itemClassName="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-yellow-500 leading-none"
  gap="mr-12"
/>              </div>

              {/* Foreground heading */}
              <h2 className=" pt-3 relative z-10 font-bold text-[35px] italic text-yellow-50" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                All From Basic To Advance
              </h2>
            </div>

            <p className=" text-xl mt-2 text-center">
              Earn certificate from LetsUpgrade, GDG MAD - Google Developer Group Mumbai, NSDC, and ITM Group of Institutions
            </p>

            {/* PROGRAM CARDS */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
              {programs.map((item, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-200 flex flex-col">
                  <div className="flex items-center justify-center bg-gray-50 h-24">
                    <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="px-3 pt-2">
                    <p className="text-[10px] text-gray-500">{item.enrolled} Enrolled · {item.date}</p>
                  </div>
                  <div className="px-3 pt-1 pb-2 flex-1">
                    <h4 className="text-xs font-semibold text-gray-900 leading-snug">{item.title}</h4>
                  </div>
                  <div className="px-3 pb-1">
                    <button className="w-full bg-black text-white text-[11px] font-medium py-1.5 rounded-md hover:bg-gray-800 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                  <div className="px-3 pb-3 flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 line-through">₹999</span>
                    <span className="text-[10px] font-bold text-black">₹0</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-400 cursor-pointer text-center hover:text-white transition-colors">
              view all certificate programs →
            </p>

          </div>
          </div>


        </div>
        
        


      </div>
      <div className="w-full flex flex-col items-center">

  {/* ...all previous sections including first certificate section... */}

  {/* --------------------- */}
  {/* REPEATED CERTIFICATE SECTION */}
 <div className="mt-6 w-full flex flex-col items-center justify-center">

  {/* Line */}
  <div className="relative z-10 flex w-full items-center justify-center gap-2 max-w-6xl">
    <div className="h-px flex-1 bg-gradient-to-l from-yellow-500/50 via-yellow-400/50 to-transparent" />
    <div className="px-3 text-xs md:text-xl font-semibold tracking-wide text-amber-400 uppercase whitespace-nowrap text-center">
      our presence spans
    </div>
    <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-transparent" />
  </div>

  {/* Marquee */}
 <div className="relative w-full overflow-hidden leading-none">

    <div className="w-full">
      <MarqueeText
  text="LEARN BUILD SHARE GROW"
  repeat={20}
  speed={300}
  className="opacity-60"
  itemClassName="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-none text-yellow-200"
  gap="mr-16"
/>
    </div>

    {/* Centered H2 */}
    <h2
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-behindTheNineties text-xl md:text-4xl font-medium text-neutral-900 capitalize italic text-center"
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      Students from top colleges upskill with LetsUpgrade
    </h2>

  </div>

  {/* Paragraph */}
  <p className="mt-0 text-center text-base md:text-lg max-w-3xl text-gray-700">
    Students enroll in universities for degrees, but they turn to LetsUpgrade for skills
  </p>

</div>

</div>
      

{/* --------------- */}
      <div className="w-full max-w-6xl mx-auto mt-10 px-4">
  <div
    className="relative flex flex-col sm:flex-row items-center gap-6  rounded-2xl overflow-hidden"
    style={{ backgroundColor: "#fbf4a2" }}
  >
    {/* Decorative shapes */}
    <div className="absolute -left-6 -bottom-6 w-36 h-36 rounded-full bg-yellow-300 opacity-40 blur-2xl pointer-events-none" />
    <div className="absolute right-10 top-4 w-20 h-20 rounded-full bg-yellow-200 opacity-50 blur-xl pointer-events-none" />

    {/* Image on left */}
    <div className="flex-shrink-0 w-full sm:w-1/3 relative">
      <img
        src="https://lucdn.letsupgrade.net/assets/Discover_Certificate_bca3a66871.webp"
        alt="banner"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-contain grayscale"
      />
    </div>

    {/* Text content */}
    <div className="flex-1 text-center sm:text-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
        Discover Certifications
      </h2>
      <p className="mt-2 text-sm text-gray-700 max-w-sm leading-relaxed">
        Elevate your career with LetsUpgrade programs, offering everything from foundational tech certifications to design, management, and business-focused courses.
      </p>
      <button className="mt-5 inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors duration-200 shadow-lg">
        Explore Certificate Programs
      </button>
    </div>
  </div>
</div>

<div className="w-full max-w-6xl mx-auto mt-12 px-4">
  {/* Dark section */}
  <div className="relative w-full h-[400px] sm:h-[245px] overflow-hidden flex items-center justify-center rounded-2xl">
    {/* Background Image */}
    <img
      src="https://lucdn.letsupgrade.net/assets/users_count_bg_73c24b4781.gif"
      alt="banner"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Text content */}
    <div className="relative z-10 text-center flex flex-col items-center gap-4 px-4">
      <p className="text-gray-200 text-sm sm:text-base tracking-wide">
        Join a community of students dedicated to upskilling
      </p>
      <p className="text-gray-300 text-xs sm:text-sm max-w-xs leading-relaxed">
        Approximately 10,000 students enroll in LetsUpgrade programs every day
      </p>
    </div>
  </div>
</div>
      



      <Community />
    </div>
  );


}

export default Home