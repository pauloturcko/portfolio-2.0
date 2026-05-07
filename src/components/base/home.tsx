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
      className="flex w-full flex-col gap-12 px-6 py-24 md:flex-row md:justify-between md:px-6 md:pt-16 lg:justify-between lg:px-12 lg:pt-16 xl:justify-between xl:px-36 xl:pt-24 2xl:justify-between 2xl:px-36 2xl:pt-24"
    >
      <div className="flex h-auto w-full flex-col items-stretch justify-center gap-6 md:gap-8">
        <span className="font-mono font-normal md:font-bold">——— olá, mundo</span>
        <h1 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-6xl">
          Paulo Turco
        </h1>
        <div className={'flex items-center gap-2'}>
          <ChevronRight />
          <TextType
            className="text:sm font-mono font-normal md:text-lg"
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
        <span className={'text-muted-foreground text:sm font-normal md:w-4/5 md:text-lg'}>
          Desenvolvedor fullstack com experiência em aplicações web modernas, focado em performance,
          UX e código escalável.
        </span>
        <div className="flex gap-4 md:mt-4">
          <a href="#projects">
            <Button
              variant="gradient"
              size="xl"
              className="text-sm font-bold"
            >
              Ver projetos <ArrowUpRight />
            </Button>
          </a>
          <a
            href="#contact"
          >
            <Button
              variant="secondary"
              size="xl"
              className="text-sm font-normal"
            >
              Entrar em contato
            </Button>
          </a>
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
      <div className="h-100 w-87.5 rounded-[15px] shadow-[0_0_150px_15px_oklch(0.556_0_0/0.3)]">
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