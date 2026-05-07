import { Copyright } from 'lucide-react'

export const  Footer = () => {
  return (
    <div
      id="jobs"
      className="border-t-muted flex w-full justify-center border py-4 px-8 md:px-36 md:py-6"
    >
      <span className="text-muted-foreground flex items-center gap-2">
        <Copyright size={12} />
        <span className="font-mono text-xs font-normal">2026 - Todos os direitos reservados</span>
      </span>
    </div>
  )
}