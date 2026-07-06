// YOUKNOW Connect, Home page sections
// Hero, ServicesGrid, PartnersStrip, Differentiators, Approach, CtaSection

function HomeHero() {
  return (
    <section style={{
      background: 'var(--ykc-beige-500)',
      position: 'relative', overflow: 'hidden',
      padding: '84px 0 0',
    }}>
      {/* faint warped grid bg */}
      <svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }}>
        <defs>
          <pattern id="hm-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 48 0 L 48 48" fill="none" stroke="var(--ykc-navy-900)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1400" height="800" fill="url(#hm-grid)"/>
      </svg>
      <img src="assets/shapes/halftone-faded-circle-blue.png" alt="" style={{
        position: 'absolute', right: -140, top: -120, width: 480, opacity: 0.35, pointerEvents: 'none',
      }} />

      <div className="wrap-wide" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, flexWrap: 'wrap' }}>
          <Eyebrow withLine>Customer technology · for Africa</Eyebrow>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ykc-navy-700)', letterSpacing: '0.28em' }}>EST. CAPE TOWN · SSA</span>
        </div>

        {/* Typographic manifesto headline */}
        <div style={{ position: 'relative', margin: '40px 0 0' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(58px, 9.4vw, 150px)',
            lineHeight: 0.96, letterSpacing: '-0.04em',
            color: 'var(--ykc-navy-900)', margin: 0, textTransform: 'uppercase',
          }}>
            <span style={{ display: 'block' }}>Get more</span>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-navy-900)' }}>
              from your
            </span>
            <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.22em', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--ykc-blue-500)' }}>customer data</span>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontWeight: 400, fontSize: '0.3em', color: 'var(--ykc-navy-700)', letterSpacing: 0, textTransform: 'none', transform: 'rotate(-2deg)' }}>
                honestly.
              </span>
            </span>
          </h1>
          <div className="hide-mobile" style={{ position: 'absolute', top: -18, right: 0, zIndex: 2 }}>
            <Sticker bg="var(--ykc-blue-500)" color="white" rotate={6}>PLATFORM-AGNOSTIC</Sticker>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', marginTop: 36, flexWrap: 'wrap' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55,
            color: 'var(--ykc-navy-700)', maxWidth: 620, margin: 0, flex: '1 1 420px',
          }}>
            We help businesses across Sub-Saharan Africa make sense of their customer tech. Engagement, customer data, analytics, BI, attribution. Set up by people who'll happily tell you when you don't need something.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <Btn intent="primary" size="lg" href="contact.html">Let's connect</Btn>
              <Btn intent="ghost" size="lg" href="#services">See what we do →</Btn>
            </div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
              <BinaryStrip />
              <span style={{ fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-500)', fontSize: 18, transform: 'rotate(-3deg)', display: 'inline-block' }}>
                ↑ this means "sawubona, neighbour"
              </span>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div style={{
          margin: '56px 0 0', padding: '22px 28px', borderRadius: 18,
          background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)',
          border: '1.5px dotted rgba(7,20,57,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 18,
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ykc-blue-500)', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 500 }}>
            ◉ Tools we ship with
          </span>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
              <PartnerLogo key={p} name={p} height={22} style={PARTNER_LOGO_SRC[p] ? {} : { color: 'var(--ykc-navy-900)' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{
        marginTop: 56, background: 'var(--ykc-navy-900)', overflow: 'hidden',
        padding: '14px 0', transform: 'rotate(-1deg) scale(1.02)',
      }}>
        <div className="hero-marquee" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
          {[0, 1].map(k => (
            <div key={k} aria-hidden={k === 1} style={{ display: 'flex', alignItems: 'center', gap: 28, paddingRight: 28 }}>
              {['NO FLUFF', 'PLATFORM-AGNOSTIC', 'PROUDLY AFRICAN', 'HONEST ANSWERS', 'WHATSAPP-FIRST', 'POPIA-NATIVE'].map(w => (
                <React.Fragment key={w}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.24em', color: 'var(--ykc-beige-500)', whiteSpace: 'nowrap' }}>{w}</span>
                  <span style={{ color: 'var(--ykc-blue-400)', fontFamily: "'Press Start 2P', monospace", fontSize: 9 }}>✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hero-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-marquee { animation: hero-marquee-scroll 26s linear infinite; }
        }
        @media (max-width: 880px) {
          h1 [style*="text-stroke"] { -webkit-text-stroke-width: 1.2px !important; }
        }
      `}</style>
    </section>
  );
}


function ServicesGrid() {
  const services = [
    {
      id: 'cep',
      tag: 'CEP',
      title: 'Customer Engagement',
      body: 'Real-time, personalised messaging across email, push, SMS, in-app, and WhatsApp.',
      partners: ['Braze', 'OneSignal', 'InsiderOne'],
      href: 'services-cep.html',
      accent: 'var(--ykc-blue-500)',
    },
    {
      id: 'cdp',
      tag: 'CDP',
      title: 'Customer Data Platform',
      body: 'Every version of your customer, stitched into one profile your whole business can trust.',
      partners: ['Amperity'],
      href: 'services-cdp.html',
      accent: 'var(--ykc-blue-500)',
    },
    {
      id: 'pa',
      tag: 'PA',
      title: 'Product Analytics',
      body: "The answers GA4 can't give you. Funnels, retention, feature adoption. No waiting on an analyst.",
      partners: ['Amplitude'],
      href: 'services-pa.html',
      accent: 'var(--ykc-blue-500)',
    },
    {
      id: 'bi',
      tag: 'BI',
      title: 'Business Intelligence',
      body: 'Dashboards the whole business actually uses, not just the data team.',
      partners: ['DOMO'],
      href: 'services-bi.html',
      accent: 'var(--ykc-blue-500)',
    },
    {
      id: 'attr',
      tag: 'ATTR',
      title: 'Mobile Attribution',
      body: 'The truth about where your app users come from, because every ad platform claims the same install. Plus deep links that actually land.',
      partners: ['AppsFlyer', 'Branch'],
      href: 'services-attribution.html',
      accent: 'var(--ykc-blue-500)',
      span: true,
    },
  ];
  return (
    <section id="services" style={{ background: 'var(--ykc-white)', padding: '104px 0' }} data-screen-label="Services">
      <div className="wrap">
        <ConnectorLine heading="WHAT WE DO" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, marginTop: 36, alignItems: 'start' }} className="svc-grid-intro">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.028em',
              margin: 0,
            }}>
              Five service domains. <br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>One honest partner.</em>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--ykc-navy-700)', fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 540 }}>
              Pick the one that hurts most and we'll start there. And if you don't need us yet, or a tool we don't sell fits better, we'll say so.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18,
          marginTop: 48,
        }} className="svc-grid">
          {services.map((s, i) => (
            <a key={s.id} href={s.href} style={{
              position: 'relative', display: 'block',
              padding: 28, borderRadius: 20,
              background: i % 2 === 0 ? 'var(--ykc-beige-300)' : 'var(--ykc-beige-100)',
              border: '1.5px dotted rgba(7,20,57,0.22)',
              textDecoration: 'none', color: 'var(--ykc-navy-900)',
              transition: 'all .25s cubic-bezier(.2,.9,.2,1)',
              overflow: 'hidden', minHeight: s.span ? 200 : 280,
              gridColumn: s.span ? '1 / -1' : 'auto',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = 'var(--ykc-navy-900)';
              e.currentTarget.style.color = 'var(--ykc-beige-500)';
              e.currentTarget.style.borderColor = 'var(--ykc-blue-400)';
              const arrow = e.currentTarget.querySelector('.svc-arrow');
              if (arrow) arrow.style.transform = 'translate(6px, -6px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.background = i % 2 === 0 ? 'var(--ykc-beige-300)' : 'var(--ykc-beige-100)';
              e.currentTarget.style.color = 'var(--ykc-navy-900)';
              e.currentTarget.style.borderColor = 'rgba(7,20,57,0.22)';
              const arrow = e.currentTarget.querySelector('.svc-arrow');
              if (arrow) arrow.style.transform = '';
            }}
            >
              {/* halftone decoration in corner */}
              <img src="assets/shapes/halftone-faded-circle-blue.png" alt="" style={{
                position: 'absolute', right: -60, bottom: -60,
                width: 230, opacity: 0.55, pointerEvents: 'none',
              }} />
              {/* arrow */}
              <span className="svc-arrow" style={{
                position: 'absolute', top: 24, right: 24, width: 38, height: 38, borderRadius: '50%',
                border: '1.5px solid currentColor', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', fontSize: 16,
                transition: 'transform .25s cubic-bezier(.2,.9,.2,1)',
              }}>↗</span>
              <div>
                <div style={{
                  display: 'inline-block', fontFamily: "'Press Start 2P', monospace",
                  fontSize: 10, padding: '6px 10px',
                  background: 'var(--ykc-blue-500)', color: 'white',
                  borderRadius: 6, letterSpacing: '0.08em', marginBottom: 18,
                }}>{s.tag}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700,
                  letterSpacing: '-0.02em', lineHeight: 1.05, margin: '0 0 12px',
                }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.85, margin: 0, maxWidth: 380 }}>{s.body}</p>
              </div>
              <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.partners.map(p => (
                  <span key={p} style={{
                    fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                    padding: '5px 11px', borderRadius: 999,
                    border: '1px dotted currentColor', opacity: 0.85,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>{p}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-grid-intro { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}


function Differentiators() {
  const items = [
    {
      title: 'Platform-agnostic, properly',
      body: "We recommend what's right for you, not what pays us best. Sometimes that's a tool we don't even sell.",
      sticker: 'no commission',
    },
    {
      title: 'Africa-first',
      body: "We live and work here. We know POPIA, we know WhatsApp is where your customers are, and we know what African data infrastructure actually looks like.",
      sticker: 'POPIA aware',
    },
    {
      title: "We stay after the contract",
      body: "Call us when something breaks, not just when you're buying. For us, go-live is where the relationship starts.",
      sticker: 'not a reseller',
    },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '104px 0', position: 'relative' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'end', marginBottom: 48 }} className="dif-intro">
          <div>
            <Eyebrow>WHY US</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.028em',
              margin: '8px 0 0',
            }}>
              Three things make us<br/>different.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 540 }}>
              Confident, direct, human. No jargon, no fluff. Honest to the point of occasionally talking ourselves out of a sale.
            </p>
            <img src="assets/collages/no-fluff-sheep.png" alt="Vintage cut-out, sheared sheep, no fluff" className="hide-mobile" style={{
              width: 150, flexShrink: 0, transform: 'rotate(3deg)', marginBottom: -8,
            }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="dif-grid">
          {items.map((it, i) => (
            <article key={i} style={{
              background: 'white', borderRadius: 20,
              padding: '32px 28px 28px',
              border: '1.5px solid rgba(7,20,57,0.08)',
              position: 'relative', overflow: 'hidden',
              minHeight: 260, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 28, color: 'var(--ykc-blue-100)', letterSpacing: '0.04em',
                lineHeight: 1, marginBottom: 22,
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
                letterSpacing: '-0.015em', lineHeight: 1.15, margin: '0 0 12px',
              }}>{it.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>{it.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 24 }}>
                <Sticker bg="var(--ykc-blue-500)" color="white" rotate={-2} size="sm">{it.sticker}</Sticker>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .dif-intro { grid-template-columns: 1fr !important; gap: 16px !important; align-items: start !important; }
          .dif-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}


function HomePartnersStrip() {
  const partners = [
    { name: 'Braze',      cat: 'CEP' },
    { name: 'OneSignal',  cat: 'CEP' },
    { name: 'InsiderOne', cat: 'CEP' },
    { name: 'Amperity',   cat: 'CDP' },
    { name: 'Amplitude',  cat: 'PA' },
    { name: 'DOMO',       cat: 'BI' },
    { name: 'AppsFlyer',  cat: 'ATTR' },
    { name: 'Branch',     cat: 'ATTR' },
  ];
  return (
    <section style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '92px 0', position: 'relative', overflow: 'hidden' }}>
      <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -150, bottom: -170, width: 540, opacity: 0.2, pointerEvents: 'none' }} />
      <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -130, top: -150, width: 460, opacity: 0.18, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center', marginBottom: 56 }} className="ptn-intro">
          <div>
            <Eyebrow color="var(--ykc-blue-400)">PARTNERS</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(34px, 3.6vw, 52px)', lineHeight: 1.02, letterSpacing: '-0.028em',
              margin: '8px 0 0', color: 'var(--ykc-beige-500)',
            }}>
              The category leaders.<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-400)' }}>And only when they fit.</em>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-200)', margin: 0, maxWidth: 520 }}>
            We only partner with tools we'd stake our own name on. And if what you need is something we don't sell, we'll just tell you.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
        }} className="ptn-grid">
          {partners.map(p => (
            <div key={p.name} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px dotted rgba(255,255,255,0.18)',
              borderRadius: 16, padding: '22px 20px',
              display: 'flex', flexDirection: 'column', gap: 8,
              transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(79,125,255,0.12)'; e.currentTarget.style.borderColor = 'var(--ykc-blue-400)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ykc-blue-400)',
                letterSpacing: '0.2em', fontWeight: 500,
              }}>{p.cat}</span>
              <PartnerLogo name={p.name} height={26} onDark style={{ color: 'var(--ykc-beige-500)', marginTop: 4 }} />
            </div>
          ))}
          {/* "your tool" card */}
          <a href="contact.html" style={{
            background: 'transparent',
            border: '1.5px dashed var(--ykc-blue-400)',
            borderRadius: 16, padding: '22px 20px',
            display: 'flex', flexDirection: 'column', gap: 8,
            textDecoration: 'none', color: 'var(--ykc-blue-400)',
            transition: 'background .2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(79,125,255,0.12)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.2em', fontWeight: 500, opacity: 0.85,
            }}>YOUR STACK</span>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
              letterSpacing: '-0.005em', lineHeight: 1.2,
            }}>Need something else? Tell us →</span>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .ptn-intro { grid-template-columns: 1fr !important; gap: 18px !important; }
          .ptn-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}


function Approach() {
  const steps = [
    { n: 1, t: 'You ping us',      b: "An email, a WhatsApp voice note, a 'help!' scribbled on a serviette. However it arrives." },
    { n: 2, t: 'We listen',        b: "Properly. No deck-flipping. We learn your stack and the gaps inside it." },
    { n: 3, t: 'We pick the tool', b: "Platform-agnostic. The one that fits your team, budget, and mission." },
    { n: 4, t: 'We wire it up',    b: "Quickly. Then we train your team, and we stay around when something breaks." },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '104px 0' }} data-screen-label="Approach">
      <div className="wrap">
        <Eyebrow>HOW WE WORK</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, letterSpacing: '-0.028em',
          margin: '10px 0 48px', maxWidth: 820,
        }}>
          We've made setting up new tooling<br/>
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>almost boringly predictable.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }} className="approach-grid">
          <div className="approach-line" style={{
            position: 'absolute', top: 30, left: 30, right: 30,
            borderTop: '1.5px dotted var(--ykc-navy-500)', zIndex: 0,
          }} />
          {steps.map((s) => (
            <div key={s.n} style={{ position: 'relative', zIndex: 1, padding: '0 20px 0 0' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                background: 'var(--ykc-blue-500)', color: 'white',
                fontFamily: "'Press Start 2P', monospace", fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '6px solid var(--ykc-white)',
                marginBottom: 18,
              }}>0{s.n}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
                letterSpacing: '-0.01em', margin: '0 0 10px',
              }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ykc-navy-700)', margin: 0, lineHeight: 1.55 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .approach-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .approach-line { display: none; }
        }
      `}</style>
    </section>
  );
}


function CtaSection() {
  return (
    <section style={{
      background: 'var(--ykc-blue-500)', padding: '104px 0', position: 'relative', overflow: 'hidden',
    }}>
      <img src="assets/shapes/concentric-circles-beige.png" alt="" style={{ position: 'absolute', top: '-30%', right: '-8%', width: 540, opacity: 0.3, pointerEvents: 'none' }} />
      <img src="assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', bottom: '-40%', left: '-5%', width: 460, opacity: 0.55, pointerEvents: 'none' }} />
      <img src="assets/collages/heart-fingers.png" alt="Vintage cut-out, hands making a heart" className="cta-collage" style={{
        position: 'absolute', right: '3%', bottom: -24, width: 'clamp(180px, 17vw, 280px)',
        transform: 'rotate(-4deg)', pointerEvents: 'none',
      }} />
      <div className="wrap-narrow" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <BinaryStrip color="white" size={12} opacity={0.65} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 5.5vw, 80px)',
          letterSpacing: '-0.03em', lineHeight: 1, margin: '24px 0 18px', color: 'white',
        }}>
          Sharp. Let's connect.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 19, lineHeight: 1.55, maxWidth: 600, margin: '0 auto 32px' }}>
          One email, one honest answer about whether we're the right fit. No 40-slide deck, promise.
        </p>
        <div style={{ display: 'inline-flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
        </div>
        <div style={{ marginTop: 36, fontFamily: 'var(--font-handwritten)', color: 'white', fontSize: 24, transform: 'rotate(-2deg)' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .cta-collage { display: none; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { HomeHero, ServicesGrid, Differentiators, HomePartnersStrip, Approach, CtaSection });
