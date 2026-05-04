import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button.tsx'

export const Header = () => {
  return (
    <header className={cn(
      "flex w-full items-center justify-between px-36 py-4",
      "fixed top-0 left-0 z-50",
      "bg-black/60 backdrop-blur-md",
    )}>
      <div>
        <h1 className="font-mono text-sm font-semibold">$ pauloturcko.dev</h1>
      </div>
      <div>
        <ul className="[&_a]:text-muted-foreground [&_a]:hover:text-foreground flex gap-4 font-mono text-sm font-medium uppercase [&_a]:transition-colors">
          <li>
            <a
              href="/"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#jobs"
            >
              Experiência
            </a>
          </li>
          <li>
            <a
              href="#projects"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="/"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
      <Button variant="secondary" size="lg">Fale Comigo</Button>
    </header>
  )
}