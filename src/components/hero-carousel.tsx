'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Noticia } from '@/lib/types'

export default function HeroCarousel({ slides }: { slides: Noticia[] }) {
  const [i, setI] = useState(0)
  const n = slides.length || 1
  const go = (d: number) => setI(p => (p + d + n) % n)
  const slide = slides[i]

  if (!slide) return null

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 460, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: slide.imagem_capa ? '#0D0D0D' : 'linear-gradient(135deg, #161616 0%, #0D0D0D 100%)' }}
    >
      {/* Imagem */}
      {slide.imagem_capa ? (
        <img
          src={slide.imagem_capa}
          alt={slide.titulo}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 rounded-sm opacity-50"
          style={{ height: 140, background: 'var(--ouro)' }}
        />
      )}

      {/* Gradiente de proteção */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.55) 30%, rgba(13,13,13,0) 60%)' }} />

      {/* Conteúdo */}
      <Link
        href={`/noticias/${slide.slug}`}
        className="absolute left-0 right-0 bottom-0 flex flex-col gap-3 text-left"
        style={{ padding: '0 32px 32px' }}
      >
        {slide.categoria && (
          <span
            className="self-start text-xs font-bold uppercase px-2.5 py-1"
            style={{ letterSpacing: '0.12em', color: 'var(--preto)', background: 'var(--ouro)', borderRadius: 'var(--radius-sm)' }}
          >
            {slide.categoria}
          </span>
        )}
        <h2
          className="m-0 font-extrabold text-3xl leading-tight"
          style={{ maxWidth: '70%', letterSpacing: '-0.02em', color: 'var(--text-strong)', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
        >
          {slide.titulo}
        </h2>
      </Link>

      {/* Setas */}
      {n > 1 && (
        <>
          <ArrowBtn dir="left" onClick={() => go(-1)} />
          <ArrowBtn dir="right" onClick={() => go(1)} />

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Slide ${k + 1}`}
                className="h-2 transition-all duration-150 border-none cursor-pointer"
                style={{
                  width: k === i ? 22 : 8,
                  borderRadius: 'var(--radius-full)',
                  background: k === i ? 'var(--ouro)' : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ArrowBtn({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Anterior' : 'Próximo'}
      className="absolute top-[38%] w-10 h-10 inline-flex items-center justify-center text-lg cursor-pointer transition-all duration-150 ra-arrow"
      style={{
        [dir]: 16,
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border)',
        background: 'rgba(13,13,13,0.6)',
        color: 'var(--text-strong)',
        backdropFilter: 'blur(4px)',
      }}
    >
      {dir === 'left' ? '‹' : '›'}
      <style>{`.ra-arrow:hover { background: var(--ouro) !important; color: var(--preto) !important; border-color: var(--ouro) !important; }`}</style>
    </button>
  )
}
