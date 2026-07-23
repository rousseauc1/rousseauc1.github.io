import { useNavigate } from 'react-router-dom';
import { getProjects } from '../data/projects';

interface ProjectNavigationProps {
    currentId: string;
}

const ProjectNavigation = ({ currentId }: ProjectNavigationProps) => {
    const navigate = useNavigate();
    const projects = getProjects();

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {projects.map((project, index) => (
                <button
                    key={project.id}
                    onClick={() => navigate(`/Projects/${project.id}`)}
                    aria-label={`Go to ${project.title}`}
                    className={`w-12 h-12 rounded-full text-xl font-bold transition-all duration-300
                        ${currentId === project.id
                            ? 'bg-[#5c4d3f] dark:bg-gray-600 text-white scale-110 shadow-lg dark:shadow-gray-700/50'
                            : 'bg-[#f5f0e6] dark:bg-gray-700 text-[#5c4d3f] dark:text-gray-200 hover:bg-[#5c4d3f] dark:hover:bg-gray-600 hover:text-white hover:scale-105'
                        }`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default ProjectNavigation;
