/* @ds-bundle: {"format":3,"namespace":"RadarAlvinegroDesignSystem_9c128d","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Byline","sourcePath":"components/content/Byline.jsx"},{"name":"Kicker","sourcePath":"components/content/Kicker.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"Resumo","sourcePath":"components/content/Resumo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"HeroCarousel","sourcePath":"components/media/HeroCarousel.jsx"},{"name":"MatchFixture","sourcePath":"components/sports/MatchFixture.jsx"},{"name":"StandingsTable","sourcePath":"components/sports/StandingsTable.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"b81807577250","components/content/Byline.jsx":"51fab9bdce3a","components/content/Kicker.jsx":"ae8ef14c538d","components/content/NewsCard.jsx":"3fc8f61e874a","components/content/Resumo.jsx":"42ec0f1ba7e3","components/core/Button.jsx":"55a3601fcf1a","components/core/SectionHeading.jsx":"29b67badc680","components/media/HeroCarousel.jsx":"9bbcb3f7cb3b","components/sports/MatchFixture.jsx":"685f5e7da301","components/sports/StandingsTable.jsx":"6451e26f96ae","ui_kits/portal/ArticlePage.jsx":"4a701e2069ab","ui_kits/portal/Chrome.jsx":"54148d499dd7","ui_kits/portal/Helpers.jsx":"727db40f1530","ui_kits/portal/Homepage.jsx":"84a1a082386d","ui_kits/portal/data.js":"d04d4634a4ea"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RadarAlvinegroDesignSystem_9c128d = window.RadarAlvinegroDesignSystem_9c128d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radar Atleticano primary logo lockup: a gold vertical bar followed by the
 * uppercase wordmark. Use `mark` for the compact "RA" monogram (favicons/avatars).
 */
function Logo({
  variant = 'wordmark',
  size = 'md',
  onLight = false,
  className = '',
  ...rest
}) {
  const scale = {
    sm: 0.72,
    md: 1,
    lg: 1.5
  }[size] || 1;
  const barH = Math.round(32 * scale);
  const barW = Math.max(4, Math.round(8 * scale));
  const fs = Math.round(26 * scale);
  const ink = onLight ? 'var(--preto)' : 'var(--text-strong)';
  const bar = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: barW,
      height: barH,
      background: 'var(--ouro)',
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0
    }
  });
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(6 * scale)
      }
    }, rest), bar, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-extrabold)',
        fontSize: fs,
        letterSpacing: '-0.04em',
        color: ink,
        lineHeight: 1
      }
    }, "RA"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: Math.round(12 * scale)
    }
  }, rest), bar, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: fs,
      letterSpacing: 'var(--tracking-tight)',
      textTransform: 'uppercase',
      color: ink,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "Radar Atleticano"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Byline — muted "Autor · data" meta line used under headlines and on cards.
 */
function Byline({
  author,
  date,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.4,
      color: 'var(--text-muted)'
    }
  }, rest), author && /*#__PURE__*/React.createElement("span", null, author), author && date && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), date && /*#__PURE__*/React.createElement("span", null, date));
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Byline.jsx", error: String((e && e.message) || e) }); }

// components/content/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kicker — uppercase, gold, wide-tracked category label that sits above a headline.
 */
