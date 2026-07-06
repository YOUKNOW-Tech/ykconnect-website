// YOUKNOW Connect — Home v6 "Insert Coin" sections
// Arcade theme: ArcadeHero (coin + HUD), LevelSelect, CheatCodes, Walkthrough, ContinueCta

function Scanlines() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 4, opacity: 0.5,
      background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0 1px, transparent 1px 4px)',
    }}></div>
  );
}

function ArcadeHero() {
  const [credits, setCredits] = React.useState(0);
  const [floats, setFloats] = React.useState([]);
  const insertCoin = () => {
    setCredits(c => c + 1);
    const id = Date.now();
    setFloats(f => [...f.slice(-4), id]);
    setTimeout(() => setFloats(f => f.filter(x => x !== id)), 900);
  };
  return (
    <section style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden' }} data-screen-label="Arcade hero">
      <Scanlines />
      <img src="assets/shapes/stars-blue.png" alt="" style={{ position: 'absolute', left: '2%', top: '8%', width: 220, opacity: 0.35, pointerEvents: 'none' }} />
      <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -140, bottom: -160, width: 480, opacity: 0.16, pointerEvents: 'none' }} />

      {/* HUD bar */}
      <div style={{
        borderBottom: '1px dotted rgba(255,255,255,0.25)', position: 'relative', zIndex: 2,
        fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.08em',
      }}>
        <div className="wrap-wide" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '14px 32px' }}>
          <span style={{ color: 'var(--ykc-blue-400)' }}>1UP <span style={{ color: 'var(--ykc-beige-500)' }}>YOUR-BUSINESS</span></span>
          <span className="hide-mobile" style={{ color: 'var(--ykc-beige-500)' }}>HI-SCORE <span style={{ color: 'var(--ykc-blue-400)' }}>HONESTY-999999</span></span>
          <span style={{ color: 'var(--ykc-beige-500)' }}>CREDITS <span style={{ color: 'var(--ykc-blue-400)' }}>{String(credits).padStart(2, '0')}</span></span>
        </div>
      </div>

      <div className="wrap-wide" style={{ position: 'relative', zIndex: 2, padding: '72px 32px 72px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(10px, 1.2vw, 14px)', color: 'var(--ykc-blue-400)', letterSpacing: '0.12em', marginBottom: 26 }} className="ar-blink">
          ★ CUSTOMER TECHNOLOGY · FOR AFRICA ★
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(50px, 7.6vw, 122px)', lineHeight: 0.93, letterSpacing: '-0.04em',
          margin: 0, color: 'var(--ykc-beige-500)',
        }}>
          <span style={{ display: 'block' }}>Level up your</span>
          <span style={{ display: 'block', color: 'var(--ykc-blue-400)', textShadow: '6px 6px 0 rgba(0,87,255,0.35)' }}>customer data.</span>
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ykc-navy-200)', maxWidth: 560, margin: '28px auto 0' }}>
          Platform-agnostic customer technology for Sub-Saharan Africa. Engagement,
          customer data, analytics, BI, attribution — co-op mode, with a partner
          who'll tell you when you don't need something.
        </p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', margin: '36px 0 0' }}>
          <a href="#levels" className="ar-blink" style={{
            fontFamily: 'var(--font-pixel)', fontSize: 14, letterSpacing: '0.1em',
            color: 'var(--ykc-navy-900)', background: 'var(--ykc-blue-400)',
            padding: '18px 28px', textDecoration: 'none', borderRadius: 8,
            border: '2px solid white', boxShadow: '6px 6px 0 var(--ykc-blue-500)',
          }}>▶ PRESS START</a>
          <button onClick={insertCoin} style={{
            fontFamily: 'var(--font-pixel)', fontSize: 12, letterSpacing: '0.1em',
            color: 'var(--ykc-beige-500)', background: 'transparent', cursor: 'pointer',
            padding: '18px 24px', borderRadius: 8, border: '2px dashed rgba(255,255,255,0.45)',
            position: 'relative',
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--ykc-blue-400)'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'}
          >
            ◉ INSERT COIN
            {floats.map(id => (
              <span key={id} className="ar-float" style={{
                position: 'absolute', top: -8, right: 10, fontFamily: 'var(--font-pixel)',
                fontSize: 11, color: 'var(--ykc-blue-400)', pointerEvents: 'none',
              }}>+1</span>
            ))}
          </button>
        </div>
        <div style={{ marginTop: 20, minHeight: 30 }}>
          {credits >= 3 && (
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 20, color: 'var(--ykc-blue-400)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
              okay okay, you're keen — <a href="contact.html" style={{ color: 'var(--ykc-beige-500)' }}>let's just talk</a> ✳
            </span>
          )}
          {credits > 0 && credits < 3 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.22em', color: 'var(--ykc-navy-300)', textTransform: 'uppercase' }}>
              coin accepted. no coins needed, but we appreciate the enthusiasm.
            </span>
          )}
        </div>

        {/* collage duo */}
        <div style={{ position: 'relative', maxWidth: 720, margin: '30px auto 0' }}>
          <img src="assets/collages/rocket-ladies-dark.png" alt="Vintage cut-out, two women riding a rocket"
            style={{ width: '100%', maxWidth: 560, margin: '0 auto' }} />
          <div className="hide-mobile" style={{
            position: 'absolute', bottom: '10%', right: '-2%',
            fontFamily: 'var(--font-handwritten)', fontSize: 18, color: 'var(--ykc-navy-300)',
            transform: 'rotate(4deg)',
          }}>
            actual footage of<br/>your growth team, soon
          </div>
        </div>
      </div>

      {/* marquee */}
      <div style={{ background: 'var(--ykc-blue-500)', overflow: 'hidden', padding: '12px 0', position: 'relative', zIndex: 2 }}>
        <div className="ar-marquee" style={{ display: 'flex', width: 'max-content' }}>
          {[0, 1].map(k => (
            <div key={k} aria-hidden={k === 1} style={{ display: 'flex', alignItems: 'center', gap: 28, paddingRight: 28 }}>
              {['NO FLUFF', 'PLATFORM-AGNOSTIC', 'PROUDLY AFRICAN', 'HONEST ANSWERS', 'WHATSAPP-FIRST', 'POPIA-NATIVE'].map(w => (
                <React.Fragment key={w}>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.1em', color: 'white', whiteSpace: 'nowrap' }}>{w}</span>
                  <span style={{ color: 'var(--ykc-navy-900)', fontSize: 12 }}>◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ar-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ar-blink { 0%, 60% { opacity: 1; } 61%, 100% { opacity: 0.35; } }
        @keyframes ar-float-up { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-34px); opacity: 0; } }
        @media (prefers-reduced-motion: no-preference) {
          .ar-marquee { animation: ar-marquee-scroll 26s linear infinite; }
          .ar-blink { animation: ar-blink 1.4s steps(1) infinite; }
          .ar-float { animation: ar-float-up .9s ease-out both; }
        }
      `}</style>
    </section>
  );
}


const LEVELS = [
  { lv: 'LV.01', stars: '★☆☆☆☆', tag: 'CEP',  title: 'Customer Engagement',    boss: 'BOSS: Batch-and-blast emails', desc: 'Real-time messaging across email, push, SMS, in-app & WhatsApp.', partners: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html' },
  { lv: 'LV.02', stars: '★★☆☆☆', tag: 'CDP',  title: 'Customer Data Platform', boss: 'BOSS: Six duplicate profiles', desc: 'Every version of your customer, stitched into one trusted profile.', partners: 'Amperity', href: 'services-cdp.html' },
  { lv: 'LV.03', stars: '★★★☆☆', tag: 'PA',   title: 'Product Analytics',      boss: 'BOSS: The GA4 shrug', desc: "Funnels, retention, adoption — no waiting on an analyst.", partners: 'Amplitude', href: 'services-pa.html' },
  { lv: 'LV.04', stars: '★★★★☆', tag: 'BI',   title: 'Business Intelligence',  boss: 'BOSS: The unopened dashboard', desc: 'Reporting the whole business actually uses.', partners: 'DOMO', href: 'services-bi.html' },
  { lv: 'LV.05', stars: '★★★★★', tag: 'ATTR', title: 'Mobile Attribution',     boss: 'BOSS: Every platform claiming the install', desc: 'The truth about where app users come from, plus deep links that land.', partners: 'AppsFlyer · Branch', href: 'services-attribution.html' },
];

function LevelSelect() {
  return (
    <section id="levels" style={{ background: 'var(--ykc-beige-500)', padding: '104px 0' }} data-screen-label="Level select">
      <div className="wrap-wide">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: 'var(--ykc-blue-500)', letterSpacing: '0.12em', marginBottom: 16 }}>— SELECT LEVEL —</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em', margin: 0,
          }}>
            Start with the level<br/>
            <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>that's beating you.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {LEVELS.map((l) => (
            <a key={l.tag} href={l.href} style={{
              display: 'flex', flexDirection: 'column', gap: 10,
              background: 'white', borderRadius: 16, padding: '24px 22px',
              border: '2px solid var(--ykc-navy-900)', boxShadow: '6px 6px 0 var(--ykc-navy-900)',
              textDecoration: 'none', color: 'var(--ykc-navy-900)',
              transition: 'transform .16s var(--ease-snap), box-shadow .16s var(--ease-snap)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(2px, 2px)'; e.currentTarget.style.boxShadow = '3px 3px 0 var(--ykc-navy-900)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 var(--ykc-navy-900)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: 'var(--ykc-blue-500)' }}>{l.lv}</span>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--ykc-navy-500)' }} title="difficulty">{l.stars}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', lineHeight: 1.08, margin: '6px 0 0' }}>{l.title}</h3>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em',
                color: 'var(--ykc-blue-500)', textTransform: 'uppercase',
                border: '1px dotted var(--ykc-blue-500)', borderRadius: 6, padding: '6px 10px', alignSelf: 'flex-start',
              }}>{l.boss}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: '4px 0 0', flex: 1 }}>{l.desc}</p>
              <div style={{ borderTop: '1.5px dotted rgba(7,20,57,0.25)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--ykc-navy-500)', textTransform: 'uppercase' }}>{l.partners}</span>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--ykc-blue-500)' }}>GO ▶</span>
              </div>
            </a>
          ))}
          {/* secret level */}
          <a href="contact.html" style={{
            display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center',
            background: 'var(--ykc-navy-900)', borderRadius: 16, padding: '24px 22px', minHeight: 220,
            border: '2px dashed var(--ykc-blue-400)', textDecoration: 'none', color: 'var(--ykc-beige-500)',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#0E1C49'}
          onMouseOut={(e) => e.currentTarget.style.background = 'var(--ykc-navy-900)'}
          >
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: 'var(--ykc-blue-400)' }}>LV.??</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.15 }}>
              Secret level:<br/>something we don't sell
            </span>
            <span style={{ fontSize: 13.5, color: 'var(--ykc-navy-200)', lineHeight: 1.5 }}>
              If your stack needs a tool that isn't ours, we'll say so. Ask us anything.
            </span>
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--ykc-blue-400)', marginTop: 4 }}>UNLOCK ▶</span>
          </a>
        </div>
      </div>
    </section>
  );
}


function CheatCodes() {
  const codes = [
    { combo: '↑ ↑ ↓ ↓ HONESTY', unlock: 'A straight answer about whether you need us at all.' },
    { combo: '← → SELECT AGNOSTIC', unlock: "The right tool for your stack — even one we don't sell. No commissions." },
    { combo: 'HOLD B AFTER GO-LIVE', unlock: 'We stay. Call us when something breaks, not just when buying.' },
    { combo: 'START + POPIA', unlock: 'Africa-first setups: WhatsApp where your customers are, compliance built in.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '104px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Cheat codes">
      <img src="assets/collages/no-fluff-sheep.png" alt="Vintage cut-out, sheared sheep, no fluff" className="hide-mobile" style={{
        position: 'absolute', right: '4%', top: 72, width: 160, transform: 'rotate(4deg)',
      }} />
      <div className="wrap">
        <Eyebrow>Why us · the cheat codes</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
          margin: '14px 0 44px', maxWidth: 760,
        }}>
          Every code unlocks<br/>
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>the same thing: honesty.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="cc-grid">
          {codes.map((c, i) => (
            <div key={i} style={{
              border: '1.5px dotted rgba(7,20,57,0.3)', borderRadius: 16,
              padding: '22px 24px', background: i % 2 ? 'var(--ykc-beige-200)' : 'var(--ykc-beige-100)',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--ykc-blue-500)', letterSpacing: '0.1em' }}>{c.combo}</span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ykc-navy-700)' }}>
                <strong style={{ color: 'var(--ykc-navy-900)' }}>UNLOCKS:</strong> {c.unlock}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .cc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}


function Walkthrough() {
  const stages = [
    { s: 'STAGE 1-1', t: 'You ping us', b: 'Email, WhatsApp voice note, a "help!" on a serviette.' },
    { s: 'STAGE 1-2', t: 'We listen', b: 'Properly. We learn your stack and the gaps inside it.' },
    { s: 'STAGE 2-1', t: 'We pick the tool', b: 'The one that fits your team, budget, and mission.' },
    { s: 'STAGE 2-2', t: 'We wire it up & stay', b: 'Set up fast, team trained, and we answer the phone after go-live.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }} data-screen-label="Walkthrough">
      <div className="wrap">
        <ConnectorLine heading="THE WALKTHROUGH" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginTop: 52 }} className="wt-grid">
          <div className="wt-line" style={{ position: 'absolute', top: 26, left: 30, right: 30, borderTop: '1.5px dotted var(--ykc-navy-500)', zIndex: 0 }} />
          {stages.map((s, i) => (
            <div key={s.s} style={{ position: 'relative', zIndex: 1, paddingRight: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--ykc-blue-500)', color: 'white', borderRadius: 10,
                fontFamily: 'var(--font-pixel)', fontSize: 10, padding: '10px 12px',
                border: '5px solid var(--ykc-beige-500)', marginBottom: 14, letterSpacing: '0.08em',
              }}>{s.s}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ykc-navy-700)', margin: 0, lineHeight: 1.55 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .wt-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .wt-line { display: none; }
        }
      `}</style>
    </section>
  );
}


function ContinueCta() {
  const [count, setCount] = React.useState(9);
  React.useEffect(() => {
    const id = setInterval(() => setCount(c => (c === 0 ? 9 : c - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section style={{ background: 'var(--ykc-blue-500)', padding: '104px 0 116px', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <Scanlines />
      <img src="assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', bottom: '-40%', left: '-6%', width: 440, opacity: 0.45, pointerEvents: 'none' }} />
      <img src="assets/collages/shaka-hand.png" alt="Vintage cut-out, shaka hand sign" className="ct6-collage" style={{
        position: 'absolute', right: '5%', bottom: -14, width: 'clamp(160px, 14vw, 250px)', transform: 'rotate(6deg)', pointerEvents: 'none',
      }} />
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 'clamp(13px, 1.6vw, 18px)', color: 'white', letterSpacing: '0.12em' }}>
          CONTINUE? <span style={{ color: 'var(--ykc-navy-900)' }}>{count}</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(48px, 7vw, 112px)', letterSpacing: '-0.04em', lineHeight: 0.93,
          margin: '22px 0 0', color: 'white',
        }}>
          Sharp.<br/>Let's connect.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 18, lineHeight: 1.55, maxWidth: 540, margin: '24px auto 32px' }}>
          One email, one honest answer about whether we're the right fit.
          No 40-slide deck, promise. No actual coins required.
        </p>
        <div style={{ display: 'inline-flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
        </div>
        {/* partners */}
        <div style={{ marginTop: 56, display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>◉ Player 2:</span>
          {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
            <PartnerLogo key={p} name={p} height={18} onDark style={{ color: 'white', opacity: 0.9 }} />
          ))}
        </div>
        <div style={{ marginTop: 34, fontFamily: 'var(--font-handwritten)', color: 'white', fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .ct6-collage { display: none; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { ArcadeHero, LevelSelect, CheatCodes, Walkthrough, ContinueCta });
