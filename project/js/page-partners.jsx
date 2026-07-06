// YOUKNOW Connect, Partners page with tweaks
// Three orthogonal expressive levers:
//   - layout: 'grid' | 'editorial' | 'list'
//   - style:  'soft' | 'sticker' | 'navy'
//   - energy: 'quiet' | 'default' | 'loud'

const PARTNERS_DATA = [
  {
    cat: 'CEP', catLong: 'Customer Engagement', href: 'services-cep.html',
    items: [
      {
        name: 'Braze', role: 'Enterprise CEP',
        what: 'Enterprise customer engagement platform for B2C companies running sophisticated lifecycle programmes. Real-time orchestration across email, push, SMS, in-app, WhatsApp, and content cards, triggered by behaviour as it happens. Gartner Magic Quadrant Leader.',
        bestFor: 'Mid-market to enterprise B2C with a dedicated CRM team and a serious retention mandate.',
        wedoes: ['Implementation', 'Event taxonomy', 'Journey architecture', 'Team training'],
      },
      {
        name: 'OneSignal', role: 'Mid-market CEP · Push-first',
        what: 'The fast, developer-friendly step up from Firebase. Best-in-class push performance alongside email, SMS, and in-app from a single platform. Days to implement, predictable pricing, marketer-operable.',
        bestFor: 'Scaling apps and lean teams that need speed to value and predictable cost.',
        wedoes: ['Implementation', 'Firebase migration', 'Event model', 'Self-serve enablement'],
      },
      {
        name: 'InsiderOne', role: 'CEP + Personalisation + CDP',
        what: "Cross-channel engagement plus deep on-site and in-app personalisation, with a built-in CDP. Particularly strong in retail, e-commerce, and travel, where the website experience matters as much as the message.",
        bestFor: "Companies where website experience and customer comms must work as one: retail, e-commerce, travel.",
        wedoes: ['Data model', 'CDP config', 'Personalisation rules', 'Marketing+product training'],
      },
    ],
  },
  {
    cat: 'CDP', catLong: 'Customer Data Platform', href: 'services-cdp.html',
    items: [
      {
        name: 'Amperity', role: 'Enterprise CDP',
        what: "Enterprise customer data platform with AI-driven identity resolution. Amperity stitches messy first-party data from every system into one accurate, always-fresh customer profile. The golden record the rest of your stack wishes it had.",
        bestFor: "Enterprises with customer data fragmented across many systems and no reliable single view of the customer.",
        wedoes: ['Source mapping', 'Identity resolution', 'Consent model', 'Activation to CEP + BI'],
      },
    ],
  },
  {
    cat: 'PA', catLong: 'Product Analytics', href: 'services-pa.html',
    items: [
      {
        name: 'Amplitude', role: 'Product Analytics',
        what: "Purpose-built product analytics. Funnels, retention, cohort analysis, feature adoption, for product and growth teams that need answers without filing a ticket. Designed to sit alongside GA4, not replace it.",
        bestFor: "Product and growth teams making roadmap decisions on instinct because GA4 can't keep up.",
        wedoes: ['Event taxonomy', 'SDK or CDP integration', 'Charts that matter', 'PM self-serve training'],
      },
    ],
  },
  {
    cat: 'BI', catLong: 'Business Intelligence', href: 'services-bi.html',
    items: [
      {
        name: 'DOMO', role: 'BI & Visualisation',
        what: "Real-time BI and data visualisation with 1,000+ pre-built connectors. Enterprise-grade where it matters (security, governance, scale); genuinely approachable for non-technical stakeholders everywhere else.",
        bestFor: "Mid-market to enterprise with data spread across multiple systems and a leadership team tired of waiting.",
        wedoes: ['Source integration', 'Dashboards by audience', 'Governance setup', 'Business-user training'],
      },
    ],
  },
  {
    cat: 'ATTR', catLong: 'Mobile Attribution', href: 'services-attribution.html',
    items: [
      {
        name: 'AppsFlyer', role: 'MMP',
        what: "Market-leading mobile measurement partner. A neutral measurement layer above Meta, Google, TikTok, ASA and beyond. Industry-best fraud protection. Privacy-preserving framework built for iOS/Android post-IDFA.",
        bestFor: "Apps running paid acquisition at scale across multiple channels, especially where fraud is a concern.",
        wedoes: ['Implementation', 'Partner integrations', 'Attribution windows', 'Fraud rules'],
      },
      {
        name: 'Branch', role: 'Deep Linking + MMP',
        what: "Leading deep linking combined with solid mobile attribution. Universal links, deferred deep links, contextual deep links, so every campaign, email, push, or social link drops users exactly where they should land.",
        bestFor: "Apps where deep linking is core to the experience: email-to-app, web-to-app, social-to-app flows.",
        wedoes: ['Link infrastructure', 'Integrations with CEP', 'Flow QA', 'Go-live testing'],
      },
    ],
  },
];

