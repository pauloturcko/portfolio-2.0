export const Jobs = () => {
  return (
    <div
      id="jobs"
      className="mx-64 mt-46 flex flex-col gap-4 pb-20"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase">// 02. Carreira</span>
      <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-5xl font-bold text-transparent">
        Onde já trabalhei
      </h2>
      <div className="mt-12 flex justify-center gap-8">
        <div className="mt-4 flex flex-col gap-38">
          <div className="flex flex-col items-end">
            <span className="text-primary mb-2 font-mono text-xs font-normal">
              03/2025 - 03/2026
            </span>
            <h3 className="text-primary text-xl font-bold">Desenvolvedor Front-End Jr.</h3>
            <span className="text-muted-foreground font-mono text-sm">@ m8 Sistemas</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-primary mb-2 font-mono text-xs font-normal">
              01/2024 - 07/2024
            </span>
            <h3 className="text-primary text-xl font-bold">Desenvolvedor Front-End Jr.</h3>
            <span className="text-muted-foreground font-mono text-sm">@ neocom</span>
          </div>
        </div>
        <div className="flex h-80 w-0.5 flex-col items-center justify-between overflow-visible bg-linear-to-b from-[#555555] to-[#0A0A0A] py-6">
          <span className="bg-primary h-4 w-4 rounded-full"></span>
          <span className="bg-primary mb-8 h-4 w-4 rounded-full"></span>
        </div>
        <div className="flex w-1/2 flex-col gap-16">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-md flex w-full flex-col gap-4 font-normal">
              Migração de front-end legado para stack moderna com arquitetura escalável baseada em
              Atomic Design. Integração com APIs REST em ambiente de microserviços. Atuação como
              desenvolvedor principal em sistemas-chave da empresa, focado na evolução e
              consistência das interfaces.
            </p>
            <ul className="flex gap-2">
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
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-md flex w-full flex-col gap-4 font-normal">
              Desenvolvimento de interfaces para landing pages e sites institucionais. Implementação
              de layouts responsivos com foco em performance e experiência do usuário. Atuação
              independente no desenvolvimento front-end, colaborando com equipes de design.
            </p>
            <ul className="flex gap-2">
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