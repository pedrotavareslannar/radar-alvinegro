import React from 'react'

/**
 * Kicker — uppercase, gold, wide-tracked category label that sits above a headline.
 */
export function Kicker({ children, as = 'span', className = '', ...rest }) {
  const Tag = as
  return (
    <Tag
      className={className}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--text-xs)',
        lineHeight: 1.2,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-widest)',
        color: 'var(--accent)',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
