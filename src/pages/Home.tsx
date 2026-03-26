
import React from 'react'
import Footer from '../components/layout/Footer/Footer'
import Community from '../components/sections/Community/Community'

const MovingText = () => {
  return (

    <div>
      <Community/>
      <Footer/>
    </div>
  );
};
const Home = () => {
  

    return (
    <div className="relative min-h-screen bg-[#f5f5f5] flex items-center justify-center">

      {/* Background Moving Text */}
      <MovingText />

      {/* Main Content */}
     <div className="z-10 w-full max-w-6xl mx-auto text-center">

  {/* HERO TEXT */}
  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
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
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* CARD 1 */}
    <div className="bg-black text-white rounded-2xl p-6 h-56 flex flex-col justify-between hover:scale-105 transition">
      <h3 className="font-semibold text-lg">
        Explore Free Certificate Program
      </h3>
      <button className="border px-4 py-1 rounded-full text-sm w-fit">
        Get Certified
      </button>
    </div>

    {/* CARD 2 */}
    <div className="bg-black text-white rounded-2xl p-6 h-56 flex flex-col justify-between hover:scale-105 transition">
      <h3 className="font-semibold text-lg">
        Working Professional Courses
      </h3>
      <button className="border px-4 py-1 rounded-full text-sm w-fit">
        Get Started
      </button>
    </div>

    {/* RIGHT SIDE STACK */}
    <div className="flex flex-col gap-6">

      <div className="bg-black text-white rounded-2xl p-4 h-24 flex justify-between items-center hover:scale-105 transition">
        <span className="text-sm">India's Best B.Tech CSE</span>
        <button className="border px-3 py-1 rounded text-xs">
          Apply Now
        </button>
      </div>

      <div className="bg-black text-white rounded-2xl p-4 h-24 flex justify-between items-center hover:scale-105 transition">
        <span className="text-sm">AI Core Skill</span>
        <button className="border px-3 py-1 rounded text-xs">
          Enrol Program
        </button>
      </div>

    </div>

  </div>

  {/* CERTIFICATE SECTION */}
  <div className="mt-16 bg-black text-white rounded-2xl p-8">

    <p className="text-yellow-500 text-xs font-semibold">
      CERTIFICATE PROGRAMS
    </p>

    <h2 className="text-2xl font-bold mt-2">
      All From Basic To Advance
    </h2>

    <p className="text-gray-400 text-sm mt-2">
      Earn certificates from LetsUpgrade, Google Developer Groups, NSDC, and more
    </p>

    {/* PROGRAM CARDS */}
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

      {["Digital Marketing", "Prompt Engineering", "Java", "Git & GitHub", "C++"].map((item, i) => (
        <div key={i} className="bg-white text-black rounded-xl p-4 text-center">
          <h4 className="text-sm font-semibold">{item} Bootcamp</h4>
          <button className="mt-3 bg-black text-white text-xs px-3 py-1 rounded">
            Enrol Now
          </button>
        </div>
      ))}

    </div>

    <p className="mt-6 text-sm text-gray-400 cursor-pointer">
      View all certificate programs →
    </p>

  </div>

</div>

    </div>
  );

  
}

export default Home
