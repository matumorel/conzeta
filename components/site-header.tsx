'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Nuestra perspectiva' },
  { id: 'que-hacemos', label: 'Qué hacemos' },
  { id: 'quiero-exportar', label: 'Comercio internacional' },
  { id: 'contacto', label: 'Contacto' },
]

const HEADER_OFFSET = 76

export function SiteHeader() {
  const [active, setActive] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      const fromTop = window.scrollY + HEADER_OFFSET + 24
      let current = NAV_ITEMS[0].id
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= fromTop) current = item.id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1].id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    setOpen(false)
    window.scrollTo({
      top: el.offsetTop - HEADER_OFFSET,
      behavior: 'smooth',
    })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-border bg-card/90 backdrop-blur-md' : 'border-transparent bg-card',
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-6 px-5 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => goTo(e, 'inicio')}
          className="flex shrink-0 items-center gap-3"
          aria-label="conZeta, ir al inicio"
        >
          <Image
            src="/conzeta-logo-menu.png"
            alt="Logo de ConZeta Consultora"
            width={200}
            height={200}
            priority
            className="h-11 w-11 shrink-0 rounded-md object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-brand-violet">conZeta</span>
            <span className="mt-1 text-[9px] font-medium lowercase tracking-[0.22em] text-muted-foreground">
              consultora
            </span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => goTo(e, item.id)}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm transition-colors',
                active === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
              <span
                className={cn(
                  'absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-primary transition-transform duration-300',
                  active === item.id ? 'scale-x-100' : 'scale-x-0',
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            onClick={(e) => goTo(e, 'contacto')}
            className="hidden rounded-md bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Agendar reunión
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-card px-5 pb-6 pt-2 shadow-lg md:hidden"
      >
        <nav aria-label="Navegación móvil" className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => goTo(e, item.id)}
              className={cn(
                'border-b border-border/70 py-3 text-sm last:border-b-0',
                active === item.id ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
