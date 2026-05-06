import { ProjectsCard } from '@/components/ui/projects-card.tsx'
import { useEffect, useState } from 'react'

type Projects = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

export const Projects = () => {
  const [projects, setProjects] = useState<Projects[]>([])

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error))
  }, [])

  return (
    <div
      id="projects"
      className="mx-48 mt-46 flex flex-col gap-4 pb-20"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 03. Trabalhos</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-5xl font-bold text-transparent">
        Projetos selecionados
      </h2>
      <div className="row-auto mt-8 grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectsCard key={index} index={index} name={project.name} description={project.description} url={project.url} technologies={project.technologies} />
        ))}
      </div>
    </div>
  )
}