import ExperienceCard from '../components/ExperienceCard';
import type { ExperienceJob } from '../components/ExperienceCard';
import experienceData from '../data/experience.json';

const Experience = () => {
    const jobs = [...(experienceData as ExperienceJob[])].sort((a, b) => a.order - b.order);

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#6b5d4f] dark:bg-gray-700 shadow-inner transition-colors duration-300">
            {/* Atmospheric depth layers */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div
                    className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full opacity-30 dark:opacity-20 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #f5f0e6 0%, transparent 70%)' }}
                />
                <div
                    className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full opacity-25 dark:opacity-15 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #4a3e32 0%, transparent 65%)' }}
                />
                <div
                    className="absolute -bottom-20 left-1/4 w-[24rem] h-[24rem] rounded-full opacity-20 dark:opacity-10 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #94877a 0%, transparent 70%)' }}
                />
                {/* Soft vignette */}
                <div
                    className="absolute inset-0 opacity-40 dark:opacity-50"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)',
                    }}
                />
                {/* Fine horizontal grain line texture */}
                <div
                    className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1]"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(0deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 12px)',
                    }}
                />
            </div>

            <div className="relative z-10 p-4 sm:p-6 md:p-10 lg:p-12">
                <div className="max-w-3xl md:max-w-4xl mx-auto">
                    {/* Page header */}
                    <header className="text-center mb-10 sm:mb-12 md:mb-16">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f5f0e6]/70 dark:text-gray-400 mb-3 transition-colors duration-300">
                            Career Path
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[#f5f0e6] dark:text-gray-100 transition-colors duration-300">
                            Work Experience
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-[#f5f0e6]/85 dark:text-gray-300 max-w-xl mx-auto transition-colors duration-300">
                            Roles and internships that shaped my path.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-3">
                            <span className="h-px w-10 sm:w-16 bg-[#f5f0e6]/40" />
                            <span className="w-2 h-2 rounded-full bg-[#f5f0e6]/60" />
                            <span className="h-px w-10 sm:w-16 bg-[#f5f0e6]/40" />
                        </div>
                    </header>

                    {/* Timeline panel */}
                    <div
                        className="rounded-2xl
                        border-2 border-[#f5f0e6]/35 dark:border-gray-400/40
                        bg-[#5c4d3f]/55 dark:bg-gray-800/55 backdrop-blur-md
                        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_0_0_1px_rgba(245,240,230,0.08)]
                        dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]
                        ring-1 ring-[#f5f0e6]/20 dark:ring-white/10
                        px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10
                        transition-colors duration-300"
                    >
                        <div className="flex flex-col">
                            {jobs.map((job, index) => (
                                <ExperienceCard
                                    key={job.id}
                                    {...job}
                                    index={index}
                                    isLast={index === jobs.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
