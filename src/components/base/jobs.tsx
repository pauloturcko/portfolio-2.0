export const Jobs = () => {
  return (
    <div
      id="jobs"
      className="flex flex-col gap-4 px-6 py-12 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >

      {/* DESKTOP */}
      <span className="text-primary font-mono text-xs font-normal uppercase">// 02. Carreira</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl">
        Onde já trabalhei
      </h2>
      <div className="mt-12 hidden justify-center gap-8 md:flex">
        <div className="mt-4 flex flex-col gap-44 lg:gap-48">
          <div className="flex flex-col items-end">
            <span className="text-primary mb-2 font-mono font-normal md:text-xs">
              Atualmente
            </span>
            <h3 className="text-primary md:text-md font-bold lg:text-lg">
              Desenvolvedor Full-Stack.
            </h3>
            <span className="text-muted-foreground font-mono md:text-xs">@ tempero</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-primary mb-2 font-mono font-normal md:text-xs">
              03/2025 - 03/2026
            </span>
            <h3 className="text-primary md:text-md font-bold lg:text-lg">
              Desenvolvedor Front-End.
            </h3>
            <span className="text-muted-foreground font-mono md:text-xs">@ m8 Sistemas</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-primary mb-2 font-mono font-normal md:text-xs">
              01/2024 - 07/2024
            </span>
            <h3 className="text-primary md:text-md font-bold lg:text-lg">
              Desenvolvedor Front-End.
            </h3>
            <span className="text-muted-foreground font-mono md:text-xs">@ neocom</span>
          </div>
        </div>
        <div className="flex h-[540px] lg:h-[560px] w-0.5 flex-col items-center justify-between overflow-visible bg-linear-to-b from-[#555555] to-[#0A0A0A] py-6">
          <span className="bg-primary h-4 w-4 rounded-full"></span>
          <span className="bg-primary h-4 w-4 rounded-full"></span>
          <span className="bg-primary h-4 w-4 rounded-full"></span>
        </div>
        <div className="flex w-1/2 flex-col gap-16 lg:gap-26">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 font-normal md:text-sm">
              Desenvolvimento de sites institucionais e landing pages, integrando experiências web, rastreamento de conversões e plataformas de tráfego pago. Criação do Spice UI, design system em React estruturado em monorepo, reduzindo em cerca de 80% o tempo de desenvolvimento dos sites. Desenvolvimento do Sync, central de inteligência que integra Python, bancos de dados, APIs de plataformas de anúncios e agentes de IA para processamento e análise de dados, além da criação de relatórios no Power BI.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                React
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Python
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                MariaDB
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                APIs REST
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Power BI
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 font-normal md:text-sm">
              Migração de front-end legado para stack moderna com arquitetura escalável baseada em
              Atomic Design. Integração com APIs REST em ambiente de microserviços. Atuação como
              desenvolvedor principal em sistemas-chave da empresa, focado na evolução e
              consistência das interfaces.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                React
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Node.js
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Typescript
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Styled Components
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 font-normal md:text-sm">
              Desenvolvimento de interfaces para landing pages e sites institucionais. Implementação
              de layouts responsivos com foco em performance e experiência do usuário. Atuação
              independente no desenvolvimento front-end, colaborando com equipes de design.
            </p>
            <ul className="flex gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                HTML
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                CSS
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                JavaScript
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono md:text-xs">
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative mt-12 flex flex-col gap-12 pl-8 md:hidden">
        <div className="absolute top-1.5 bottom-2 left-0 flex w-4 justify-center">
          <div className="w-0.5 bg-linear-to-b from-[#555555] via-[#333333] to-[#0A0A0A]" />
        </div>

        <div className="relative flex flex-col items-start">
          <span className="bg-primary absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full">
            <span className="bg-primary h-3 w-3 rounded-full" />
          </span>
          <span className="text-primary mb-2 font-mono text-xs font-normal">
            Atual
          </span>
          <h3 className="text-primary text-md font-bold lg:text-lg">
            Desenvolvedor Full-Stack.
          </h3>
          <span className="text-muted-foreground font-mono text-xs">@ tempero</span>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 text-sm font-normal">
              Desenvolvimento de sites institucionais e landing pages, integrando experiências web, rastreamento de conversões e plataformas de tráfego pago. Criação do Spice UI, design system em React estruturado em monorepo, reduzindo em cerca de 80% o tempo de desenvolvimento dos sites. Desenvolvimento do Sync, central de inteligência que integra Python, bancos de dados, APIs de plataformas de anúncios e agentes de IA para processamento e análise de dados, além da criação de relatórios no Power BI.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                React
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Python
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                MariaDB
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                APIs REST
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Power BI
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-start">
          <span className="bg-primary absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full">
            <span className="bg-primary h-3 w-3 rounded-full" />
          </span>
          <span className="text-primary mb-2 font-mono text-xs font-normal">
            03/2025 - 03/2026
          </span>
          <h3 className="text-primary text-md font-bold lg:text-lg">
            Desenvolvedor Front-End.
          </h3>
          <span className="text-muted-foreground font-mono text-xs">@ m8 Sistemas</span>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 text-sm font-normal">
              Migração de front-end legado para stack moderna com arquitetura escalável baseada
              em Atomic Design. Integração com APIs REST em ambiente de microserviços. Atuação
              como desenvolvedor principal em sistemas-chave da empresa, focado na evolução e
              consistência das interfaces.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                React
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Node.js
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Typescript
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Styled Components
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-start">
          <span className="bg-primary absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full">
            <span className="bg-primary h-3 w-3 rounded-full" />
          </span>
          <span className="text-primary mb-2 font-mono text-xs font-normal">
            01/2024 - 07/2024
          </span>
          <h3 className="text-primary text-md font-bold lg:text-lg">
            Desenvolvedor Front-End.
          </h3>
          <span className="text-muted-foreground font-mono text-xs">@ neocom</span>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-muted-foreground flex w-full flex-col gap-4 text-sm font-normal">
              Desenvolvimento de interfaces para landing pages e sites institucionais.
              Implementação de layouts responsivos com foco em performance e experiência do
              usuário. Atuação independente no desenvolvimento front-end, colaborando com
              equipes de design.
            </p>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                HTML
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                CSS
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                JavaScript
              </li>
              <li className="rounded-full border border-mist-700 px-3 py-1 font-mono text-xs">
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}