// Flatten all partner items with a stable index for "editorial" numbering
const ALL_PARTNERS = (() => {
  const list = [];
  let n = 1;
  for (const cat of PARTNERS_DATA) {
    for (const p of cat.items) {
      list.push({ ...p, cat: cat.cat, catLong: cat.catLong, href: cat.href, n });
      n += 1;
    }
  }
  return list;
})();

/* ============================================================
   STYLE TOKENS for the three "style" variants
   ============================================================ */
function styleTokens(style) {
  if (style === 'sticker') {
    return {
      cardBg: 'var(--ykc-blue-500)',
      cardFg: 'white',
      cardBorder: '2px solid white',
      cardShadow: '6px 6px 0 var(--ykc-navy-900)',
      cardRadius: 14,
      hoverShadow: '8px 8px 0 var(--ykc-navy-900)',
      accentChip: { bg: 'var(--ykc-navy-900)', color: 'var(--ykc-blue-400)' },
      decorImg: 'assets/shapes/concentric-circles-beige.png',
      decorImgOpacity: 0.4,
      sectionLabel: 'var(--ykc-navy-900)',
      sectionLabelOnDark: 'var(--ykc-blue-400)',
      tagBorder: 'rgba(255,255,255,0.5)',
      tagColor: 'white',
      tagBg: 'rgba(255,255,255,0.08)',
      mutedFg: 'rgba(255,255,255,0.86)',
      dividerColor: 'rgba(255,255,255,0.3)',
      rotateStep: 1.2,
      decorOpacity: 0.22,
      decorStroke: 'white',
    };
  }
  if (style === 'navy') {
    return {
      cardBg: 'var(--ykc-navy-900)',
      cardFg: 'var(--ykc-beige-500)',
      cardBorder: '1.5px solid rgba(255,255,255,0.12)',
      cardShadow: '0 12px 32px -16px rgba(0,0,0,0.4)',
      cardRadius: 20,
      hoverShadow: '0 20px 48px -16px rgba(0,0,0,0.5)',
      accentChip: { bg: 'var(--ykc-blue-400)', color: 'var(--ykc-navy-900)' },
      decorImg: 'assets/shapes/concentric-circles-blue.png',
      decorImgOpacity: 0.28,
      sectionLabel: 'var(--ykc-blue-400)',
      sectionLabelOnDark: 'var(--ykc-blue-400)',
      tagBorder: 'rgba(255,255,255,0.22)',
      tagColor: 'var(--ykc-beige-500)',
      tagBg: 'rgba(255,255,255,0.04)',
      mutedFg: 'var(--ykc-navy-200)',
      dividerColor: 'rgba(255,255,255,0.18)',
      rotateStep: 0,
      decorOpacity: 0.16,
      decorStroke: 'var(--ykc-blue-400)',
    };
  }
  // soft (default)
  return {
    cardBg: 'var(--ykc-beige-300)',
    cardFg: 'var(--ykc-navy-900)',
    cardBorder: '1.5px dotted rgba(7,20,57,0.22)',
    cardShadow: 'none',
    cardRadius: 20,
    hoverShadow: 'none',
    accentChip: { bg: 'var(--ykc-blue-100)', color: 'var(--ykc-blue-500)' },
    decorImg: 'assets/shapes/concentric-circles-blue.png',
    decorImgOpacity: 0.22,
    sectionLabel: 'var(--ykc-blue-500)',
    sectionLabelOnDark: 'var(--ykc-blue-400)',
    tagBorder: 'rgba(7,20,57,0.24)',
    tagColor: 'var(--ykc-navy-900)',
    tagBg: 'white',
    mutedFg: 'var(--ykc-navy-700)',
    dividerColor: 'rgba(7,20,57,0.2)',
    rotateStep: 0,
    decorOpacity: 0.18,
    decorStroke: 'var(--ykc-blue-500)',
  };
}

