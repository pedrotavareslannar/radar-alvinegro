import React from 'react'

/**
 * HeroCarousel — the featured story carousel at the top of the homepage.
 * Full-bleed cover image, bottom protection gradient, gold category kicker and
 * headline, prev/next arrows and dot indicators. Auto-falls back to the branded
 * placeholder when a slide has no image.
 */
export function HeroCarousel({ slides = [], onOpen, height = 460, className = '', ...rest }) {
  const [i, setI] = React.useState(0)
  const n = slides.length || 1
  const go = (d) => setI((p) => (p + d + n) % n)
  const slide = slides[i] || {}

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        height,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: slide.image ? '#0D0D0D' : 'linear-gradient(135deg, #161616 0%, #0D0D0D 100%)',
      }}
      {...rest}
    >
      {slide.image ? (
        <img src={slide.image} alt={slide.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
      ) : (
        <span aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 10, height: 140, background: 'var(--ouro)', borderRadius: 'var(--radius-sm)', opacity: 0.5 }} />
      )}

      {/* bottom protection gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.55) 30%, rgba(13,13,13,0) 60%)' }} />

      {/* content */}
      <button
        onClick={() => onOpen && onOpen(slide)}
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        {slide.category && (
          <span style={{ alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--preto)', background: 'var(--ouro)', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>
            {slide.category}
          </span>
        )}
        <h2 style={{ margin: 0, maxWidth: '70%', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-extrabold)', fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
          {slide.title}
        </h2>
      </button>

      {/* arrows */}
      {n > 1 && (
        <React.Fragment>
          <HeroArrow dir="left" onClick={() => go(-1)} />
          <HeroArrow dir="right" onClick={() => go(1)} />
          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
            {slides.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Ir para o slide ${k + 1}`}
                style={{ width: k === i ? 22 : 8, height: 8, borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer', background: k === i ? 'var(--ouro)' : 'rgba(255,255,255,0.4)', transition: 'all var(--dur-fast) var(--ease-standard)' }}
              />
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

function HeroArrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Anterior' : 'Próximo'}
      className="ra-hero-arrow"
      style={{
        position: 'absolute',
        top: '38%',
        [dir]: 16,
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border)',
        background: 'rgba(13,13,13,0.6)',
        color: 'var(--text-strong)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        backdropFilter: 'blur(4px)',
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      }}
    >
      {dir === 'left' ? '‹' : '›'}
      <style>{`.ra-hero-arrow:hover { background: var(--ouro); color: var(--preto); border-color: var(--ouro); }`}</style>
    </button>
  )
}
