import SpotlightCard from '@/components/react-bits/spotlight-cards'
import { ExternalLink, Info } from 'lucide-react'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx'

type ProjectsCardProps = {
  index: number;
  name: string;
  description: string;
  url: string | null;
  technologies: string[];
}

export const ProjectsCard = ({
  index,
  name,
  description,
  url,
  technologies,
}: ProjectsCardProps) => {
  const [open, setOpen] = useState(false)

  const renderIcon = () => {
    if (url === null) {
      return (
        <Info
          size="18"
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      )
    }

    if (url === "#home") {
      return
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink
          size="18"
          className="cursor-pointer"
        />
      </a>
    )
  }

  return (
    <>
      {open && (
        <Dialog
          open={open}
          onOpenChange={setOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novidades em breve!</DialogTitle>
              <DialogDescription>
                Estou trabalhando para finalizar este projeto com carinho.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
      <SpotlightCard className="border-muted-foreground hover:border-primary flex h-90 lg:h-82 xl:h-72 flex-col justify-between gap-4 rounded-xl border transition-all duration-300">
        <div className="flex h-full flex-col">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 0{index + 1}</span>
            {renderIcon()}
          </div>
          <h3 className="mt-2 text-2xl font-bold">{name}</h3>
          <p className="text-muted-foreground mt-4 flex w-full flex-col gap-4 font-mono text-sm font-normal">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="border-input text-muted-foreground rounded-md border px-2 py-1 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </SpotlightCard>
    </>
  )
}