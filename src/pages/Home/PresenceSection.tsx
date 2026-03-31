import { ImageMarquee, MarqueeText } from "../../components/ui/home/MarqueeComponents";

type ImageItem = {
  src: string;
  name: string;
};

interface PresenceSectionProps {
  headingText?: string;
  marqueeText?: string;
  subHeading?: string;
  description?: string;

  marqueeColor?: string;
  gradientFrom?: string;
  gradientVia?: string;
  textColor?: string;

  logos: ImageItem[]; // ✅ FIXED
}

const PresenceSection: React.FC<PresenceSectionProps> = ({
  headingText = "our presence spans",
  marqueeText = "LEARN BUILD SHARE GROW",
  subHeading = "Students from top colleges upskill with LetsUpgrade",
  description = "Students enroll in universities for degrees, but they turn to LetsUpgrade for skills",

  marqueeColor = "text-yellow-200",
  gradientFrom = "from-yellow-500/50",
  gradientVia = "via-yellow-400/50",
  textColor = "text-amber-400",

  logos
}) => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* TOP HEADING */}
      <div className="mt-4 w-full flex flex-col items-center justify-center">
        <div className="relative z-10 flex w-full items-center justify-center gap-2 max-w-6xl">

          <div className={`h-[3px] flex-1 bg-gradient-to-l ${gradientFrom} ${gradientVia} to-transparent`} />

          <div className={`px-3 text-xs md:text-xl font-semibold tracking-wide uppercase whitespace-nowrap text-center ${textColor}`}>
            {headingText}
          </div>

          <div className={`h-[3px] flex-1 bg-gradient-to-r ${gradientFrom} ${gradientVia} to-transparent`} />

        </div>

        {/* MARQUEE TEXT */}
        <div className="relative w-full overflow-hidden leading-none -mt-2 sm:-mt-4">
          <div className="w-full">
            <MarqueeText
              text={marqueeText}
              repeat={20}
              speed={300}
              className="opacity-60"
              itemClassName={`text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-none ${marqueeColor}`}
              gap="mr-16"
            />
          </div>

          {/* CENTER TEXT */}
          <h2
            className="absolute top-[55px] left-1/2 -translate-x-1/2 -translate-y-1/2 font-behindTheNineties text-xl md:text-3xl font-medium text-neutral-900 capitalize italic text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {subHeading}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-0 text-center text-base md:text-lg max-w-3xl text-gray-700 relative z-10">
          {description}
        </p>
      </div>

      {/* LOGO MARQUEE */}
      <div className="w-full">
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-6">
          <div className="flex flex-col gap-6">
            <ImageMarquee items={logos} speed={30} />
            <ImageMarquee items={logos} speed={40} reverse />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PresenceSection