/* ============================================================
   ENERGY DECORATIONS, controls collage density
   ============================================================ */
function energyDecor(energy, tokens, seed = 0) {
  const dec = { showStickers: false, showRings: false, showHand: false, extraSticker: null, rotation: 0 };
  if (energy === 'quiet') return dec;
  if (energy === 'default') {
    return { ...dec, showRings: true };
  }
  // loud
  const loudStickers = ['#YK', '*LEKKER*', 'SHARP', '#26', '*honest*'];
  return {
    showStickers: true,
    showRings: true,
    showHand: seed % 2 === 0,
    extraSticker: loudStickers[seed % loudStickers.length],
    rotation: ((seed % 2 === 0 ? 1 : -1) * (1 + (seed % 2))) * tokens.rotateStep + (tokens.rotateStep ? 0 : ((seed % 2 === 0 ? 1 : -1) * 0.7)),
  };
}

/* ============================================================
   PARTNER CARD, grid layout
   ============================================================ */
function PartnerCardGrid({ p, idx, tweaks, tokens }) {
  const dec = energyDecor(tweaks.energy, tokens, idx);
  return (
    <article style={{
      background: tokens.cardBg, color: tokens.cardFg,
      border: tokens.cardBorder, boxShadow: tokens.cardShadow,
      borderRadius: tokens.cardRadius, padding: '28px 28px 24px',
      display: 'flex', flexDirection: 'column', gap: 14,
      transition: 'all .25s cubic-bezier(.2,.9,.2,1)',
      position: 'relative', overflow: 'hidden',
      transform: dec.rotation ? `rotate(${dec.rotation}deg)` : 'none',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = `translateY(-3px) ${dec.rotation ? `rotate(${dec.rotation}deg)` : ''}`;
      if (tokens.hoverShadow !== 'none') e.currentTarget.style.boxShadow = tokens.hoverShadow;
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = dec.rotation ? `rotate(${dec.rotation}deg)` : 'none';
      e.currentTarget.style.boxShadow = tokens.cardShadow;
    }}>
      {dec.showRings && (
        <img src={tokens.decorImg} alt="" style={{ position: 'absolute', right: -50, top: -50, width: 200, opacity: tokens.decorImgOpacity, pointerEvents: 'none' }} />
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, position: 'relative' }}>
        <h3 style={{ margin: 0, lineHeight: 1 }} aria-label={p.name}>
          <PartnerLogo name={p.name} height={30} onDark={tweaks.style !== 'soft'} style={{ color: tokens.cardFg }} />
        </h3>
        <span style={{
          background: tokens.accentChip.bg, color: tokens.accentChip.color,
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '5px 11px', borderRadius: 999, whiteSpace: 'nowrap',
        }}>{p.role}</span>
      </div>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: tokens.mutedFg, margin: 0, position: 'relative' }}>{p.what}</p>
      <div style={{ paddingTop: 12, borderTop: `1px dotted ${tokens.dividerColor}`, position: 'relative' }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: tokens.sectionLabel, marginBottom: 6 }}>Best for</div>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: tokens.cardFg, margin: 0 }}>{p.bestFor}</p>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: tokens.sectionLabel, marginBottom: 8 }}>How we partner</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {p.wedoes.map(w => (
            <span key={w} style={{
              fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 500,
              padding: '5px 10px', borderRadius: 999,
              border: `1px solid ${tokens.tagBorder}`, color: tokens.tagColor,
              background: tokens.tagBg,
            }}>{w}</span>
          ))}
        </div>
      </div>
      {dec.showStickers && dec.extraSticker && (
        <div style={{ position: 'absolute', top: -14, right: 20, zIndex: 3 }}>
          <Sticker bg="var(--ykc-blue-500)" color="white" rotate={idx % 2 === 0 ? -8 : 6} size="sm">{dec.extraSticker}</Sticker>
        </div>
      )}
      {dec.showHand && (
        <div style={{
          position: 'absolute', bottom: 10, right: 18,
          fontFamily: 'var(--font-handwritten)', color: tokens.sectionLabel,
          fontSize: 16, transform: 'rotate(-3deg)', opacity: 0.85, pointerEvents: 'none',
        }}>lekker ↓</div>
      )}
    </article>
  );
}

