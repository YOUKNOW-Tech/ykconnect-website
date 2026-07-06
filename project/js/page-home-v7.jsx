// YOUKNOW Connect — Home v7 "The Field Guide" sections
// Expedition theme: FieldHero (magnifying lens), SpecimenCatalog, FieldNotes, ExpeditionRoute, ExpeditionCta

const FG_SIGHTINGS = [
  { x: 12, y: 18, t: 'DUPLICATE PROFILE — invasive, breeds fast' },
  { x: 78, y: 12, t: 'UNOPENED DASHBOARD — nocturnal, rarely seen' },
  { x: 86, y: 46, t: 'BATCH-AND-BLAST EMAIL — endangered (good)' },
  { x: 8, y: 58, t: 'UNTRACKED INSTALL — claims many parents' },
  { x: 70, y: 78, t: 'GUT-FEEL CAMPAIGN — thrives in the dark' },
  { x: 24, y: 84, t: 'SILOED DATA — territorial, avoids contact' },
];

function FieldHero() {
  const ref = React.useRef(null);
  const [lens, setLens] = React.useState(null); // {x,y} px
  return (
    <section ref={ref} data-screen-label="Field hero"
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        setLens({ x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height });
      }}
      onMouseLeave={() => setLens(null)}
      style={{ background: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden', cursor: 'none' }}>

      <img src="assets/shapes/contour-lines-beige.png" alt="" style={{ position: 'absolute', right: -120, top: -100, width: 620, opacity: 0.9, pointerEvents: 'none' }} />
      <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -160, bottom: -180, width: 560, opacity: 0.22, pointerEvents: 'none' }} />

      {/* hidden sightings, revealed by the lens */}
      {FG_SIGHTINGS.map((s, i) => {
        let op = 0;
        if (lens) {
          const dx = lens.x - (s.x / 100) * lens.w;
          const dy = lens.y - (s.y / 100) * lens.h;
          const d = Math.sqrt(dx * dx + dy * dy);
          op = Math.max(0, 1 - d / 170);
        }
        return (
          <span key={i} style={{
            position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, zIndex: 3,
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            color: 'var(--ykc-blue-500)', border: '1px dotted var(--ykc-blue-500)',
            padding: '6px 10px', borderRadius: 6, background: 'rgba(253,251,248,0.9)',
            whiteSpace: 'nowrap', pointerEvents: 'none',
            opacity: op, transform: `scale(${0.9 + op * 0.1})`,
          }}>◎ {s.t}</span>
        );
      })}

      {/* the lens */}
      {lens && (
        <div style={{
          position: 'absolute', left: lens.x, top: lens.y, zIndex: 4,
          width: 150, height: 150, borderRadius: '50%',
          border: '3px solid var(--ykc-navy-900)',
          boxShadow: '0 0 0 6px rgba(0,87,255,0.18), inset 0 0 40px rgba(0,87,255,0.1)',
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
          background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(0.4px)',
        }}>
          <div style={{
            position: 'absolute', bottom: -46, right: -30, width: 58, height: 14,
            background: 'var(--ykc-navy-900)', borderRadius: 8, transform: 'rotate(45deg)',
          }} />
        </div>
      )}

      <div className="wrap-wide" style={{ position: 'relative', zIndex: 2, padding: '68px 32px 84px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.24em',
          textTransform: 'uppercase', color: 'var(--ykc-navy-700)', marginBottom: 46,
        }}>
          <span>◈ Expedition log · entry 001</span>
          <span className="hide-mobile">Terrain: Sub-Saharan Africa</span>
          <span>Guides: honest, local</span>
        </div>

        <div style={{ maxWidth: 900 }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
            fontSize: 'clamp(50px, 7vw, 112px)', lineHeight: 0.94, letterSpacing: '-0.04em',
            margin: 0, color: 'var(--ykc-navy-900)',
          }}>
            <span style={{ display: 'block' }}>A field guide</span>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-navy-900)' }}>to your</span>
            <span style={{ display: 'block', color: 'var(--ykc-blue-500)' }}>customer data.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ykc-navy-700)', maxWidth: 540, margin: '28px 0 0' }}>
            We track, tame, and wire up the customer technology of Sub-Saharan Africa —
            engagement, customer data, analytics, BI, attribution. And we'll tell you
            honestly which beasts you can leave alone.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', margin: '28px 0 0' }}>
            <Btn intent="primary" size="lg" href="contact.html">Hire the guides</Btn>
            <Btn intent="ghost" size="lg" href="#specimens">Open the catalogue ↓</Btn>
          </div>
          <div style={{ marginTop: 30 }}>
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-blue-500)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
              psst — sweep your cursor around, there's wildlife hiding on this page 🔍
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


