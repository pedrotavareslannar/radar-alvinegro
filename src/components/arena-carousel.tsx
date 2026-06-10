'use client'

import { useState, useEffect, useCallback } from 'react'

const BASE = 'https://wjhjznlryougzayfspcy.supabase.co/storage/v1/object/public/imagens/posts'

const FOTOS: string[] = [
  `${BASE}/arena-1.jpeg`,
  `${BASE}/arena-2.jpeg`,
  `${BASE}/arena-3.jpeg`,
  `${BASE}/arena-4.jpeg`,
  `${BASE}/arena-5.jpeg`,
  `${BASE}/arena-7.jpeg`,
]

interface ArenaCarouselProps {
  fotos?: string[]
}

export default function ArenaCarousel({ fotos = FOTOS }: ArenaCarouselProps) {
  const [atual, setAtual] = useState(0)

  const anterior = useCallback(() => {
    setAtual(i => (i === 0 ? fotos.length - 1 : i - 1))
  }, [fotos.length])

  const proximo = useCallback(() => {
    setAtual(i => (i === fotos.length - 1 ? 0 : i + 1))
  }, [fotos.length])

  useEffect(() => {
    if (fotos.length <= 1) return
    const t = setInterval(proximo, 5000)
    return () => clearInterval(t)
  }, [proximo, fotos.length])

  if (fotos.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '16/7' }}>
      {/* Slides */}
      {fotos.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === atual ? 1 : 0, pointerEvents: i === atual ? 'auto' : 'none' }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Seta esquerda */}
      {fotos.length > 1 && (
        <button
          onClick={anterior}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-colors duration-150"
          style={{ background: 'rgba(13,13,13,0.55)', backdropFilter: 'blur(6px)', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
          onMouseOver={e => { e.currentTarget.style.background = 'var(--ouro)'; e.currentTarget.style.color = 'var(--preto)' }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(13,13,13,0.55)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Seta direita */}
      {fotos.length > 1 && (
        <button
          onClick={proximo}
          aria-label="Próximo"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 transition-colors duration-150"
          style={{ background: 'rgba(13,13,13,0.55)', backdropFilter: 'blur(6px)', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
          onMouseOver={e => { e.currentTarget.style.background = 'var(--ouro)'; e.currentTarget.style.color = 'var(--preto)' }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(13,13,13,0.55)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Dots */}
      {fotos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              aria-label={`Foto ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === atual ? 20 : 8,
                height: 8,
                borderRadius: 'var(--radius-full)',
                background: i === atual ? 'var(--ouro)' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
