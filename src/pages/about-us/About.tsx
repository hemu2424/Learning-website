import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import aboutUsImage from '../../assets/aboutus/sai-about.png'

const visionPoints = [
  'To create a space where students can acquire employable skills with fun, engagement, and a strong connection to real-world applications, ensuring high success rates.',
  'To make LetsUpgrade the go-to platform for all higher education students seeking real-world skills, building a community of 10 million by 2027.',
]

const missionPoints = [
  'Provide a wide range of employable tech and non-tech skill programs on LetsUpgrade, taught by industry experts.',
  'Continuously iterate on curriculum for relevance and impact.',
  'Emphasize hands-on learning, real-life examples, and project-based activities.',
  'Think outside the box, always keeping students at the center.',
]

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="mx-auto w-full max-w-5xl rounded-[28px] bg-white px-4 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          aria-label="Go back"
        >
          <FaArrowLeft className="text-sm" />
        </button>

        <h1
          className="text-3xl font-bold italic text-slate-900 sm:text-4xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Us
        </h1>
      </div>

      <div className="space-y-8 sm:space-y-10">
        <section className="overflow-hidden rounded-[30px] bg-[#f5f3ef] p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-[28px] bg-white">
            <div className="absolute inset-0 opacity-70">
              <div className="grid h-full grid-cols-6 gap-3 p-5 sm:grid-cols-8">
                {Array.from({ length: 32 }).map((_, index) => (
                  <div key={index} className="rounded-xl bg-slate-100/90" />
                ))}
              </div>
            </div>

            <div className="relative mx-auto max-w-3xl pt-4">
              <div className="overflow-hidden rounded-t-[220px] border border-slate-200 bg-[#ece8e1]">
                <img
                  src={aboutUsImage}
                  alt="LetsUpgrade founder"
                  className="h-[240px] w-full object-cover object-top grayscale sm:h-[320px] lg:h-[380px]"
                />
              </div>
            </div>
          </div>
        </section>

        <InfoSection title="Our Collective Vision" points={visionPoints} />
        <InfoSection title="Mission" points={missionPoints} />

        <section className="rounded-[28px] border border-slate-200 bg-white px-6 py-7 shadow-[0_14px_30px_rgba(15,23,42,0.06)] sm:px-8">
          <h2
            className="text-3xl font-bold italic text-slate-900 sm:text-[2.2rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ambition
          </h2>

          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            To become one of top 10 global EdTech platform where students can upskill
            and learn essential 21st-century skills by 2030.
          </p>
        </section>

        <section className="pb-2 text-center">
          <SectionDivider />

          <h2
            className="mt-4 text-3xl font-bold italic text-slate-900 sm:text-[2.2rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join our Team
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Be part of our rowdies gang, shaping the future of online learning. Check
            out our current openings below.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
          >
            View Opportunities
          </button>
        </section>
      </div>
    </div>
  )
}

type InfoSectionProps = {
  title: string
  points: string[]
}

const InfoSection = ({ title, points }: InfoSectionProps) => {
  return (
    <section className="text-center">
      <SectionDivider />

      <h2
        className="mt-4 text-3xl font-bold italic text-slate-900 sm:text-[2.2rem]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>

      <ol className="mt-5 space-y-3 text-left text-base leading-8 text-slate-600 sm:text-lg">
        {points.map((point, index) => (
          <li key={point} className="flex gap-3">
            <span className="font-semibold text-slate-900">{index + 1}.</span>
            <span>{point}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

const SectionDivider = () => {
  return <div className="mx-auto h-px w-36 bg-slate-300" />
}

export default About