/* ============================================================
   PARTNER CARD, editorial layout (one per row, big)
   ============================================================ */
function PartnerCardEditorial({ p, idx, tweaks, tokens }) {
  const dec = energyDecor(tweaks.energy, tokens, idx);
  const flipped = idx % 2 === 1;
  return (
    <article style={{
      background: tokens.cardBg, color: tokens.cardFg,
      border: tokens.cardBorder, boxShadow: tokens.cardShadow,
      borderRadius: tokens.cardRadius, padding: '40px 44px',
      display: 'grid',
      gridTemplateColumns: flipped ? '1fr 0.7fr' : '0.7fr 1fr',
      gap: 40, alignItems: 'start',
      position: 'relative', overflow: 'hidden',
      transition: 'all .25s cubic-bezier(.2,.9,.2,1)',
      transform: dec.rotation ? `rotate(${dec.rotation * 0.4}deg)` : 'none',
    }} className="partner-editorial-card">
      {dec.showRings && (
        <img src={tokens.decorImg} alt="" style={{
          position: 'absolute',
          [flipped ? 'right' : 'left']: -120, top: -60,
          width: 360, opacity: tokens.decorImgOpacity, pointerEvents: 'none',
        }} />
      )}
      {/* LEFT: big numbered name */}
      <div style={{ order: flipped ? 2 : 1, position: 'relative' }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 14, color: tokens.sectionLabel,
          letterSpacing: '0.08em', marginBottom: 14,
        }}>{String(p.n).padStart(2, '0')} · {p.cat}</div>
        <h3 style={{ margin: '0 0 14px', lineHeight: 1 }} aria-label={p.name}>
          <PartnerLogo name={p.name} height={52} onDark={tweaks.style !== 'soft'} style={{ color: tokens.cardFg }} />
        </h3>
        <span style={{
          display: 'inline-block',
          background: tokens.accentChip.bg, color: tokens.accentChip.color,
          fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11.5,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '6px 13px', borderRadius: 999,
        }}>{p.role}</span>
        {dec.showHand && (
          <div style={{
            marginTop: 16, fontFamily: 'var(--font-handwritten)',
            color: tokens.sectionLabel, fontSize: 19,
            transform: 'rotate(-2deg)', opacity: 0.9, display: 'inline-block',
          }}>↑ category leader, no fluff.</div>
        )}
      </div>

      {/* RIGHT: body + best-for + how */}
      <div style={{ order: flipped ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 18, position: 'relative' }}>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: tokens.mutedFg, margin: 0 }}>{p.what}</p>
        <div style={{
          padding: '14px 16px', borderRadius: 12,
          background: tweaks.style === 'soft' ? 'white' : 'rgba(255,255,255,0.06)',
          border: `1px dotted ${tokens.dividerColor}`,
        }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: tokens.sectionLabel, marginBottom: 4 }}>Best for</div>
          <p style={{ fontSize: 15, lineHeight: 1.5, color: tokens.cardFg, margin: 0 }}>{p.bestFor}</p>
        </div>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: tokens.sectionLabel, marginBottom: 8 }}>How we partner</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {p.wedoes.map(w => (
              <span key={w} style={{
                fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 500,
                padding: '5px 10px', borderRadius: 999,
                border: `1px solid ${tokens.tagBorder}`, color: tokens.tagColor,
                background: tokens.tagBg,
              }}>{w}</span>
            ))}
          </div>
        </div>
        <a href={p.href} style={{
          alignSelf: 'flex-start', marginTop: 4,
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
          color: tokens.sectionLabel, textDecoration: 'none',
          padding: '8px 16px', borderRadius: 999,
          border: `1.5px solid ${tokens.sectionLabel}`,
          transition: 'all .15s',
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = tokens.sectionLabel; e.currentTarget.style.color = tokens.cardBg === 'var(--ykc-beige-300)' ? 'white' : tokens.cardBg; }}
        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = tokens.sectionLabel; }}>
          See the {p.catLong} service →
        </a>
      </div>
      {dec.showStickers && dec.extraSticker && (
        <div style={{ position: 'absolute', top: 18, right: 22, zIndex: 3 }}>
          <Sticker bg="var(--ykc-blue-500)" color="white" rotate={idx % 2 === 0 ? -6 : 5} size="sm">{dec.extraSticker}</Sticker>
        </div>
      )}
      <style>{`
        @media (max-width: 880px) {
          .partner-editorial-card { grid-template-columns: 1fr !important; padding: 28px !important; }
          .partner-editorial-card > div { order: initial !important; }
        }
      `}</style>
    </article>
  );
}

