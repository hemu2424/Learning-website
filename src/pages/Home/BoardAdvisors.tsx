import React from 'react'
import { AdvisorMarquee, MarqueeText } from '../../components/ui/home/MarqueeComponents'
import { advisors } from './homeData'

interface BoardAdvisorsProps {
  marqueeColor?: string;
  fromColor?: string;
  viaColor?: string;
  textColor?: string;
}

const BoardAdvisors: React.FC<BoardAdvisorsProps> = ({
  marqueeColor,
  fromColor,
  viaColor,
  textColor
}) => {
  return (
    <div>
       <div className="w-full overflow-hidden py-10  flex flex-col items-center">
              <div className="relative w-full flex flex-col items-center justify-center ">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <MarqueeText text="BOARD OF ADVISORS" repeat={8} speed={250} className="opacity-[0.1]" itemClassName={`text-[55px] sm:text-[80px] md:text-[110px] font-extrabold uppercase ${marqueeColor}`} gap="mr-8" />
                </div>
                <div className="relative z-10 w-full px-4 ">
                  <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto">
                   <div className={`h-[2px] flex-1 bg-gradient-to-l ${fromColor} ${viaColor} to-transparent`} />
                    <p className={`text-[15px] tracking-[0.2em] ${textColor} uppercase font-bold whitespace-nowrap text-center`}>BOARD OF ADVISORS</p>
                  <div className={`h-[2px] flex-1 bg-gradient-to-r ${fromColor} ${viaColor} to-transparent`} />
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
    </div>
  )
}

export default BoardAdvisors
