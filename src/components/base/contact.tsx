import { buttonVariants } from '@/components/ui/button.tsx'
import { Mail, Send } from 'lucide-react'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'

export const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="flex flex-col items-center gap-4 px-6 py-12 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >
      <span className="text-primary text-center font-mono text-xs font-normal uppercase">
        // 04. Contato
      </span>
      <h2
        id="contact-title"
        className="bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text text-center font-mono text-3xl font-bold text-transparent md:text-5xl"
      >
        Vamos construir algo?
      </h2>
      <p className="text-muted-foreground max-w-xl text-center text-sm md:text-base">
        Estou aberto a novas oportunidades e conversas sobre projetos. O caminho mais rápido é por
        e-mail.
      </p>
      <a
        href="mailto:pauloturcko@gmail.com"
        className={buttonVariants({
          variant: 'gradient',
          size: 'xl',
          className: 'mt-6 mb-4 flex w-64 items-center justify-center gap-2 text-sm font-bold',
        })}
      >
        <Send
          strokeWidth={2.5}
          aria-hidden="true"
        />
        pauloturcko@gmail.com
      </a>
      <ul className="text-muted-foreground flex justify-center gap-4">
        <li>
          <a
            href="https://github.com/pauloturcko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (abre em nova aba)"
            className="hover:text-primary transition-colors"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pauloturco/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (abre em nova aba)"
            className="hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:pauloturcko@gmail.com"
            aria-label="Enviar e-mail"
            className="hover:text-primary transition-colors"
          >
            <Mail aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  )
}
