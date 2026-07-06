// YOUKNOW Connect — Home v4 "The Gazette" sections
// A broadsheet-newspaper front page: Masthead, LeadStory (click-to-stamp), Classifieds, Letters, AdCta

const GZ_RULE = '2px solid var(--ykc-navy-900)';
const GZ_RULE_THIN = '1px solid rgba(7,20,57,0.35)';
const GZ_RULE_DOT = '1.5px dotted rgba(7,20,57,0.4)';

function GzMasthead() {
  return (
    <div style={{ borderBottom: GZ_RULE, background: 'var(--ykc-beige-500)' }} data-screen-label="Masthead">
      <div className="wrap-wide" style={{ padding: '18px 32px 0' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--ykc-navy-700)',
          borderBottom: GZ_RULE_THIN, paddingBottom: 10,
        }}>
          <span>Vol. 001 · Nº 1 · Cape Town, SSA</span>
          <span className="hide-mobile">Late edition — printed on honest paper</span>
          <span>Price: one honest conversation</span>
        </div>
        <div style={{ textAlign: 'center', padding: '26px 0 18px', position: 'relative' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(40px, 6.6vw, 96px)', letterSpacing: '-0.02em', lineHeight: 0.95,
            margin: 0, color: 'var(--ykc-navy-900)',
          }}>
            The YOUKNOW<span style={{ color: 'var(--ykc-blue-500)' }}> Gazette</span>
          </h1>
          <div style={{
            marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: 'var(--ykc-navy-700)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, flexWrap: 'wrap',
          }}>
            <span style={{ flex: '0 1 120px', borderTop: GZ_RULE_DOT }} />
            <span>All the customer data that's fit to use</span>
            <span style={{ flex: '0 1 120px', borderTop: GZ_RULE_DOT }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GzLeadStory() {
  const [stamps, setStamps] = React.useState([]);
  const addStamp = (e) => {
    if (e.target.closest('a, button')) return;
    const r = e.currentTarget.getBoundingClientRect();
    setStamps(s => [...s.slice(-7), { x: e.clientX - r.left, y: e.clientY - r.top, r: (Math.random() * 24 - 12).toFixed(1), id: Date.now() }]);
  };
  return (
    <section onClick={addStamp} style={{ background: 'var(--ykc-beige-500)', position: 'relative', cursor: 'crosshair' }} data-screen-label="Lead story">
      {/* stamps */}
      {stamps.map(s => (
        <span key={s.id} className="gz-stamp" style={{
          position: 'absolute', left: s.x, top: s.y, zIndex: 8,
          transform: `translate(-50%, -50%) rotate(${s.r}deg)`,
          fontFamily: 'var(--font-pixel)', fontSize: 11, letterSpacing: '0.1em',
          color: 'var(--ykc-blue-500)', border: '3px double var(--ykc-blue-500)',
          borderRadius: 8, padding: '8px 12px', whiteSpace: 'nowrap',
          pointerEvents: 'none', background: 'rgba(243,234,219,0.7)',
        }}>✔ CERTIFIED HONEST</span>
      ))}

      <div className="wrap-wide" style={{ padding: '40px 32px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0 }} className="gz-lead-grid">

          {/* lead column */}
          <div style={{ paddingRight: 40, borderRight: GZ_RULE_THIN }} className="gz-lead-col">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '5px 10px' }}>FRONT PAGE</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)' }}>EXCLUSIVE</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(34px, 4.6vw, 68px)', lineHeight: 0.98, letterSpacing: '-0.03em',
              margin: '20px 0 0', color: 'var(--ykc-navy-900)',
            }}>
              "Get more from your customer data," says local consultancy —{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>refuses to oversell.</em>
            </h2>
            <div style={{ margin: '18px 0 0', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ykc-navy-700)' }}>
              By our data correspondent · Cape Town
            </div>
            <div style={{
              marginTop: 22, columnCount: 2, columnGap: 36, columnRule: GZ_RULE_DOT,
              fontSize: 15.5, lineHeight: 1.65, color: 'var(--ykc-navy-700)',
            }} className="gz-body-cols">
              <p style={{ margin: '0 0 14px' }}>
                <strong style={{ color: 'var(--ykc-navy-900)' }}>CAPE TOWN —</strong> Businesses
                across Sub-Saharan Africa are reportedly sitting on customer data they can't
                use: engagement tools half set up, dashboards nobody opens, and six platforms
                that don't speak to each other.
              </p>
              <p style={{ margin: '0 0 14px' }}>
                Enter YOUKNOW Connect, a platform-agnostic customer technology partner that
                wires up engagement, customer data, analytics, BI, and attribution — and,
                witnesses confirm, will happily tell you when you don't need something.
              </p>
              <p style={{ margin: 0 }}>
                "We've talked ourselves out of plenty of sales," a consultant admitted,
                unprompted. "The clients keep staying, though. Odd how that works."
                Sources describe the firm as WhatsApp-first, POPIA-native, and allergic
                to 40-slide decks.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 28 }}>
              <Btn intent="primary" size="lg" href="contact.html">Let's connect</Btn>
              <Btn intent="ghost" size="lg" href="#classifieds">Read the classifieds ↓</Btn>
            </div>
            <div style={{ marginTop: 18, fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-blue-500)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
              psst — click anywhere on the paper to stamp it ✔
            </div>
          </div>

          {/* sidebar */}
          <aside style={{ paddingLeft: 40, display: 'flex', flexDirection: 'column', gap: 26 }} className="gz-sidebar">
            {/* photo card */}
            <figure style={{ margin: 0, border: GZ_RULE_THIN, padding: 12, background: 'var(--ykc-beige-200)' }}>
              <img src="assets/collages/point-hand.png" alt="Vintage cut-out, hand pointing" style={{ width: '86%', margin: '0 auto' }} />
              <figcaption style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--ykc-navy-700)', marginTop: 10, textTransform: 'uppercase' }}>
                Pictured: your customer data, being pointed at. Finally.
              </figcaption>
            </figure>
            {/* weather box */}
            <div style={{ border: GZ_RULE, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-navy-700)', borderBottom: GZ_RULE_DOT, paddingBottom: 8, marginBottom: 10 }}>
                Today's forecast
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                100% chance of honest answers.
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ykc-navy-700)', marginTop: 6 }}>
                Scattered dashboards clearing by afternoon.
              </div>
            </div>
            {/* public notice: how it works */}
            <div style={{ border: GZ_RULE_THIN, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)', borderBottom: GZ_RULE_DOT, paddingBottom: 8, marginBottom: 12 }}>
                Public notice — how it works
              </div>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['You ping us — email, WhatsApp, serviette.', 'We listen. Properly, no deck-flipping.', 'We pick the tool that actually fits.', 'We wire it up, train you, and stay.'].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline', fontSize: 14, lineHeight: 1.5, color: 'var(--ykc-navy-700)' }}>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--ykc-blue-500)', flexShrink: 0 }}>0{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        @keyframes gz-stamp-in {
          0% { opacity: 0; transform: translate(-50%,-50%) scale(1.8); }
          60% { opacity: 1; transform: translate(-50%,-50%) scale(0.94); }
          100% { opacity: 1; transform: translate(-50%,-50%) scale(1); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .gz-stamp { animation: gz-stamp-in .3s cubic-bezier(.2,.9,.2,1) both; }
        }
        .gz-stamp { animation-fill-mode: both; }
        @media (max-width: 1000px) {
          .gz-lead-grid { grid-template-columns: 1fr !important; }
          .gz-lead-col { padding-right: 0 !important; border-right: 0 !important; }
          .gz-sidebar { padding-left: 0 !important; margin-top: 36px; }
          .gz-body-cols { column-count: 1 !important; }
        }
      `}</style>
    </section>
  );
}


const GZ_ADS = [
  { tag: 'CEP',  title: 'CUSTOMER ENGAGEMENT', pitch: 'Messages that arrive on time, in the right channel, saying the right thing. Email, push, SMS, in-app & WhatsApp.', partners: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html' },
  { tag: 'CDP',  title: 'ONE CUSTOMER, ONE PROFILE', pitch: 'Tired of six versions of the same customer? Have them stitched into one profile the whole business can trust.', partners: 'Amperity', href: 'services-cdp.html' },
  { tag: 'PA',   title: 'ANSWERS GA4 WON\u2019T GIVE', pitch: 'Funnels! Retention! Feature adoption! No waiting on an analyst. Satisfaction practically guaranteed.', partners: 'Amplitude', href: 'services-pa.html' },
  { tag: 'BI',   title: 'DASHBOARDS, ACTUALLY USED', pitch: 'For the whole business, not just the data team. Gently used metrics considered.', partners: 'DOMO', href: 'services-bi.html' },
  { tag: 'ATTR', title: 'FOUND: YOUR APP INSTALLS', pitch: 'Every ad platform claims the same install. We find the truth, plus deep links that actually land.', partners: 'AppsFlyer · Branch', href: 'services-attribution.html' },
];

function GzClassifieds() {
  return (
    <section id="classifieds" style={{ background: 'var(--ykc-white)', borderTop: GZ_RULE, padding: '72px 0 88px' }} data-screen-label="Classifieds">
      <div className="wrap-wide">
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 8 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(30px, 3.6vw, 52px)', letterSpacing: '-0.02em', margin: 0,
          }}>Classifieds</h2>
          <span style={{ flex: 1, borderTop: GZ_RULE }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-navy-700)' }} className="hide-mobile">
            Services · section C · all offers honest
          </span>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: 'var(--ykc-navy-700)', margin: '10px 0 34px' }}>
          FIVE SERVICE DOMAINS. ONE HONEST PARTNER. PICK THE ONE THAT HURTS MOST.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: GZ_RULE }} className="gz-ads-grid">
          {GZ_ADS.map((a, i) => (
            <a key={a.tag} href={a.href} style={{
              display: 'flex', flexDirection: 'column', gap: 12,
              padding: '26px 24px', textDecoration: 'none', color: 'var(--ykc-navy-900)',
              borderRight: GZ_RULE_THIN, borderBottom: GZ_RULE_THIN,
              background: 'var(--ykc-white)', position: 'relative',
              transition: 'background .18s var(--ease-snap)',
            }}
            className="gz-ad"
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--ykc-blue-100)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'var(--ykc-white)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '5px 9px', letterSpacing: '0.08em' }}>{a.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ykc-navy-500)', letterSpacing: '0.2em' }}>AD Nº 00{i + 1}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.1, margin: '4px 0 0' }}>{a.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0, flex: 1 }}>{a.pitch}</p>
              <div style={{ borderTop: GZ_RULE_DOT, paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--ykc-navy-500)', textTransform: 'uppercase' }}>{a.partners}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--ykc-blue-500)', whiteSpace: 'nowrap' }}>ENQUIRE →</span>
              </div>
            </a>
          ))}
          {/* filler ad */}
          <div style={{
            padding: '26px 24px', borderBottom: GZ_RULE_THIN,
            background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, textAlign: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', color: 'var(--ykc-blue-400)', textTransform: 'uppercase' }}>Missed connections</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, lineHeight: 1.2 }}>
              You, a stack full of data.<br/>Us, unreasonably honest.
            </span>
            <a href="contact.html" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ykc-blue-400)', textDecoration: 'none' }}>WRITE BACK →</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .gz-ads-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .gz-ads-grid { grid-template-columns: 1fr !important; } .gz-ad { border-right: 0 !important; } }
      `}</style>
    </section>
  );
}


