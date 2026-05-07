import TextType from '@/components/react-bits/text-type'
import { ArrowUpRight, ChevronRight, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'
import TiltedCard from '@/components/react-bits/tilted-card'

export const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col w-full gap-12 py-24 px-6 2xl:justify-between 2xl:px-36 2xl:pt-24 xl:justify-between xl:px-36 xl:pt-24 lg:justify-between lg:px-12 lg:pt-16 md:justify-between md:px-6 md:pt-16 md:flex-row"
    >
      <div className="flex w-full h-auto flex-col items-stretch justify-center gap-6 md:gap-8">
        <span className="font-mono font-normal md:font-bold">——— olá, mundo</span>
        <h1 className="text-4xl bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono md:text-6xl font-bold text-transparent">
          Paulo Turco
        </h1>
        <div className={'flex items-center gap-2'}>
          <ChevronRight />
          <TextType
            className="font-mono text:sm md:text-lg font-normal"
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
        <span className={'text-muted-foreground md:w-4/5 text:sm md:text-lg font-normal'}>
          Desenvolvedor fullstack com experiência em aplicações web modernas, focado em performance,
          UX e código escalável.
        </span>
        <div className="flex gap-4 md:mt-4">
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
      <div className="rounded-[15px] shadow-[0_0_150px_15px_oklch(0.556_0_0/0.3)] h-100 w-87.5">
        <TiltedCard
          imageHeight="400px"
          imageWidth="350px"
          containerHeight="400px"
          imageSrc="../me.png"
        />
      </div>
    </div>
  )
}