function Kicker({
  children,
  as = 'span',
  className = '',
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--accent)'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NewsCard — the core editorial unit of the portal.
 * featured: large hero image + xl title. default: medium image + lg title.
 * compact: tiny thumbnail beside a 3-line title, for the "latest" rail.
 */
function NewsCard({
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
  const Cover = ({
    height
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      overflow: 'hidden',
      background: image ? undefined : 'linear-gradient(135deg, #161616 0%, #0D0D0D 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "ra-card__img",
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: '38%',
      background: 'var(--ouro)',
      borderRadius: 'var(--radius-sm)',
      opacity: 0.55
    }
  }));
  if (variant === 'compact') {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: `ra-card ra-card--compact ${className}`,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        borderBottom: '1px solid var(--border)',
        paddingBottom: 'var(--space-4)',
        textDecoration: 'none'
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 80,
        height: 64,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: 'var(--radius-sm)'
      }
    }, /*#__PURE__*/React.createElement(Cover, {
      height: "100%"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      className: "ra-card__title",
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.25,
        color: 'var(--text-strong)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, title), date && /*#__PURE__*/React.createElement(__ds_scope.Byline, {
      date: date
    })), cardStyles);
  }
  const featured = variant === 'featured';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `ra-card ${className}`,
    style: {
      display: 'block',
      textDecoration: 'none'
    }
  }, rest), /*#__PURE__*/React.createElement("article", {
    className: "ra-card__frame",
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--surface-base)',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Cover, {
    height: featured ? 224 : 192
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, category && /*#__PURE__*/React.createElement(__ds_scope.Kicker, null, category), /*#__PURE__*/React.createElement("h2", {
    className: "ra-card__title",
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: featured ? 'var(--text-xl)' : 'var(--text-lg)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-strong)',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, title), resumo && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-secondary)'
    }
  }, resumo), /*#__PURE__*/React.createElement(__ds_scope.Byline, {
    author: author,
    date: date
  }))), cardStyles);
}
const cardStyles = /*#__PURE__*/React.createElement("style", null, `
    .ra-card__img { transition: transform var(--dur-normal) var(--ease-standard); }
    .ra-card:hover .ra-card__img { transform: scale(1.05); }
    .ra-card:hover .ra-card__frame { border-color: var(--ouro-50); }
    .ra-card:hover .ra-card__title { color: var(--accent); }
  `);
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Resumo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Resumo — the lead/standfirst paragraph, set off by the signature gold left rule.
 */
function Resumo({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: className,
    style: {
      margin: 0,
      borderLeft: 'var(--border-accent-width) solid var(--ouro)',
      paddingLeft: 'var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Resumo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Resumo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Radar Atleticano action control.
 * Gold (primary), outline (secondary), and ghost (tertiary) tones over the dark canvas.
 */
function Button({
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
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: '0 28px',
      height: 52,
      fontSize: 'var(--text-base)'
    }
  }[size];
  const tones = {
    primary: {
      background: 'var(--ouro)',
      color: 'var(--preto)',
      border: '1px solid var(--ouro)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-nav)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: `ra-btn ra-btn--${variant} ${className}`,
    style: {
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
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("style", null, `
        .ra-btn:active { transform: translateY(1px); }
        .ra-btn--primary:hover:not(:disabled) { background: var(--ouro-escuro); border-color: var(--ouro-escuro); }
        .ra-btn--outline:hover:not(:disabled) { border-color: var(--ouro-50); color: var(--accent); }
        .ra-btn--ghost:hover:not(:disabled) { color: var(--accent); }
      `));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — the homepage section header pattern: an optional gold eyebrow,
 * a bold title, and an optional action link aligned to the right (e.g. "+ NOTÍCIAS").
 */
function SectionHeading({
  title,
  eyebrow,
  action,
  onAction,
  align = 'left',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 'var(--space-6)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      width: align === 'center' ? '100%' : 'auto'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: '0.6875rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      lineHeight: 1.1
    }
  }, title)), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    className: "ra-section-action",
    style: {
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
      transition: 'opacity var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "+"), action, /*#__PURE__*/React.createElement("style", null, `.ra-section-action:hover { opacity: 0.75; }`)));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/media/HeroCarousel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HeroCarousel — the featured story carousel at the top of the homepage.
 * Full-bleed cover image, bottom protection gradient, gold category kicker and
 * headline, prev/next arrows and dot indicators. Auto-falls back to the branded
 * placeholder when a slide has no image.
 */
function HeroCarousel({
  slides = [],
  onOpen,
  height = 460,
  className = '',
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const n = slides.length || 1;
  const go = d => setI(p => (p + d + n) % n);
  const slide = slides[i] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: slide.image ? '#0D0D0D' : 'linear-gradient(135deg, #161616 0%, #0D0D0D 100%)'
    }
  }, rest), slide.image ? /*#__PURE__*/React.createElement("img", {
    src: slide.image,
    alt: slide.title,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 10,
      height: 140,
      background: 'var(--ouro)',
      borderRadius: 'var(--radius-sm)',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.55) 30%, rgba(13,13,13,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen && onOpen(slide),
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, slide.category && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--preto)',
      background: 'var(--ouro)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)'
    }
  }, slide.category), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: '70%',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      textShadow: '0 2px 24px rgba(0,0,0,0.5)'
    }
  }, slide.title)), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroArrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(HeroArrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, slides.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    "aria-label": `Ir para o slide ${k + 1}`,
    style: {
      width: k === i ? 22 : 8,
      height: 8,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      cursor: 'pointer',
      background: k === i ? 'var(--ouro)' : 'rgba(255,255,255,0.4)',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  })))));
}
function HeroArrow({
  dir,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": dir === 'left' ? 'Anterior' : 'Próximo',
    className: "ra-hero-arrow",
    style: {
      position: 'absolute',
      top: '38%',
      [dir]: 16,
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border)',
      background: 'rgba(13,13,13,0.6)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      backdropFilter: 'blur(4px)',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, dir === 'left' ? '‹' : '›', /*#__PURE__*/React.createElement("style", null, `.ra-hero-arrow:hover { background: var(--ouro); color: var(--preto); border-color: var(--ouro); }`));
}
Object.assign(__ds_scope, { HeroCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/HeroCarousel.jsx", error: String((e && e.message) || e) }); }

// components/sports/MatchFixture.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Crest — small circular team badge. Renders an image when given, else a
 * monochrome fallback with the team abbreviation. Keeps fixtures legible
 * before real club crests are wired in.
 */
function Crest({
  abbr,
  src,
  size = 28
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      color: 'var(--text-secondary)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: abbr,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : abbr?.slice(0, 3));
}

/**
 * MatchFixture — one row of the "Próximos jogos" widget: two crests + abbreviations
 * separated by an X, with a competition / date / venue meta line beneath.
 */
function MatchFixture({
  home,
  away,
  competition,
  date,
  venue,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border)'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, home.abbr), /*#__PURE__*/React.createElement(Crest, {
    abbr: home.abbr,
    src: home.crest
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    abbr: away.abbr,
    src: away.crest
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, away.abbr))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: '0.6875rem',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, competition && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--weight-bold)'
    }
  }, competition), date && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), date && /*#__PURE__*/React.createElement("span", null, date), venue && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), venue && /*#__PURE__*/React.createElement("span", null, venue)));
}
Object.assign(__ds_scope, { MatchFixture });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sports/MatchFixture.jsx", error: String((e && e.message) || e) }); }

