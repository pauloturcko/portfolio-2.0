import { useRef, type RefObject } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Github } from '@/assets/icons/github.tsx'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button.tsx'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { ProjectMediaViewer } from '@/components/ui/project-media-viewer.tsx'
import { TechBadges } from '@/components/ui/tech-badges.tsx'
import { isInternalUrl, type Project } from '@/types/project.ts'

type ProjectDetailsDialogProps = {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
  returnFocusRef?: RefObject<HTMLElement | null>
}

const ProjectLinks = ({ project }: { project: Project }) => {
  const repositories = project.repositories.filter((repo): repo is { label: string; url: string } =>
    Boolean(repo.url),
  )
  const hasAppLink = Boolean(project.url)

  if (!hasAppLink && repositories.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 lg:justify-end">
      {repositories.map((repo) => (
        <a
          key={repo.url}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'gap-2 px-3 font-mono text-xs',
          )}
        >
          <Github aria-hidden="true" />
          {repo.label}
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      ))}
      {project.url && isInternalUrl(project.url) && (
        <DialogClose
          render={
            <a
              href={project.url}
              className={cn(
                buttonVariants({ variant: 'gradient', size: 'lg' }),
                'gap-2 px-3 text-xs font-bold',
              )}
            />
          }
          nativeButton={false}
        >
          Ir para o início
          <ArrowUpRight aria-hidden="true" />
        </DialogClose>
      )}
      {project.url && !isInternalUrl(project.url) && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'gradient', size: 'lg' }),
            'gap-2 px-3 text-xs font-bold',
          )}
        >
          Acessar projeto
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only">(abre em nova aba)</span>
        </a>
      )}
    </div>
  )
}

export const ProjectDetailsDialog = ({
  project,
  open,
  onOpenChange,
  returnFocusRef,
}: ProjectDetailsDialogProps) => {
  // O foco inicial vai para a área rolável, mantendo o topo (título) visível no mobile
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {project && (
        <DialogContent
          initialFocus={scrollAreaRef}
          finalFocus={returnFocusRef}
          overlayClassName="bg-black/70 duration-200 supports-backdrop-filter:backdrop-blur-sm"
          closeButtonClassName="top-3 right-3 md:top-4 md:right-4"
          className={cn(
            'bg-card flex h-auto flex-col overflow-hidden rounded-2xl border border-white/10 p-0 ring-0',
            // Mesma largura útil do container do Header (max-w-400 menos o gutter compartilhado)
            'max-h-[calc(100dvh-2rem)] w-[calc(100%-2*var(--page-gutter))] max-w-[calc(100rem-2*var(--page-gutter))] sm:max-w-[calc(100rem-2*var(--page-gutter))] md:w-[calc(100%-2*var(--page-gutter))]',
            'shadow-[0_30px_120px_rgba(0,0,0,0.6)] duration-200',
          )}
        >
          <div
            ref={scrollAreaRef}
            tabIndex={-1}
            className="min-h-0 overflow-y-auto overscroll-contain p-5 outline-none md:p-8"
          >
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-6">
              {/* Informações */}
              <div className="flex flex-col gap-3 pr-10 lg:col-start-2 lg:row-start-1 lg:pr-6">
                {(project.type || project.status) && (
                  <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
                    {project.status && (
                      <span className="border-input rounded-full border px-2 py-0.5">
                        {project.status}
                      </span>
                    )}
                    {project.type && <span>{project.type}</span>}
                  </div>
                )}
                <DialogTitle className="font-mono text-2xl leading-tight font-bold md:text-3xl">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed md:text-base">
                  {project.details}
                </DialogDescription>
              </div>

              {/* Mídia */}
              <ProjectMediaViewer
                key={project.name}
                media={project.media}
                projectName={project.name}
                confidential={project.confidential}
                className="lg:col-start-1 lg:row-start-1"
              />

              {/* Tecnologias */}
              <div className="flex flex-col gap-2 lg:col-start-1 lg:row-start-2">
                <p className="text-muted-foreground font-mono text-xs uppercase">tecnologias</p>
                <TechBadges technologies={project.technologies} />
              </div>

              {/* Ações */}
              <div className="lg:col-start-2 lg:row-start-2 lg:self-end">
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
