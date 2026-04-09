import React, { useEffect, useRef, useState } from 'react';
import image1 from  "../assets/rewards/image1.jpg";  
import image2 from  "../assets/rewards/image2.jpg";  
import image3 from  "../assets/rewards/image3.jpg";  
import image4 from  "../assets/rewards/image4.jpg";   


type SlideCard = {
  heading: string;
  highlight: string;
  label: string;
  buttonLabel?: string;
  thumbnails: Array<{ src: string; label: string }>;
};

const slides: SlideCard[] = [
  {
    heading: 'Refer India’s Best B.Tech CSE & earn ',
    highlight: ' ₹50K / iPhone 15',
    label: 'Slide 1',
    thumbnails: [
      {
        src: image1,
        label: 'Lounge area 1',
      }, 

      {
        src: image2,
        label: 'Classroom 1',
      },
      {
        src: image3,
        label: 'Reception',
      },
      {
        src: image4,
        label: 'Classroom 2',
      },
    ],
  },
  {
    heading: 'Refer India’s Top B-School & earn',
    highlight: '₹25,000/-',
    label: 'Slide 2',
    buttonLabel: 'Refer Now',
    thumbnails: [
      {
        src: 'https://lucdn.letsupgrade.net/assets/Gift_card_e00a348402.webp',
        label: 'Classroom 1',
      },
      {
        src: 'https://lucdn.letsupgrade.net/assets/Tshirt_c91548fb45.png',
        label: 'Classroom 2',
      },
      {
        src: 'https://lucdn.letsupgrade.net/assets/watch_16b3cac61a.png',
        label: 'Lecture Hall',
      },
      {
        src: 'https://lucdn.letsupgrade.net/assets/Air_Buds_e04579bc9d.png',
        label: 'Reception',
      },
    ],
  },
];

const productSlides = [
  {
    src: 'https://lucdn.letsupgrade.net/assets/Gift_card_e00a348402.webp',
    alt: 'Amazon Gift Card',
  },
  {
    src: 'https://lucdn.letsupgrade.net/assets/Tshirt_c91548fb45.png',
    alt: 'LetsUpgrade T-Shirt',
  },
  {
    src: 'https://lucdn.letsupgrade.net/assets/watch_16b3cac61a.png',
    alt: 'Smart Watch',
  },
  {
    src: 'https://lucdn.letsupgrade.net/assets/Air_Buds_e04579bc9d.png',
    alt: 'Wireless Earbuds',
  },
];

const Rewards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [slideDistance, setSlideDistance] = useState(0);

  useEffect(() => {
    const resize = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setSlideDistance(width + 24);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setCurrentProduct((prev) => (prev + 1) % productSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (sliderRef.current && slideDistance > 0) {
      sliderRef.current.scrollTo({
        left: currentSlide * slideDistance,
        behavior: 'smooth',
      });
    }
  }, [currentSlide, slideDistance]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-16">
      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F9E18A] via-[#F7CC3E] to-[#E2A91D] border border-[#F3D478] p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Floating coin decorations */}
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

          {/* Left text block */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif italic font-bold text-slate-950 leading-tight">
              LetsUpgrade Rewards
            </h1>
            <p className="mt-4 text-lg text-slate-800">
              Learning has never been this rewarding
            </p>
          </div>

          {/* Right rotating product block */}
          <div className="relative z-10 w-full max-w-md">
                <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-white/70 blur-3xl" />
                <div className="absolute inset-x-6 bottom-12 h-24 rounded-full bg-slate-950/10" />
                <div className="absolute inset-x-16 bottom-6 h-16 rounded-full bg-slate-950/15" />

                <img
                  src={productSlides[currentProduct].src}
                  alt={productSlides[currentProduct].alt}
                  className="relative max-h-52 object-contain transition-transform duration-700 ease-out"
                />
          </div>
        </div>

        {/* Slider cards section */}
        <section
        //   className="relative overflow-hidden rounded-[2rem] bg-slate-100 py-14"
          style={{
            backgroundImage:
              'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        >
          <div className="absolute inset-0 bg-white/70" />
          <div className="relative mx-auto max-w-7xl px-4">
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.label}
                  ref={index === 0 ? cardRef : null}
                 className="flex-none w-[95vw] sm:w-[90vw] lg:w-[600px] h-[350px] rounded-[1rem] bg-white p-4 shadow-lg ring-1 ring-slate-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white grid place-items-center text-sm font-semibold">
                        ITM
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-600">
                          ITM Skills University
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                        ★
                      </div>
                      <span>
                        In collaboration with <span className="font-semibold text-slate-900">LetsUpgrade</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                      {slide.heading}{' '}
                      <span className="text-pink-600  sm:text-3xl">{slide.highlight}</span>
                    </h2>
                  </div>

                  {/* <div className="mt-2 rounded-[2rem] bg-slate-50 px-4 py-4"> */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                      {['Generate url', 'Share url', 'Earn money'].map((step, idx) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-sm font-semibold text-white">
                            {idx + 1}
                          </div>
                          <span className="text-sm font-medium text-slate-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  {/* </div> */}

                  {slide.buttonLabel && (
                    <div className="mt-2 flex justify-center">
                      <button className="rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        {slide.buttonLabel}
                      </button>
                    </div>
                  )}

                  <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {slide.thumbnails.map((thumb) => (
                      <div key={thumb.label} className="overflow-hidden rounded bg-slate-100">
                       <img
                         src={thumb.src}
                         alt={thumb.label} 
                         width={100}
                         height={80}
                         className="w-full h-[100px] object-cover transition duration-300 hover:scale-105" 
                         />  
                        <div className="bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700">
                          {thumb.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rewards;