import { useState } from 'react'
import { ChevronLeft, ChevronRight, ImageOff, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button.tsx'
import type { ProjectMedia } from '@/types/project.ts'

type ProjectMediaViewerProps = {
  media: ProjectMedia[]
  projectName: string
  confidential?: boolean
  className?: string
}

const MediaPlaceholder = ({ confidential }: { confidential?: boolean }) => {
  const Icon = confidential ? Lock : ImageOff

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/6%),transparent_60%)] p-6 text-center">
      <span className="border-input bg-background/60 flex size-12 items-center justify-center rounded-full border">
        <Icon
          size={20}
          className="text-muted-foreground"
          aria-hidden="true"
        />
      </span>
      <p className="text-foreground font-mono text-sm">
        {confidential ? 'Projeto privado' : 'Prévia em breve'}
      </p>
      <p className="text-muted-foreground max-w-xs text-xs">
        {confidential
          ? 'Por se tratar de um sistema interno, telas e código não são divulgados.'
          : 'Capturas de tela e vídeos deste projeto ainda serão adicionados.'}
      </p>
    </div>
  )
}

const MediaItem = ({ item }: { item: ProjectMedia }) => {
  if (item.type === 'video') {
    return (
      <video
        className="h-full w-full object-contain"
        src={item.src}
        poster={item.poster}
        aria-label={item.alt}
        controls
        muted
        playsInline
        preload="metadata"
      />
    )
  }

  return (
    <img
      className="h-full w-full object-contain"
      src={item.src}
      alt={item.alt}
      loading="lazy"
      decoding="async"
    />
  )
}

export const ProjectMediaViewer = ({
  media,
  projectName,
  confidential,
  className,
}: ProjectMediaViewerProps) => {
  const [current, setCurrent] = useState(0)
  const total = media.length
  const hasMultiple = total > 1
  const active = media[current]

  const goTo = (next: number) => setCurrent((next + total) % total)

  return (
    <div
      className={cn(
        'border-input bg-background/80 relative aspect-video w-full overflow-hidden rounded-lg border',
        className,
      )}
      role={hasMultiple ? 'region' : undefined}
      aria-roledescription={hasMultiple ? 'carrossel' : undefined}
      aria-label={hasMultiple ? `Mídias do projeto ${projectName}` : undefined}
    >
      {active ? <MediaItem item={active} /> : <MediaPlaceholder confidential={confidential} />}

      {hasMultiple && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/70 absolute top-1/2 left-2 -translate-y-1/2 backdrop-blur-sm"
            onClick={() => goTo(current - 1)}
            aria-label="Mídia anterior"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-background/70 absolute top-1/2 right-2 -translate-y-1/2 backdrop-blur-sm"
            onClick={() => goTo(current + 1)}
            aria-label="Próxima mídia"
          >
            <ChevronRight />
          </Button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/60 px-2 py-1">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Exibir mídia ${index + 1} de ${total}`}
                aria-current={index === current}
                className={cn(
                  'focus-visible:ring-ring size-2 cursor-pointer rounded-full transition-colors outline-none focus-visible:ring-2',
                  index === current ? 'bg-foreground' : 'bg-foreground/35 hover:bg-foreground/60',
                )}
              />
            ))}
          </div>
          <p
            className="sr-only"
            aria-live="polite"
          >
            Mídia {current + 1} de {total}: {active?.alt}
          </p>
        </>
      )}
    </div>
  )
}