/* ============================================================
   PARTNER CARD, list layout (dense rows)
   ============================================================ */
function PartnerRow({ p, idx, tweaks, tokens, isLast }) {
  const dec = energyDecor(tweaks.energy, tokens, idx);
  return (
    <a href={p.href} style={{
      display: 'grid',
      gridTemplateColumns: '60px 1.2fr 1fr 1.5fr auto',
      gap: 24, alignItems: 'center',
      padding: '18px 22px',
      background: tokens.cardBg, color: tokens.cardFg,
      borderTop: tokens.cardBorder,
      borderBottom: isLast ? tokens.cardBorder : 'none',
      textDecoration: 'none',
      transition: 'all .15s',
      position: 'relative',
    }} className="partner-list-row"
    onMouseOver={(e) => {
      e.currentTarget.style.background = tweaks.style === 'soft' ? 'white' : tweaks.style === 'navy' ? 'var(--ykc-navy-700)' : 'var(--ykc-blue-400)';
    }}
    onMouseOut={(e) => { e.currentTarget.style.background = tokens.cardBg; }}>
      <span style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 12,
        color: tokens.sectionLabel, letterSpacing: '0.06em',
      }}>{String(p.n).padStart(2, '0')}</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
        letterSpacing: '-0.015em', lineHeight: 1,
      }}>{p.name}</span>
      <span style={{
        display: 'inline-block', justifySelf: 'start',
        background: tokens.accentChip.bg, color: tokens.accentChip.color,
        fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 10.5,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        padding: '4px 10px', borderRadius: 999,
      }}>{p.cat} · {p.role.split(' ').slice(0, 2).join(' ')}</span>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5,
        color: tokens.mutedFg,
      }}>{p.bestFor}</span>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
        color: tokens.sectionLabel, whiteSpace: 'nowrap',
      }}>{dec.showStickers ? '✦ ' : ''}See →</span>
      <style>{`
        @media (max-width: 1000px) {
          .partner-list-row { grid-template-columns: 50px 1fr auto !important; row-gap: 6px !important; }
          .partner-list-row > span:nth-child(3) { grid-column: 2 / 3; }
          .partner-list-row > span:nth-child(4) { grid-column: 1 / -1; }
          .partner-list-row > span:nth-child(5) { grid-column: 3 / 4; grid-row: 1; }
        }
      `}</style>
    </a>
  );
}

