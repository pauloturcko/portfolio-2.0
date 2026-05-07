import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { Github } from '@/assets/icons/github.tsx'
import { Linkedin } from '@/assets/icons/linkedin.tsx'
import { Mail } from 'lucide-react'

type MenuItem = {
  label: string
  href: string
  ariaLabel?: string
  rotation?: number
  hoverStyles?: {
    bgColor?: string
    textColor?: string
  }
}

export type BubbleMenuProps = {
  logo?: ReactNode | string
  onMenuClick?: (open: boolean) => void
  className?: string
  style?: CSSProperties
  menuAriaLabel?: string
  menuBg?: string
  menuContentColor?: string
  useFixedPosition?: boolean
  items?: MenuItem[]
  animationEase?: string
  animationDuration?: number
  staggerDelay?: number
}

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: 'Sobre',
    href: '#about',
    ariaLabel: 'Sobre',
  },
  {
    label: 'Experiencia',
    href: '#jobs',
    ariaLabel: 'Experiencia',
  },
  {
    label: 'Projetos',
    href: '#projects',
    ariaLabel: 'Projetos',
  },
  {
    label: 'Contato',
    href: '#contact',
    ariaLabel: 'Contato',
  },
]

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = false,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mainElement, setMainElement] = useState<HTMLElement | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const bubblesRef = useRef<HTMLAnchorElement[]>([])

  const menuItems = items?.length ? items : DEFAULT_ITEMS

  const containerClassName = [
    'bubble-menu',
    'relative',
    'pointer-events-auto',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleToggle = () => {
    const nextState = !isMenuOpen
    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
    onMenuClick?.(nextState)
  }

  useEffect(() => {
    setMounted(true)
    setMainElement(document.getElementById('app-main'))
  }, [])

  useEffect(() => {
    if (!showOverlay) return

    const nav = navRef.current
    const overlay = overlayRef.current
    if (!nav || !overlay) return

    const updatePosition = () => {
      const rect = nav.getBoundingClientRect()
      const maxLeft = window.innerWidth - overlay.offsetWidth - 16
      const left = Math.min(Math.max(16, rect.right - overlay.offsetWidth), maxLeft)

      overlay.style.top = `${rect.bottom + 12}px`
      overlay.style.left = `${left}px`
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [showOverlay])

  useEffect(() => {
    if (!isMenuOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    const backdrop = backdropRef.current
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter(Boolean)
    if (!backdrop || !overlay || !bubbles.length) return

    if (isMenuOpen) {
      gsap.set(backdrop, { display: 'block', opacity: 1 })
      gsap.set(overlay, { display: 'block', opacity: 1, y: 0 })
      gsap.killTweensOf([backdrop, overlay, ...bubbles])
      gsap.fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: 'power2.out' },
      )
      gsap.fromTo(
        overlay,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      )

      bubbles.forEach((bubble, i) => {
        gsap.fromTo(
          bubble,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            delay: i * staggerDelay,
            duration: animationDuration,
            ease: animationEase,
          },
        )
      })
    } else if (showOverlay) {
      gsap.killTweensOf([backdrop, overlay, ...bubbles])
      gsap.to(bubbles, {
        opacity: 0,
        y: -8,
        stagger: 0.04,
        duration: 0.18,
        ease: 'power2.in',
      })
      gsap.to(overlay, {
        opacity: 0,
        y: -10,
        delay: 0.05,
        duration: 0.2,
        ease: 'power2.in',
      })
      gsap.to(backdrop, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(backdrop, { display: 'none' })
          gsap.set(overlay, { display: 'none' })
          setShowOverlay(false)
        },
      })
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        onMenuClick?.(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen, onMenuClick])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
        setShowOverlay(false)
        onMenuClick?.(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen, onMenuClick])

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
      `}</style>

      <nav
        ref={navRef}
        className={containerClassName}
        style={{ ...style, zIndex: 1001 }}
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          {logo && (
            <div
              className={[
                'bubble logo-bubble',
                'inline-flex items-center justify-center',
                'rounded-full border border-white/10',
                'bg-white/6 text-white',
                'shadow-[0_10px_30px_rgba(0,0,0,0.24)]',
                'h-11 px-4',
                'backdrop-blur-md',
              ].join(' ')}
              aria-label="Logo"
              style={{
                background: menuBg,
                color: menuContentColor,
              }}
            >
              <span className="font-mono text-xs font-semibold tracking-[0.18em] uppercase">
                {typeof logo === 'string' ? (
                  <img
                    src={logo}
                    alt="Logo"
                    className="bubble-logo block max-h-6 max-w-full object-contain"
                  />
                ) : (
                  logo
                )}
              </span>
            </div>
          )}

          <button
            type="button"
            className={[
              'bubble toggle-bubble menu-btn',
              isMenuOpen ? 'open' : '',
              'inline-flex h-11 w-11 flex-col items-center justify-center',
              'rounded-full border border-white/10',
              'bg-white/6 text-white',
              'shadow-[0_10px_30px_rgba(0,0,0,0.24)]',
              'cursor-pointer p-0 backdrop-blur-md',
            ].join(' ')}
            onClick={handleToggle}
            aria-label={menuAriaLabel}
            aria-pressed={isMenuOpen}
            style={{ background: menuBg }}
          >
            <span
              className="menu-line mx-auto block rounded-[2px]"
              style={{
                width: 18,
                height: 2,
                background: menuContentColor,
                transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="menu-line short mx-auto block rounded-[2px]"
              style={{
                marginTop: '5px',
                width: 18,
                height: 2,
                background: menuContentColor,
                transform: isMenuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {mounted &&
        showOverlay &&
        createPortal(
          <div
            ref={overlayRef}
            className={[
              'bubble-menu-items',
              useFixedPosition ? 'fixed' : 'fixed',
              'w-[min(36rem,calc(100vw-2rem))]',
              'rounded-3xl border border-white/10 bg-black/85 p-3',
              'shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl',
              'z-[1000]',
            ].join(' ')}
            aria-hidden={!isMenuOpen}
          >
            <ul
              className="flex h-auto list-none flex-col gap-4"
              role="menu"
              aria-label="Menu links"
            >
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  role="none"
                >
                  <a
                    role="menuitem"
                    href={item.href}
                    aria-label={item.ariaLabel || item.label}
                    className={[
                      'pill-link',
                      'flex min-h-11 items-center rounded-2xl border border-white/8',
                      'bg-white/4 px-4 py-3',
                      'font-mono text-xs font-medium tracking-[0.18em] text-white uppercase',
                      'transition-all duration-200 ease-out',
                      'hover:border-white/16 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                    style={
                      {
                        color: menuContentColor,
                      } as CSSProperties
                    }
                    ref={(el) => {
                      if (el) bubblesRef.current[idx] = el
                    }}
                    onClick={() => {
                      setIsMenuOpen(false)
                      onMenuClick?.(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="text-muted-foreground flex justify-center gap-4 mt-12 mb-4">
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
          </div>,
          document.body,
        )}

      {mounted &&
        mainElement &&
        showOverlay &&
        createPortal(
          <div
            ref={backdropRef}
            className="absolute inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            aria-hidden="true"
            onClick={() => {
              setIsMenuOpen(false)
              onMenuClick?.(false)
            }}
          />,
          mainElement,
        )}
    </>
  )
}
