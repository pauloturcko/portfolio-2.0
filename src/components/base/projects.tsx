import { useEffect, useRef, useState } from 'react'
import { ProjectsCard } from '@/components/ui/projects-card.tsx'
import { ProjectDetailsDialog } from '@/components/ui/project-details-dialog.tsx'
import type { Project } from '@/types/project.ts'

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selected, setSelected] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json() as Promise<Project[]>)
      .then(setProjects)
      .catch((error) => console.error('Error fetching projects:', error))
  }, [])

  const handleOpen = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setSelected(project)
    setOpen(true)
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto flex w-full max-w-400 flex-col gap-4 px-(--page-gutter) py-12 pb-20 md:mt-24 md:py-12 lg:py-18 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 03. Trabalhos</span>
      <h2
        id="projects-title"
        className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl"
      >
        Projetos selecionados
      </h2>
      <p className="text-muted-foreground max-w-3xl pt-2 text-sm font-normal md:text-base">
        Uma seleção que reúne aplicações em produção, projetos pessoais e experimentações — cada um
        com seu foco, seja arquitetura, experiência do usuário ou a resolução de um problema real.
        Clique em um projeto para ver os detalhes.
      </p>
      <ul className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.name}>
            <ProjectsCard
              index={index}
              project={project}
              onOpen={(trigger) => handleOpen(project, trigger)}
            />
          </li>
        ))}
      </ul>
      <ProjectDetailsDialog
        project={selected}
        open={open}
        onOpenChange={setOpen}
        returnFocusRef={triggerRef}
      />
    </section>
  )
}
