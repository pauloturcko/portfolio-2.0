import SpotlightCard from '@/components/react-bits/spotlight-cards'
import { ExternalLink } from 'lucide-react'

type ProjectsCardProps = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

export const ProjectsCard = ({
  name,
  description,
  url,
  technologies,
}: ProjectsCardProps & { index: number }) => {
  return (
    <SpotlightCard className="border-muted-foreground hover:border-primary flex h-75 flex-col gap-4 border transition-all duration-300">
      <div className="text-muted-foreground flex justify-between font-mono text-xs font-normal">
        <span>`project // ${index}`</span>
        <ExternalLink
          size="18"
          className="cursor-pointer"
        />
      </div>
      <h3 className="text-2xl font-bold">Portfólio 2.0</h3>
    </SpotlightCard>
  )
}