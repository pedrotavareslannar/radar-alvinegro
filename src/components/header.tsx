'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Início', href: '/' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Elenco', href: '/elenco' },
  { label: 'Jogos', href: '/jogos' },
  { label: 'Classificação', href: '/classificacao' },
]

/* SVG inline para redes sociais (lucide-react 1.x não inclui mais) */
const IconTwitter = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4" />
  </svg>
)
const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const IconYoutube = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
)

const SOCIAL = [
  { Icon: IconInstagram, label: 'Instagram', href: '#' },
  { Icon: IconYoutube, label: 'Youtube', href: '#' },
  { Icon: IconTwitter, label: 'Twitter / X', href: '#' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--surface-overlay)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4 lg:gap-7">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>
          <Image
            src="https://wjhjznlryougzayfspcy.supabase.co/storage/v1/object/public/imagens/logo/logo-radar-atleticano.png"
            alt="Radar Atleticano"
            width={44}
            height={52}
            priority
          />
          <span className="text-lg font-black uppercase tracking-tight text-white hidden sm:inline">Radar Atleticano</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-5 mr-auto">
          {NAV.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href}
                className="py-1 text-sm font-semibold transition-colors duration-150 hover:text-yellow-400"
                style={{ color: active ? 'var(--ouro)' : 'var(--text-nav)', borderBottom: active ? '2px solid var(--ouro)' : '2px solid transparent' }}>
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Redes sociais + busca (desktop) */}
        <div className="hidden md:flex items-center gap-3.5 ml-auto md:ml-0" style={{ color: 'var(--text-nav)' }}>
          {SOCIAL.map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={label} className="inline-flex transition-colors duration-150 hover:text-yellow-400">
              <Icon />
            </a>
          ))}
          <span className="w-px h-4" style={{ background: 'var(--border)' }} />
          <a href="#" aria-label="Buscar" className="inline-flex transition-colors duration-150 hover:text-yellow-400">
            <Search size={17} strokeWidth={2} />
          </a>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-md transition-colors"
          style={{ color: 'var(--text-nav)', border: '1px solid var(--border)' }}
        >
          {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden border-t px-4 pb-4 pt-2 flex flex-col"
          style={{ background: 'var(--surface-overlay)', borderColor: 'var(--border)' }}>
          {NAV.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold border-b transition-colors"
                style={{ color: active ? 'var(--ouro)' : 'var(--text-nav)', borderColor: 'var(--border)' }}>
                {label}
              </Link>
            )
          })}
          <div className="flex items-center gap-5 pt-4" style={{ color: 'var(--text-nav)' }}>
            {SOCIAL.map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="inline-flex transition-colors hover:text-yellow-400">
                <Icon />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
