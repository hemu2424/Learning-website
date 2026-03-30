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
import { communityList } from "../types/communityData";
import { useEffect, useState } from "react";

const programs = [
  { title: "Java Bootcamp", image: javaImg, enrolled: "19.7k", date: "30 MAR 26" },
  { title: "Git & GitHub Bootcamp", image: gitImg, enrolled: "10.8k", date: "02 APR 26" },
  { title: "C++ Bootcamp", image: cppImg, enrolled: "18.4k", date: "06 APR 26" },
  { title: "Digital Marketing Bootcamp", image: dmImg, enrolled: "34k", date: "26 MAR 26" },
  { title: "JavaScript Bootcamp", image: promptImg, enrolled: "20.3k", date: "23 MAR 26" },
];

// --- REVIEWS DATA ---
const reviews = [
  { text: "The Full Stack Web Development bootcamp was a game changer for me. Building real-world projects with React and Node.js gave me the confidence to crack my first internship.", author: "Rohan Desai", avatar: "https://ui-avatars.com/api/?name=Rohan+Desai&background=random" },
  { text: "I was skeptical about the MS Study Abroad program at first, but the visa interview preparation and guidance they provided saved me so much time and money. Highly recommend!", author: "Ananya Patel", avatar: "https://ui-avatars.com/api/?name=Ananya+Patel&background=random" },
  { text: "Refer a friend to LetsUpgrade and earn premium tech gadgets, smartwatches, and Amazon gift cards. Start sharing your unique link today!", isPromo: true },
  { text: "The Cloud and DevOps instructors are top-notch. They don't just teach theory; they walk you through AWS deployments step-by-step. Great community support too.", author: "Vikram Singh", avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=random" },
  { text: "I absolutely love the peer-to-peer learning environment. Whenever I got stuck on a Python data structure problem, the community and mentors were there to help within minutes.", author: "Priya Sharma", avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random" },
  { text: "Completed the UI/UX design certification. The feedback sessions on our Figma prototypes were incredibly detailed. It feels like getting industry-level experience.", author: "Karan Mehta", avatar: "https://ui-avatars.com/api/?name=Karan+Mehta&background=random" },
  { text: "Love learning with us? Become a Student Ambassador! Represent LetsUpgrade on your campus and unlock exclusive gold, silver, and bronze tier rewards.", isPromo: true },
  { text: "The Data Analytics bootcamp covered everything from basic SQL to advanced Tableau dashboards. I finally understand how to clean and present data professionally.", author: "Neha Gupta", avatar: "https://ui-avatars.com/api/?name=Neha+Gupta&background=random" },
  { text: "Joined the B.Tech CSE program and it's completely different from traditional colleges. The focus is purely on modern tech stacks and AI core skills.", author: "Aditya Verma", avatar: "https://ui-avatars.com/api/?name=Aditya+Verma&background=random" },
  { text: "Cyber Security always intimidated me, but the Zero to Hero bootcamp broke down complex networking concepts into digestible modules. The hands-on labs were fantastic.", author: "Sneha Reddy", avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=random" },
  { text: "The free IELTS training included in the Study Abroad package is a steal. The mock tests and speaking practice sessions really boosted my band score.", author: "Arjun Nair", avatar: "https://ui-avatars.com/api/?name=Arjun+Nair&background=random" },
  { text: "Don't just learn, earn! Share your referral link with your classmates and win exclusive LetsUpgrade T-shirts and backpacks. Check your dashboard for the link.", isPromo: true },
  { text: "It was a great experience with LetsUpgrade on following the Data Science essentials course. I improved my fundamental skills in Python. The instructor did it very well.", author: "Sudhasan Kesavan", avatar: "https://ui-avatars.com/api/?name=Sudhasan+Kesavan&background=random" },
  { text: "Share your referral link now and win T-shirts, stickers, notebooks, bags, tech gadgets, and more! Watch your points grow and unlock exciting rewards.", isPromo: true },
  { text: "It was an honour to study from the professionals of LetsUpgrade. They were very supportive to not only some chosen ones but each one of the students who were attending their lectures.", author: "Prakhar Vaid", avatar: "https://ui-avatars.com/api/?name=Prakhar+Vaid&background=random" },
  { text: "I had an amazing learning experience with LetsUpgrade. I enrolled in two programs Javascript Essentials Program and Python Programming. The tutors were really nice.", author: "Tanya Nain", avatar: "https://ui-avatars.com/api/?name=Tanya+Nain&background=random" },
  { text: "Awesome platform to gain skills. Teachers are very good. They behave more like our friends than our teachers which I really liked. Overall a really good study environment.", author: "Sanidhya Sharma", avatar: "https://ui-avatars.com/api/?name=Sanidhya+Sharma&background=random" },
  { text: "1) Tableau Essentials Program experience: Lectures were interactive and got an opportunity to learn and explore new things. I loved this course.", author: "Aishwarya", avatar: "https://ui-avatars.com/api/?name=Aishwarya&background=random" },
  { text: "It was really nice learning with LetsUpgrade a online learning platform. I had applied for Java Essential program and learnt many things from it.", author: "Srushti Bhosale", avatar: "https://ui-avatars.com/api/?name=Srushti+Bhosale&background=random" },
  { text: "I did web development essentials course from let's upgrade and I found it quite interesting and the faculty teacher teaching us was knowledgeable.", author: "Smritika Kumari", avatar: "https://ui-avatars.com/api/?name=Smritika+Kumari&background=random" }
];

const shuffleArray = (array:any[]) => [...array].sort(() => Math.random() - 0.5);

type MarqueeTextProps = {
  text: string; repeat?: number; speed?: number; className?: string; itemClassName?: string; gap?: string;
};

const MarqueeText = ({ text, repeat = 10, speed, className = "", itemClassName = "", gap = "" }: MarqueeTextProps) => {
  return (
    <div className={`flex whitespace-nowrap pointer-events-none ${className}`}>
      {[0, 1].map((i) => (
        <div key={i} className="flex" style={{ animation: `marquee ${speed}s linear infinite` }}>
          {Array(repeat).fill(text).map((item, index) => (
            <span key={index} className={`${itemClassName} ${gap}`}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

type ImageItem = { src: string; name: string; };
type ImageMarqueeProps = { items: ImageItem[]; speed?: number; reverse?: boolean; gap?: string; };

const ImageMarquee = ({ items, speed = 60, reverse = false }: ImageMarqueeProps) => {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="flex whitespace-nowrap animate-marquee gap-3" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 w-[150px] px-2">
            <div className="h-12 flex items-center justify-center">
              <img src={item.src} alt={item.name} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="mt-2 text-xs text-center text-gray-700 truncate w-full">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- SCHOOL OF FUTURETECH DATA ---
const futureTechPrograms = [
  { bg: "https://lucdn.letsupgrade.net/assets/Untitled_design_19_d19658916f.png", title: "Cloud and DevOps", status: "LAUNCHING SOON", statusColor: "text-cyan-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/B_Tech_CSE_Op_1_1_ac44a184d3.webp", title: "India's Best BTech CSE", status: "JOIN NOW", statusColor: "text-yellow-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/Untitled_design_17_648b64d2ae.png", title: "Data Science", status: "LAUNCHING SOON", statusColor: "text-cyan-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/Untitled_design_16_1d2010587d.png", title: "Full Stack Development with AI", status: "LAUNCHING SOON", statusColor: "text-cyan-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/Untitled_design_20_73979e14f3.png", title: "Cyber Security", status: "LAUNCHING SOON", statusColor: "text-cyan-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/vlsi_chip_25efd33045.webp", title: "VLSI Design & Tech", status: "LAUNCHING SOON", statusColor: "text-cyan-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/Executive_M_Tech_1_c46d2407e7.webp", title: "Executive M.Tech", status: "JOIN NOW", statusColor: "text-yellow-400" },
  { bg: "https://lucdn.letsupgrade.net/assets/EV_Op_2_1_82f3a69864.webp", title: "Electric Vehicles", status: "LAUNCHING SOON", statusColor: "text-cyan-400" }
];

const logos = [
  { src: "https://lucdn.letsupgrade.net/assets/IIT_Dhanbad_e537609130.webp", name: "Indian Institute of Technology Dhanbad" },
  { src: "https://lucdn.letsupgrade.net/assets/VIT_74f0538042.webp", name: "Vellore Institute of Technology (VIT)" },
  { src: "https://lucdn.letsupgrade.net/assets/National_Institute_of_Technology_Silchar_8beb2efa6d.webp", name: "National Institute of Technology, Silchar" },
  { src: "https://lucdn.letsupgrade.net/assets/National_Institute_of_Technology_Srinagar_a631c2d4fa.webp", name: "National Institute of Technology, Srinagar" }, 
  { src: "https://lucdn.letsupgrade.net/assets/National_Institute_of_Technology_AP_91c203c44e.webp", name: "National Institute of Technology, AP" }, 
  { src: "https://lucdn.letsupgrade.net/assets/NIT_Patna_0bf320193d.webp", name: "National Institute of Technology, Patna" }, 
  { src: "https://lucdn.letsupgrade.net/assets/Christ_University_e949fe8436.webp", name: "Christ University, Bangalore" }, 
  { src: "https://lucdn.letsupgrade.net/assets/Symbiosis_International_University_79771d5219.webp", name: "Symbiosis International University" }, 
  { src: "https://lucdn.letsupgrade.net/assets/BVDU_603ffe1bad.webp", name: "Bharati Vidyapeeth Deemed University" }, 
  { src: "https://lucdn.letsupgrade.net/assets/Maharaja_Sayajirao_University_0e1bc21b5d.webp", name: "Maharaja Sayajirao University" }, 
  { src: "https://lucdn.letsupgrade.net/assets/KIIT_10b059704e.webp", name: "Kalinga Institute of Industrial Technology" }, 
  { src: "https://lucdn.letsupgrade.net/assets/Shiv_Nadar_University_f3542f324b.webp", name: "Shiv Nadar University" }, 
  { src: "https://lucdn.letsupgrade.net/assets/Cochin_University_b0239178d2.webp", name: "Cochin University of Science" }
];

const advisors = [
  { name: "Shubhadeep Sarkar", role: "VP, Engineering", image: "https://lucdn.letsupgrade.net/assets/Syama_Sundar_Santosh_Kumar_Gopasana_df13382756.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/accenture_d615a0fbf9.webp" },
  { name: "Dr. Preet Deep Singh", role: "Principal Architect", image: "https://lucdn.letsupgrade.net/assets/Dr_Preet_Deep_singh_c004141c91.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/invest_idia_95b130af63.webp" },
  { name: "Rushikesh Vinchurkar", role: "Head, Mobile Apps", image: "https://lucdn.letsupgrade.net/assets/Rushikesh_e7f6239cc2.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/propvr_c4bac1594e.webp" },
  { name: "Prakher K Srivastava", role: "Chief Tech Evangelist", image: "https://lucdn.letsupgrade.net/assets/Prakher_Kumar_Srivastava_2382ac5abb.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/barclays_6ab0d4737a.webp" },
  { name: "Tanvi Shah", role: "Co-Founder & CEO", image: "https://lucdn.letsupgrade.net/assets/Tanvi_Shah_3655be2078.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/women_techmakers_67a045b4d4.webp" },
  { name: "Ashish Tiwari", role: "VP, Tech/Investor", image: "https://lucdn.letsupgrade.net/assets/ASHISH_TIWARI_9ffb9e0365.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/elastic_1eaf0ed685.webp" },
  { name: "Shubhadeep Sarkar", role: "Enterprise Architect", image: "https://lucdn.letsupgrade.net/assets/shubhadeep_sarkar_1053194930.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/worxogo_5384480c81.webp" },
  { name: "Raju Kumar Singh", role: "Head of Product", image: "https://lucdn.letsupgrade.net/assets/raju_kumar_c2ba6c7d12.webp", companyLogo: "https://lucdn.letsupgrade.net/assets/amadeus_a05f14a926.webp" }
];

type AdvisorItem = { name: string; role: string; image: string; companyLogo: string; };

const AdvisorMarquee = ({ items, speed = 60, reverse = false }: { items: AdvisorItem[], speed?: number, reverse?: boolean }) => {
  return (
    <div className="overflow-hidden w-full relative mt-12 mb-10">
      <div className="flex whitespace-nowrap animate-marquee gap-6" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 w-[140px] px-2 group">
            <div className="w-full h-[150px] bg-[#f7f7f7] rounded-t-[4rem] rounded-b-xl flex items-end justify-center overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2">
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-[90%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
            </div>
            <h4 className="mt-4 text-[11px] font-extrabold text-gray-900 text-center truncate w-full tracking-wide">{item.name}</h4>
            <p className="mt-0.5 text-[10px] text-gray-500 text-center truncate w-full">{item.role}</p>
            <div className="h-4 flex items-center justify-center mt-1 w-full">
              {item.companyLogo && <img src={item.companyLogo} alt="Company" className=" object-contain" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Home = () => {

  // --- ANIMATED COUNTER COMPONENT ---
  const AnimatedCounter = ({ targetNumber, duration = 2500 }: { targetNumber: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * targetNumber));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(targetNumber);
        }
      };
      window.requestAnimationFrame(step);
    }, [targetNumber, duration]);

    return <>{count.toLocaleString()}</>;
  };


  return (
    <div>
      <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden overflow-y-auto scroll-smooth bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">

        {/* 🔥 Background Marquee */}
        <div className="absolute inset-0 flex mt-[65px]">
          <MarqueeText
            text="SHARE GROW LEARN BUILD"
            repeat={8}
            speed={300}
            className="opacity-[0.15]"
            itemClassName="text-[50px] sm:text-[80px] md:text-[110px] font-black uppercase text-yellow-500 leading-none"
            gap="mr-10"
          />
        </div>

        {/* 🔥 Main Content - HERO SECTION MATCHING SCREENSHOT */}
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center mt-12 px-4 sm:mt-20">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[40px] font-extrabold leading-tight tracking-tight text-gray-900">
            Future Proof Your <br />
            Career With <span className="text-yellow-500 italic font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>LetsUpgrade</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-1 text-gray-500 text-[11px] sm:text-sm max-w-3xl mx-auto font-medium">
            Explore Tech, Design, Management, Business, Product and Data with LetsUpgrade. Learn directly from top Industry experts
          </p>

          {/* Styled CTA Header Icons */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-bold text-gray-700 tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="text-red-500 font-black text-sm">((•))</span> LIVE CLASSES
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5">
              <span className="bg-blue-500 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px] font-bold">✓</span> 
              GET CERTIFIED
            </span>
          </div>

          {/* EXACT CARDS GRID */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            
            {/* CARD 1: Free Certificate Program */}
            <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-black h-[380px] md:h-[480px] flex flex-col border border-gray-800 shadow-xl">
              <div className="p-6 sm:p-8 flex flex-col items-start z-10 relative">
                <h3 className="font-bold text-2xl sm:text-3xl text-white leading-tight mb-5 tracking-tight">
                  Explore Free Certificate<br/>Program
                </h3>
                <button className="border border-white/40 px-5 py-1.5 rounded-full text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
                  Get Certified
                </button>
              </div>
              <img src={card1} className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom opacity-90" alt="Free Certificate" />
              {/* Fade to black gradient to make text legible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* CARD 2: Working Professional Courses */}
            <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-black h-[380px] md:h-[480px] flex flex-col items-center border border-gray-800 shadow-xl">
              <div className="p-6 sm:p-8 flex flex-col items-center z-10 relative w-full text-center">
                <h3 className="font-bold text-2xl sm:text-3xl text-white leading-tight mb-5 tracking-tight">
                  Working Professional<br/>Courses
                </h3>
                <button className="border border-white/40 px-5 py-1.5 rounded-full text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
                  Get Started
                </button>
              </div>
              <img src={card2} className="absolute bottom-0 left-0 w-full h-[70%] object-contain object-bottom opacity-90" alt="Professional Courses" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* RIGHT STACK */}
            <div className="flex flex-col gap-5 h-[380px] md:h-[480px]">
              
              {/* Stack Top: BTech CSE */}
              <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-black flex-1 border border-gray-800 shadow-xl">
                <div className="p-6 flex flex-col items-start z-10 relative w-3/4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                    India's Best B.Tech CSE
                  </h3>
                  <button className="border border-white/40 px-5 py-1.5 rounded-full text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
                    Apply Now
                  </button>
                </div>
                <img src={card3} className="absolute bottom-0 right-0 w-[100%] h-[90%] object-cover object-bottom opacity-90 mix-blend-lighten" alt="B.Tech CSE" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Stack Bottom: AI Core Skill */}
              <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-black flex-1 border border-gray-800 shadow-xl">
                <div className="p-6 flex flex-col items-start z-10 relative w-3/4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                    AI Core Skill
                  </h3>
                  <button className="border border-white/40 px-5 py-1.5 rounded-full text-[11px] font-semibold text-white hover:bg-white hover:text-black transition-colors">
                    Enroll Program
                  </button>
                </div>
                <img src={card4} className="absolute bottom-0 right-0 w-[50%] h-[90%] object-contain object-bottom opacity-90" alt="AI Core Skill" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              </div>

            </div>
          </div>

          {/* CERTIFICATE SECTION (SOLID BLACK BLOCK) */}
          <div className="mt-6 w-full mx-auto px-0 text-left">
            <div className="bg-[#0a0a0a] text-white rounded-[2rem] overflow-hidden pt-10 pb-8  shadow-xl">

              <div className="relative z-10 flex w-full items-center justify-center gap-4 max-w-3xl mx-auto">
                <div className="h-[2px] flex-1 bg-gradient-to-l from-yellow-500/50 to-transparent" />
                <div className="text-[11px] sm:text-xs tracking-[0.2em] font-bold text-yellow-500 uppercase whitespace-nowrap text-center">
                  CERTIFICATE PROGRAMS
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-500/50 to-transparent" />
              </div>

              {/* Heading with background marquee */}
              <div className="relative overflow-hidden text-center py-4 mt-2">
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
                  <MarqueeText
                    text="INDUSTRY LEADING CERTIFICATION"
                    repeat={8}
                    speed={300}
                    className="opacity-10"
                    itemClassName="text-4xl sm:text-6xl md:text-8xl font-black uppercase text-yellow-500 leading-none"
                    gap="mr-8"
                  />
                </div>
                <h2 className="relative z-10 font-bold text-3xl sm:text-4xl italic text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  All From Basic To Advance
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 text-center mt-1">
                Earn certificate from LetsUpgrade, GDG MAD - Google Developer Group Mumbai, NSDC, and ITM Group of Institutions
              </p>

              {/* PROGRAM CARDS */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
                {programs.map((item, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:scale-105 transition-transform duration-200 flex flex-col text-left">
                    <div className="flex items-center justify-center bg-gray-50   border-b border-gray-100">
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
                    </div>
                    <div className="px-3 pt-3">
                      <p className="text-[9px] text-gray-500 font-medium tracking-wide uppercase">{item.enrolled} Enrolled · {item.date}</p>
                    </div>
                    <div className="px-3 pt-1 pb-3 flex-1">
                      <h4 className="text-[13px] font-bold text-gray-900 leading-snug">{item.title}</h4>
                    </div>
                    <div className="px-3 pb-2">
                      <button className="w-full bg-[#1a1a1a] text-white text-[11px] font-semibold py-2 rounded-full hover:bg-black transition-colors">
                        Enroll Now
                      </button>
                    </div>
                    <div className="px-3 pb-4 flex justify-center items-center gap-2">
                      <span className="text-[10px] text-gray-400 line-through">₹999</span>
                      <span className="text-[10px] font-black text-black">₹0</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs font-semibold text-gray-400 cursor-pointer text-center hover:text-white transition-colors">
                view all certificate programs &gt;
              </p>

            </div>
          </div>
        </div>


      <div className="w-full flex flex-col items-center">

        {/* REPEATED CERTIFICATE SECTION */}
        <div className="mt-4 w-full flex flex-col items-center justify-center">
          <div className="relative z-10 flex w-full items-center justify-center gap-2 max-w-6xl">
            <div className="h-[3px] flex-1 bg-gradient-to-l from-yellow-500/50 via-yellow-400/50 to-transparent" />
            <div className="px-3 text-xs md:text-xl font-semibold tracking-wide text-amber-400 uppercase whitespace-nowrap text-center">
              our presence spans
            </div>
            <div className="h-[3px] flex-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-transparent" />
          </div>

          <div className="relative w-full overflow-hidden leading-none -mt-2 sm:-mt-4">
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
            <h2
              className="absolute top-[55px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-behindTheNineties text-xl md:text-3xl font-medium text-neutral-900 capitalize italic text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Students from top colleges upskill with LetsUpgrade
            </h2>
          </div>

          <p className="mt-0 text-center text-base md:text-lg max-w-3xl text-gray-700 relative z-10">
            Students enroll in universities for degrees, but they turn to LetsUpgrade for skills
          </p>
        </div>

        <div className="w-full">
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-6">
            <div className="flex flex-col gap-6">
              <ImageMarquee items={logos} speed={30} />
              <ImageMarquee items={logos} speed={40} reverse />
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <div
          className="relative flex flex-col sm:flex-row items-center gap-6  rounded-2xl overflow-hidden shadow-sm"
          style={{ backgroundColor: "#fbf4a2" }}
        >
          <div className="absolute -left-6 -bottom-6 w-36 h-36 rounded-full bg-yellow-300 opacity-40 blur-2xl pointer-events-none" />
          <div className="absolute right-10 top-4 w-20 h-20 rounded-full bg-yellow-200 opacity-50 blur-xl pointer-events-none" />

          <div className="flex-shrink-0 w-full sm:w-1/3 relative">
            <img
              src="https://lucdn.letsupgrade.net/assets/Discover_Certificate_bca3a66871.webp"
              alt="banner"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain grayscale"
            />
          </div>

          <div className="flex-1 text-center sm:text-left py-6 pr-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Discover Certifications
            </h2>
            <p className="mt-2 text-sm text-gray-700 max-w-sm leading-relaxed">
              Elevate your career with LetsUpgrade programs, offering everything from foundational tech certifications to design, management, and business-focused courses.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200 shadow-md">
              Explore Certificate Programs
            </button>
          </div>
        </div>
      </div>

      {/* --- STUDENT COUNT SECTION --- */}
      <div className="w-full max-w-6xl mx-auto mt-16 mb-12 px-4">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[300px] overflow-hidden flex items-center justify-center rounded-[2rem] bg-black shadow-lg">
          <img
            src="https://lucdn.letsupgrade.net/assets/users_count_bg_73c24b4781.gif"
            alt="Radar Background Animation"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 text-center flex flex-col items-center gap-4 sm:gap-6 px-4">
            <p className="text-white text-sm sm:text-base md:text-lg font-medium tracking-wide drop-shadow-md">
              Join a community of students dedicated to upskilling
            </p>
            <h2 
              className="text-6xl sm:text-7xl md:text-[90px] font-bold text-white italic leading-none tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: "3px 3px 0px #0ea5e9" }}
            >
              <AnimatedCounter targetNumber={1867135} duration={2500} />
            </h2>
            <p className="text-gray-100 text-xs sm:text-sm md:text-base font-medium drop-shadow-md">
              Approximately 10,000 students enroll in LetsUpgrade programs every day
            </p>
          </div>
        </div>
      </div>
      {/* --- END STUDENT COUNT SECTION --- */}

      <div className="relative w-full overflow-hidden py-16 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MarqueeText
            text="STUDY ABROAD"
            repeat={10}
            speed={200}
            className="opacity-40"
            itemClassName="text-[60px] sm:text-[100px] md:text-[140px] font-extrabold uppercase text-pink-200"
            gap="mr-16"
          />
        </div>

        <div className="relative z-10 w-full px-4 ">
          <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto">
            <div className="h-[2px] flex-1 bg-gradient-to-l from-pink-500 via-pink-400 to-transparent" />
            <p className="px-3 text-xs sm:text-sm tracking-wide text-pink-600 uppercase font-semibold whitespace-nowrap text-center">
              Looking to pursue your masters degree abroad?
            </p>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-pink-500 via-pink-400 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 mt-4 ">
          <h2 className="relative top-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Study Abroad While Saving Significantly
          </h2>
          </div>
          <p className="relative top-9 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Join LetsUpgrade's MS Abroad Programs, allowing students to start their MS journey with select international universities in India and later continue abroad, saving significantly on costs
          </p>
      </div>

      {/* COUNTRIES ROW */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-10 max-w-4xl mx-auto px-4">
        {[
          { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
          { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
          { name: "NEW ZEALAND", flag: "https://flagcdn.com/w80/nz.png" },
          { name: "JAPAN", flag: "https://flagcdn.com/w80/jp.png" },
          { name: "AUSTRALIA", flag: "https://flagcdn.com/w80/au.png" },
        ].map((country) => (
          <div key={country.name} className="bg-black text-white rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-700">
              <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-center tracking-wider">{country.name}</span>
          </div>
        ))}
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto px-4">
        <div className="relative rounded-[2rem] overflow-hidden h-[300px] md:h-[420px] shadow-sm group cursor-pointer">
          <img src="https://lucdn.letsupgrade.net/assets/Post_Work_Visa_Option_3_d31762be27.webp" alt="London Sunset" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent"></div>
        </div>

        <div className="flex flex-col gap-4 h-[420px]">
          <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 flex-1 flex flex-col items-center justify-center hover:shadow-md transition">
            <img src="https://lucdn.letsupgrade.net/assets/35_Certifications_31221d9153.webp" alt="Certifications" className="w-full h-full object-contain" />
          </div>
          <div className="bg-white rounded-[2rem] overflow-hidden relative flex-1 border border-gray-100 flex flex-col items-center justify-end shadow-sm hover:shadow-md transition">
            <img src="https://lucdn.letsupgrade.net/assets/Artboard_4_dd6fb26409.webp" alt="IELTS" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-4 h-[420px]">
          <div className="relative bg-[#1e4468] rounded-[2rem] overflow-hidden flex-1 flex flex-col items-center justify-center p-6 text-center group shadow-sm hover:shadow-md transition">
            <img src="https://lucdn.letsupgrade.net/assets/abroad_4_aa7d358621.webp" alt="Visa Preparation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative bg-[#eaf4eb] rounded-[2rem] overflow-hidden flex-1 flex flex-col items-center justify-center p-6 text-center shadow-sm hover:shadow-md transition">
            <img src="https://lucdn.letsupgrade.net/assets/abroad_5_b6e3f979b4.webp" alt="Cost Savings" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-20 mb-8 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1e3a8a] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
          Esteemed Partnered Universities
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-500 font-medium">
          Partner Universities for MS Study Abroad Programs
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-16 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 w-64 h-24 flex items-center justify-center p-2  hover:shadow-md transition">
          <img src="https://letsupgrade.in/assets/study-abroad/shu.png" alt="Sheffield Hallam" className="max-h-full max-w-full object-cover" />
        </div>
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 w-64 h-24 flex items-center justify-center p-2 hover:shadow-md transition">
          <img src="https://letsupgrade.in/assets/study-abroad/whiteria.png" alt="Whitireia WelTec" className="max-h-full max-w-full object-contain" />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto px-4 mb-20">
        {[
          { image: "https://lucdn.letsupgrade.net/assets/Artboard_9_89807f58e0.webp", university: "SHEFFIELD HALLAM UNIVERSITY", title: "MS in Big Data Analytics", features: ["6 to 8 Months India online + offline learning", "Job Opportunities in UK", "2 Years Work Visa post complete MS Degree"] },
          { image: "https://lucdn.letsupgrade.net/assets/Artboard_7_7e42dde5f9.webp", university: "SHEFFIELD HALLAM UNIVERSITY", title: "MS in Computing", features: ["6 to 8 months India Online + Offline Learning", "Job Opportunities in UK", "2-Years Work Visa post MS Degree completion"] },
          { image: "https://lucdn.letsupgrade.net/assets/Artboard_8_1a9d7b7708.webp", university: "SHEFFIELD HALLAM UNIVERSITY", title: "MS in IT Management", features: ["6 to 8 months India Online + Offline Learning", "Job Opportunities in UK", "2-Years Work Visa post MS Degree completion"] }
        ].map((program, index) => (
          <div key={index} className="flex flex-col rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 bg-gradient-to-b from-white via-white to-pink-50/50 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full bg-gray-200">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#facc15] py-1.5 text-center">
              <p className="text-[#422006] text-[11px] font-bold tracking-wider uppercase">Admissions Closing On 15 May</p>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[#c8102e] text-[11px] font-bold tracking-wide uppercase mb-1">{program.university}</p>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{program.title}</h3>
              <ul className="text-[13px] text-gray-600 space-y-2 mb-6 flex-1 list-disc pl-4 marker:text-gray-400">
                {program.features.map((feature, i) => <li key={i} className="pl-1 leading-snug">{feature}</li>)}
              </ul>
              <button className="w-full bg-[#1a1a1a] hover:bg-black text-white text-sm font-semibold py-3.5 rounded-full transition-colors duration-200">Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-hidden py-10 text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MarqueeText text="Refer and Earn Rewards" repeat={10} speed={200} className="opacity-40" itemClassName="text-[60px] sm:text-[100px] md:text-[140px] font-extrabold uppercase text-green-200" gap="mr-16" />
        </div>
        <div className="relative z-10 w-full px-4 ">
          <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto">
            <div className="h-[2px] flex-1 bg-gradient-to-l from-green-500 via-green-400 to-transparent" />
            <p className="px-3 text-xs sm:text-sm tracking-wide text-green-600 uppercase font-semibold whitespace-nowrap text-center">Refer & Earn</p>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-green-500 via-green-400 to-transparent" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 mt-4">
          <h2 className="relative top-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Refer & Earn</h2>
          <p className="relative top-9 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">Refer your friends to LetsUpgrade programs and earn T-shirts, stickers, notebooks, bags, tech gadgets, and more</p>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto mt-20 px-4 mb-20">
        <div className="flex justify-center -mb-12 relative z-20">
          <div className="flex -space-x-4 sm:-space-x-6">
            {[ "https://lucdn.letsupgrade.net/assets/watch_16b3cac61a.png", "https://lucdn.letsupgrade.net/assets/headphone_d185013861.png", "https://lucdn.letsupgrade.net/assets/Gift_card_e00a348402.webp", "https://lucdn.letsupgrade.net/assets/Tshirt_c91548fb45.png" ].map((src, index) => (
              <div key={index} className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full border border-green-200 shadow-md flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                <img src={src} alt="swag" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-[#effdf5] border border-green-200 rounded-[2.5rem]  overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
            <div className="flex flex-col items-start text-left order-2 md:order-1 p-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 italic tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Step 1</h2>
              <h3 className="text-xl md:text-2xl text-gray-800 mb-3">Generate your Referral link - Share it</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-8">3...2...1... It's that easy to generate your referral link! <br className="hidden sm:block" /> Once generated, share it with all your friends, and if they join using your unique link, you'll earn points to win swags.</p>
              <button className="bg-[#1a1a1a] hover:bg-black text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">Refer Now</button>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <img src="https://lucdn.letsupgrade.net/assets/step_1_eeae65ea5f.png" alt="Step 1 Illustration" className="w-full max-w-[400px] object-contain" />
            </div>
          </div>
          <div className="h-20 md:h-32"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <img src="https://lucdn.letsupgrade.net/assets/step_2_399e3fe9c2.png" alt="Step 2 Illustration" className="w-full max-w-[400px] object-contain" />
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right p-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 italic tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Step 2</h2>
              <h3 className="text-xl md:text-2xl text-gray-800 mb-3">See yourself top the leader board</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-8">For every friend who joins using your referral link, your points increase, giving you a greater chance to win swags. Good luck!</p>
              <button className="bg-[#1a1a1a] hover:bg-black text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">Refer Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden py-10  flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center justify-center ">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <MarqueeText text="BOARD OF ADVISORS" repeat={8} speed={250} className="opacity-[0.04]" itemClassName="text-[55px] sm:text-[80px] md:text-[110px] font-extrabold uppercase text-gray-900" gap="mr-8" />
          </div>
          <div className="relative z-10 w-full px-4 ">
            <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto">
              <div className="h-[2px] flex-1 bg-gradient-to-l from-gray-300 to-transparent" />
              <p className="text-[15px] tracking-[0.2em] text-gray-400 uppercase font-bold whitespace-nowrap text-center">BOARD OF ADVISORS</p>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="relative top-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 italic tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>LetsUpgrade Advisory Board</h2>
            <p className="relative top-6 text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">This is the part that keeps us energized day and night, as our Advisory Board members challenge us with numerous questions to answer constantly</p>
          </div>
        </div>
        <div className="relative z-10 w-screen left-1/2 -translate-x-1/2 mt-8">
          <AdvisorMarquee items={advisors} speed={45} />
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-24 flex flex-col items-center bg-[#fafafa]">
        <div className="absolute top-12 w-full flex items-center justify-center pointer-events-none z-0">
          <MarqueeText text="SCHOOL OF FUTURE TECH" repeat={8} speed={350} className="opacity-[0.1]" itemClassName="text-[60px] sm:text-[90px] md:text-[140px] font-extrabold uppercase text-gray-900" gap="mr-12" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          <p className="font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-gray-900 mb-2">Join the</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 italic tracking-tight relative inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
            School of FutureTech
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] h-[3px] bg-gradient-to-r from-transparent via-gray-900 to-transparent rounded-full opacity-80"></div>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mt-8 leading-relaxed">We wanted to extend our upskilling experiment to the offline world, so we launched our physical college, the School of FutureTech, where we offer forward-looking programs in collaboration with <br className="hidden sm:block" /> ITM Skills University</p>
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto mt-16 px-4">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {futureTechPrograms.map((program, index) => (
              <div key={index} className="relative w-[280px] min-w-[280px] h-[340px] bg-black rounded-2xl overflow-hidden shadow-xl snap-center flex flex-col items-center pt-8 px-6 text-center group cursor-pointer border border-gray-800">
                <img src={program.bg} alt={program.title} className="absolute inset-0 w-full h-full object-cover object-bottom opacity-70 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center w-full">
                  <p className="text-[#e21837] text-[9px] font-bold tracking-widest uppercase mb-2">ITM Skills University</p>
                  <h3 className="text-white text-xl font-bold leading-snug mb-3 drop-shadow-md">{program.title}</h3>
                  <p className={`text-[10px] font-extrabold tracking-wider uppercase ${program.statusColor} drop-shadow-sm`}>{program.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-16 w-full flex items-center justify-center pointer-events-none z-0">
          <MarqueeText text="SCHOOL OF FUTURE TECH" repeat={8} speed={350} className="opacity-[0.1]" itemClassName="text-[60px] sm:text-[90px] md:text-[140px] font-extrabold uppercase text-gray-900" gap="mr-12" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4 mt-10 flex flex-col items-center">
          <h2 className="relative top-7 text-3xl md:text-4xl font-semibold text-gray-900 italic tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Why Study At School Of FutureTech?</h2>
          <p className="relative top-10 text-xs sm:text-sm text-gray-500 max-w-3xl mt-4 leading-relaxed">If you're ready to challenge the status quo of traditional learning and want top-tier education, exposure, and peer-to-peer learning in a modern, new-age classroom environment, then join the School of FutureTech in Mumbai, the growing startup capital of India.</p>
        </div>
      </div>

      <div className="w-full  ">
        <div className="text-center  px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 italic tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Inside Our Classrooms</h2>
          <p className=" text-sm text-gray-500 max-w-2xl mx-auto">Learn directly from industry leaders and top mentors.</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee " style={{ animationDuration: `40s`, animationTimingFunction: "linear", animationIterationCount: "infinite" }}>
            {[1, 2, 3, 4].map((index) => (
              <img key={index} src="https://lucdn.letsupgrade.net/assets/Classroom_With_Leaders_c8576b0332.webp" alt="Classroom With Leaders" className="h-[100px] sm:h-[200px] md:h-[200px] w-auto object-cover flex-shrink-0 shadow-sm" />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 mt-24 mb-20">
        <div className="relative w-full border-[1.5px] border-yellow-400 bg-[#fffdf5] rounded-[2.5rem] overflow-hidden pt-12 sm:pt-16 shadow-sm">
          <div className="absolute top-6 w-full flex items-center justify-center pointer-events-none z-0">
            <MarqueeText text="STUDENT AMBASSADOR" repeat={6} speed={250} className="opacity-80" itemClassName="text-[70px] sm:text-[90px] md:text-[130px] font-extrabold uppercase text-yellow-100" gap="mr-8" />
          </div>
          <div className="relative z-10 w-full px-4 mb-4 flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 max-w-6xl w-full mb-4">
              <div className="h-[2px] flex-1 bg-gradient-to-l from-yellow-500/50 via-yellow-400/50 to-transparent" />
              <p className="text-xs sm:text-sm tracking-wide text-yellow-500 uppercase font-bold whitespace-nowrap text-center">STUDENT AMBASSADOR</p>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black italic tracking-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Become Our Brand Ambassadors</h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-2xl text-center">A brand building program that nurtures your inherent leadership and representational skills</p>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end pl-6 pr-6 md:pl-16 md:pr-0 mt-8 md:mt-12">
            <div className="flex flex-col items-start pb-12 md:pb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 italic mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Apply to Become An Ambassador</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">It's super easy to become a student ambassador for LetsUpgrade! Earn premium swag by representing LetsUpgrade on your college or university campus and encouraging fellow students to join various programs.</p>
              <p className="text-sm font-semibold text-gray-700 mb-4">Level up & Earn Exciting Swags</p>
              <div className="flex items-center gap-4 mb-8">
                <img src="https://letsupgrade.in/assets/student-ambassador/gold.png" alt="Gold Badge" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                <img src="https://letsupgrade.in/assets/student-ambassador/silver.png" alt="Silver Badge" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                <img src="https://letsupgrade.in/assets/student-ambassador/bronze.png" alt="Bronze Badge" className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
              </div>
              <button className="bg-[#1a1a1a] hover:bg-black text-white text-sm font-semibold px-10 py-3 rounded-full transition-colors duration-200 shadow-md">Join Now</button>
            </div>
            <div className="flex justify-end items-end h-full w-full">
              <img src="https://lucdn.letsupgrade.net/assets/Untitled_design_26_826cb145f3.webp" alt="Student Ambassadors Cards" className="w-full max-w-[500px] object-contain object-bottom md:translate-y-2 lg:translate-y-4" />
            </div>
          </div>
        </div>
      </div>
      
        <div className="relative w-full flex flex-col items-center justify-center ">
       
      <div className="absolute   w-full flex items-center justify-center pointer-events-none z-0">
        <MarqueeText text="We are loved by our students" repeat={6} speed={250} className="relative top-2 opacity-80" itemClassName="text-[70px] sm:text-[90px] md:text-[130px] font-extrabold uppercase text-yellow-100" gap="mr-8" />
      </div>

      <div className=" z-10 w-full   flex flex-col items-center">
        <div className="relative  flex items-center justify-center gap-4 max-w-6xl w-full ">
          <div className="h-[2px] flex-1 bg-gradient-to-l from-yellow-500/50 via-yellow-400/50 to-transparent" />
          <p className="text-xs sm:text-sm tracking-wide text-yellow-500 uppercase font-bold whitespace-nowrap text-center">Reviews</p>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-500/50 via-yellow-400/50 to-transparent" />
        </div>
        <h2 className="relative top-3 text-3xl sm:text-4xl md:text-5xl font-bold text-black italic tracking-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>What our students have to say</h2>
        <p className="relative top-8 text-xs sm:text-sm text-gray-500 max-w-2xl text-center">Our commitment to transform education speaks itself below</p>
      </div>
      </div>

    


      <div className="w-full max-w-[1400px] mx-auto mt-24 mb-20 px-4">
        <div className="flex justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm  px-5 py-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-bold text-gray-800">Rated 4.8/5</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm  px-5 py-2">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5" />
            <span className="text-sm font-bold text-gray-800">Rated 4.7/5</span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll-up { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
            @keyframes scroll-down { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
            .animate-scroll-up { animation: scroll-up 150s linear infinite; }
            .animate-scroll-down { animation: scroll-down 150s linear infinite; }
          `}} />

        <div className="relative w-full h-[800px] overflow-hidden rounded-3xl bg-[#fafafa]">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 h-full p-4">
            {[0, 1, 2, 3, 4].map((colIndex) => {
              const isScrollingUp = colIndex % 2 === 0;
              const colData = shuffleArray(reviews);
              return (
                <div key={colIndex} className="relative h-full overflow-hidden hidden sm:block first:block">
                  <div className={`flex flex-col gap-4 ${isScrollingUp ? 'animate-scroll-up' : 'animate-scroll-down'} hover:[animation-play-state:paused]`}>
                    {[...colData, ...colData].map((review, i) => (
                      <div key={i} className={`p-6 rounded-2xl shadow-sm border ${review.isPromo ? 'bg-[#e27300] border-[#c46400] text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
                        <p className={`text-xs sm:text-sm leading-relaxed ${review.isPromo ? 'font-medium' : ''}`}>{review.text}</p>
                        {review.isPromo ? (
                          <button className="mt-5 w-full bg-white text-[#e27300] font-bold text-xs py-2 rounded-full hover:bg-gray-100 transition">Refer Now</button>
                        ) : (
                          <div className="flex items-center gap-3 mt-5">
                            <img src={review.avatar} alt={review.author} className="w-6 h-6 rounded-full" />
                            <span className="text-xs font-bold">{review.author}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative w-full bg-[#fdfaf1] mt-32 mb-24 py-16 md:py-24 flex flex-col items-center">
        <div className="absolute -top-4 sm:-top-6 left-0 w-full h-8 sm:h-12 bg-repeat-x z-20 pointer-events-none" style={{ backgroundImage: "url('https://letsupgrade.in/assets/lu-news/paper-cut.png')", backgroundSize: "auto 100%", backgroundPosition: "bottom" }}></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 italic leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>LetsUpgrade In<br />News</h2>
            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">Discover how LetsUpgrade is making a difference in the industry</p>
          </div>
          <div className="w-full md:w-2/3 flex items-center justify-center md:justify-start gap-4 sm:gap-8">
            <div className="relative transform -rotate-3 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer">
              <img src="https://lucdn.letsupgrade.net/assets/News2_e58d299e14.webp" alt="Business Standard Feature" className="w-40 sm:w-56 md:w-72 object-contain drop-shadow-xl filter brightness-95" />
            </div>
            <div className="relative transform rotate-3 translate-y-4 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer">
              <img src="https://lucdn.letsupgrade.net/assets/News1_097b8ab54f.webp" alt="The Print Feature" className="w-40 sm:w-56 md:w-72 object-contain drop-shadow-xl filter brightness-95" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 mt-24 mb-20">
        <div className="relative border border-amber-200/50 bg-[#fffcf5] rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 md:p-14 overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute top-7 w-full flex items-center justify-center pointer-events-none z-0">
            <MarqueeText text="Multiple Community Memberships" repeat={8} speed={300} className="opacity-20" itemClassName="text-[50px] sm:text-[90px] md:text-[100px] font-behindTheNineties font-medium italic bg-gradient-to-b from-[#B3885C] to-[#CFB997] bg-clip-text text-transparent dark:from-[#B3885C] dark:to-[#CFB997]" gap="mr-8" />
          </div>
          <div className="relative z-10 w-full flex flex-col items-center mb-12">
            <div className="flex items-center justify-center gap-4 max-w-3xl w-full mb-4">
              <div className="h-[1px] flex-1 bg-gradient-to-l from-yellow-600/50 to-transparent" />
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-yellow-600 uppercase font-bold whitespace-nowrap text-center">OUR COMMUNITY</p>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-yellow-600/50 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-center font-behindTheNineties font-medium italic bg-gradient-to-b from-[#B3885C] to-[#CFB997] bg-clip-text text-transparent dark:from-[#B3885C] dark:to-[#CFB997]">Multiple Community Memberships</h2>
            <p className="relative top-6 text-xs sm:text-sm text-gray-500 max-w-2xl text-center">A tight-knit learning community of thousands of students, working professionals & industry leaders</p>
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {communityList.map((community) => (
              <div key={community.id} className="bg-white rounded-2xl w-[90px] h-[95px] sm:w-[110px] sm:h-[115px] p-2 flex flex-col items-center justify-center gap-2 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <img src={community.logoUrl} alt={community.name} className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 text-center font-medium leading-tight px-1 line-clamp-2">{community.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>


    </div>
  );
}

export default Home;