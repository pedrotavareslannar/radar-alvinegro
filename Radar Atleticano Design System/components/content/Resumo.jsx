import React from 'react'

/**
 * Resumo — the lead/standfirst paragraph, set off by the signature gold left rule.
 */
export function Resumo({ children, className = '', ...rest }) {
  return (
    <p
      className={className}
      style={{
        margin: 0,
        borderLeft: 'var(--border-accent-width) solid var(--ouro)',
        paddingLeft: 'var(--space-4)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xl)',
        lineHeight: 'var(--leading-relaxed)',
        color: 'var(--text-secondary)',
      }}
      {...rest}
    >
      {children}
    </p>
  )
}
