import { useNavigate } from 'react-router-dom';
import { allCourses } from '../types/dashboardData';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 px-6 py-8 text-white shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
          Welcome back
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Continue your learning journey
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
          Track your active programs, discover new courses, and keep your learning
          streak alive from one dashboard.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate('/explore-programs')}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
          >
            Explore Programs
          </button>
          <button
            type="button"
            onClick={() => navigate('/my-programs')}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View My Programs
          </button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Programs Enrolled" value="4" />
        <StatCard label="Certificates Earned" value="0" />
        <StatCard label="Learning Streak" value="3 Days" />
        <StatCard label="LU Coins" value="205" />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Recommended Courses</h2>
            <p className="text-sm text-neutral-500">
              Pick up where you left off or start something new.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {allCourses.map((course) => {
            const isLaunchingSoon = course.status === 'LAUNCHING SOON';

            return (
              <article
                key={course.id}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[1.64/1] overflow-hidden bg-neutral-100">
                  <img
                    alt={course.title}
                    src={course.thumbnail}
                    className="h-full w-full object-cover object-bottom"
                  />
                  <div
                    className={`absolute bottom-0 flex h-8 w-full items-center justify-center text-[11px] font-bold uppercase tracking-wide ${
                      isLaunchingSoon
                        ? 'bg-amber-400 text-amber-950'
                        : 'border-t border-neutral-200 bg-white/95 text-neutral-600'
                    }`}
                  >
                    {isLaunchingSoon ? 'Launching Soon' : course.enrollmentCount}
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="space-y-2">
                    {course.tag ? (
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-700">
                        {course.tag}
                      </p>
                    ) : null}
                    <h3 className="text-lg font-bold leading-snug text-neutral-900">
                      {course.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{course.date || 'Coming soon'}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate('/explore-programs')}
                    className="inline-flex rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    {isLaunchingSoon ? 'Notify Me' : 'Enroll'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

type StatCardProps = {
  label: string;
  value: string;
};

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-neutral-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-neutral-900">{value}</p>
    </div>
  );
};

export default Dashboard;
