// YOUKNOW Connect — Brand Toolkit components
// Atomic building blocks: ConnectorLine, Eyebrow, Sticker, Badge, Btn, Callout, KgoloIcon, BinaryStrip, PixelBubble

function ConnectorLine({ color = 'currentColor', variant = 'dot-line-dot', heading, style }) {
  const dot = { width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 };
  const line = { flex: 1, borderTop: `1.5px dotted ${color}` };
  if (heading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, ...(style || {}) }}>
        <span style={line} />
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
          padding: '5px 14px', border: `1.5px dotted ${color}`, borderRadius: 4,
          color, whiteSpace: 'nowrap', letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>{heading}</span>
        <span style={line} />
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', ...(style || {}) }}>
      <span style={dot} /><span style={line} /><span style={dot} />
    </div>
  );
}

function Eyebrow({ children, color = 'var(--ykc-blue-500)', dot = true, withLine = false, style }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'var(--font-mono)', fontSize: 11,
      color, letterSpacing: '0.28em', textTransform: 'uppercase',
      fontWeight: 500, ...(style || {}),
    }}>
      {dot && <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />}
      <span>{children}</span>
      {withLine && <span style={{ flex: 1, borderTop: `1.5px solid ${color}`, minWidth: 40 }} />}
    </div>
  );
}

function Sticker({ children, bg = 'var(--ykc-blue-500)', color = 'white', rotate = -3, font = 'pixel', size = 'md', shadow = 'var(--ykc-navy-900)', style = {}, onClick }) {
  const sizes = {
    sm: { padding: '7px 12px', fontSize: 9 },
    md: { padding: '10px 16px', fontSize: 11 },
    lg: { padding: '14px 22px', fontSize: 14 },
  };
  const fontStack = font === 'pixel'
    ? "'Press Start 2P', monospace"
    : font === 'poster'
      ? "'San Poster Bold JL', 'Archivo Black', Impact, sans-serif"
      : font === 'hand'
        ? "var(--font-handwritten)"
        : "var(--font-display)";
  const Tag = onClick ? 'button' : 'span';
  return (
    <Tag onClick={onClick} style={{
      background: bg, color,
      border: '2px solid white',
      boxShadow: `6px 6px 0 ${shadow}`,
      borderRadius: 10,
      transform: `rotate(${rotate}deg)`,
      fontFamily: fontStack,
      letterSpacing: '0.06em',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all .18s cubic-bezier(.34,1.56,.64,1)',
      display: 'inline-block',
      lineHeight: 1.1,
      ...sizes[size], ...style,
    }}
    onMouseDown={(e) => e.currentTarget.style.boxShadow = `2px 2px 0 ${shadow}`}
    onMouseUp={(e) => e.currentTarget.style.boxShadow = `6px 6px 0 ${shadow}`}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `6px 6px 0 ${shadow}`}
    >
      {children}
    </Tag>
  );
}

function Badge({ children, intent = 'blue', dot = false }) {
  const styles = {
    blue:        { bg: 'var(--ykc-blue-500)', color: 'white' },
    'blue-tint': { bg: 'var(--ykc-blue-100)', color: 'var(--ykc-blue-500)' },
    navy:        { bg: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)' },
    beige:       { bg: 'var(--ykc-beige-500)', color: 'var(--ykc-navy-900)', border: '1.5px solid var(--ykc-navy-900)' },
    outline:     { bg: 'transparent', color: 'var(--ykc-navy-900)', border: '1px dotted var(--ykc-navy-500)' },
    'outline-light': { bg: 'transparent', color: 'var(--ykc-beige-500)', border: '1px dotted rgba(255,255,255,0.45)' },
  };
  const s = styles[intent];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
      letterSpacing: '0.08em', textTransform: 'uppercase',
      padding: '5px 11px', borderRadius: 999,
      background: s.bg, color: s.color, border: s.border || 'none',
      whiteSpace: 'nowrap',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}

