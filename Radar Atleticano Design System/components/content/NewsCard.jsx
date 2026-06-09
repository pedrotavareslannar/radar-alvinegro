import React from 'react'
import { Kicker } from './Kicker.jsx'
import { Byline } from './Byline.jsx'

/**
 * NewsCard — the core editorial unit of the portal.
 * featured: large hero image + xl title. default: medium image + lg title.
 * compact: tiny thumbnail beside a 3-line title, for the "latest" rail.
 */
export function NewsCard({
  title,
  resumo,
  category,
  author,
  date,
  image,
  href = '#',
  variant = 'default',
  className = '',
  ...rest
}) {
  const Cover = ({ height }) => (
    <div
      style={{
        width: '100%',
        height,
        overflow: 'hidden',
        background: image
          ? undefined
          : 'linear-gradient(135deg, #161616 0%, #0D0D0D 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {image ? (
        <img
          className="ra-card__img"
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      ) : (
        <span aria-hidden="true" style={{ width: 6, height: '38%', background: 'var(--ouro)', borderRadius: 'var(--radius-sm)', opacity: 0.55 }} />
      )}
    </div>
  )

  if (variant === 'compact') {
    return (
      <a
        href={href}
        className={`ra-card ra-card--compact ${className}`}
        style={{ display: 'flex', gap: 12, alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--space-4)', textDecoration: 'none' }}
        {...rest}
      >
        <div style={{ width: 80, height: 64, flexShrink: 0, overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
          <Cover height="100%" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h3 className="ra-card__title" style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', lineHeight: 1.25, color: 'var(--text-strong)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>
            {title}
          </h3>
          {date && <Byline date={date} />}
        </div>
        {cardStyles}
      </a>
    )
  }

  const featured = variant === 'featured'
  return (
    <a
      href={href}
      className={`ra-card ${className}`}
      style={{ display: 'block', textDecoration: 'none' }}
      {...rest}
    >
      <article
        className="ra-card__frame"
        style={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          background: 'var(--surface-base)',
          transition: 'border-color var(--dur-fast) var(--ease-standard)',
        }}
      >
        <Cover height={featured ? 224 : 192} />
        <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {category && <Kicker>{category}</Kicker>}
          <h2 className="ra-card__title" style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: featured ? 'var(--text-xl)' : 'var(--text-lg)', lineHeight: 'var(--leading-tight)', color: 'var(--text-strong)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>
            {title}
          </h2>
          {resumo && (
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-secondary)' }}>
              {resumo}
            </p>
          )}
          <Byline author={author} date={date} />
        </div>
      </article>
      {cardStyles}
    </a>
  )
}

const cardStyles = (
  <style>{`
    .ra-card__img { transition: transform var(--dur-normal) var(--ease-standard); }
    .ra-card:hover .ra-card__img { transform: scale(1.05); }
    .ra-card:hover .ra-card__frame { border-color: var(--ouro-50); }
    .ra-card:hover .ra-card__title { color: var(--accent); }
  `}</style>
)
