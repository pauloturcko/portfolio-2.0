import { Copyright } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t-muted flex w-full justify-center border px-8 py-4 md:px-36 md:py-6">
      <p className="text-muted-foreground flex items-center gap-2">
        <Copyright
          size={12}
          aria-hidden="true"
        />
        <span className="font-mono text-xs font-normal">
          {new Date().getFullYear()} Paulo Turco · Todos os direitos reservados
        </span>
      </p>
    </footer>
  )
}
