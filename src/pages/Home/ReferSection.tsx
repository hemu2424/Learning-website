import React from 'react'
import { MarqueeText } from '../../components/ui/home/MarqueeComponents'

// Define the shape of your props
interface ReferSectionProps {
  marqueeColor: string;
  fromColor?: string;
  viaColor?: string;
  textColor?: string;
}

// Pass the interface to the component
const ReferSection: React.FC<ReferSectionProps> = ({ marqueeColor,fromColor ,viaColor,textColor}) => {
  return (
    <div>
        <div className="relative w-full overflow-hidden py-10 text-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Dynamically pass the marqueeColor here */}
                <MarqueeText 
                  text="Refer and Earn Rewards" 
                  repeat={10} 
                  speed={200} 
                  className="opacity-40" 
                  itemClassName={`text-[60px] sm:text-[100px] md:text-[140px] font-extrabold uppercase ${marqueeColor}`} 
                  gap="mr-16" 
                />
              </div>
              <div className="relative z-10 w-full px-4 ">
                <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto">
                  <div className={`h-[2px] flex-1 bg-gradient-to-l ${fromColor} ${viaColor} to-transparent`} />
                  <p className={`px-3 text-xs sm:text-sm tracking-wide ${textColor} uppercase font-semibold whitespace-nowrap text-center`}>Refer & Earn</p>
                  <div className={`h-[2px] flex-1 bg-gradient-to-r ${fromColor} ${viaColor} to-transparent`} />
                </div>
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto px-4 mt-4">
                {/* Fixed font family usage with standard CSS classes if possible, or inline as you had */}
                <h2 className="relative top-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Refer & Earn</h2>
                <p className="relative top-9 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">Refer your friends to LetsUpgrade programs and earn T-shirts, stickers, notebooks, bags, tech gadgets, and more</p>
              </div>
            </div>
      
            <div className="relative w-full max-w-6xl mx-auto mt-20 px-4 mb-20">
              <div className="flex justify-center mb-12 relative z-20">
                <div className="flex space-x-4 sm:space-x-6">
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
    </div>
  )
}

export default ReferSection