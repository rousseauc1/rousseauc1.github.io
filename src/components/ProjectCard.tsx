import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    id: string;
    title: string;
    shortDescription: string;
    thumbnail: string;
    technologies: string[];
}

const ProjectCard = ({ id, title, shortDescription, thumbnail, technologies }: ProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-[#f5f0e6] dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent dark:border-gray-600">
            <div className="p-3 sm:p-4 bg-white/40 dark:bg-gray-700/40">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-36 sm:h-40 object-contain rounded-md"
                />
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-5">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#5c4d3f] dark:text-gray-100 transition-colors duration-300 line-clamp-2">
                    {title}
                </h2>
                <p className="text-sm text-[#4a3e32] dark:text-gray-200 mb-3 transition-colors duration-300 line-clamp-3">
                    {shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-0.5 rounded-md
                            bg-white/70 dark:bg-gray-600/80 text-[#4a3e32] dark:text-gray-300
                            transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 4 && (
                        <span className="text-xs px-2 py-0.5 rounded-md text-[#5c4d3f]/70 dark:text-gray-400">
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>
                <button
                    onClick={() => navigate(`/Projects/${id}`)}
                    className="mt-auto self-start bg-[#5c4d3f] dark:bg-gray-600 text-white px-4 py-1.5 rounded-md text-sm
                    hover:bg-[#4a3e32] dark:hover:bg-gray-500 transition-colors duration-300
                    shadow-md hover:shadow-lg dark:shadow-gray-800/50"
                >
                    View Project
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;
