import { CodeXml, Container, Database, Server, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type StackItem = {
  icon: LucideIcon
  label: string
  detail: string
}

const stack: StackItem[] = [
  { icon: Server, label: 'Node.js / NestJS', detail: 'Express · APIs REST' },
  { icon: CodeXml, label: 'React / Next.js', detail: 'TypeScript · Tailwind CSS' },
  { icon: Database, label: 'PostgreSQL', detail: 'TypeORM · Prisma' },
  { icon: Container, label: 'Docker / Railway', detail: 'Cloudflare · Azure DevOps' },
  { icon: Workflow, label: 'Git / CI/CD', detail: 'Playwright · Github' },
]

export const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex flex-col gap-4 px-6 py-12 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 01. Sobre</span>
      <h2
        id="about-title"
        className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl"
      >
        Sobre mim
      </h2>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-10">
        <div className="text-muted-foreground flex w-full flex-col gap-4 text-sm leading-relaxed font-normal md:w-2/3 md:text-base lg:w-3/5">
          <p>
            Sou desenvolvedor Full Stack, com experiência em sistemas corporativos e aplicações web.
            Minha principal stack é TypeScript, utilizando Node.js e NestJS na construção de APIs,
            React e Next.js nas interfaces e PostgreSQL como banco de dados. Também tenho
            experiência com integrações externas, autenticação e manutenção de sistemas existentes.
          </p>
          <p>
            Minha experiência inclui a modernização de sistemas corporativos, o desenvolvimento de
            aplicações web e a criação de projetos próprios. Atualmente, na Tempero Propaganda,
            tenho maior autonomia nas decisões técnicas e na evolução do Sync, projeto que idealizei
            e desenvolvo. Valorizo código bem estruturado, soluções práticas e entregas que
            conciliem agilidade e qualidade.
          </p>
          <p>
            Hoje sou responsável pelo desenvolvimento do Sync, plataforma interna de inteligência de
            marketing que propus e venho evoluindo desde a primeira versão. Assumir um sistema dessa
            forma me ensinou a tomar decisões técnicas com autonomia e a equilibrar velocidade de
            entrega com qualidade.
          </p>
          <p>
            Tenho interesse constante em boas práticas de engenharia de software, arquitetura e no
            uso de inteligência artificial aplicada ao desenvolvimento.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-auto md:min-w-64">
          <h3 className="text-muted-foreground font-mono text-xs font-normal uppercase">
            stack principal
          </h3>
          <ul className="flex flex-col gap-3">
            {stack.map(({ icon: Icon, label, detail }) => (
              <li
                key={label}
                className="border-input hover:border-primary flex w-full items-center gap-3 rounded-md border-2 px-4 py-2 transition-colors duration-300"
              >
                <Icon
                  size={20}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <span className="text-foreground font-mono text-sm font-light whitespace-nowrap md:text-base">
                    {label}
                  </span>
                  <span className="text-muted-foreground font-mono text-xs">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
