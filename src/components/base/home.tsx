import TextType from '@/components/react-bits/text-type'
import { ArrowUpRight, ChevronRight, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'
import TiltedCard from '@/components/react-bits/tilted-card'

export const Home = () => {
  return (
    <div id="home" className="flex pt-4 pb-8">
      <div className="mt-24 ml-36 flex h-auto flex-col items-stretch justify-center gap-8">
        <span className="font-mono font-bold">——— olá, mundo</span>
        <h1 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-6xl font-bold text-transparent">
          Paulo Turco
        </h1>
        <div className={'flex items-center gap-2'}>
          <ChevronRight />
          <TextType
            className="font-mono text-lg font-normal"
            text={[
              'Fullstack Developer',
              'ERP & Sistemas Web',
              'React, Node & .NET',
              'Foco em performance & UX',
            ]}
            cursorCharacter={'_'}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={40}
          />
        </div>
        <span className={'text-muted-foreground text-lg font-normal w-3/4'}>
          Desenvolvedor fullstack com experiência em aplicações web modernas, focado em performance,
          UX e código escalável.
        </span>
        <div className="flex gap-4">
          <Button
            variant="gradient"
            size="xl"
            className="text-sm font-bold"
          >
            Ver projetos <ArrowUpRight />
          </Button>
          <Button
            variant="secondary"
            size="xl"
            className="text-sm font-normal"
          >
            Entrar em contato
          </Button>
        </div>
        <ul className="text-muted-foreground flex gap-4">
          <li className="hover:text-primary cursor-pointer">
            <a
              href="https://github.com/pauloturcko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a
              href="https://www.linkedin.com/in/pauloturco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href="mailto:pauloturcko@gmail.com">
              <Mail />
            </a>
          </li>
          <li>
            <a className="align-center flex justify-center gap-2 font-mono text-sm font-medium">
              <MapPin /> Chapecó, BR
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-24 mr-46 h-auto w-auto shadow-[0_0_150px_15px_oklch(0.556_0_0/0.3)] rounded-[15px]">
        <TiltedCard
          imageHeight="400px"
          imageWidth="350px"
          imageSrc="../me.png"

        />
      </div>
    </div>
  )
}