// components/sports/StandingsTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StandingsTable — the "Classificação" widget. A compact league table with a
 * position chip, club name (optional crest), and configurable stat columns.
 * The user's club row is highlighted in soft gold.
 */
function StandingsTable({
  rows = [],
  columns = [{
    key: 'p',
    label: 'P'
  }, {
    key: 'j',
    label: 'J'
  }],
  highlight,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      width: '100%'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "row",
    style: {
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
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "#"), /*#__PURE__*/React.createElement("span", null, "Time"), columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: {
      textAlign: 'center'
    }
  }, c.label))), rows.map((row, i) => {
    const active = highlight && row.team === highlight;
    return /*#__PURE__*/React.createElement("div", {
      role: "row",
      key: row.team + i,
      style: {
        display: 'grid',
        gridTemplateColumns: `1.4rem 1fr repeat(${columns.length}, 2rem)`,
        gap: 8,
        alignItems: 'center',
        padding: '9px 6px',
        margin: '0 -6px',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--surface-row-active)' : 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
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
        border: active ? 'none' : '1px solid var(--border)'
      }
    }, row.pos ?? i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
        color: active ? 'var(--accent)' : 'var(--text-strong)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, row.crest && /*#__PURE__*/React.createElement("img", {
      src: row.crest,
      alt: "",
      style: {
        width: 18,
        height: 18,
        objectFit: 'contain',
        flexShrink: 0
      }
    }), row.team), columns.map(c => /*#__PURE__*/React.createElement("span", {
      key: c.key,
      style: {
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, row[c.key])));
  }));
}
Object.assign(__ds_scope, { StandingsTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sports/StandingsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/ArticlePage.jsx
try { (() => {
// Article page — kicker, headline, gold-ruled resumo, byline, hero photo, prose.
// Mirrors production noticias/[slug]/page.tsx: max-w-3xl reading column.

function ArticlePage({
  id,
  onBack,
  onOpen
}) {
  const n = NEWS.find(x => x.id === id) || NEWS[0];
  const related = NEWS.filter(x => x.id !== n.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    active: "Not\xEDcias",
    onHome: onBack,
    onCategory: onBack
  }), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--container-read)',
      margin: '0 auto',
      padding: '40px var(--container-pad)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "ra-navlink",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-nav)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      padding: 0,
      marginBottom: 24,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Voltar"), /*#__PURE__*/React.createElement(Kicker, {
    as: "div"
  }, n.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-5xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: '16px 0 24px'
    }
  }, n.title), n.resumo && /*#__PURE__*/React.createElement(Resumo, null, n.resumo), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      margin: '24px 0',
      paddingBottom: 32,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", null, n.author || 'Redação'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, n.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: n.image,
    alt: n.title,
    ratio: "16 / 9",
    label: "1280\xD7720"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, (n.body || ['Conteúdo em preparação.']).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 32,
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--text-muted)'
    }
  }, "Leia tamb\xE9m"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, related.map(r => /*#__PURE__*/React.createElement(NewsCard, {
    key: r.id,
    variant: "compact",
    title: r.title,
    date: r.date,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(r.id);
    }
  }))))), /*#__PURE__*/React.createElement(Footer, null));
}

