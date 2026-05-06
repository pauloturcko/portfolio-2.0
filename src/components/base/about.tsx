import { CodeXml, Database, Server, Sparkles } from 'lucide-react'

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col px-6 py-12 gap-4 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 01. Sobre</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl md:text-5xl font-bold text-transparent">
        Sobre mim
      </h2>
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="text-muted-foreground text-sm md:text-md flex w-full md:w-2/3 flex-col gap-4 font-normal">
          <p>
            Sou desenvolvedor front-end com experiência profissional na construção de interfaces
            modernas e performáticas utilizando React, com foco em usabilidade e qualidade de
            código.
          </p>
          <p>
            Ao longo da minha trajetória, participei da modernização de sistemas legados para
            arquiteturas mais atuais e atuei no desenvolvimento de ERPs e outras aplicações baseadas
            em consumo de APIs REST.
          </p>
          <p>
            Já trabalhei tanto de forma independente, sendo responsável pelo desenvolvimento
            completo de projetos, quanto em colaboração com outros desenvolvedores e equipes de
            design, garantindo fidelidade às interfaces e uma boa experiência do usuário.
          </p>
          <p>
            Atualmente, estou expandindo meus conhecimentos em back-end, estudando Node.js e a
            plataforma .NET, com o objetivo de evoluir para um perfil fullstack e ter uma visão mais
            completa do desenvolvimento de software.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground font-mono text-xs font-normal uppercase">
            stack principal
          </p>
          <ul className="flex flex-col gap-4">
            <li className="border-input hover:border-primary text-md flex w-full md:w-3xs items-center gap-3 rounded-md border-2 px-4 py-2 font-mono font-light transition-all duration-300">
              <CodeXml size={22} />
              Next.js / React
            </li>
            <li className="border-input hover:border-primary text-md flex w-full md:w-3xs items-center gap-3 rounded-md border-2 px-4 py-2 font-mono font-light transition-all duration-300">
              <Server size={20} />
              Node.js / Express
            </li>
            <li className="border-input hover:border-primary text-md flex w-full md:w-3xs items-center gap-3 rounded-md border-2 px-4 py-2 font-mono font-light transition-all duration-300">
              <Database size={20} />
              .NET / C#
            </li>
            <li className="border-input hover:border-primary text-md flex w-full md:w-3xs items-center gap-3 rounded-md border-2 px-4 py-2 font-mono font-light transition-all duration-300">
              <Sparkles size={20} />
              TypeScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}