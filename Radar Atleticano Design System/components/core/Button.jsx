import React from 'react'

/**
 * Button — Radar Atleticano action control.
 * Gold (primary), outline (secondary), and ghost (tertiary) tones over the dark canvas.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  style,
  children,
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 14px', height: 36, fontSize: 'var(--text-sm)' },
    md: { padding: '0 20px', height: 44, fontSize: 'var(--text-sm)' },
    lg: { padding: '0 28px', height: 52, fontSize: 'var(--text-base)' },
  }[size]

  const tones = {
    primary: {
      background: 'var(--ouro)',
      color: 'var(--preto)',
      border: '1px solid var(--ouro)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-nav)',
      border: '1px solid transparent',
    },
  }[variant]

  return (
    <button
      type={type}
      disabled={disabled}
      className={`ra-btn ra-btn--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: fullWidth ? '100%' : undefined,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
        ...sizes,
        ...tones,
        ...style,
      }}
      {...rest}
    >
      {children}
      <style>{`
        .ra-btn:active { transform: translateY(1px); }
        .ra-btn--primary:hover:not(:disabled) { background: var(--ouro-escuro); border-color: var(--ouro-escuro); }
        .ra-btn--outline:hover:not(:disabled) { border-color: var(--ouro-50); color: var(--accent); }
        .ra-btn--ghost:hover:not(:disabled) { color: var(--accent); }
      `}</style>
    </button>
  )
}
