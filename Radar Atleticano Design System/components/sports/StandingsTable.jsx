import React from 'react'

/**
 * StandingsTable — the "Classificação" widget. A compact league table with a
 * position chip, club name (optional crest), and configurable stat columns.
 * The user's club row is highlighted in soft gold.
 */
export function StandingsTable({
  rows = [],
  columns = [{ key: 'p', label: 'P' }, { key: 'j', label: 'J' }],
  highlight,
  className = '',
  ...rest
}) {
  return (
    <div className={className} style={{ width: '100%' }} {...rest}>
      <div
        role="row"
        style={{
          display: 'grid',
          gridTemplateColumns: `1.4rem 1fr repeat(${columns.length}, 2rem)`,
          gap: 8,
          alignItems: 'center',
          padding: '0 0 10px',
          borderBottom: '1px solid var(--border)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--text-muted)',
        }}
      >
        <span>#</span>
        <span>Time</span>
        {columns.map((c) => (
          <span key={c.key} style={{ textAlign: 'center' }}>{c.label}</span>
        ))}
      </div>

      {rows.map((row, i) => {
        const active = highlight && row.team === highlight
        return (
          <div
            role="row"
            key={row.team + i}
            style={{
              display: 'grid',
              gridTemplateColumns: `1.4rem 1fr repeat(${columns.length}, 2rem)`,
              gap: 8,
              alignItems: 'center',
              padding: '9px 6px',
              margin: '0 -6px',
              borderRadius: 'var(--radius-sm)',
              background: active ? 'var(--surface-row-active)' : 'transparent',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
            }}
          >
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-xs)',
                fontWeight: 'var(--weight-bold)',
                color: active ? 'var(--preto)' : 'var(--text-secondary)',
                background: active ? 'var(--ouro)' : 'var(--surface-raised)',
                border: active ? 'none' : '1px solid var(--border)',
              }}
            >
              {row.pos ?? i + 1}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
                color: active ? 'var(--accent)' : 'var(--text-strong)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {row.crest && <img src={row.crest} alt="" style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }} />}
              {row.team}
            </span>
            {columns.map((c) => (
              <span key={c.key} style={{ textAlign: 'center', color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                {row[c.key]}
              </span>
            ))}
          </div>
        )
      })}
    </div>
  )
}
