// Kit-local helpers: a Lucide <Icon> wrapper and a standard-ratio <Photo> slot.

/**
 * Icon — renders a Lucide glyph. lucide.createIcons() (called by App after every
 * render) swaps the <i> for an inline SVG that inherits currentColor.
 */
function Icon({ name, size = 18, style, ...rest }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex', ...style }} {...rest}></i>;
}

/**
 * Photo — a standard-ratio image area with a branded gold-bar placeholder.
 * Drop a real photo in via `src` at the documented size and it fills cover.
 * Standard sizes in this kit:  hero 1600×900 (16:9) · news 800×600 (4:3) · arena 1280×720 (16:9)
 */
function Photo({ src, alt = '', ratio = '16 / 9', radius = 'var(--radius-md)', label, style }) {
  const [failed, setFailed] = React.useState(false);
  const show = src && !failed;
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', background: 'linear-gradient(135deg, #1b1b1b 0%, #0D0D0D 100%)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      {show ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
      ) : (
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span aria-hidden="true" style={{ width: 7, height: 36, background: 'var(--ouro)', borderRadius: 'var(--radius-sm)', opacity: 0.45 }} />
          {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', opacity: 0.7 }}>{label}</span>}
        </span>
      )}
    </div>
  );
}
