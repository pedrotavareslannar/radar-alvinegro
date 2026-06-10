'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'

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

  return (
    <header className="sticky top-0 z-50 border-b"
      style={{ background: 'var(--surface-overlay)', backdropFilter: 'blur(8px)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center gap-7">

        {/* Logo */}
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="https://wjhjznlryougzayfspcy.supabase.co/storage/v1/object/public/imagens/logo/logo-radar-atleticano.png"
            alt="Radar Atleticano"
            width={48}
            height={56}
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="flex gap-5 mr-auto">
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

        {/* Redes sociais + busca */}
        <div className="flex items-center gap-3.5" style={{ color: 'var(--text-nav)' }}>
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

      </div>
    </header>
  )
}