// Root router for the kit.
function App() {
  const [route, setRoute] = React.useState({
    name: 'home',
    id: null
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }, [route]);
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  });
  if (route.name === 'article') {
    return /*#__PURE__*/React.createElement(ArticlePage, {
      id: route.id,
      onBack: () => setRoute({
        name: 'home'
      }),
      onOpen: id => setRoute({
        name: 'article',
        id
      })
    });
  }
  return /*#__PURE__*/React.createElement(Homepage, {
    onOpen: id => setRoute({
      name: 'article',
      id
    })
  });
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/ArticlePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Chrome.jsx
try { (() => {
// Portal chrome — sticky header (logo + nav + social/search) and a rich footer.
// Icons: Lucide via CDN (lucide.createIcons() is called after each render).

function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
function Header({
  onHome,
  active = 'Início'
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    },
    "aria-label": "Radar Atleticano \u2014 in\xEDcio"
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "md"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      marginRight: 'auto'
    }
  }, CATEGORIAS.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat,
    onClick: cat === 'Início' ? onHome : undefined,
    className: "ra-navlink",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: active === cat ? 'var(--accent)' : 'var(--text-nav)',
      borderBottom: active === cat ? '2px solid var(--ouro)' : '2px solid transparent',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, cat))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'var(--text-nav)'
    }
  }, ['twitter', 'instagram', 'facebook', 'youtube'].map(ic => /*#__PURE__*/React.createElement("a", {
    key: ic,
    href: "#",
    className: "ra-social",
    "aria-label": ic,
    style: {
      display: 'inline-flex',
      color: 'inherit',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ra-social",
    "aria-label": "Buscar",
    style: {
      display: 'inline-flex',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18
    }
  })))), /*#__PURE__*/React.createElement("style", null, `
        .ra-navlink:hover { color: var(--accent) !important; }
        .ra-social:hover { color: var(--accent); }
      `));
}
function Footer() {
  useLucide();
  const cols = [{
    h: 'Instituto',
    items: ['Apresentação', 'História', 'SAF', 'Política de privacidade']
  }, {
    h: 'Futebol',
    items: ['Elenco', 'Comissão técnica', 'Calendário de jogos', 'Títulos']
  }, {
    h: 'Cobertura',
    items: ['Notícias', 'Transferências', 'Classificação', 'Arena MRV']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      marginTop: 'auto',
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '48px var(--container-pad) 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.2fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      maxWidth: 220
    }
  }, "Jornalismo independente sobre o Clube Atl\xE9tico Mineiro. Credibilidade, precis\xE3o e an\xE1lise.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--text-secondary)'
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    className: "ra-foot-link",
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--text-secondary)'
    }
  }, "Baixe o app"), [['apple', 'App Store'], ['play', 'Google Play']].map(([ic, label]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    className: "ra-store",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 14px',
      color: 'var(--text-strong)',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '18px var(--container-pad)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)'
    }
  }, "\xA9 2026 Radar Atleticano. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-xs)'
    }
  }, "Ve\xEDculo independente, sem v\xEDnculo oficial com o C.A.M."))), /*#__PURE__*/React.createElement("style", null, `.ra-foot-link:hover { color: var(--accent); } .ra-store:hover { border-color: var(--ouro-50); }`));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Helpers.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Kit-local helpers: a Lucide <Icon> wrapper and a standard-ratio <Photo> slot.

/**
 * Icon — renders a Lucide glyph. lucide.createIcons() (called by App after every
 * render) swaps the <i> for an inline SVG that inherits currentColor.
 */
function Icon({
  name,
  size = 18,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      ...style
    }
  }, rest));
}

/**
 * Photo — a standard-ratio image area with a branded gold-bar placeholder.
 * Drop a real photo in via `src` at the documented size and it fills cover.
 * Standard sizes in this kit:  hero 1600×900 (16:9) · news 800×600 (4:3) · arena 1280×720 (16:9)
 */