function GzLetters() {
  const letters = [
    { q: '"They told us not to buy a CDP yet. Who does that?"', a: '— Bewildered CMO, Johannesburg' },
    { q: '"Asked for a proposal, got a straight answer instead."', a: '— Confused but happy founder, Nairobi' },
    { q: '"They still answer the phone a year after go-live."', a: '— Suspicious head of data, Lagos' },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', borderTop: GZ_RULE, padding: '72px 0 88px', position: 'relative', overflow: 'hidden' }} data-screen-label="Letters">
      <img src="assets/collages/no-fluff-sheep.png" alt="Vintage cut-out, sheared sheep, no fluff" className="hide-mobile" style={{
        position: 'absolute', right: '3%', bottom: 24, width: 160, transform: 'rotate(5deg)',
      }} />
      <div className="wrap-wide">
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 40 }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(30px, 3.6vw, 52px)', letterSpacing: '-0.02em', margin: 0,
          }}>Letters to the editor</h2>
          <span style={{ flex: 1, borderTop: GZ_RULE }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="gz-letters-grid">
          {letters.map((l, i) => (
            <blockquote key={i} style={{
              margin: 0, padding: '24px 4px 0', borderTop: GZ_RULE_DOT,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 25, lineHeight: 1.3, color: 'var(--ykc-navy-900)', transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}>{l.q}</span>
              <footer style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ykc-blue-500)', textTransform: 'uppercase' }}>{l.a}</footer>
            </blockquote>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--ykc-navy-500)', margin: '40px 0 0', textTransform: 'uppercase' }}>
          * Letters dramatised. The honesty is real — platform-agnostic, commission-blind, and around after go-live.
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) { .gz-letters-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}


function GzAdCta() {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '0 0 96px' }} data-screen-label="CTA">
      <div className="wrap-wide">
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ykc-navy-500)', textAlign: 'center', marginBottom: 8 }}>
          — Advertisement —
        </div>
        <div style={{
          background: 'var(--ykc-blue-500)', border: GZ_RULE, boxShadow: '10px 10px 0 var(--ykc-navy-900)',
          padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden', textAlign: 'center',
        }}>
          <img src="assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', bottom: '-42%', left: '-7%', width: 420, opacity: 0.5, pointerEvents: 'none' }} />
          <img src="assets/collages/heart-fingers.png" alt="Vintage cut-out, hands making a heart" className="gz-cta-collage" style={{
            position: 'absolute', right: '3%', bottom: -18, width: 'clamp(150px, 13vw, 230px)', transform: 'rotate(-4deg)', pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
              Limited time offer: forever
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase',
              fontSize: 'clamp(44px, 6.4vw, 104px)', letterSpacing: '-0.035em', lineHeight: 0.94,
              margin: '18px 0 0', color: 'white',
            }}>
              Sharp.<br/>Let's connect.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 18, lineHeight: 1.55, maxWidth: 540, margin: '22px auto 30px' }}>
              One email, one honest answer about whether we're the right fit. No 40-slide deck, promise.
            </p>
            <div style={{ display: 'inline-flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
              <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
            </div>
            <div style={{ marginTop: 30, fontFamily: 'var(--font-handwritten)', color: 'white', fontSize: 23, transform: 'rotate(-2deg)', display: 'inline-block' }}>
              YOUKNOW &lt;3
            </div>
          </div>
        </div>

        {/* bottom colophon: partners */}
        <div style={{
          marginTop: 28, borderTop: GZ_RULE_DOT, paddingTop: 18,
          display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-navy-500)' }}>Printed with</span>
          {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
            <PartnerLogo key={p} name={p} height={18} style={{ color: 'var(--ykc-navy-700)', opacity: 0.8 }} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .gz-cta-collage { display: none; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { GzMasthead, GzLeadStory, GzClassifieds, GzLetters, GzAdCta });
