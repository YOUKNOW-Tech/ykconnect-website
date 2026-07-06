// YOUKNOW Connect — Home v5 "Special Delivery" sections
// Airmail/postal theme: PostHero (flippable postcard), StampSheet (services), ParcelTracking, PostCta

const PM_AIRMAIL = `repeating-linear-gradient(-45deg,
  var(--ykc-blue-500) 0 14px, var(--ykc-beige-100) 14px 28px,
  var(--ykc-navy-900) 28px 42px, var(--ykc-beige-100) 42px 56px)`;

function AirmailBar({ height = 12 }) {
  return <div style={{ height, background: PM_AIRMAIL, width: '100%' }} />;
}

function Postmark({ style, label = 'CAPE TOWN · SSA', sub = '2026' }) {
  return (
    <div style={{
      width: 108, height: 108, borderRadius: '50%',
      border: '2.5px solid var(--ykc-navy-700)', opacity: 0.75,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
      fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.22em',
      color: 'var(--ykc-navy-700)', textTransform: 'uppercase', textAlign: 'center',
      pointerEvents: 'none', ...style,
    }}>
      <span>★ ★ ★</span>
      <span style={{ maxWidth: 84, lineHeight: 1.5 }}>{label}</span>
      <span style={{ borderTop: '1.5px solid var(--ykc-navy-700)', paddingTop: 3 }}>{sub}</span>
    </div>
  );
}