const FG_SPECIMENS = [
  { no: 'Nº 01', tag: 'CEP', latin: 'Engagementus realtimus', title: 'Customer Engagement', habitat: 'Email, push, SMS, in-app, WhatsApp', behaviour: 'Sends the right message at the right moment. Highly personal. Allergic to batch-and-blast.', tamed: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html', img: 'assets/collages/customer-engagement-strategy.png' },
  { no: 'Nº 02', tag: 'CDP', latin: 'Profilus unificus', title: 'Customer Data Platform', habitat: 'The space between your six databases', behaviour: 'Stitches every version of a customer into one profile the whole business can trust.', tamed: 'Amperity', href: 'services-cdp.html', img: 'assets/collages/team.png' },
  { no: 'Nº 03', tag: 'PA', latin: 'Analytica productus', title: 'Product Analytics', habitat: 'Funnels, retention curves, feature flags', behaviour: "Answers what GA4 only shrugs at. Self-serve; does not wait for analysts.", tamed: 'Amplitude', href: 'services-pa.html', img: 'assets/collages/reading-analytics-insights.png' },
  { no: 'Nº 04', tag: 'BI', latin: 'Dashboardus utilis', title: 'Business Intelligence', habitat: 'Every team, not just the data one', behaviour: 'A rare dashboard that people open voluntarily. Best observed on Monday mornings.', tamed: 'DOMO', href: 'services-bi.html', img: 'assets/collages/art-of-reporting.png' },
  { no: 'Nº 05', tag: 'ATTR', latin: 'Attributio verax', title: 'Mobile Attribution', habitat: 'The murky area between your ad platforms', behaviour: 'Finds the true parent of every install. Immune to platforms claiming the same one.', tamed: 'AppsFlyer · Branch', href: 'services-attribution.html', img: 'assets/collages/magnifying-glass.png' },
];

function SpecimenCatalog() {
  return (
    <section id="specimens" style={{ background: 'var(--ykc-white)', padding: '104px 0' }} data-screen-label="Specimen catalogue">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <Eyebrow>What we do · the catalogue</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              Five species,<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>all tameable.</em>
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-navy-500)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
            start with whichever is eating your budget →
          </span>
        </div>

        <div>
          {FG_SPECIMENS.map((s, i) => (
            <a key={s.tag} href={s.href} style={{
              display: 'grid', gridTemplateColumns: '150px 1fr 1fr auto', gap: 28, alignItems: 'center',
              padding: '28px 8px', borderTop: '1.5px dotted rgba(7,20,57,0.3)',
              textDecoration: 'none', color: 'var(--ykc-navy-900)',
              transition: 'background .18s var(--ease-snap)',
            }} className="fg-row"
            onMouseOver={(e) => e.currentTarget.style.background = 'var(--ykc-beige-200)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ position: 'relative' }} className="fg-thumb">
                <img src={s.img} alt="" style={{ width: 130, height: 110, objectFit: 'contain' }} />
                <span style={{
                  position: 'absolute', top: -8, left: -6, fontFamily: 'var(--font-mono)',
                  fontSize: 9, letterSpacing: '0.2em', color: 'var(--ykc-navy-500)',
                }}>{s.no}</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--ykc-blue-500)', fontStyle: 'italic', marginBottom: 6 }}>{s.latin}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>{s.title}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ykc-navy-500)', marginTop: 8, textTransform: 'uppercase' }}>
                  HABITAT: {s.habitat}
                </div>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0 }} className="fg-behaviour">
                <strong style={{ color: 'var(--ykc-navy-900)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em' }}>BEHAVIOUR: </strong>
                {s.behaviour}
                <span style={{ display: 'block', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--ykc-blue-500)', textTransform: 'uppercase' }}>
                  TAMED WITH: {s.tamed}
                </span>
              </p>
              <span style={{
                width: 40, height: 40, borderRadius: '50%', border: '1.5px solid var(--ykc-navy-900)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15,
              }} className="hide-mobile">↗</span>
            </a>
          ))}
          <div style={{ borderTop: '1.5px dotted rgba(7,20,57,0.3)' }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) {
          .fg-row { grid-template-columns: 110px 1fr !important; }
          .fg-behaviour { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .fg-row { grid-template-columns: 1fr !important; }
          .fg-thumb { display: none; }
        }
      `}</style>
    </section>
  );
}


function FieldNotes() {
  const notes = [
    { d: 'DAY 12', t: 'Advised client the tool they wanted is overkill. Sale lost. Client kept.', r: -1.5 },
    { d: 'DAY 34', t: 'Confirmed sighting: customers living on WhatsApp, not email. Adjusted route.', r: 1 },
    { d: 'DAY 57', t: 'Client called a year after go-live. We answered. Apparently this is unusual.', r: -1 },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '104px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Field notes">
      <img src="assets/collages/binoculars-lady-dark.png" alt="Vintage cut-out, woman with binoculars" className="hide-mobile" style={{
        position: 'absolute', right: '-2%', bottom: -30, width: 'clamp(220px, 22vw, 360px)', transform: 'scaleX(-1) rotate(-2deg)', pointerEvents: 'none',
      }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <Eyebrow>Why us · notes from the field</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
          margin: '14px 0 48px', maxWidth: 700,
        }}>
          Honesty, observed<br/>
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>in the wild.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 320px))', gap: 24 }} className="fn-grid">
          {notes.map((n, i) => (
            <div key={i} style={{
              background: 'repeating-linear-gradient(0deg, var(--ykc-beige-100) 0 27px, rgba(7,20,57,0.12) 27px 28px)',
              backgroundColor: 'var(--ykc-beige-100)',
              border: '1.5px solid rgba(7,20,57,0.18)', borderRadius: 4,
              padding: '20px 22px 24px', transform: `rotate(${n.r}deg)`,
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--ykc-blue-500)', marginBottom: 10 }}>{n.d} · FIELD NOTE</div>
              <div style={{ fontFamily: 'var(--font-handwritten)', fontSize: 22, lineHeight: 1.28, color: 'var(--ykc-navy-900)' }}>{n.t}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ykc-navy-700)', maxWidth: 520, margin: '44px 0 0' }}>
          Platform-agnostic, commission-blind, Africa-first. We recommend what's right
          for you — even when it's a tool we don't sell, or nothing at all.
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) { .fn-grid { grid-template-columns: 1fr !important; max-width: 420px; } }
      `}</style>
    </section>
  );
}


