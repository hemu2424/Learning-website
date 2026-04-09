
import { useEffect, useState } from 'react';
import rewards from '../assets/rewards/rewards1.avif';
import rewards2 from '../assets/rewards/rewards2.jpg';
import user1 from '../assets/rewards/user1.jpg'; 
import python from '../assets/rewards/python.png'; 
import mysql from '../assets/rewards/mysql.png'; 
import linkedin from '../assets/rewards/linkedin.png'; 
import javaScript from '../assets/rewards/javascript.png'; 
import github from '../assets/rewards/github.png'; 
import spin3 from '../assets/rewards/spin3.jpg'; 
import Prize from '../assets/rewards/prize.png';

const bannerImages = [
  { src: rewards, alt: 'Rewards Banner 1' },
  { src: rewards2, alt: 'Rewards Banner 2' },
];

const productSlides = [
  {
    src: 'https://lucdn.letsupgrade.net/assets/Tshirt_c91548fb45.png',
    alt: 'LetsUpgrade T-Shirt',
  },
  {
    src: 'https://lucdn.letsupgrade.net/assets/watch_16b3cac61a.png',
    alt: 'Smart Watch',
  },
  {
    src: 'https://lucdn.letsupgrade.net/assets/Air_Buds_e04579bc61a.png',
    alt: 'Wireless Earbuds',
  },
]; 

const cardGridItems = [
  { 
    title: 'ATM Simulation Workshop',
    image: python,
    link: 'https://example.com/atm-simulation',
  },
  {
    title: 'SQL HAVING Explained',
    image: mysql,
    link: 'https://example.com/sql-having',
  },
  {
    title: 'Placement Prep Bootcamp',
    image: "", 
    isDualLogo: true,
    link: 'https://example.com/placement-prep',
  },
  {
    title: 'JS Number Guessing Game',
    image: javaScript, 
    link: 'https://example.com/js-guessing-game',
  },
];

const rewardCards = [
  {
    name: 'Hanishka Suresh Anchan',
    text: 'WON CASH PRIZE',
    img: user1,
  },

    {
    name: 'Hanishka Suresh Anchan',
    text: 'WON CASH PRIZE',
    img: user1,
  }, 
    {
    name: 'Hanishka Suresh Anchan',
    text: 'WON CASH PRIZE',
    img: user1,
  }, 
   {
    name: 'Hanishka Suresh Anchan',
    text: 'WON CASH PRIZE',
    img: user1,
  }, 
    {
    name: 'Hanishka Suresh Anchan',
    text: 'WON CASH PRIZE',
    img: user1,
  }, 
  
];

const recentWinners = [
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', location: 'West Bengal' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80', location: 'Greater Noida' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80', location: 'Vita' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80', location: 'Aurangabad' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80', location: 'Nagpur' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80', location: 'Haryana' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', location: 'Bihar' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80', location: 'West Bengal' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80', location: 'Tamil Nadu' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80', location: 'Telangana' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', location: 'Mysore' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80', location: 'Chennai' },
  { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80', location: 'Kalambi' },
  { image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80', location: 'Bhalapur' },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80', location: 'Pune' },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80', location: 'Mumbai' },
];