function PostHero() {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <section style={{ background: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden' }} data-screen-label="Post hero">
      <AirmailBar />
      <div className="wrap-wide" style={{ position: 'relative', padding: '56px 32px 80px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: 'var(--ykc-navy-700)', marginBottom: 44,
        }}>
          <span>✉ Par avion · per lugpos · ngendiza</span>
          <span className="hide-mobile">First-class customer technology</span>
          <span>Postage paid · honestly</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }} className="pm-grid2">
          {/* left: headline */}
          <div style={{ position: 'relative' }}>
            <Postmark style={{ position: 'absolute', top: -34, right: 10, transform: 'rotate(12deg)' }} />
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(50px, 7vw, 112px)', lineHeight: 0.94, letterSpacing: '-0.04em',
              margin: 0, color: 'var(--ykc-navy-900)',
            }}>
              <span style={{ display: 'block' }}>Special</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-navy-900)' }}>delivery for</span>
              <span style={{ display: 'block', color: 'var(--ykc-blue-500)' }}>your data.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ykc-navy-700)', maxWidth: 500, margin: '28px 0 0' }}>
              Platform-agnostic customer technology, hand-delivered across Sub-Saharan
              Africa. Engagement, customer data, analytics, BI, attribution — signed for
              by people who'll tell you when you don't need something.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', margin: '28px 0 0' }}>
              <Btn intent="primary" size="lg" href="contact.html">Drop us a line</Btn>
              <Btn intent="ghost" size="lg" href="#stamps">Browse the stamps ↓</Btn>
            </div>
          </div>

          {/* right: flippable postcard */}
          <div style={{ perspective: 1400 }}>
            <div
              onClick={() => setFlipped(f => !f)}
              role="button" aria-pressed={flipped} tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlipped(f => !f); } }}
              style={{
                position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto',
                aspectRatio: '3 / 2.05', cursor: 'pointer',
                transformStyle: 'preserve-3d', transition: 'transform .7s cubic-bezier(.3,.8,.3,1)',
                transform: flipped ? 'rotateY(180deg) rotate(1.5deg)' : 'rotate(-2deg)',
              }}>
              {/* front */}
              <div style={{
                position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                background: 'var(--ykc-navy-900)', borderRadius: 14, overflow: 'hidden',
                border: '10px solid white', boxShadow: '12px 14px 0 rgba(7,20,57,0.2)',
                display: 'flex', alignItems: 'flex-end',
              }}>
                <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -110, top: -90, width: 420, opacity: 0.25 }} />
                <img src="assets/collages/globe.png" alt="Vintage cut-out, hands holding a globe" style={{
                  position: 'absolute', right: '4%', top: '6%', height: '88%', objectFit: 'contain',
                }} />
                <div style={{ position: 'relative', padding: '0 0 22px 24px' }}>
                  <div style={{
                    fontFamily: 'var(--font-poster)', textTransform: 'uppercase', lineHeight: 0.9,
                    fontSize: 'clamp(30px, 3.4vw, 48px)', color: 'var(--ykc-beige-500)', letterSpacing: '0.01em',
                  }}>
                    Greetings<br/>from <span style={{ color: 'var(--ykc-blue-400)' }}>Cape Town</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', color: 'var(--ykc-navy-300)', marginTop: 10, textTransform: 'uppercase' }}>
                    Wish your data were here
                  </div>
                </div>
              </div>
              {/* back */}
              <div style={{
                position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'var(--ykc-beige-100)', borderRadius: 14,
                border: '10px solid white', boxShadow: '12px 14px 0 rgba(7,20,57,0.2)',
                display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden',
              }}>
                <div style={{ padding: '20px 18px', fontFamily: 'var(--font-handwritten)', fontSize: 'clamp(15px, 1.5vw, 21px)', lineHeight: 1.45, color: 'var(--ykc-navy-900)', transform: 'rotate(-0.5deg)' }}>
                  Dear future client,<br/><br/>
                  Your dashboards miss you. Your six customer profiles want to be one.
                  We can fix both — and we'll tell you honestly if you don't need us yet.<br/><br/>
                  Sharp sharp,<br/>the YKC crew ✳
                </div>
                <div style={{ borderLeft: '1.5px dotted rgba(7,20,57,0.35)', padding: '20px 18px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    alignSelf: 'flex-end', width: 74, height: 88, background: 'var(--ykc-blue-500)',
                    border: '4px dashed white', outline: '1.5px solid rgba(7,20,57,0.3)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                    transform: 'rotate(3deg)',
                  }}>
                    <img src="assets/logos/icon-kgolo-white.png" alt="YKC kgolo icon" style={{ width: 38 }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.2em', color: 'white' }}>R1 · YKC</span>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {['TO: YOUR CUSTOMER DATA', 'C/O YOUR BUSINESS', 'SUB-SAHARAN AFRICA'].map(l => (
                      <div key={l}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', color: 'var(--ykc-navy-700)', marginBottom: 4 }}>{l}</div>
                        <div style={{ borderBottom: '1.5px solid rgba(7,20,57,0.4)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: 22 }}>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-blue-500)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                {flipped ? 'click to see the front again ↺' : '↑ click the postcard, there\u2019s a note on the back'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const STAMP_SERVICES = [
  { d: 'R01', tag: 'CEP',  title: 'Customer Engagement',    desc: 'Email, push, SMS, in-app & WhatsApp — on time, personal.', partners: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html', img: 'assets/collages/notification-dark.png', r: -2 },
  { d: 'R02', tag: 'CDP',  title: 'Customer Data Platform', desc: 'One stitched profile the whole business can trust.', partners: 'Amperity', href: 'services-cdp.html', img: 'assets/collages/statues-laptop-dark.png', r: 1.5 },
  { d: 'R03', tag: 'PA',   title: 'Product Analytics',      desc: "Funnels, retention, adoption — answers GA4 can't give.", partners: 'Amplitude', href: 'services-pa.html', img: 'assets/collages/binoculars-lady-dark.png', r: -1 },
  { d: 'R04', tag: 'BI',   title: 'Business Intelligence',  desc: 'Dashboards the whole business actually opens.', partners: 'DOMO', href: 'services-bi.html', img: 'assets/collages/rocket-ladies-dark.png', r: 2 },
  { d: 'R05', tag: 'ATTR', title: 'Mobile Attribution',     desc: 'The truth about installs, plus deep links that land.', partners: 'AppsFlyer · Branch', href: 'services-attribution.html', img: 'assets/collages/yk-guy-dark.png', r: -1.5 },
];

function StampSheet() {
  return (
    <section id="stamps" style={{ background: 'var(--ykc-white)', padding: '104px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Stamp sheet">
      <div className="wrap-wide">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 44 }}>
          <div>
            <Eyebrow>What we do · commemorative issue</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              Five services,<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>collect them all.</em>
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-navy-500)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            lick responsibly. start with the one that hurts most →
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 26 }}>
          {STAMP_SERVICES.map((s) => (
            <a key={s.tag} href={s.href} style={{
              display: 'block', textDecoration: 'none', color: 'var(--ykc-navy-900)',
              background: 'white', padding: 12,
              border: '4px dashed var(--ykc-navy-200)', outline: '1px solid rgba(7,20,57,0.15)',
              transform: `rotate(${s.r}deg)`,
              transition: 'transform .22s var(--ease-bounce), box-shadow .22s var(--ease-snap), border-color .22s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)'; e.currentTarget.style.boxShadow = '10px 12px 0 rgba(7,20,57,0.16)'; e.currentTarget.style.borderColor = 'var(--ykc-blue-400)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = `rotate(${s.r}deg)`; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--ykc-navy-200)'; }}
            >
              <div style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '16px 16px 14px', position: 'relative', overflow: 'hidden', minHeight: 320, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--ykc-blue-400)', letterSpacing: '0.08em' }}>{s.tag}</span>
                  <span style={{ fontFamily: 'var(--font-poster)', fontSize: 26, color: 'var(--ykc-blue-400)', lineHeight: 1 }}>{s.d}</span>
                </div>
                <img src={s.img} alt="" style={{ height: 150, objectFit: 'contain', margin: '12px auto 8px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '4px 0 8px' }}>{s.title}</h3>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--ykc-navy-200)', margin: 0, flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: 12, borderTop: '1px dotted rgba(255,255,255,0.3)', paddingTop: 8, display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '0.14em', color: 'var(--ykc-navy-300)', textTransform: 'uppercase' }}>{s.partners}</span>
                  <span style={{ color: 'var(--ykc-blue-400)', fontSize: 14 }}>↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


function ParcelTracking() {
  const events = [
    { code: 'RECEIVED', t: 'You ping us', b: 'Email, WhatsApp voice note, a "help!" on a serviette. However it arrives, it arrives.', time: 'DAY 01 · 09:12' },
    { code: 'HEARD',    t: 'We listen, properly', b: 'No deck-flipping. We learn your stack, your team, and the gaps between them.', time: 'DAY 01 · 14:30' },
    { code: 'SORTED',   t: 'We pick the tool', b: "Platform-agnostic, commission-blind. Sometimes it's a tool we don't sell. Sometimes it's nothing at all.", time: 'DAY 03 · 10:05' },
    { code: 'DELIVERED',t: 'We wire it up & stay', b: 'Set up quickly, team trained — and we still answer the phone long after go-live.', time: 'ONGOING · ∞' },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '104px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Parcel tracking">
      <img src="assets/shapes/dots-navy.png" alt="" style={{ position: 'absolute', right: -90, top: -80, width: 360, opacity: 0.12, pointerEvents: 'none' }} />
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 64, alignItems: 'start' }} className="pt-grid">
          <div style={{ position: 'sticky', top: 120 }} className="pt-intro">
            <Eyebrow>How we work · track your request</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.4vw, 60px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              From "help!"<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>to handled.</em>
            </h2>
            <div style={{
              marginTop: 24, display: 'inline-flex', flexDirection: 'column', gap: 6,
              border: '1.5px dotted rgba(7,20,57,0.35)', padding: '14px 18px', borderRadius: 12,
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em', color: 'var(--ykc-navy-700)',
            }}>
              <span>TRACKING Nº</span>
              <span style={{ fontSize: 15, color: 'var(--ykc-blue-500)', letterSpacing: '0.24em' }}>YKC-2026-HONEST</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <img src="assets/collages/south-africa.png" alt="Vintage cut-out, map of South Africa" style={{ width: 200, transform: 'rotate(-3deg)' }} />
            </div>
          </div>

          <ol style={{ margin: 0, padding: 0, listStyle: 'none', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 13, top: 16, bottom: 16, borderLeft: '2px dotted var(--ykc-navy-500)' }} />
            {events.map((ev, i) => (
              <li key={ev.code} style={{ position: 'relative', paddingLeft: 52, paddingBottom: i === events.length - 1 ? 0 : 40 }}>
                <span style={{
                  position: 'absolute', left: 0, top: 2, width: 28, height: 28, borderRadius: '50%',
                  background: i === events.length - 1 ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                  border: '5px solid var(--ykc-beige-500)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 11,
                }}>{i === events.length - 1 ? '✓' : ''}</span>
                <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--ykc-blue-500)', letterSpacing: '0.1em' }}>{ev.code}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--ykc-navy-500)' }}>{ev.time}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', margin: '8px 0 8px' }}>{ev.t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 480 }}>{ev.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .pt-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          .pt-intro { position: static !important; }
        }
      `}</style>
    </section>
  );
}


function PostCta() {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', padding: '104px 0 0', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', left: -140, top: -140, width: 460, opacity: 0.18, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative', paddingBottom: 96 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'center' }} className="pc-grid">
          <div>
            <Eyebrow color="var(--ykc-blue-400)">Return address</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(48px, 6.6vw, 104px)', letterSpacing: '-0.04em', lineHeight: 0.93,
              margin: '18px 0 0', color: 'var(--ykc-beige-500)',
            }}>
              Drop us<br/>
              <span style={{ color: 'var(--ykc-blue-400)' }}>a line.</span>
            </h2>
            <p style={{ color: 'var(--ykc-navy-200)', fontSize: 18, lineHeight: 1.55, maxWidth: 520, margin: '24px 0 30px' }}>
              One email, one honest answer about whether we're the right fit.
              No 40-slide deck, promise. Postage on us.
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
              <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
            </div>
          </div>

          {/* envelope card */}
          <div style={{
            background: 'var(--ykc-beige-100)', borderRadius: 10, padding: '26px 26px 22px',
            transform: 'rotate(2deg)', position: 'relative',
            boxShadow: '14px 16px 0 rgba(0,0,0,0.25)',
          }} className="hide-mobile">
            <div style={{ position: 'absolute', top: 14, right: 14, width: 58, height: 70, background: 'var(--ykc-blue-500)', border: '4px dashed white', outline: '1px solid rgba(7,20,57,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(4deg)' }}>
              <img src="assets/logos/icon-kgolo-white.png" alt="" style={{ width: 30 }} />
            </div>
            <Postmark style={{ position: 'absolute', top: 4, right: 54, width: 88, height: 88, transform: 'rotate(-10deg)' }} sub="EST. 2026" />
            <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: 24, lineHeight: 1.7, color: 'var(--ykc-navy-900)', marginTop: 64 }}>
              YOUKNOW Connect<br/>
              connect@youknow.co.za<br/>
              Cape Town, South Africa
            </div>
            <div style={{ marginTop: 18, borderTop: '1.5px dotted rgba(7,20,57,0.3)', paddingTop: 12, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.22em', color: 'var(--ykc-navy-700)', textTransform: 'uppercase' }}>
              Handle with care — contains honest answers
            </div>
          </div>
        </div>

        {/* partners colophon */}
        <div style={{
          marginTop: 72, borderTop: '1px dotted rgba(255,255,255,0.25)', paddingTop: 22,
          display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-blue-400)' }}>◉ Delivered with</span>
          {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
            <PartnerLogo key={p} name={p} height={19} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.85 }} />
          ))}
        </div>
      </div>
      <AirmailBar />
      <style>{`
        @media (max-width: 1000px) { .pc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { PostHero, StampSheet, ParcelTracking, PostCta });
