import React from 'react'

/**
 * SectionHeading — the homepage section header pattern: an optional gold eyebrow,
 * a bold title, and an optional action link aligned to the right (e.g. "+ NOTÍCIAS").
 */
export function SectionHeading({
  title,
  eyebrow,
  action,
  onAction,
  align = 'left',
  className = '',
  ...rest
}) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 'var(--space-6)',
      }}
      {...rest}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: align === 'center' ? 'center' : 'flex-start', width: align === 'center' ? '100%' : 'auto' }}>
        {eyebrow && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--weight-bold)',
              fontSize: '0.6875rem',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-widest)',
              color: 'var(--text-muted)',
            }}
          >
            {eyebrow}
          </span>
        )}
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-extrabold)',
            fontSize: 'var(--text-2xl)',
            letterSpacing: 'var(--tracking-tight)',
            color: 'var(--text-strong)',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>
      </div>
      {action && (
        <button
          onClick={onAction}
          className="ra-section-action"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-bold)',
            fontSize: 'var(--text-xs)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-widest)',
            color: 'var(--accent)',
            whiteSpace: 'nowrap',
            transition: 'opacity var(--dur-fast) var(--ease-standard)',
          }}
        >
          <span aria-hidden="true">+</span>{action}
          <style>{`.ra-section-action:hover { opacity: 0.75; }`}</style>
        </button>
      )}
    </div>
  )
}
