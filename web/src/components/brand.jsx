// YOUKNOW Connect — Brand Toolkit components
// Atomic building blocks: ConnectorLine, Eyebrow, Sticker, Badge, Btn, Callout, BinaryStrip, PartnerLogo

import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext.js';
import { trackEvent } from '../lib/analytics.js';

const RAGE_CLICK_THRESHOLD = 5;
const RAGE_CLICK_WINDOW_MS = 1200;
const RAGE_MESSAGES = [
  "Okay okay, we hear you 😅",
  "That sticker's not going anywhere.",
  "Save some clicks for the internet.",
  "🫡 message received, loud and clear.",
  "Feisty. We like it.",
];

export function ConnectorLine({ color = 'currentColor', heading, style }) {
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

export function Eyebrow({ children, color = 'var(--ykc-blue-500)', dot = true, withLine = false, style }) {
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

export function Sticker({ children, bg = 'var(--ykc-blue-500)', color = 'white', rotate = -3, font = 'pixel', size = 'md', shadow = 'var(--ykc-navy-900)', style = {}, onClick }) {
  const showToast = useToast();
  const clicksRef = useRef([]);
  const rageTimeoutRef = useRef(null);
  const [raging, setRaging] = useState(false);

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

  const handleClick = (e) => {
    onClick?.(e);

    const now = Date.now();
    const recent = clicksRef.current.filter((t) => now - t < RAGE_CLICK_WINDOW_MS);
    recent.push(now);
    clicksRef.current = recent;

    if (recent.length >= RAGE_CLICK_THRESHOLD) {
      clicksRef.current = [];
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reducedMotion) {
        setRaging(true);
        clearTimeout(rageTimeoutRef.current);
        rageTimeoutRef.current = setTimeout(() => setRaging(false), 420);
      }
      showToast(RAGE_MESSAGES[Math.floor(Math.random() * RAGE_MESSAGES.length)]);
    }
  };

  return (
    <span className={raging ? 'sticker-rage-wrap' : undefined} style={{ display: 'inline-block' }}>
      <button type="button" onClick={handleClick} style={{
        background: bg, color,
        border: '2px solid white',
        boxShadow: `6px 6px 0 ${shadow}`,
        borderRadius: 10,
        transform: `rotate(${rotate}deg)`,
        fontFamily: fontStack,
        letterSpacing: '0.06em',
        cursor: 'pointer',
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
      </button>
    </span>
  );
}

export function Badge({ children, intent = 'blue', dot = false }) {
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

// Internal routes are plain "/path" strings — routed client-side via <Link>.
// mailto:, http(s):, and # anchors fall through to a plain <a>.
export function isInternal(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
}

// Classifies a href for analytics: which of these four buckets it falls into.
export function classifyLink(href) {
  if (typeof href !== 'string') return null;
  if (href.startsWith('mailto:')) return 'mailto';
  if (href.startsWith('#')) return 'anchor';
  if (isInternal(href)) return 'internal';
  return 'external';
}

export function Btn({ children, intent = 'primary', size = 'md', onClick, href, style = {}, type = 'button', target, trackLabel, trackProps }) {
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
    if (intent === 'secondary') { e.currentTarget.style.background = 'var(--ykc-navy-900)'; e.currentTarget.style.color = 'var(--ykc-beige-500)'; }
  };
  const onOut = (e) => {
    if (intent === 'primary') e.currentTarget.style.background = 'var(--ykc-blue-500)';
    if (intent === 'on-dark') e.currentTarget.style.background = 'var(--ykc-blue-400)';
    if (intent === 'ghost-light') e.currentTarget.style.background = 'transparent';
    if (intent === 'secondary') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-navy-900)'; }
  };
  const handleClick = (e) => {
    trackEvent('CTA Clicked', {
      label: trackLabel || (typeof children === 'string' ? children : null) || href || null,
      destination: href || null,
      link_type: classifyLink(href),
      intent,
      ...trackProps,
    });
    onClick?.(e);
  };
  if (href) {
    if (isInternal(href)) {
      return <Link to={href} onClick={handleClick} style={base} onMouseOver={onOver} onMouseOut={onOut}>{children}</Link>;
    }
    return <a href={href} target={target} onClick={handleClick} style={base} onMouseOver={onOver} onMouseOut={onOut}>{children}</a>;
  }
  return (
    <button type={type} onClick={handleClick} style={base} onMouseOver={onOver} onMouseOut={onOut}>
      {children}
    </button>
  );
}

export function Callout({ children, title, intent = 'beige', icon }) {
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

export function BinaryStrip({ color = 'var(--ykc-blue-400)', size = 11, opacity = 0.6, style }) {
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

// PartnerLogo — official partner logo lockups.
// Normalised to navy on light backgrounds, white on dark.
// Falls back to a text wordmark when no logo file exists.
export const PARTNER_LOGO_SRC = {
  Amperity: '/assets/logos/partners/amperity.png',
  OneSignal: '/assets/logos/partners/onesignal.png',
  InsiderOne: '/assets/logos/partners/insiderone.webp',
  Amplitude: '/assets/logos/partners/amplitude.png',
  DOMO: '/assets/logos/partners/domo.png',
  AppsFlyer: '/assets/logos/partners/appsflyer.png',
  Branch: '/assets/logos/partners/branch.png',
  Braze: '/assets/logos/partners/braze.png',
  'Customer.io': '/assets/logos/partners/customerio.svg',
  Iterable: '/assets/logos/partners/iterable.svg',
  Moengage: '/assets/logos/partners/moengage.svg',
  Mixpanel: '/assets/logos/partners/mixpanel.svg',
};

// Each source file has a different amount of baked-in whitespace around the
// mark (e.g. DOMO's canvas is ~37% ink, Amperity's is ~100% ink), so fixing
// the `height` prop alone makes marks look wildly different sizes even though
// the image box is identical. This ratio (visible ink height ÷ full canvas
// height) lets PartnerLogo compensate so every mark reads as the same size.
const PARTNER_LOGO_INK_RATIO = {
  Amperity: 1,
  OneSignal: 0.99,
  InsiderOne: 0.93,
  Amplitude: 0.65,
  DOMO: 0.37,
  AppsFlyer: 0.99,
  Branch: 0.95,
};

export function PartnerLogo({ name, height = 26, onDark = false, style }) {
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
  const renderedHeight = height / (PARTNER_LOGO_INK_RATIO[name] ?? 1);
  return (
    <img src={src} alt={name + ' logo'} style={{
      height: renderedHeight, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block',
      filter: onDark ? 'brightness(0) invert(1)' : 'brightness(0) opacity(0.85)',
      ...(style || {}),
    }} />
  );
}
