import React, { useState } from 'react';

// --- Types for Marquee ---
type ReviewType = {
  type: 'review';
  id: string;
  name: string;
  text: string;
  avatarColor: string;
};

type CtaType = {
  type: 'cta';
  id: string;
  title: string;
  buttonText: string;
};

type MarqueeItem = ReviewType | CtaType;

// --- Fake Data for Marquee ---
const col1Data: MarqueeItem[] = [
  {
    type: 'cta',
    id: 'cta-1',
    title: 'Share your referral link now and win T-shirts, notebooks, bags, tech gadgets, and more! Watch your points grow and unlock exciting rewards.',
    buttonText: 'Refer Now',
  },
  {
    type: 'review',
    id: 'rev-1',
    name: 'Shashank R A',
    text: "I had a great experience as a Student Ambassador. The team provided excellent support and opportunities for personal growth. I would suggest improving the dashboard for providing more hands-on tracking.",
    avatarColor: 'bg-purple-400',
  },
  {
    type: 'review',
    id: 'rev-2',
    name: 'Priya Sharma',
    text: "The LetsUpgrade Student Ambassador program was a major stepping stone for my career. Organizing bootcamps on my campus gave me the leadership skills I needed to stand out in interviews.",
    avatarColor: 'bg-pink-400',
  },
  {
    type: 'review',
    id: 'rev-3',
    name: 'Rahul Verma',
    text: "Amazing networking opportunities! I connected with so many industry professionals and other ambitious students across India. The swag kits were just the cherry on top.",
    avatarColor: 'bg-blue-400',
  }
];

const col2Data: MarqueeItem[] = [
  {
    type: 'review',
    id: 'rev-4',
    name: 'Joseph Louis Immanuel',
    text: "As I'm inviting the students to enroll, it's been a great learning curve where I'm trying my level best. It taught me patience and how to effectively communicate the value of technical bootcamps.",
    avatarColor: 'bg-green-400',
  },
  {
    type: 'cta',
    id: 'cta-2',
    title: 'Share your referral link now and win T-shirts, notebooks, bags, tech gadgets, and more! Watch your points grow and unlock exciting rewards.',
    buttonText: 'Refer Now',
  },
  {
    type: 'review',
    id: 'rev-5',
    name: 'Ananya Gupta',
    text: "Getting the Letter of Recommendation from the CEO was exactly what I needed for my Master's application. The program requires dedication, but the rewards are absolutely worth it.",
    avatarColor: 'bg-yellow-400',
  },
  {
    type: 'review',
    id: 'rev-6',
    name: 'Vikram Singh',
    text: "I loved organizing the hackathon at my college with LetsUpgrade's support. It was my first time managing an event of that scale, and the guidance I received was phenomenal.",
    avatarColor: 'bg-indigo-400',
  }
];

const col3Data: MarqueeItem[] = [
  {
    type: 'review',
    id: 'rev-7',
    name: 'Arnav Gupta',
    text: "Overall Experience with the ambassador program at LetsUpgrade was phenomenal. I had the chance to develop my leadership skills while promoting top-notch programs.",
    avatarColor: 'bg-purple-500',
  },
  {
    type: 'review',
    id: 'rev-8',
    name: 'Sneha Reddy',
    text: "The VIP access to tech events was my favorite part. I got to attend seminars that I otherwise wouldn't have known about. Highly recommend this to any tech enthusiast!",
    avatarColor: 'bg-teal-400',
  },
  {
    type: 'cta',
    id: 'cta-3',
    title: 'Share your referral link now and win T-shirts, notebooks, bags, tech gadgets, and more! Watch your points grow and unlock exciting rewards.',
    buttonText: 'Refer Now',
  },
  {
    type: 'review',
    id: 'rev-9',
    name: 'Mohammed Ali',
    text: "Building a community of coders on my campus was incredibly rewarding. The support from the LetsUpgrade team made the whole process smooth and enjoyable.",
    avatarColor: 'bg-orange-400',
  }
];