function Photo({
  src,
  alt = '',
  ratio = '16 / 9',
  radius = 'var(--radius-md)',
  label,
  style
}) {
  const [failed, setFailed] = React.useState(false);
  const show = src && !failed;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1b1b1b 0%, #0D0D0D 100%)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, show ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setFailed(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 36,
      background: 'var(--ouro)',
      borderRadius: 'var(--radius-sm)',
      opacity: 0.45
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      opacity: 0.7
    }
  }, label)));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Helpers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Homepage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Homepage — rich club-portal layout in alvinegro + gold:
// hero carousel + próximos jogos, notícias grid + classificação, Arena MRV.

function Panel({
  title,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-panel)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: 'var(--text-secondary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, footer));
}
function Homepage({
  onOpen
}) {
  const noticias = NEWS.slice(0, 3);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onHome: () => {},
    active: "In\xEDcio"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '32px var(--container-pad) 64px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 300px',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(HeroCarousel, {
    height: 460,
    slides: DESTAQUES,
    onOpen: s => onOpen(s.id)
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "Pr\xF3ximos jogos",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      fullWidth: true
    }, "Ver todos os jogos")
  }, JOGOS.map((j, i) => /*#__PURE__*/React.createElement(MatchFixture, _extends({
    key: i
  }, j))))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Not\xEDcias",
    action: "Not\xEDcias",
    onAction: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 300px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, noticias.map(n => /*#__PURE__*/React.createElement(NewsCard, {
    key: n.id,
    variant: "default",
    category: n.category,
    title: n.title,
    resumo: n.resumo,
    author: n.author,
    date: n.date,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen(n.id);
    }
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Classifica\xE7\xE3o",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      fullWidth: true
    }, "Classifica\xE7\xE3o completa")
  }, /*#__PURE__*/React.createElement(StandingsTable, {
    highlight: "Atl\xE9tico-MG",
    columns: [{
      key: 'p',
      label: 'P'
    }, {
      key: 'j',
      label: 'J'
    }, {
      key: 'sg',
      label: 'SG'
    }],
    rows: CLASSIFICACAO
  })))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "O templo alvinegro",
    title: "Arena MRV",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "16 / 10",
    label: "1280\xD7800 \xB7 foto da Arena"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ARENA.texto.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)'
    }
  }, p)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md"
  }, "Conhe\xE7a a Arena")))))), /*#__PURE__*/React.createElement(Footer, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/data.js
try { (() => {
// Fake editorial + sports data for the Radar Atleticano portal UI kit.
// Cover images intentionally omitted -> components render the branded gold-bar placeholder.
// Recommended real image sizes: hero 1600×900 (16:9), news cards 800×600 (4:3).

const NEWS = [{
  id: 'saf-diretor',
  category: 'Bastidores',
  title: 'SAF do Atlético anuncia novo diretor de futebol para o ciclo 2026',
  resumo: 'Executivo chega com a missão de reestruturar o departamento e dar previsibilidade ao planejamento esportivo.',
  author: 'Redação',
  date: '09 de junho de 2026',
  body: ['A SAF do Atlético-MG oficializou nesta segunda-feira a contratação do novo diretor de futebol, em movimento que faz parte da reorganização do departamento esportivo iniciada no fim da temporada passada.', 'Segundo apurou o Radar Atleticano, o profissional terá autonomia para conduzir negociações e definir prioridades de mercado, sempre alinhado ao conselho gestor. A medida busca dar previsibilidade ao planejamento — ponto que a diretoria considera essencial para a sustentabilidade do projeto.', 'O impacto institucional é relevante: ao centralizar decisões em um nome de mercado, o clube sinaliza profissionalização. Resta acompanhar como a mudança se traduzirá em resultados esportivos ao longo do calendário.']
}, {
  id: 'meio-campista',
  category: 'Transferências',
  title: 'Galo encaminha contratação de meio-campista para reforçar o setor',
  resumo: 'Negociação avança nos bastidores; valores não foram revelados e ainda dependem de exames médicos.',
  author: 'Redação',
  date: '09 de junho de 2026',
  body: ['O Atlético-MG avançou nas conversas para a contratação de um meio-campista que deve disputar posição no setor de criação. As tratativas estão adiantadas, mas a operação ainda depende da assinatura e dos exames médicos de praxe.', 'Trata-se de rumor com fontes consistentes — não há, até o momento, confirmação oficial do clube. O Radar Atleticano mantém a distinção entre fato e especulação até que haja anúncio.']
}, {
  id: 'classico',
  category: 'Jogos',
  title: 'Atlético vence o clássico e assume a liderança do estadual',
  resumo: 'Equipe mostrou solidez defensiva e eficiência no contra-ataque para confirmar o resultado fora de casa.',
  author: 'Redação',
  date: '08 de junho de 2026',
  body: ['Em jogo de marcação intensa, o Atlético-MG superou o rival e assumiu a ponta da tabela. O time controlou os espaços e foi eficiente nas transições ofensivas.', 'Do ponto de vista tático, o desempenho confirma a evolução defensiva observada nas últimas rodadas.']
}, {
  id: 'base-selecao',
  category: 'Base',
  title: 'Base atleticana tem dois jogadores convocados para a seleção sub-20',
  resumo: 'Convocação reforça o trabalho das categorias de base e amplia a vitrine dos jovens do clube.',
  author: 'Redação',
  date: '08 de junho de 2026',
  body: ['Dois atletas das categorias de base do Atlético foram convocados para a seleção sub-20, resultado do investimento contínuo do clube na formação.']
}, {
  id: 'arena-show',
  category: 'Clube',
  title: 'Arena MRV recebe evento beneficente no fim do mês',
  date: '07 de junho de 2026',
  body: ['A Arena MRV será palco de um evento beneficente que reunirá ídolos do clube.']
}, {
  id: 'mercado-lateral',
  category: 'Transferências',
  title: 'Lateral é oferecido, mas clube avalia prioridades antes de avançar',
  date: '07 de junho de 2026',
  body: ['O nome foi oferecido à diretoria, que avalia se a posição é prioridade nesta janela.']
}, {
  id: 'financas-saf',
  category: 'Clube',
  title: 'Balanço da SAF aponta redução de custos no primeiro semestre',
  date: '06 de junho de 2026',
  body: ['O balanço parcial da SAF indica redução de custos operacionais no semestre.']
}];

// Hero carousel = the top 3 stories.
const DESTAQUES = NEWS.slice(0, 3).map(n => ({
  id: n.id,
  category: n.category,
  title: n.title
}));

// Próximos jogos.
const JOGOS = [{
  home: {
    abbr: 'CAM'
  },
  away: {
    abbr: 'FLA'
  },
  competition: 'Brasileirão',
  date: '12/06 · 21:30',
  venue: 'Arena MRV'
}, {
  home: {
    abbr: 'CRU'
  },
  away: {
    abbr: 'CAM'
  },
  competition: 'Copa do Brasil',
  date: '16/06 · 21:45',
  venue: 'Mineirão'
}, {
  home: {
    abbr: 'CAM'
  },
  away: {
    abbr: 'SAN'
  },
  competition: 'Brasileirão',
  date: '20/06 · 18:30',
  venue: 'Arena MRV'
}];

// Classificação — Série A (recorte).
const CLASSIFICACAO = [{
  pos: 1,
  team: 'Flamengo',
  p: 39,
  j: 18,
  sg: 15
}, {
  pos: 2,
  team: 'Palmeiras',
  p: 37,
  j: 18,
  sg: 12
}, {
  pos: 3,
  team: 'Atlético-MG',
  p: 34,
  j: 18,
  sg: 10
}, {
  pos: 4,
  team: 'Cruzeiro',
  p: 31,
  j: 18,
  sg: 7
}, {
  pos: 5,
  team: 'Fluminense',
  p: 30,
  j: 18,
  sg: 5
}];
const ARENA = {
  nome: 'Arena MRV',
  texto: ['A Arena MRV é o estádio do Clube Atlético Mineiro, localizada na região da Califórnia, em Belo Horizonte. Inaugurada em 2023, é um marco da nova era institucional do Galo.', 'Com capacidade para mais de 46.000 torcedores, arquitetura moderna e excelente visibilidade, a Arena recebe os jogos do Atlético e uma variedade de eventos esportivos e culturais. A atmosfera alvinegra torna cada partida uma experiência única.']
};
const CATEGORIAS = ['Início', 'Notícias', 'Elenco', 'Jogos', 'Classificação'];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.Resumo = __ds_scope.Resumo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.HeroCarousel = __ds_scope.HeroCarousel;

__ds_ns.MatchFixture = __ds_scope.MatchFixture;

__ds_ns.StandingsTable = __ds_scope.StandingsTable;

})();
