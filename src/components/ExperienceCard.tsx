export interface ExperienceJob {
    id: string;
    company: string;
    client?: string;
    role: string;
    type: string;
    duration: string;
    location: string;
    workStyle?: string;
    description: string;
    skills: string[];
    order: number;
}

interface ExperienceCardProps extends ExperienceJob {
    isLast?: boolean;
    index?: number;
}

const ExperienceCard = ({
    company,
    client,
    role,
    type,
    duration,
    location,
    workStyle,
    description,
    skills,
    isLast = false,
    index = 0,
}: ExperienceCardProps) => {
    const metaChips = [type, location, workStyle].filter(Boolean) as string[];
    const ordinal = String(index + 1).padStart(2, '0');

    return (
        <div
            className={`group relative flex gap-3 sm:gap-4 md:gap-6 ${isLast ? '' : 'pb-8 sm:pb-10 md:pb-12'}`}
            style={{
                animation: `experienceFadeUp 0.55s ease-out ${index * 0.12}s both`,
            }}
        >
            {/* Date rail (md+) */}
            <div className="hidden md:flex w-28 lg:w-36 shrink-0 flex-col items-end pt-1 gap-1">
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f5f0e6]/55 dark:text-gray-400">
                    {ordinal}
                </span>
                <span className="text-xs lg:text-sm uppercase tracking-wide text-[#f5f0e6] dark:text-gray-200 text-right leading-snug transition-colors duration-300">
                    {duration}
                </span>
            </div>

            {/* Spine + glowing node */}
            <div className="flex flex-col items-center shrink-0">
                <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 z-10">
                    <span
                        className="absolute inset-0 rounded-full bg-[#f5f0e6]/25 dark:bg-gray-300/20
                        scale-150 opacity-70 group-hover:scale-[1.85] group-hover:opacity-100
                        transition-all duration-300 blur-[1px]"
                        aria-hidden="true"
                    />
                    <span
                        className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#f5f0e6] dark:bg-gray-200
                        border-2 border-[#5c4d3f] dark:border-gray-600 shadow-md
                        transition-all duration-300 group-hover:scale-110"
                        aria-hidden="true"
                    />
                </div>
                {!isLast && (
                    <div
                        className="w-[2px] flex-1 mt-2 transition-colors duration-300"
                        style={{
                            background:
                                'linear-gradient(to bottom, rgba(245,240,230,0.55), rgba(245,240,230,0.12))',
                        }}
                        aria-hidden="true"
                    />
                )}
            </div>

            {/* Card body */}
            <div className="flex-1 min-w-0">
                {/* Mobile duration + ordinal */}
                <div className="md:hidden flex items-center gap-2 mb-2">
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#f5f0e6]/55 dark:text-gray-400">
                        {ordinal}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-[#f5f0e6] dark:text-gray-300 transition-colors duration-300">
                        {duration}
                    </span>
                </div>

                <div
                    className="relative overflow-hidden rounded-xl
                    bg-[#fdfaf6] dark:bg-gray-600
                    shadow-lg dark:shadow-gray-900/50
                    border border-white/70 dark:border-gray-500/40
                    border-l-4 border-l-[#5c4d3f] dark:border-l-gray-300
                    p-5 sm:p-6
                    transition-all duration-300
                    group-hover:-translate-y-1 group-hover:shadow-xl dark:group-hover:shadow-gray-900/60"
                >
                    {/* Watermark ordinal */}
                    <span
                        className="pointer-events-none absolute -right-1 -top-2 text-6xl sm:text-7xl font-bold
                        text-[#5c4d3f]/5 dark:text-white/5 select-none leading-none"
                        aria-hidden="true"
                    >
                        {ordinal}
                    </span>

                    <div className="relative">
                        <h2 className="text-xl sm:text-2xl font-bold mb-1 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300">
                            {role}
                        </h2>
                        <p className="text-base sm:text-lg font-medium text-[#4a3e32] dark:text-gray-200 mb-3 transition-colors duration-300">
                            {company}
                            {client && (
                                <span className="font-normal text-[#4a3e32]/80 dark:text-gray-400">
                                    {' '}via {client}
                                </span>
                            )}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {metaChips.map((chip) => (
                                <span
                                    key={chip}
                                    className="text-xs sm:text-sm px-2.5 py-1 rounded-md
                                    bg-[#5c4d3f]/10 dark:bg-gray-600 text-[#5c4d3f] dark:text-gray-200
                                    border border-[#5c4d3f]/10 dark:border-gray-500/40
                                    transition-colors duration-300"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>

                        <div className="h-px w-full bg-[#5c4d3f]/15 dark:bg-gray-500/40 mb-4" />

                        <p className="text-[#4a3e32] dark:text-gray-200 mb-5 leading-relaxed transition-colors duration-300">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-xs sm:text-sm px-2.5 py-1 rounded-md
                                    bg-[#f5f0e6] dark:bg-gray-600/80 text-[#4a3e32] dark:text-gray-300
                                    transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