// --- Reusable Helper Components for Marquee (Kept outside main component to prevent re-renders) ---
const MarqueeCard = ({ item }: { item: MarqueeItem }) => {
  if (item.type === 'cta') {
    return (
      <div className="bg-[#e67e22] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6 w-full shrink-0">
        <p className="text-sm md:text-base font-medium leading-relaxed">
          {item.title}
        </p>
        <button className="bg-gray-50 text-gray-900 w-full py-3 rounded-full font-semibold hover:bg-white transition-colors">
          {item.buttonText}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col gap-4 w-full shrink-0">
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {item.text}
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4">
        <div className={`w-8 h-8 rounded-full ${item.avatarColor} shadow-inner`}></div>
        <span className="font-semibold text-sm text-gray-800">{item.name}</span>
      </div>
    </div>
  );
};

interface MarqueeColumnProps {
  items: MarqueeItem[];
  direction?: 'up' | 'down';
  speed?: number; 
}

const MarqueeColumn: React.FC<MarqueeColumnProps> = ({ items, direction = 'up', speed = 30 }) => {
  const displayItems = [...items, ...items];

  return (
    <div className="relative h-[600px] w-full overflow-hidden group">
      <div
        className="flex flex-col gap-6 w-full group-hover:[animation-play-state:paused]"
        style={{ animation: `${direction === 'up' ? 'scrollUp' : 'scrollDown'} ${speed}s linear infinite` }}
      >
        {displayItems.map((item, idx) => (
          <MarqueeCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};

// --- Main Student Ambassador Component ---
const StudentAmbassador: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Who can apply?",
    "Can students from any university apply?",
    "How long is the SAP Program?",
    "What's the time commitment?",
    "Can freshmen apply to be student ambassadors?",
    "Do we have to pay anything for this Student Ambassador program?",
    "What ID can I use if I don't have a college ID for the Student Ambassador Program?",
    "Will I receive a joining letter after joining the Student Ambassador Program?",
    "When does the new Student Ambassador Program batch start?",
    "What are the responsibilities of a student ambassador?",
    "Are there regular sessions in the program?",
    "How much time do I need to commit to the program?",
    "How can I track my milestones?",
    "What are the criteria to receive swag kits?",
    "Will everyone receive swag kits?",
    "How can I win rewards and coupons?",
    "Will I receive a certificate as an ambassador?",
    "What are the benefits of being a student ambassador?",
    "How does being a student ambassador contribute to personal and professional development?"
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Dynamic Keyframes for the Marquee */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-[#fffbf0] to-[#fcebb5] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <div>
            <p className="text-gray-600 font-semibold tracking-wide">LetsUpgrade</p>
            <h1 className="text-4xl md:text-5xl font-serif italic text-[#eab308] mt-2">
              Students Ambassador Program
            </h1>
          </div>
          <button className="bg-[#111827] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Apply Now
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src="https://lucdn.letsupgrade.net/assets/Prize_d5b562b3eb.png" 
            alt="Prizes" 
            className="max-w-full h-auto drop-shadow-xl"
          />
        </div>
      </section>

      {/* 2. Cohort Section */}
      <section className="py-12 flex flex-col items-center text-center space-y-6 px-6">
        <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          Ignite Your Leadership Journey
        </p>
        <h2 className="text-2xl font-bold text-[#8b4513]">JOIN OUR NEXT COHORT</h2>
        <p className="text-xl font-medium">1st April 2026</p>
        <button className="bg-[#111827] text-white px-12 py-3 rounded-full font-semibold w-full md:w-auto hover:bg-gray-800 transition">
          Apply Now
        </button>
      </section>

      {/* 3. Badges Section */}
      <section className="py-12 flex flex-col items-center space-y-8 px-6">
        <h3 className="text-2xl font-serif italic font-bold">Exciting Prizes Await You!</h3>
        <div className="flex flex-wrap justify-center gap-6 items-end">
          <img src="https://lucdn.letsupgrade.net/assets/silver_da7e70ad0d.png" alt="Silver Badge" className="w-32" />
          <img src="https://lucdn.letsupgrade.net/assets/gold_f8f1f2d9a3.png" alt="Gold Badge" className="w-40" />
          <img src="https://lucdn.letsupgrade.net/assets/bronze_8117a907c5.png" alt="Bronze Badge" className="w-32" />
        </div>
      </section>

      {/* 4. Transform Campus Section */}
      <section className="py-12 flex flex-col items-center text-center px-6 max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-serif italic font-bold">Transform Your Campus, Elevate Your Career</h3>
        <p className="text-gray-500">
          Are you ready to make a lasting impact on your campus while supercharging your professional growth? 
          The LetsUpgrade Student Ambassador Program is your launchpad to success!
        </p>
      </section>

      {/* 5. Prizes Carousel Section */}
      <section className="py-12 flex flex-col items-center space-y-10 px-6">
        <h3 className="text-2xl font-serif italic font-bold">Exciting Prizes Await You!</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "https://lucdn.letsupgrade.net/assets/Ipad_f61c1432d7.png",
            "https://lucdn.letsupgrade.net/assets/Gaming_Chair_cd75b80def.png",
            "https://lucdn.letsupgrade.net/assets/Smart_Watch_d0a093090a.png",
            "https://lucdn.letsupgrade.net/assets/Air_Buds_e04579bc9d.png",
            "https://lucdn.letsupgrade.net/assets/Tshirt_Front_a50078f73b.png"
          ].map((src, idx) => (
            <div key={idx} className="bg-[#fff9e6] rounded-full p-6 w-40 h-40 flex items-center justify-center shadow-sm">
              <img src={src} alt="Prize" className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>
        <button className="bg-[#fef08a] text-yellow-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition shadow-sm">
          Join Program
        </button>
      </section>

      {/* 6. Step-by-Step Guide */}
      <section className="py-12 max-w-3xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif italic font-bold">How to Become a LetsUpgrade Ambassador</h3>
          <p className="text-gray-500">Becoming a LetsUpgrade Ambassador: A Step-by-Step Guide</p>
        </div>
        <div className="space-y-6">
          {[
            { icon: "https://lucdn.letsupgrade.net/assets/memo_8c8b739150.png", title: "Apply", desc: "Submit your application with accurate details before the deadline" },
            { icon: "https://lucdn.letsupgrade.net/assets/hourglass_2269db04d3.png", title: "Wait", desc: "Our team reviews applications during the shortlisting period" },
            { icon: "https://lucdn.letsupgrade.net/assets/mailbox_fb0fd21775.png", title: "Check", desc: "Keep an eye on your email for the selection offer letter" },
            { icon: "https://lucdn.letsupgrade.net/assets/party_31829a3348.png", title: "Join", desc: "Begin your journey as a Student Ambassador and start earning!" }
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
              <div>
                <h4 className="font-bold text-gray-800">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#111827] text-white px-12 py-3 rounded-full font-semibold w-full hover:bg-gray-800 transition">
          Apply Now
        </button>
      </section>

      {/* 7. Key Dates */}
      <section className="py-12 px-6 flex flex-col items-center space-y-6">
        <h3 className="text-2xl font-serif italic font-bold w-full max-w-4xl text-left">Key Dates To Remember</h3>
        <img 
          src="https://lucdn.letsupgrade.net/assets/PNG_key_dates_to_remember_927bcfea7d.png" 
          alt="Program Schedule Calendar" 
          className="max-w-2xl w-full rounded-xl shadow-lg border border-gray-100"
        />
      </section>

      {/* 8. Mission & Benefits */}
      <section className="py-16 bg-[#fcfcfc] px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Mission */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif italic font-bold text-center">Your Mission As A LetsUpgrade Ambassador</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "https://lucdn.letsupgrade.net/assets/megaphone_a516eeed91.png", text: "Spread the word about LetsUpgrade Bootcamps on your campus" },
                { icon: "https://lucdn.letsupgrade.net/assets/hammer_and_wretch_9a4717985a.png", text: "Organize impactful workshops and seminars with LetsUpgrade support" },
                { icon: "https://lucdn.letsupgrade.net/assets/money_with_wings_134bff6e52.png", text: "Share exciting rewards and courses to your peers" }
              ].map((mission, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center gap-4">
                  <div className="bg-red-50 p-4 rounded-full">
                    <img src={mission.icon} alt="icon" className="w-8 h-8" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{mission.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif italic font-bold w-full text-left">Benefits That Last A Lifetime</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "https://lucdn.letsupgrade.net/assets/ticket_51193ebd39.png", text: "VIP access to top tech events across India" },
                { icon: "https://lucdn.letsupgrade.net/assets/trophy_ba7584c0cf.png", text: "Participate in exclusive online workshops and win prizes" },
                { icon: "https://lucdn.letsupgrade.net/assets/rocket_c889c4ae48.png", text: "Enhance your leadership, tech, and communication skills" },
                { icon: "https://lucdn.letsupgrade.net/assets/scroll_49337f4cbe.png", text: "Receive a Certificate of Excellence and Appreciation Letter" },
                { icon: "https://lucdn.letsupgrade.net/assets/tie_39c9c04ac7.png", text: "Earn a Letter of Recommendation from LetsUpgrade's CEO" },
                { icon: "https://lucdn.letsupgrade.net/assets/medal_eafcafb525.png", text: "Get certificates recognized by ITM Group of Institutions and LetsUpgrade" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4">
                  <img src={benefit.icon} alt="icon" className="w-10 h-10 object-contain" />
                  <p className="text-gray-700 font-medium text-sm mt-2">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Past Ambassadors Marquee */}
      <section className="py-16 bg-[#fafafa] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-3xl font-serif italic font-bold text-center text-gray-900">
            Hear From Our Past Ambassadors
          </h3>

          <div className="relative">
            {/* Gradient Overlays for smooth fade-in/out */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MarqueeColumn items={col1Data} direction="up" speed={35} />
              <MarqueeColumn items={col2Data} direction="down" speed={40} />
              <MarqueeColumn items={col3Data} direction="up" speed={30} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-6 space-y-8">
        <h3 className="text-2xl font-serif italic font-bold text-center">FAQs</h3>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition"
              >
                <span className="text-sm font-medium text-gray-700">{faq}</span>
                <span className="text-gray-400">{openFaq === idx ? '▲' : '▼'}</span>
              </button>
              {openFaq === idx && (
                <div className="px-6 py-4 bg-white text-gray-600 text-sm border-t border-gray-200">
                  Detailed answer for "{faq}" would go here.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. Footer CTA */}
      <section className="pt-12 flex flex-col items-center space-y-6 overflow-hidden">
        <p className="text-gray-500 text-sm">Ready to Lead the Change?</p>
        <button className="bg-[#111827] text-white px-12 py-3 rounded-full font-semibold w-[90%] max-w-md hover:bg-gray-800 transition">
          Apply Now
        </button>
        <p className="text-xs text-gray-400 max-w-lg text-center px-4">
          Join the LetsUpgrade Student Ambassador Program and kickstart your journey to becoming a tech leader of tomorrow!
        </p>
        <div className="w-full mt-6">
          <img 
            src="https://lucdn.letsupgrade.net/assets/sap_lower_base_image_cbea7501cd.png" 
            alt="Students" 
            className="w-full object-cover object-top h-64 md:h-96"
          />
        </div>
      </section>
    </div>
  );
};

export default StudentAmbassador;