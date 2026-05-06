import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button.tsx'
import BubbleMenu from '@/components/react-bits/staggered-menu'

export const Header = () => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full',
        'border-b border-white/8 bg-black/55 backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex w-full max-w-400 items-center justify-between px-4 py-3 md:px-6 lg:px-12 xl:px-36">
        <nav className="hidden w-full items-center justify-between md:flex">
          <div>
            <a
              href="#home"
              className="font-mono text-sm font-semibold"
            >
              $ pauloturcko.dev
            </a>
          </div>
          <div>
            <ul className="[&_a]:text-muted-foreground [&_a]:hover:text-foreground flex gap-4 font-mono text-sm font-medium uppercase [&_a]:transition-colors">
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#jobs">Experiência</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <a
            href="#contact"
          >
            <Button
              variant="secondary"
              size="lg"
            >
              Fale Comigo
            </Button>
          </a>
        </nav>

        <div className="flex w-full items-center justify-between md:hidden">
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-[0.18em] text-white"
          >
            $ pauloturcko.dev
          </a>

          <BubbleMenu
            menuBg="rgba(255,255,255,0.06)"
            menuContentColor="#ffffff"
          />
        </div>
      </div>
    </header>
  )
}
