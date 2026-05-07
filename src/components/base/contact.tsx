import { Button } from '@/components/ui/button.tsx'
import { Mail, Send } from 'lucide-react'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-4 px-2 py-12 pb-20 md:mt-24 md:px-6 md:py-12 lg:px-12 lg:py-18 xl:px-36 xl:py-18"
    >
      <span className="text-primary font-mono text-xs font-normal uppercase text-center">// 04. Contato</span>
      <h2 className="text-center bg-linear-to-r from-[#FFFFFF] to-[#8F8F8F] bg-clip-text font-mono text-3xl font-bold text-transparent md:text-5xl">
        Vamos construir algo?
      </h2>
      <a
        href="mailto:pauloturcko@gmail.com"
        className="mt-6 mb-4 flex justify-center"
      >
        <Button
          variant="gradient"
          size="xl"
          className="flex w-64 items-center justify-center gap-2 text-sm font-bold"
        >
          <Send strokeWidth={2.5} />
          pauloturcko@gmail.com
        </Button>
      </a>
      <div>
        <ul className="text-muted-foreground flex gap-4 justify-center">
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
        </ul>
      </div>
    </div>
  )
}