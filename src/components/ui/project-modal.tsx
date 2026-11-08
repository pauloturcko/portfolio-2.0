import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Github } from '@/assets/icons/github.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog.tsx'
import { cn } from '@/lib/utils.ts'
import type { Project, ProjectMedia } from '@/types/project.ts'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

type MediaViewerProps = {
  media: ProjectMedia[]
  projectName: string
}

const hasLiveUrl = (url: string | null): url is string => url !== null && !url.startsWith('#')

const MediaViewer = ({ media, projectName }: MediaViewerProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = media[activeIndex]

  return (
    <div className="flex min-h-0 flex-col gap-3 md:h-full">
      <div className="bg-background border-input aspect-video w-full overflow-hidden rounded-lg border md:aspect-auto md:min-h-0 md:flex-1">
        {!active && (
          <div className="text-muted-foreground flex h-full w-full items-center justify-center font-mono text-sm">
            Prévia em breve
          </div>
        )}
        {active?.type === 'video' && (
          <video
            key={active.src}
            src={active.src}
            controls
            className="h-full w-full object-contain"
          />
        )}
        {active?.type === 'image' && (
          <img
            src={active.src}
            alt={active.alt ?? `${projectName} - imagem ${activeIndex + 1}`}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {media.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                'bg-background h-14 w-24 shrink-0 cursor-pointer overflow-hidden rounded-md border transition-all',
                index === activeIndex ? 'border-primary' : 'border-input opacity-60 hover:opacity-100',
              )}
            >
              {item.type === 'video' ? (
                <video src={item.src} muted className="h-full w-full object-cover" />
              ) : (
                <img src={item.src} alt="" className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose()
  }

  return (
    <Dialog open={project !== null} onOpenChange={handleOpenChange}>
      <DialogContent className="top-1/2 grid h-[calc(90vh-125px)] w-[calc(100%-2rem)] grid-cols-1 gap-6 overflow-y-auto p-6 sm:max-w-none md:w-[calc(100%-3rem)] md:grid-cols-[minmax(0,1fr)_20rem] md:overflow-hidden lg:w-[calc(100%-6rem)] lg:grid-cols-[minmax(0,1fr)_24rem] xl:w-[calc(100%-18rem)] xl:max-w-[calc(100rem-18rem)]">
        {project && (
          <>
            <MediaViewer key={project.name} media={project.media} projectName={project.name} />

            <div className="flex min-h-0 flex-col gap-4">
              <DialogTitle className="pr-8 text-center font-mono text-lg font-bold uppercase md:text-left">
                {project.name}
              </DialogTitle>

              <div className="border-input flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto rounded-xl border p-4">
                <DialogDescription className="font-mono text-sm">
                  {project.description}
                </DialogDescription>
                {project.longDescription && (
                  <section className="flex flex-col gap-2">
                    <h4 className="font-mono text-xs font-bold uppercase">Sobre o projeto</h4>
                    <p className="text-muted-foreground text-sm">{project.longDescription}</p>
                  </section>
                )}
                {project.highlights && project.highlights.length > 0 && (
                  <section className="flex flex-col gap-2">
                    <h4 className="font-mono text-xs font-bold uppercase">Destaques</h4>
                    <ul className="text-muted-foreground flex list-disc flex-col gap-1 pl-4 text-sm">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {(project.status || project.year) && (
                  <dl className="text-muted-foreground flex flex-col gap-2 font-mono text-xs">
                    {project.status && (
                      <div className="flex justify-between gap-4">
                        <dt>Status</dt>
                        <dd className="text-foreground">{project.status}</dd>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex justify-between gap-4">
                        <dt>Ano</dt>
                        <dd className="text-foreground">{project.year}</dd>
                      </div>
                    )}
                  </dl>
                )}
                <section className="flex flex-col gap-2">
                  <h4 className="font-mono text-xs font-bold uppercase">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border-input text-muted-foreground rounded-md border px-2 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <div className="flex flex-col gap-2">
                {hasLiveUrl(project.url) && (
                  <Button
                    variant="gradient"
                    size="xl"
                    className="w-full"
                    nativeButton={false}
                    render={<a href={project.url} target="_blank" rel="noopener noreferrer" />}
                  >
                    <ExternalLink />
                    Ver projeto
                  </Button>
                )}
                {project.repositories.map((repository) => (
                  <Button
                    key={repository.url}
                    variant="outline"
                    size="xl"
                    className="w-full"
                    nativeButton={false}
                    render={<a href={repository.url} target="_blank" rel="noopener noreferrer" />}
                  >
                    <Github />
                    {project.repositories.length > 1 ? repository.label : 'Repositório'}
                  </Button>
                ))}
                {!hasLiveUrl(project.url) && project.repositories.length === 0 && (
                  <p className="text-muted-foreground text-center font-mono text-xs">
                    Estou trabalhando para finalizar este projeto com carinho.
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