const Rewards = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentRewardIndex, setCurrentRewardIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % productSlides.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentRewardIndex((prev) =>
        prev === rewardCards.length - 2 ? 0 : prev + 1
      );
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-16">
      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-8">

        {/* Existing Rewards hero */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F9E18A] via-[#F7CC3E] to-[#E2A91D] border border-[#F3D478] p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src="https://lucdn.letsupgrade.net/assets/LU_coin_1_6b21f3e154.png"
            alt="coin"
            className="pointer-events-none hidden lg:block absolute left-6 top-10 h-24 w-24 opacity-30"
          />
          <img
            src="https://lucdn.letsupgrade.net/assets/LU_coin_1_6b21f3e154.png"
            alt="coin"
            className="pointer-events-none hidden lg:block absolute right-6 top-24 h-28 w-28 opacity-30"
          />

          <div className="relative z-10 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif italic font-bold text-slate-950 leading-tight">
              LetsUpgrade Rewards
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              Learning has never been this rewarding
            </p>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute inset-x-6 bottom-12 h-24 rounded-full bg-slate-950/10" />
            <div className="absolute inset-x-16 bottom-6 h-16 rounded-full bg-slate-950/15" />

            <img
              src={productSlides[currentProduct].src}
              alt={productSlides[currentProduct].alt}
              className="relative max-h-52 object-contain transition-transform duration-1000 ease-out"
            />
          </div>
        </div>


        {/* New image slider  */}
        <div className="relative overflow-hidden rounded-5xl  ">
          <div
            className="flex  px-2 transition-transform duration-[2500ms] ease-out"
            style={{ transform: `translateX(-${bannerIndex * 100}%)` }}
          >
            {bannerImages.map((image) => (
              <div key={image.alt} className="w-full shrink-0 ">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-48 w-[90%]  object-cover sm:h-[430px] border border-slate-900  rounded-3xl shadow-lg" 
                />
               </div>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-4 flex justify-center ">
            {bannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBannerIndex(idx)}
                className={`h-3 w-3 rounded-full transition ${
                  idx === bannerIndex ? 'bg-slate-900' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div> 
        {/* Rewards Cards Slider */}  
        <div className="space-y-1">
          <p className="text-red-500"> When Referrals Pay Off </p>
          <p>iPhones & Cash Just for Referring</p>
        </div>
        <div className="relative overflow-hidden rounded-3xl py-1">
          <div
            className="flex gap-6 px-4 transition-transform duration-[3500ms] ease-out"
            style={{ transform: `translateX(-${currentRewardIndex * 50}%)` }}
          >
            {rewardCards.map((card, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ minWidth: '50%' }}
              >
                <div className="relative overflow-hidden rounded-[2rem] h-[420px] md:h-[480px] shadow-2xl mx-2  border border-slate-900 ">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                    <p className="font-semibold text-xl">{card.name}</p>
                    <p className="mt-1 text-sm text-yellow-400">{card.text}</p>
                  </div>
                </div>
              </div>
            ))} 
          </div> 
        </div>  
        <div className="space-y-1">
        <p> Refer & Win Big Rewards </p>
        <p className="text-red-500">Share program with your friends and unlock big rewards</p>  
        </div>  
        {/* <div className="rounded-[2rem] bg-[#F7EEE0] p-2 shadow-sm border border-red-300"> */}
  <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4 max-w-[3000px] mx-auto">
            {cardGridItems.map((item, idx) => (
              <div key={idx} className="rounded-[0.75rem] bg-[#F7EEE0] p-2 flex flex-col items-center text-center shadow-sm border border-red-300 min-h-[240px] min-w-[210px]">
               <div className="mb-4 flex flex-col items-center justify-center gap-2 h-[150px] w-full rounded-[0.75rem] border border-[#E6D7C8] bg-white shadow-sm">
                      {item.isDualLogo ? (
                        <div className="flex items-center justify-center">
                          <img
                            src={github}
                            className="h-10 w-10 object-contain"
                          />
                          <img
                            src={linkedin}
                            alt={item.title}
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                      ) : (
                        <img src={item.image}
                             alt={item.title}
                             className="h-10 w-10 object-contain" />
                      )}
                      <h3 className="text-xs font-semibold text-slate-900 text-center px-2">
                        {item.title}
                      </h3>
                </div>
               
                <button
                  type="button"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#7A4A11] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5b3810]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                  </svg>
                  Copy Link
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button type="button" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              View more
            </button>
          </div>

        {/* Spin & Win banner card */}
        <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-[#F5E6CC] to-[#EAD3A4]  shadow-md">
  <div className="flex flex-col gap-4 rounded-[1.25rem] bg-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h2 className="text-xl font-semibold text-slate-950">
        Spin & Win
      </h2>

      <p className="mt-2 text-xs text-slate-700">
        Spin and try your luck to get FREE vouchers & gifts
      </p>

      <button
        type="button"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
      >
        Spin Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative h-48 w-full overflow-hidden rounded-[1.5rem] sm:h-56 sm:w-[50%]">
  <img
    src={spin3}
    alt="Prize wheel"
    className="absolute -right-24 top-0 h-[130%] w-auto min-w-[380px] object-cover rounded-[1.5rem]"
  />
</div>
</div>
</div> 

  <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
    <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900">
      OUR RECENT WINNERS
    </h3>
    <div className="h-px flex-1 bg-slate-300" />
  </div>

  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-8">
    {recentWinners.map((winner, index) => (
      <div key={index} className="flex flex-col items-center gap-3">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-[#C79D3F] bg-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <img
            src={winner.image}
            alt={winner.location}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-1 w-20 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700">
          {winner.location}
        </p>
      </div>
    ))}
  </div>

  <div className="mt-8 flex items-center gap-4 text-[14px] uppercase tracking-[0.2em] text-red-600">
  <div className="h-px flex-1 bg-red-300" />
  
  <span className="font-semibold text-red-600">
   TRENDING AMONG LETSUPGRADE
  </span>
  
  <div className="h-px flex-1 bg-red-300" />
</div>


{/* Students Ambassador banner card */}
      <div className="overflow-hidden rounded-xl bg-gradient-to-r from-[#E9D8B4] to-[#DCC38C] px-5 py-5 shadow-sm">
  <div className="flex items-center justify-between min-h-[120px]">

    {/* LEFT CONTENT */}
    <div className="max-w-[320px]">
      <h2
        className="text-[19px] font-semibold italic text-[#D69A09] leading-tight"
        style={{ fontFamily: "Georgia, Times New Roman, serif" }}
      >
        Students Ambassador Program
      </h2>

      <p className="mt-2 text-[13px] text-slate-800 leading-[1.4]">
        Join India's most rewarding program <br />
        with prizes worth ₹1,00,000
      </p>

      <button className="mt-4 rounded-full bg-black px-5 py-2 text-[13px] font-medium text-white">
        Apply Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex h-[120px] w-[40%] items-end justify-end overflow-hidden">
      <img
        src={Prize}
        alt="Students Ambassador rewards"
        className="h-[135%] object-contain translate-x-4 translate-y-2"
      />
    </div> 
    </div>
</div> 

<div className="mt-8 flex items-center gap-4 text-[14px] uppercase tracking-[0.2em] text-red-600">
  <div className="h-px flex-1 bg-red-300" />
  
  <span className="font-semibold text-red-600">
    YOUR REWARDS
  </span>
  <div className="h-px flex-1 bg-red-300" />
</div>  
        {/* LU Coins dashboard cards */}
        <div className="space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex h-[92px] flex-1 items-center justify-between overflow-hidden rounded-2xl border border-[#C9A89A] bg-[#EFE7E2] px-5 shadow-sm">
              <div>
                <h3
                  className="text-[15px] font-semibold italic text-[#5F3420] leading-none"
                  style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                >
                  LU Coins
                </h3>
                <img
                  src="https://lucdn.letsupgrade.net/assets/LU_coin_1_6b21f3e154.png"
                  alt="coins"
                  className="pointer-events-none absolute bottom-0 left-0 h-12 w-auto opacity-75"
                />
              </div>

              <div className="z-10 flex flex-col items-end gap-2">
                <p className="text-[10px] text-[#916E62]">Total coins owned</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A89A] bg-[#D8CDC8] px-4 py-1.5">
                  <img
                    src="https://lucdn.letsupgrade.net/assets/LU_coin_1_6b21f3e154.png"
                    alt="coin"
                    className="h-4 w-4 object-contain"
                  />
                  <span className="text-[15px] font-medium text-[#8A5A22]">150</span>
                </div>
              </div>
            </div>

            <div className="relative h-[92px] overflow-hidden rounded-2xl border border-[#C9A89A] bg-[#EFE7E2] px-5 shadow-sm lg:w-[360px]">
              <div className="pointer-events-none absolute -right-2 -top-4 text-[90px] font-light text-[#E5D9D4]">☆</div>
              <p className="absolute bottom-3 right-5 text-[10px] text-[#916E62]">
                view rewards &gt;
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-1 pt-2">
            {Array.from({ length: 13 }).map((_, idx) => (
              <span key={idx} className="h-5 w-5 rounded-full bg-[#BCACA6]" />
            ))}
          </div>
        </div>

    </div>
    </div>
  );
};

export default Rewards;