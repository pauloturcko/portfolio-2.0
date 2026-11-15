import { Maximize2 } from 'lucide-react'
import SpotlightCard from '@/components/react-bits/spotlight-cards'
import { TechBadges } from '@/components/ui/tech-badges.tsx'
import type { Project } from '@/types/project.ts'

type ProjectsCardProps = {
  index: number
  project: Project
  onOpen: (trigger: HTMLButtonElement) => void
}

export const ProjectsCard = ({ index, project, onOpen }: ProjectsCardProps) => {
  return (
    // Mesmo fundo do header: preto semitransparente com blur
    <SpotlightCard className="bg-black/55 backdrop-blur-xl border-border hover:border-white/30 has-focus-visible:border-white/30 has-focus-visible:ring-ring/60 flex h-full min-h-56 flex-col justify-between gap-6 rounded-xl border p-6 transition-colors duration-300 has-focus-visible:ring-2 md:min-h-64 md:p-8">
      <div className="flex flex-col">
        <div className="text-muted-foreground flex items-center justify-between font-mono text-xs font-normal">
          <span>project // {String(index + 1).padStart(2, '0')}</span>
          <Maximize2
            size={16}
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-2 text-2xl font-bold">
          {/* Botão "esticado": cobre todo o card, mantendo semântica e foco de teclado */}
          <button
            type="button"
            onClick={(event) => onOpen(event.currentTarget)}
            className="cursor-pointer text-left outline-none after:absolute after:inset-0 after:z-10 after:content-['']"
            aria-haspopup="dialog"
          >
            {project.name}
            <span className="sr-only"> — ver detalhes do projeto</span>
          </button>
        </h3>
        <p className="text-muted-foreground mt-4 line-clamp-3 font-mono text-sm font-normal">
          {project.description}
        </p>
      </div>
      <TechBadges technologies={project.technologies} />
    </SpotlightCard>
  )
}
