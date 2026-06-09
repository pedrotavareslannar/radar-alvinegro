import React from 'react'

/**
 * Radar Atleticano primary logo lockup: a gold vertical bar followed by the
 * uppercase wordmark. Use `mark` for the compact "RA" monogram (favicons/avatars).
 */
export function Logo({
  variant = 'wordmark',
  size = 'md',
  onLight = false,
  className = '',
  ...rest
}) {
  const scale = { sm: 0.72, md: 1, lg: 1.5 }[size] || 1
  const barH = Math.round(32 * scale)
  const barW = Math.max(4, Math.round(8 * scale))
  const fs = Math.round(26 * scale)
  const ink = onLight ? 'var(--preto)' : 'var(--text-strong)'

  const bar = (
    <span
      aria-hidden="true"
      style={{
        width: barW,
        height: barH,
        background: 'var(--ouro)',
        borderRadius: 'var(--radius-sm)',
        flexShrink: 0,
      }}
    />
  )

  if (variant === 'mark') {
    return (
      <span
        className={className}
        style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(6 * scale) }}
        {...rest}
      >
        {bar}
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-extrabold)',
            fontSize: fs,
            letterSpacing: '-0.04em',
            color: ink,
            lineHeight: 1,
          }}
        >
          RA
        </span>
      </span>
    )
  }

  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(12 * scale) }}
      {...rest}
    >
      {bar}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-bold)',
          fontSize: fs,
          letterSpacing: 'var(--tracking-tight)',
          textTransform: 'uppercase',
          color: ink,
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        Radar Atleticano
      </span>
    </span>
  )
}
