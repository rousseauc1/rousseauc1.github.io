import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../data/projects"

const Projects = () => {
    const projects = getProjects();

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-[#94877a] dark:bg-gray-700 transition-colors duration-300">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#f3f4f6] dark:text-gray-100 transition-colors duration-300 text-center">My Projects</h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            shortDescription={project.shortDescription}
                            thumbnail={project.thumbnail}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