/* ============================================================
   PARTNER SECTIONS, composes the layout
   ============================================================ */
function PartnersByCategoryTweakable({ tweaks }) {
  const tokens = styleTokens(tweaks.style);
  const onDark = tweaks.style === 'navy' || tweaks.style === 'sticker';

  if (tweaks.layout === 'list') {
    return (
      <section style={{ background: 'var(--ykc-white)', padding: '64px 0 96px' }}>
        <div className="wrap">
          <div style={{ marginBottom: 24 }}>
            <ConnectorLine heading="ALL PARTNERS" />
          </div>
          <div style={{
            background: tokens.cardBg,
            borderRadius: tokens.cardRadius,
            boxShadow: tokens.cardShadow,
            overflow: 'hidden',
            border: tokens.cardBorder,
          }}>
            {ALL_PARTNERS.map((p, i) => (
              <PartnerRow key={p.name} p={p} idx={i} tweaks={tweaks} tokens={tokens} isLast={i === ALL_PARTNERS.length - 1}/>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (tweaks.layout === 'editorial') {
    return (
      <section style={{ background: 'var(--ykc-white)', padding: '48px 0 96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <ConnectorLine heading="EVERY PARTNER, IN DEPTH" />
          {ALL_PARTNERS.map((p, i) => (
            <PartnerCardEditorial key={p.name} p={p} idx={i} tweaks={tweaks} tokens={tokens}/>
          ))}
        </div>
      </section>
    );
  }

  // grid (default), keeps categorical grouping
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '64px 0 96px' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {PARTNERS_DATA.map((cat) => {
          const startIdx = ALL_PARTNERS.findIndex(p => p.name === cat.items[0].name);
          return (
            <div key={cat.cat}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'Press Start 2P', monospace", fontSize: 14,
                  padding: '10px 14px', background: 'var(--ykc-blue-500)', color: 'white',
                  borderRadius: 8, letterSpacing: '0.08em',
                }}>{cat.cat}</span>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700,
                  letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, color: 'var(--ykc-navy-900)',
                }}>{cat.catLong}</h2>
                <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)', minWidth: 40 }}/>
                <a href={cat.href} style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                  color: 'var(--ykc-blue-500)', textDecoration: 'none',
                  padding: '8px 14px', borderRadius: 999, border: '1.5px solid var(--ykc-blue-500)',
                  transition: 'all .15s', whiteSpace: 'nowrap',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-blue-500)'; e.currentTarget.style.color = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-blue-500)'; }}>
                  See the service →
                </a>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: cat.items.length === 1 ? 'minmax(0, 620px)' : `repeat(${Math.min(cat.items.length, 3)}, 1fr)`,
                gap: tweaks.style === 'sticker' ? 24 : 16,
              }} className="partners-card-grid">
                {cat.items.map((p, i) => (
                  <PartnerCardGrid key={p.name} p={p} idx={startIdx + i} tweaks={tweaks} tokens={tokens}/>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .partners-card-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
          .partners-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PartnersHeroTweakable({ tweaks }) {
  return (
    <PageHero
      eyebrow="Our partner stack"
      title={<>The category leaders. <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>And only when they fit.</em></>}
      lead="We partner with the customer technology platforms that genuinely lead their categories. We're platform-agnostic. That's a fancy way of saying we recommend what's right for you, not what's easiest for us."
      art="assets/collages/tools-products-partners.png"
      artAlt="Collage, tools, products and partners"
      stickerPos={{ right: 90, top: 'auto', bottom: 30 }}
      sticker={
        tweaks.energy === 'quiet'
          ? null
          : tweaks.energy === 'loud'
            ? <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
                <Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>PLATFORM-AGNOSTIC</Sticker>
                <Sticker bg="var(--ykc-beige-500)" color="var(--ykc-navy-900)" rotate={-5} size="sm">*honest*</Sticker>
              </div>
            : <Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>PLATFORM-AGNOSTIC</Sticker>
      }
    />
  );
}

function PartnersHonestyTweakable({ tweaks }) {
  const tokens = styleTokens(tweaks.style);
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '88px 0' }}>
      <div className="wrap-narrow">
        <div style={{
          background: tokens.cardBg, color: tokens.cardFg,
          borderRadius: tokens.cardRadius,
          padding: '48px 52px',
          border: tokens.cardBorder, boxShadow: tokens.cardShadow,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -18, left: 32,
            background: 'var(--ykc-beige-500)', padding: '0 12px',
          }}>
            <Eyebrow color={tweaks.style === 'soft' ? 'var(--ykc-blue-500)' : tokens.sectionLabel === 'var(--ykc-navy-900)' ? 'var(--ykc-blue-500)' : tokens.sectionLabel}>A NOTE ON PLATFORM-AGNOSTIC</Eyebrow>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.025em',
            margin: '6px 0 18px', color: tokens.cardFg,
          }}>
            We're partners with these platforms because they're genuinely good.<br/>
            <em style={{
              fontStyle: 'normal',
              color: tweaks.style === 'sticker' ? 'var(--ykc-navy-900)' : tweaks.style === 'navy' ? 'var(--ykc-blue-400)' : 'var(--ykc-blue-500)',
            }}>But we're not tied to any of them.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="ph-note-grid">
            <p style={{ fontSize: 16, lineHeight: 1.65, color: tokens.mutedFg, margin: 0 }}>
              If your situation calls for a tool we don't partner with, we'll say so. If two of our partners would both work, we'll tell you the trade-offs honestly.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: tokens.mutedFg, margin: 0 }}>
              If a platform we sell isn't the right call for you, we'll tell you that too, even when it costs us a deal. The only bad recommendation is the one that doesn't fit.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .ph-note-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   TWEAKED PARTNERS PAGE
   ============================================================ */
function TweakedPartnersPage({ defaults }) {
  const [t, setTweak] = useTweaks(defaults);
  return (
    <SiteShell page="partners">
      <PartnersHeroTweakable tweaks={t} />
      <PartnersByCategoryTweakable tweaks={t} />
      <PartnersHonestyTweakable tweaks={t} />
      <CtaSection />

      <TweaksPanel title="Tweaks · Partners">
        <TweakSection label="Layout" />
        <TweakRadio
          label="Shape"
          value={t.layout}
          options={[
            { value: 'grid', label: 'Grid' },
            { value: 'editorial', label: 'Editorial' },
            { value: 'list', label: 'List' },
          ]}
          onChange={(v) => setTweak('layout', v)}
        />

        <TweakSection label="Card style" />
        <TweakRadio
          label="Surface"
          value={t.style}
          options={[
            { value: 'soft', label: 'Soft' },
            { value: 'sticker', label: 'Sticker' },
            { value: 'navy', label: 'Navy' },
          ]}
          onChange={(v) => setTweak('style', v)}
        />

        <TweakSection label="Energy" />
        <TweakRadio
          label="Collage density"
          value={t.energy}
          options={[
            { value: 'quiet', label: 'Quiet' },
            { value: 'default', label: 'Default' },
            { value: 'loud', label: 'Loud' },
          ]}
          onChange={(v) => setTweak('energy', v)}
        />
      </TweaksPanel>
    </SiteShell>
  );
}

Object.assign(window, { TweakedPartnersPage, PARTNERS_DATA });
