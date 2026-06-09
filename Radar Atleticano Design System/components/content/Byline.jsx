import React from 'react'

/**
 * Byline — muted "Autor · data" meta line used under headlines and on cards.
 */
export function Byline({ author, date, className = '', ...rest }) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        lineHeight: 1.4,
        color: 'var(--text-muted)',
      }}
      {...rest}
    >
      {author && <span>{author}</span>}
      {author && date && <span aria-hidden="true">·</span>}
      {date && <span>{date}</span>}
    </div>
  )
}
