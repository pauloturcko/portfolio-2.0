import TextType from '@/components/react-bits/text-type'
import { ArrowUpRight, ChevronRight, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button.tsx'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'
import TiltedCard from '@/components/react-bits/tilted-card'

export const Home = () => {
  return (
    <section
      id="home"
      aria-label="Apresentação"
      className="mx-auto flex w-full max-w-400 flex-col gap-12 px-(--page-gutter) py-24 md:flex-row md:justify-between md:pt-16 lg:pt-16 xl:pt-24"
    >
      <div className="flex h-auto w-full flex-col items-stretch justify-center gap-6 md:gap-8">
        <span className="font-mono font-normal md:font-bold">——— olá, mundo</span>
        <h1 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-6xl">
          Paulo Turco
        </h1>
        <div className={'flex items-center gap-2'}>
          <ChevronRight aria-hidden="true" />
          <TextType
            className="font-mono text-sm font-normal md:text-lg"
            text={[
              'Desenvolvedor Full Stack',
              'Node.js, NestJS & TypeScript',
              'React, Next.js & PostgreSQL',
              'APIs, Integrações & Arquitetura',
            ]}
            cursorCharacter={'_'}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={40}
          />
        </div>
        <p className="text-muted-foreground text-sm font-normal md:w-4/5 md:text-lg">
          Desenvolvo aplicações web com foco em arquitetura, desempenho e experiência do usuário.
          Gosto de transformar ideias em produtos funcionais, com código organizado e soluções bem
          pensadas.
        </p>
        <div className="flex gap-4 md:mt-4">
          <a
            href="#projects"
            className={buttonVariants({
              variant: 'gradient',
              size: 'xl',
              className: 'text-sm font-bold',
            })}
          >
            Ver projetos <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className={buttonVariants({
              variant: 'secondary',
              size: 'xl',
              className: 'text-sm font-normal',
            })}
          >
            Entrar em contato
          </a>
        </div>
        <ul className="text-muted-foreground flex gap-4">
          <li className="hover:text-primary cursor-pointer">
            <a
              href="https://github.com/pauloturcko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre em nova aba)"
            >
              <Github />
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a
              href="https://www.linkedin.com/in/pauloturco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (abre em nova aba)"
            >
              <Linkedin />
            </a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a
              href="mailto:pauloturcko@gmail.com"
              aria-label="Enviar e-mail"
            >
              <Mail aria-hidden="true" />
            </a>
          </li>
          {/* <li>
            <a className="align-center flex justify-center gap-2 font-mono text-sm font-medium">
              <MapPin /> Chapecó, BR
            </a>
          </li> */}
        </ul>
      </div>
      <div className="h-100 w-87.5 rounded-[15px] shadow-[0_0_150px_15px_oklch(0.556_0_0/0.3)]">
        <TiltedCard
          imageHeight="400px"
          imageWidth="350px"
          containerHeight="400px"
          imageSrc="/me.png"
          altText="Foto de Paulo Turco"
        />
      </div>
    </section>
  )
}