function Btn({ children, intent = 'primary', size = 'md', onClick, href, style = {}, type = 'button', target }) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 12 },
    md: { padding: '12px 22px', fontSize: 14 },
    lg: { padding: '16px 30px', fontSize: 16 },
  };
  const intents = {
    primary:   { background: 'var(--ykc-blue-500)', color: 'white', border: 0, borderRadius: 999 },
    secondary: { background: 'transparent', color: 'var(--ykc-navy-900)', border: '1.5px solid var(--ykc-navy-900)', borderRadius: 999 },
    ghost:     { background: 'transparent', color: 'var(--ykc-blue-500)', border: 0, borderRadius: 8 },
    'on-dark': { background: 'var(--ykc-blue-400)', color: 'var(--ykc-navy-900)', border: 0, borderRadius: 999, fontWeight: 700 },
    'ghost-light': { background: 'transparent', color: 'var(--ykc-beige-500)', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 999 },
  };
  const base = {
    fontFamily: 'var(--font-display)', fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'all .18s cubic-bezier(.2,.9,.2,1)',
    textDecoration: 'none',
    whiteSpace: 'nowrap', lineHeight: 1,
    ...intents[intent], ...sizes[size], ...style,
  };
  const onOver = (e) => {
    if (intent === 'primary') e.currentTarget.style.background = '#1E6CFF';
    if (intent === 'on-dark') e.currentTarget.style.background = '#6C92FF';
    if (intent === 'ghost-light') e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
    if (intent === 'secondary') e.currentTarget.style.background = 'var(--ykc-navy-900)', e.currentTarget.style.color = 'var(--ykc-beige-500)';
  };
  const onOut = (e) => {
    if (intent === 'primary') e.currentTarget.style.background = 'var(--ykc-blue-500)';
    if (intent === 'on-dark') e.currentTarget.style.background = 'var(--ykc-blue-400)';
    if (intent === 'ghost-light') e.currentTarget.style.background = 'transparent';
    if (intent === 'secondary') e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = 'var(--ykc-navy-900)';
  };
  if (href) {
    return <a href={href} target={target} onClick={onClick} style={base} onMouseOver={onOver} onMouseOut={onOut}>{children}</a>;
  }
  return (
    <button type={type} onClick={onClick} style={base} onMouseOver={onOver} onMouseOut={onOut}>
      {children}
    </button>
  );
}

function Callout({ children, title, intent = 'beige', icon }) {
  const intents = {
    beige: { bg: 'var(--ykc-beige-100)', border: 'var(--ykc-navy-900)', color: 'var(--ykc-navy-900)' },
    blue:  { bg: 'var(--ykc-blue-100)', border: 'var(--ykc-blue-500)', color: 'var(--ykc-navy-900)' },
    navy:  { bg: 'var(--ykc-navy-900)', border: 'var(--ykc-blue-400)', color: 'var(--ykc-beige-500)' },
  };
  const s = intents[intent];
  return (
    <div style={{
      border: `1.5px dotted ${s.border}`, borderRadius: 14,
      padding: '16px 20px', background: s.bg, color: s.color,
      display: 'flex', gap: 14, alignItems: 'flex-start',
    }}>
      {icon && <div style={{
        width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Press Start 2P', monospace", fontSize: 11,
        background: s.border, color: intent === 'navy' ? 'var(--ykc-navy-900)' : 'white',
      }}>{icon}</div>}
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{title}</div>}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, opacity: 0.92 }}>{children}</div>
      </div>
    </div>
  );
}

function KgoloIcon({ size = 48, bg = 'var(--ykc-blue-500)', mark = 'white' }) {
  const src = mark === 'white' ? 'assets/logos/icon-kgolo-white.png'
            : mark === 'navy'  ? 'assets/logos/icon-kgolo-navy.png'
            : 'assets/logos/icon-kgolo-blue.png';
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <img src={src} alt="Kgolo" style={{ width: '72%', height: '72%', objectFit: 'contain' }} />
    </div>
  );
}

function BinaryStrip({ color = 'var(--ykc-blue-400)', size = 11, opacity = 0.6, style }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: size,
      color, letterSpacing: '0.3em', opacity,
      whiteSpace: 'nowrap', ...(style || {}),
    }}>
      0 1 1 1 1 0 0 1 0 1 1 0 1 0 1 1
    </div>
  );
}

function PixelBubble({ children, color = 'var(--ykc-blue-500)', textColor = 'white', rotate = 0 }) {
  return (
    <div style={{ display: 'inline-block', position: 'relative', transform: `rotate(${rotate}deg)` }}>
      <div style={{
        background: color, color: textColor,
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 11, padding: '14px 18px',
        boxShadow: `8px 0 0 ${color}, -8px 0 0 ${color}, 0 8px 0 ${color}, 0 -8px 0 ${color}`,
        position: 'relative',
      }}>{children}</div>
      <div style={{ position: 'absolute', bottom: -16, left: 24, width: 12, height: 12, background: color }}/>
      <div style={{ position: 'absolute', bottom: -24, left: 36, width: 8, height: 8, background: color }}/>
    </div>
  );
}

/* ============================================================
   <CutoutPortrait /> — placeholder for greyscale-cutout people
   Renders a stylised abstract figure on a coloured backdrop with
   the brand's collage overlays (rings, binary strip, halftones).
   Use until real cutout photography is uploaded.
   ============================================================ */