function ExpeditionRoute() {
  const stops = [
    { w: 'BASE CAMP', t: 'You ping us', b: 'Email, WhatsApp voice note, a "help!" on a serviette.' },
    { w: 'WAYPOINT 1', t: 'We listen', b: 'Properly. We survey your stack and map the gaps.' },
    { w: 'WAYPOINT 2', t: 'We pick the tool', b: 'The one that fits your team, budget, and terrain.' },
    { w: 'SUMMIT', t: 'We wire it up & stay', b: 'Set up fast, team trained — guides remain on call after the climb.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Expedition route">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'start' }} className="er-grid">
          <div>
            <Eyebrow>How we work · the route</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 4.2vw, 56px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 24px',
            }}>
              Four stops,<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>no detours.</em>
            </h2>
            <img src="assets/collages/south-africa.png" alt="Vintage cut-out, map of South Africa" style={{ width: 220, transform: 'rotate(-3deg)' }} />
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 13, top: 16, bottom: 16, borderLeft: '2px dotted var(--ykc-navy-500)' }} />
            {stops.map((s, i) => (
              <li key={s.w} style={{ position: 'relative', paddingLeft: 52, paddingBottom: i === stops.length - 1 ? 0 : 36 }}>
                <span style={{
                  position: 'absolute', left: 0, top: 2, width: 28, height: 28, borderRadius: '50%',
                  background: i === stops.length - 1 ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                  border: '5px solid var(--ykc-white)', color: 'white',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
                }}>{i === stops.length - 1 ? '⚑' : ''}</span>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--ykc-blue-500)' }}>{s.w}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 23, letterSpacing: '-0.02em', margin: '8px 0 6px' }}>{s.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 460 }}>{s.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`
        @media (max-width: 1000px) { .er-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}


function ExpeditionCta() {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', padding: '104px 0 116px', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', right: -140, top: -120, width: 540, opacity: 0.2, pointerEvents: 'none' }} />
      <img src="assets/shapes/stars-blue.png" alt="" style={{ position: 'absolute', left: '3%', bottom: '10%', width: 180, opacity: 0.3, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.28em', color: 'var(--ykc-blue-400)', textTransform: 'uppercase' }}>
          ◈ Expedition log · final entry
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(48px, 7vw, 112px)', letterSpacing: '-0.04em', lineHeight: 0.93,
          margin: '22px 0 0', color: 'var(--ykc-beige-500)',
        }}>
          Ready when<br/>
          <span style={{ color: 'var(--ykc-blue-400)' }}>you are.</span>
        </h2>
        <p style={{ color: 'var(--ykc-navy-200)', fontSize: 18, lineHeight: 1.55, maxWidth: 540, margin: '24px 0 32px' }}>
          One email, one honest answer about whether we're the right guides for your
          terrain. No 40-slide deck, promise.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Btn intent="on-dark" size="lg" href="contact.html">Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
        </div>
        <div style={{
          marginTop: 64, borderTop: '1px dotted rgba(255,255,255,0.25)', paddingTop: 22,
          display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-blue-400)' }}>◉ Expedition kit</span>
          {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
            <PartnerLogo key={p} name={p} height={19} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.85 }} />
          ))}
        </div>
        <div style={{ marginTop: 34, fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-400)', fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          YOUKNOW &lt;3
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FieldHero, SpecimenCatalog, FieldNotes, ExpeditionRoute, ExpeditionCta });
