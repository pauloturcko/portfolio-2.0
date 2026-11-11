import { cn } from '@/lib/utils'

type TechBadgesProps = {
  technologies: string[]
  className?: string
}

export const TechBadges = ({ technologies, className }: TechBadgesProps) => (
  <ul className={cn('flex flex-wrap gap-2', className)}>
    {technologies.map((tech) => (
      <li
        key={tech}
        className="border-input text-muted-foreground rounded-md border px-2 py-1 font-mono text-xs"
      >
        {tech}
      </li>
    ))}
  </ul>
)