function CutoutPortrait({ seed = 1, bg = 'var(--ykc-blue-500)', size = 220, label = 'cutout' }) {
  // Deterministic pseudo-variation
  const variations = [
    { tone: 'a', accent: 'rings' },
    { tone: 'b', accent: 'halftone' },
    { tone: 'c', accent: 'grid' },
    { tone: 'a', accent: 'rings' },
  ];
  const v = variations[seed % variations.length];
  const id = `cp-${seed}`;
  return (
    <div style={{
      width: size, height: size, borderRadius: 20, background: bg,
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      {v.accent === 'rings' && (
        <svg viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
          {[30, 55, 80, 105, 130].map((r) => (
            <circle key={r} cx={100} cy={100} r={r} fill="none" stroke="white" strokeWidth="1" />
          ))}
        </svg>
      )}
      {v.accent === 'halftone' && (
        <svg viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}>
          <defs>
            <pattern id={`${id}-dots`} width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill={`url(#${id}-dots)`}/>
        </svg>
      )}
      {v.accent === 'grid' && (
        <svg viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}>
          <defs>
            <pattern id={`${id}-grid`} width="14" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 0 L14 0 L14 14" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill={`url(#${id}-grid)`}/>
        </svg>
      )}
      {/* Stylised greyscale silhouette */}
      <svg viewBox="0 0 200 240" style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: '92%', filter: 'grayscale(1) contrast(1.15)' }}>
        <defs>
          <linearGradient id={`${id}-tone`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CA1B0"/>
            <stop offset="55%" stopColor="#394361"/>
            <stop offset="100%" stopColor="#071439"/>
          </linearGradient>
        </defs>
        {/* Head */}
        <ellipse cx="100" cy="78" rx="36" ry="42" fill={`url(#${id}-tone)`}/>
        {/* Hair shape */}
        <path d="M64 70 C 62 40, 92 28, 112 36 C 138 44, 138 78, 132 86 C 132 64, 116 52, 100 52 C 80 52, 66 62, 64 70 Z" fill="#071439"/>
        {/* Neck */}
        <rect x="88" y="116" width="24" height="22" fill={`url(#${id}-tone)`}/>
        {/* Shoulders/torso */}
        <path d="M30 240 C 30 168, 60 138, 100 138 C 140 138, 170 168, 170 240 Z" fill={`url(#${id}-tone)`}/>
        {/* shirt collar accent */}
        <path d="M84 142 L100 168 L116 142 L120 156 L100 184 L80 156 Z" fill="#071439" opacity="0.42"/>
      </svg>
      {/* tiny "binary" tag in corner — brand signature */}
      <div style={{
        position: 'absolute', top: 10, left: 12,
        fontFamily: 'var(--font-mono)', fontSize: 9,
        color: 'white', opacity: 0.6, letterSpacing: '0.25em',
      }}>01 1 0 11</div>
      {/* hidden alt-text label */}
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>{label}</span>
    </div>
  );
}

/* ============================================================
   <PartnerLogo /> — official partner logo lockups
   Normalised to navy on light backgrounds, white on dark.
   Falls back to a text wordmark when no logo file exists yet.
   ============================================================ */
const PARTNER_LOGO_SRC = {
  Braze: 'assets/logos/partners/braze.png',
  Amperity: 'assets/logos/partners/amperity.png',
  OneSignal: 'assets/logos/partners/onesignal.png',
  InsiderOne: 'assets/logos/partners/insiderone.webp',
  Amplitude: 'assets/logos/partners/amplitude.png',
  DOMO: 'assets/logos/partners/domo.png',
  AppsFlyer: 'assets/logos/partners/appsflyer.png',
  Branch: 'assets/logos/partners/branch.png',
};

function PartnerLogo({ name, height = 26, onDark = false, style }) {
  const src = PARTNER_LOGO_SRC[name];
  if (!src) {
    return (
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: Math.round(height * 0.85), letterSpacing: '-0.015em',
        lineHeight: 1, display: 'inline-block', ...(style || {}),
      }}>{name}</span>
    );
  }
  return (
    <img src={src} alt={name + ' logo'} style={{
      height, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block',
      filter: onDark ? 'brightness(0) invert(1)' : 'brightness(0) opacity(0.85)',
      ...(style || {}),
    }} />
  );
}

Object.assign(window, {
  ConnectorLine, Eyebrow, Sticker, Badge, Btn, Callout, KgoloIcon, BinaryStrip, PixelBubble, CutoutPortrait, PartnerLogo, PARTNER_LOGO_SRC,
});
