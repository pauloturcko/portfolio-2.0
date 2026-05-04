import SpotlightCard from '@/components/react-bits/spotlight-cards'
import { ExternalLink } from 'lucide-react'

export const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-48 mt-46 flex flex-col gap-4 pb-20"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 03. Trabalhos</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-5xl font-bold text-transparent">
        Projetos selecionados
      </h2>
      <div className="row-auto mt-8 grid grid-cols-2 gap-4">
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 01</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">Portfólio 2.0</h3>
        </SpotlightCard>
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 02</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">WhaiData</h3>
        </SpotlightCard>
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 03</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">Nimbus</h3>
        </SpotlightCard>
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 04</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">About me</h3>
        </SpotlightCard>
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 05</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">Vitality Gym</h3>
        </SpotlightCard>
        <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
          <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
            <span>project // 06</span>
            <ExternalLink
              size="18"
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-2xl font-bold">Yūgen</h3>
        </SpotlightCard>
      </div>
    </div>
  )
}