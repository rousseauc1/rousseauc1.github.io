import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectNavigation from '../components/ProjectNavigation';
import { getProjectById, type ProjectStep } from '../data/projects';

const StepMedia = ({ step }: { step: ProjectStep }) => {
    if (!step.media || !step.mediaType) return null;

    if (step.mediaType === 'video') {
        return (
            <video
                src={step.media}
                controls
                className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-contain shadow-md dark:shadow-gray-700/50"
            >
                Your browser does not support the video tag.
            </video>
        );
    }

    return (
        <img
            src={step.media}
            alt={step.title}
            className="rounded-lg w-full h-48 sm:h-56 md:h-64 object-contain shadow-md dark:shadow-gray-700/50"
        />
    );
};

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = id ? getProjectById(id) : undefined;

    useEffect(() => {
        if (!project) {
            navigate('/Projects', { replace: true });
        }
    }, [project, navigate]);

    if (!project) {
        return null;
    }

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#f5f0e6] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300 text-center">
                {project.title}
            </h1>
            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-gray-600 rounded-lg shadow-lg dark:shadow-gray-700/50 p-4 sm:p-6 md:p-8 transition-colors duration-300">
                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            {project.problemStatement}
                        </p>
                    </div>

                    {project.steps.map((step, index) => {
                        const hasMedia = Boolean(step.media && step.mediaType);
                        const mediaOnLeft = index % 2 === 1;

                        if (!hasMedia) {
                            return (
                                <div key={step.title} className="mb-4 sm:mb-6 md:mb-8">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <div
                                key={step.title}
                                className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8"
                            >
                                {mediaOnLeft && (
                                    <div className="md:w-1/3">
                                        <StepMedia step={step} />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                                {!mediaOnLeft && (
                                    <div className="md:w-1/3">
                                        <StepMedia step={step} />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    <div className="mb-4 sm:mb-6 md:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#4a3e32] dark:text-gray-100 transition-colors duration-300">
                            Key Technologies
                        </h3>
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[#4a3e32] dark:text-gray-200 transition-colors duration-300">
                            {project.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    {(project.sourceCode || project.reportPdf) && (
                        <div className="mb-4 sm:mb-6 md:mb-8 flex flex-wrap gap-3">
                            {project.sourceCode && (
                                <a
                                    href={project.sourceCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#5c4d3f] dark:bg-gray-700 text-white px-6 py-2 rounded-md
                                    hover:bg-[#4a3e32] dark:hover:bg-gray-500 transition-colors duration-300
                                    shadow-md hover:shadow-lg"
                                >
                                    View Source Code
                                </a>
                            )}
                            {project.reportPdf && (
                                <a
                                    href={project.reportPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#5c4d3f] dark:bg-gray-700 text-white px-6 py-2 rounded-md
                                    hover:bg-[#4a3e32] dark:hover:bg-gray-500 transition-colors duration-300
                                    shadow-md hover:shadow-lg"
                                >
                                    View Research Paper
                                </a>
                            )}
                        </div>
                    )}
                </div>
                <ProjectNavigation currentId={project.id} />
            </div>
        </div>
    );
};

export default ProjectDetail;
