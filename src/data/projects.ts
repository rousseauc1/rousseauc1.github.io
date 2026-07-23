import projectsData from './projects.json';

export interface ProjectStep {
  title: string;
  description: string;
  media?: string;
  mediaType?: 'image' | 'video';
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  problemStatement: string;
  steps: ProjectStep[];
  technologies: string[];
  sourceCode?: string;
  reportPdf?: string;
  order: number;
}

export function getProjects(): Project[] {
  return [...(projectsData as Project[])].sort((a, b) => a.order - b.order);
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find((project) => project.id === id);
}
