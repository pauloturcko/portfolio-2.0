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
      className="flex flex-col gap-4 px-6 py-12 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 03. Trabalhos</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl">
        Projetos selecionados
      </h2>
      <div className="flex flex-col pt-2 gap-2">
        <span className="text-sm font-bold uppercase">Ponto de partida! </span>
        <span className="text-muted-foreground text-sm font-normal">
          Este portfólio traz ideias e projetos novos que estou explorando. Pode ser que alguns
          ainda não estejam prontos, mas logo você vai ver o resultado!
        </span>
      </div>
      <div className="row-auto mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            index={index}
            name={project.name}
            description={project.description}
            url={project.url}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}