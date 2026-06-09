import React from 'react'

/**
 * Crest — small circular team badge. Renders an image when given, else a
 * monochrome fallback with the team abbreviation. Keeps fixtures legible
 * before real club crests are wired in.
 */
function Crest({ abbr, src, size = 28 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: src ? 'transparent' : 'var(--surface-raised)',
        border: '1px solid var(--border)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.34,
        color: 'var(--text-secondary)',
      }}
    >
      {src ? <img src={src} alt={abbr} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : abbr?.slice(0, 3)}
    </span>
  )
}

/**
 * MatchFixture — one row of the "Próximos jogos" widget: two crests + abbreviations
 * separated by an X, with a competition / date / venue meta line beneath.
 */
export function MatchFixture({ home, away, competition, date, venue, className = '', ...rest }) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 'var(--space-4) 0',
        borderBottom: '1px solid var(--border)',
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{home.abbr}</span>
          <Crest abbr={home.abbr} src={home.crest} />
        </span>
        <span aria-hidden="true" style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>×</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <Crest abbr={away.abbr} src={away.crest} />
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{away.abbr}</span>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', letterSpacing: '0.04em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
        {competition && <span style={{ color: 'var(--accent)', fontWeight: 'var(--weight-bold)' }}>{competition}</span>}
        {date && <span aria-hidden="true">·</span>}
        {date && <span>{date}</span>}
        {venue && <span aria-hidden="true">·</span>}
        {venue && <span>{venue}</span>}
      </div>
    </div>
  )
}
