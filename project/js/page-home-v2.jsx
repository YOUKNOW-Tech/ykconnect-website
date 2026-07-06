// YOUKNOW Connect — Home v2 "The Issue" sections
// CoverHero (interactive), ProblemSpread, ServicesIndex, FreeAdvice, StepsStrip, CtaPoster

function DraggableSticker({ style, children, ...rest }) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const drag = React.useRef(null);
  return (
    <div
      onPointerDown={(e) => {
        drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!drag.current) return;
        setPos({ x: drag.current.ox + e.clientX - drag.current.sx, y: drag.current.oy + e.clientY - drag.current.sy });
      }}
      onPointerUp={(e) => { drag.current = null; e.currentTarget.releasePointerCapture(e.pointerId); }}
      style={{
        position: 'absolute', touchAction: 'none', cursor: 'grab', userSelect: 'none',
        transform: `translate(${pos.x}px, ${pos.y}px)`, zIndex: 6,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

const HERO_WORDS = ['CUSTOMER DATA', 'MESSAGES', 'DASHBOARDS', 'FUNNELS', 'AD SPEND'];

function CoverHero() {
  const [wi, setWi] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setWi(i => (i + 1) % HERO_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ background: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden' }} data-screen-label="Cover hero">
      {/* faint warped grid */}
      <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
        <defs>
          <pattern id="cv-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 48 0 L 48 48" fill="none" stroke="var(--ykc-navy-900)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1400" height="800" fill="url(#cv-grid)"/>
      </svg>

      {/* masthead strip */}
      <div style={{ borderBottom: '1.5px dotted rgba(7,20,57,0.3)', position: 'relative' }}>
        <div className="wrap-wide" style={{
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          padding: '12px 32px', fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.24em', color: 'var(--ykc-navy-700)', textTransform: 'uppercase',
        }}>
          <span>✦ The customer data paper</span>
          <span className="hide-mobile">Issue Nº 001 · Cape Town, SSA</span>
          <span>Free honest advice inside</span>
        </div>
      </div>

      <div className="wrap-wide" style={{ position: 'relative', padding: '64px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 24, alignItems: 'center' }} className="cv-grid2">

          {/* Left: giant cycling headline */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(52px, 7.4vw, 116px)', lineHeight: 0.94, letterSpacing: '-0.04em',
              color: 'var(--ykc-navy-900)', margin: 0,
            }}>
              <span style={{ display: 'block' }}>Get more</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-navy-900)' }}>from your</span>
              <span key={wi} className="cv-stamp" style={{
                display: 'inline-block', marginTop: '0.08em',
                background: 'var(--ykc-blue-500)', color: 'white',
                padding: '0.04em 0.16em 0.1em', transform: 'rotate(-1.5deg)',
                boxShadow: '8px 8px 0 var(--ykc-navy-900)',
              }}>{HERO_WORDS[wi]}</span>
              <span style={{
                fontFamily: 'var(--font-handwritten)', fontWeight: 400, textTransform: 'none',
                fontSize: '0.28em', letterSpacing: 0, color: 'var(--ykc-navy-700)',
                display: 'inline-block', transform: 'rotate(-3deg)', marginLeft: '0.4em',
              }}>honestly.</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55,
              color: 'var(--ykc-navy-700)', maxWidth: 520, margin: '30px 0 0',
            }}>
              Platform-agnostic customer technology for Sub-Saharan Africa.
              Engagement, customer data, analytics, BI, attribution — wired up by
              people who'll happily tell you when you don't need something.
            </p>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', margin: '28px 0 0' }}>
              <Btn intent="primary" size="lg" href="contact.html">Let's connect</Btn>
              <Btn intent="ghost" size="lg" href="#index">Read the index ↓</Btn>
            </div>
          </div>

          {/* Right: collage + draggable stickers */}
          <div className="cv-figure" style={{ position: 'relative', minHeight: 520, zIndex: 1 }}>
            <img src="assets/shapes/halftone-circle-navy.png" alt="" style={{
              position: 'absolute', inset: '4% 0 auto', margin: '0 auto', width: '92%', opacity: 0.5, pointerEvents: 'none',
            }} />
            <img src="assets/collages/telephone-girl.png" alt="Vintage cut-out, woman in curlers with two telephones and pixel sunglasses"
              draggable="false"
              style={{ position: 'relative', width: '100%', maxWidth: 520, margin: '0 auto', transform: 'rotate(1.5deg)', userSelect: 'none' }} />

            <DraggableSticker style={{ top: '6%', left: '2%' }}>
              <Sticker bg="var(--ykc-blue-500)" color="white" rotate={-7}>NO FLUFF</Sticker>
            </DraggableSticker>
            <DraggableSticker style={{ top: '22%', right: '0%' }}>
              <Sticker bg="var(--ykc-navy-900)" color="var(--ykc-beige-500)" rotate={5} size="sm">PLATFORM-AGNOSTIC</Sticker>
            </DraggableSticker>
            <DraggableSticker style={{ bottom: '18%', left: '-2%' }}>
              <Sticker bg="white" color="var(--ykc-navy-900)" rotate={-4} font="hand" size="lg" shadow="var(--ykc-blue-500)">howzit! 👋</Sticker>
            </DraggableSticker>
            <DraggableSticker style={{ bottom: '4%', right: '6%' }}>
              <Sticker bg="var(--ykc-blue-400)" color="var(--ykc-navy-900)" rotate={3} size="sm">POPIA-NATIVE</Sticker>
            </DraggableSticker>

            <div className="hide-mobile" style={{
              position: 'absolute', top: '-4%', right: '4%',
              fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-blue-500)',
              transform: 'rotate(6deg)', pointerEvents: 'none',
            }}>
              the stickers move,<br/>try dragging one ↓
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div style={{
        marginTop: 48, background: 'var(--ykc-navy-900)', overflow: 'hidden',
        padding: '13px 0', transform: 'rotate(-1deg) scale(1.02)', position: 'relative',
      }}>
        <div className="cv-marquee" style={{ display: 'flex', width: 'max-content' }}>
          {[0, 1].map(k => (
            <div key={k} aria-hidden={k === 1} style={{ display: 'flex', alignItems: 'center', gap: 28, paddingRight: 28 }}>
              {['NO FLUFF', 'PLATFORM-AGNOSTIC', 'PROUDLY AFRICAN', 'HONEST ANSWERS', 'WHATSAPP-FIRST', 'POPIA-NATIVE'].map(w => (
                <React.Fragment key={w}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.24em', color: 'var(--ykc-beige-500)', whiteSpace: 'nowrap' }}>{w}</span>
                  <span style={{ color: 'var(--ykc-blue-400)', fontFamily: 'var(--font-pixel)', fontSize: 9 }}>✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cv-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cv-stamp-in {
          0% { transform: rotate(-1.5deg) scale(1.35); opacity: 0; }
          60% { transform: rotate(-1.5deg) scale(0.96); opacity: 1; }
          100% { transform: rotate(-1.5deg) scale(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .cv-marquee { animation: cv-marquee-scroll 26s linear infinite; }
          .cv-stamp { animation: cv-stamp-in .45s cubic-bezier(.2,.9,.2,1); }
        }
        @media (max-width: 1000px) {
          .cv-grid2 { grid-template-columns: 1fr !important; }
          .cv-figure { min-height: 0 !important; margin-top: 24px; }
        }
      `}</style>
    </section>
  );
}


function ProblemSpread() {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '110px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="The problem">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 64, alignItems: 'center' }} className="pb-grid">
          <div>
            <Eyebrow withLine>P.02 · The problem</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.6vw, 66px)', lineHeight: 1.02, letterSpacing: '-0.035em',
              margin: '22px 0 0', color: 'var(--ykc-navy-900)',
            }}>
              Your stack knows everything.<br/>
              <span style={{ color: 'transparent', WebkitTextStroke: '1.6px var(--ykc-navy-900)' }}>Your team learns</span>{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>nothing.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', maxWidth: 520, margin: '26px 0 0' }}>
              Data in six tools, dashboards nobody opens, campaigns firing on gut feel.
              You don't need another platform — you need someone honest about which
              ones you already need, and how to wire them together properly.
            </p>
            <div style={{ marginTop: 28 }}>
              <Btn intent="secondary" href="about.html">Who we are →</Btn>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{
              position: 'absolute', right: '-14%', top: '-12%', width: 300, opacity: 0.3, pointerEvents: 'none',
            }} />
            <img src="assets/collages/drowning-in-data.png" alt="Vintage cut-out, person drowning in a sea of data"
              style={{ position: 'relative', width: '100%', maxWidth: 440, margin: '0 auto', transform: 'rotate(-2deg)' }} />
            <div style={{
              position: 'absolute', bottom: '-4%', left: '4%',
              fontFamily: 'var(--font-handwritten)', fontSize: 20, color: 'var(--ykc-navy-700)', transform: 'rotate(-4deg)',
            }}>
              fig. 1 — you, probably
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .pb-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}


const INDEX_SERVICES = [
  { n: '01', tag: 'CEP',  title: 'Customer Engagement',  desc: 'Real-time messaging across email, push, SMS, in-app, WhatsApp.', partners: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html',  img: 'assets/collages/notification-dark.png' },
  { n: '02', tag: 'CDP',  title: 'Customer Data Platform', desc: 'Every version of your customer, stitched into one trusted profile.', partners: 'Amperity', href: 'services-cdp.html',  img: 'assets/collages/statues-laptop-dark.png' },
  { n: '03', tag: 'PA',   title: 'Product Analytics',     desc: "The answers GA4 can't give you — funnels, retention, adoption.", partners: 'Amplitude', href: 'services-pa.html',   img: 'assets/collages/binoculars-lady-dark.png' },
  { n: '04', tag: 'BI',   title: 'Business Intelligence', desc: 'Dashboards the whole business actually uses.', partners: 'DOMO', href: 'services-bi.html',   img: 'assets/collages/art-of-reporting.png' },
  { n: '05', tag: 'ATTR', title: 'Mobile Attribution',    desc: 'The truth about where your app users come from.', partners: 'AppsFlyer · Branch', href: 'services-attribution.html', img: 'assets/collages/magnifying-glass.png' },
];

function ServicesIndex() {
  const [hover, setHover] = React.useState(null);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  return (
    <section id="index" data-screen-label="Services index"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '104px 0 0', position: 'relative', overflow: 'hidden' }}>
      <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -160, top: -140, width: 520, opacity: 0.16, pointerEvents: 'none' }} />

      {/* cursor-following collage preview */}
      {hover !== null && (
        <img src={INDEX_SERVICES[hover].img} alt="" className="hide-mobile" style={{
          position: 'absolute', left: pos.x, top: pos.y, width: 280,
          transform: 'translate(-50%, -55%) rotate(-4deg)',
          pointerEvents: 'none', zIndex: 5, opacity: 0.95,
        }} />
      )}

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, flexWrap: 'wrap', marginBottom: 40 }}>
          <Eyebrow color="var(--ykc-blue-400)">P.03 · The index — what we do</Eyebrow>
          <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-blue-400)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            hover a line, see the picture →
          </span>
        </div>

        <div>
          {INDEX_SERVICES.map((s, i) => (
            <a key={s.tag} href={s.href}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 24, alignItems: 'baseline',
                padding: '30px 8px', textDecoration: 'none',
                borderTop: '1.5px dotted rgba(255,255,255,0.24)',
                color: hover === i ? 'var(--ykc-blue-400)' : 'var(--ykc-beige-500)',
                transition: 'color .18s var(--ease-snap), padding-left .18s var(--ease-snap)',
                paddingLeft: hover === i ? 24 : 8,
                position: 'relative', zIndex: 2,
              }} className="idx-row">
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 15, color: 'var(--ykc-blue-400)' }}>{s.n}</span>
              <span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.03em',
                  fontSize: 'clamp(30px, 4.2vw, 58px)', lineHeight: 1, textTransform: 'uppercase', display: 'block',
                }}>{s.title}</span>
                <span style={{ display: 'block', fontSize: 15, lineHeight: 1.5, color: 'var(--ykc-navy-200)', marginTop: 8, maxWidth: 560 }}>{s.desc}</span>
              </span>
              <span style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }} className="idx-meta">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--ykc-navy-300)' }}>{s.partners}</span>
                <span style={{
                  width: 38, height: 38, borderRadius: '50%', border: '1.5px solid currentColor',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15,
                  transform: hover === i ? 'rotate(45deg)' : 'none', transition: 'transform .2s var(--ease-snap)',
                }}>→</span>
              </span>
            </a>
          ))}
          <div style={{ borderTop: '1.5px dotted rgba(255,255,255,0.24)' }} />
        </div>
      </div>

      {/* partner logo marquee, "shipped with" */}
      <div style={{ marginTop: 72, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '26px 0', overflow: 'hidden' }}>
        <div className="idx-logos" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
          {[0, 1].map(k => (
            <div key={k} aria-hidden={k === 1} style={{ display: 'flex', alignItems: 'center', gap: 56, paddingRight: 56 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', color: 'var(--ykc-blue-400)', whiteSpace: 'nowrap' }}>◉ SHIPPED WITH</span>
              {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
                <PartnerLogo key={p} name={p} height={24} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.9 }} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes idx-logo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: no-preference) {
          .idx-logos { animation: idx-logo-scroll 32s linear infinite; }
        }
        @media (max-width: 880px) {
          .idx-row { grid-template-columns: 44px 1fr !important; }
          .idx-meta { display: none !important; }
        }
      `}</style>
    </section>
  );
}


function FreeAdvice() {
  const notes = [
    { t: '"You might not need a CDP yet."', r: -3 },
    { t: '"GA4 is honestly fine for that."', r: 2 },
    { t: '"That feature? You already pay for it."', r: -2 },
    { t: '"Your customers are on WhatsApp, not email."', r: 3 },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '110px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Free advice">
      <img src="assets/shapes/dots-navy.png" alt="" style={{ position: 'absolute', right: -80, bottom: -100, width: 380, opacity: 0.14, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center' }} className="fa-grid">
          <div>
            <Eyebrow>P.04 · Why us</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.4vw, 62px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              Things we've said<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>that lost us money.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', maxWidth: 440, margin: '22px 0 0' }}>
              We're platform-agnostic and commission-blind. We recommend what's right
              for you — sometimes that's a tool we don't sell, and sometimes it's
              nothing at all. It's terrible salesmanship. It's why clients stay.
            </p>
            <div style={{ marginTop: 26, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Btn intent="primary" href="partners.html">See our partners</Btn>
              <Btn intent="ghost" href="about.html">Our story →</Btn>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 26, alignItems: 'start' }} className="fa-notes">
            {notes.map((n, i) => (
              <blockquote key={i} style={{
                margin: 0, background: 'white', borderRadius: 14,
                padding: '26px 24px 22px', border: '2px solid var(--ykc-navy-900)',
                boxShadow: i % 2 ? '7px 7px 0 var(--ykc-blue-500)' : '7px 7px 0 var(--ykc-navy-900)',
                transform: `rotate(${n.r}deg) translateY(${i % 2 ? 18 : 0}px)`,
                fontFamily: 'var(--font-handwritten)', fontSize: 24, lineHeight: 1.3,
                color: 'var(--ykc-navy-900)',
              }}>
                {n.t}
                <footer style={{
                  marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: '0.24em', color: 'var(--ykc-blue-500)', textTransform: 'uppercase',
                }}>— an actual YKC consultant</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .fa-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          .fa-notes { grid-template-columns: 1fr !important; }
          .fa-notes blockquote { transform: none !important; }
        }
      `}</style>
    </section>
  );
}


function StepsStrip() {
  const steps = [
    { n: 1, t: 'You ping us',      b: "Email, WhatsApp voice note, 'help!' on a serviette." },
    { n: 2, t: 'We listen',        b: 'Properly. No deck-flipping. We learn your stack and its gaps.' },
    { n: 3, t: 'We pick the tool', b: 'The one that fits your team, budget, and mission.' },
    { n: 4, t: 'We wire it up',    b: 'Quickly — then we train your team and stay around.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }} data-screen-label="How we work">
      <div className="wrap">
        <ConnectorLine heading="HOW IT WORKS" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginTop: 52 }} className="st-grid">
          <div className="st-line" style={{ position: 'absolute', top: 28, left: 28, right: 28, borderTop: '1.5px dotted var(--ykc-navy-500)', zIndex: 0 }} />
          {steps.map((s) => (
            <div key={s.n} style={{ position: 'relative', zIndex: 1, paddingRight: 24 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--ykc-blue-500)', color: 'white',
                fontFamily: 'var(--font-pixel)', fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '6px solid var(--ykc-white)', marginBottom: 16,
              }}>0{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ykc-navy-700)', margin: 0, lineHeight: 1.55 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .st-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .st-line { display: none; }
        }
      `}</style>
    </section>
  );
}


function CtaPoster() {
  return (
    <section style={{ background: 'var(--ykc-blue-500)', padding: '110px 0 120px', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <img src="assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', bottom: '-38%', left: '-6%', width: 480, opacity: 0.5, pointerEvents: 'none' }} />
      <img src="assets/collages/heart-fingers.png" alt="Vintage cut-out, hands making a heart" className="cta2-collage" style={{
        position: 'absolute', right: '4%', bottom: -20, width: 'clamp(180px, 16vw, 270px)',
        transform: 'rotate(-4deg)', pointerEvents: 'none',
      }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <BinaryStrip color="white" size={12} opacity={0.65} />
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(52px, 8vw, 128px)', letterSpacing: '-0.04em', lineHeight: 0.92,
          margin: '26px 0 0', color: 'white',
        }}>
          <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.85)' }}>Sharp.</span>
          <span style={{ display: 'block' }}>Let's connect.</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 18, lineHeight: 1.55, maxWidth: 560, margin: '26px 0 32px' }}>
          One email, one honest answer about whether we're the right fit.
          No 40-slide deck, promise.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
        </div>
        <div style={{ marginTop: 40, fontFamily: 'var(--font-handwritten)', color: 'white', fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .cta2-collage { display: none; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { CoverHero, ProblemSpread, ServicesIndex, FreeAdvice, StepsStrip, CtaPoster });
