import TextType from '@/components/react-bits/text-type'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'

export const Home = () => {
  return (
    <div className="flex h-auto flex-col items-stretch justify-center gap-6 px-36 py-24">
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
      <span className={'text-md w-2/5 font-normal'}>
        Desenvolvedor fullstack com experiência em aplicações web modernas, focado em performance,
        UX e código escalável.
      </span>
      <div>
        <Button variant="default" size="lg">
          Ver projetos <ArrowUpRight />
        </Button>
        <Button variant="secondary">Entrar em contato</Button>
      </div>
    </div>
  )
}