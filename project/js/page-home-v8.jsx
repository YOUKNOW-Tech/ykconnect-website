// YOUKNOW Connect — Home v8 "YKC FM" sections
// Radio theme: RadioHero (working tuner), Tracklist, RefusedRequests, DemoToPlatinum, StudioCta

const FM_STATIONS = [
  { f: 88.1,  tag: 'CEP',  name: 'ENGAGEMENT FM',    line: 'All channels, all hits, zero spam — email, push, SMS, in-app & WhatsApp.', href: 'services-cep.html' },
  { f: 91.5,  tag: 'CDP',  name: 'ONE PROFILE RADIO', line: 'Every version of your customer, mixed down to a single trusted track.', href: 'services-cdp.html' },
  { f: 94.7,  tag: 'PA',   name: 'THE FUNNEL HOUR',   line: "Funnels, retention, adoption — the answers GA4 won't play.", href: 'services-pa.html' },
  { f: 99.3,  tag: 'BI',   name: 'DASHBOARD DRIVE',   line: 'Reporting the whole business actually tunes into.', href: 'services-bi.html' },
  { f: 103.9, tag: 'ATTR', name: 'TRUE SOURCE FM',    line: 'The honest story of where your app installs come from.', href: 'services-attribution.html' },
];

function RadioHero() {
  const [freq, setFreq] = React.useState(88.1);
  const station = FM_STATIONS.find(s => Math.abs(s.f - freq) < 1.2) || null;
  return (
    <section style={{ background: 'var(--ykc-blue-500)', color: 'white', position: 'relative', overflow: 'hidden' }} data-screen-label="Radio hero">
      <img src="assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', right: -160, top: -180, width: 520, opacity: 0.35, pointerEvents: 'none' }} />
      <img src="assets/shapes/concentric-circles-beige.png" alt="" style={{ position: 'absolute', left: -150, bottom: -170, width: 460, opacity: 0.25, pointerEvents: 'none' }} />

      {/* ON AIR bar */}
      <div style={{ borderBottom: '1px dotted rgba(255,255,255,0.35)', position: 'relative', zIndex: 2 }}>
        <div className="wrap-wide" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
          padding: '12px 32px', fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.24em', textTransform: 'uppercase',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="fm-onair" style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--ykc-navy-900)', display: 'inline-block' }}></span>
            ON AIR · YKC FM
          </span>
          <span className="hide-mobile">Broadcasting across Sub-Saharan Africa</span>
          <span>Est. Cape Town</span>
        </div>
      </div>

      <div className="wrap-wide" style={{ position: 'relative', zIndex: 2, padding: '64px 32px 84px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }} className="fm-grid2">
          <div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(50px, 7vw, 110px)', lineHeight: 0.93, letterSpacing: '-0.04em',
              margin: 0, color: 'white',
            }}>
              <span style={{ display: 'block' }}>Tune into</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px white' }}>your customer</span>
              <span style={{ display: 'block', color: 'var(--ykc-navy-900)' }}>data.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.92)', maxWidth: 520, margin: '28px 0 0' }}>
              Platform-agnostic customer technology, broadcast honestly. Engagement,
              customer data, analytics, BI, attribution — hosted by people who'll
              tell you when to change the station.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', margin: '28px 0 0' }}>
              <Btn intent="on-dark" size="lg" href="contact.html" style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)' }}>Call the studio</Btn>
              <Btn intent="ghost-light" size="lg" href="#tracklist">See the tracklist ↓</Btn>
            </div>
          </div>

          {/* the tuner */}
          <div style={{
            background: 'var(--ykc-navy-900)', borderRadius: 22, padding: '26px 26px 30px',
            border: '2px solid white', boxShadow: '10px 12px 0 rgba(7,20,57,0.35)',
            transform: 'rotate(-1deg)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', color: 'var(--ykc-blue-400)', textTransform: 'uppercase' }}>YKC FM · Tuner</span>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: 'var(--ykc-blue-400)' }}>{freq.toFixed(1)}</span>
            </div>

            {/* display */}
            <div style={{
              background: '#0E1C49', borderRadius: 12, padding: '18px 18px 16px',
              border: '1px dotted rgba(255,255,255,0.25)', minHeight: 128,
            }}>
              {station ? (
                <div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, background: 'var(--ykc-blue-500)', color: 'white', padding: '5px 8px', borderRadius: 5, letterSpacing: '0.08em' }}>{station.tag}</span>
                    <span className="fm-eq" style={{ display: 'inline-flex', gap: 3, alignItems: 'flex-end', height: 14 }}>
                      {[0, 1, 2, 3].map(i => <span key={i} className={`fm-bar fm-bar-${i}`} style={{ width: 3, background: 'var(--ykc-blue-400)', display: 'inline-block' }}></span>)}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--ykc-beige-500)' }}>{station.f.toFixed(1)} {station.name}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ykc-navy-200)', marginTop: 6 }}>{station.line}</div>
                  <a href={station.href} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--ykc-blue-400)', textDecoration: 'none', display: 'inline-block', marginTop: 10 }}>VISIT STATION →</a>
                </div>
              ) : (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.2em', color: 'var(--ykc-navy-300)' }}>····· ˢᵗᵃᵗᶦᶜ ·····</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ykc-navy-300)', marginTop: 10 }}>
                    Nothing here. This is where consultancies that promise everything broadcast.
                  </div>
                </div>
              )}
            </div>

            {/* dial */}
            <input type="range" min="87.5" max="108" step="0.1" value={freq}
              onChange={(e) => setFreq(parseFloat(e.target.value))}
              aria-label="Radio tuner frequency"
              className="fm-dial" style={{ width: '100%', marginTop: 20 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              {FM_STATIONS.map(s => (
                <button key={s.f} onClick={() => setFreq(s.f)} style={{
                  background: 'transparent', border: 0, cursor: 'pointer', padding: 2,
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.08em',
                  color: Math.abs(s.f - freq) < 1.2 ? 'var(--ykc-blue-400)' : 'var(--ykc-navy-500)',
                }}>{s.f.toFixed(1)}</button>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 14 }}>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 17, color: 'var(--ykc-blue-400)', transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
                ↑ drag the dial, find all five stations
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fm-blink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0.25; } }
        @keyframes fm-eq0 { 0%,100% { height: 5px; } 50% { height: 13px; } }
        @keyframes fm-eq1 { 0%,100% { height: 11px; } 50% { height: 4px; } }
        @keyframes fm-eq2 { 0%,100% { height: 7px; } 50% { height: 14px; } }
        @keyframes fm-eq3 { 0%,100% { height: 12px; } 50% { height: 6px; } }
        .fm-bar { height: 8px; }
        @media (prefers-reduced-motion: no-preference) {
          .fm-onair { animation: fm-blink 1.2s steps(1) infinite; }
          .fm-bar-0 { animation: fm-eq0 .7s ease-in-out infinite; }
          .fm-bar-1 { animation: fm-eq1 .6s ease-in-out infinite; }
          .fm-bar-2 { animation: fm-eq2 .8s ease-in-out infinite; }
          .fm-bar-3 { animation: fm-eq3 .65s ease-in-out infinite; }
        }
        .fm-dial { -webkit-appearance: none; appearance: none; height: 8px; border-radius: 999px;
          background: repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 2px, transparent 2px 12px), #0E1C49;
          outline-offset: 4px; }
        .fm-dial::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%;
          background: var(--ykc-blue-400); border: 3px solid white; cursor: grab; }
        .fm-dial::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%;
          background: var(--ykc-blue-400); border: 3px solid white; cursor: grab; }
        @media (max-width: 1000px) { .fm-grid2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}


function Tracklist() {
  const tracks = [
    { n: 'A1', title: 'Customer Engagement', dur: '3:47', note: 'Real-time messaging in every channel your customers actually use.', partners: 'Braze · OneSignal · InsiderOne', href: 'services-cep.html' },
    { n: 'A2', title: 'Customer Data Platform', dur: '4:12', note: 'One stitched profile. The whole band finally playing in key.', partners: 'Amperity', href: 'services-cdp.html' },
    { n: 'A3', title: 'Product Analytics', dur: '2:58', note: 'Funnels, retention, adoption — no waiting on an analyst.', partners: 'Amplitude', href: 'services-pa.html' },
    { n: 'A4', title: 'Business Intelligence', dur: '3:33', note: 'Dashboards with actual airplay across the business.', partners: 'DOMO', href: 'services-bi.html' },
    { n: 'A5', title: 'Mobile Attribution', dur: '4:44', note: 'The true story of every install, plus deep links that land.', partners: 'AppsFlyer · Branch', href: 'services-attribution.html' },
  ];
  return (
    <section id="tracklist" style={{ background: 'var(--ykc-beige-500)', padding: '104px 0' }} data-screen-label="Tracklist">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 44 }}>
          <div>
            <Eyebrow>What we do · liner notes</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              Side A:<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>the services.</em>
            </h2>
          </div>
          <Sticker bg="var(--ykc-navy-900)" color="var(--ykc-beige-500)" rotate={3} size="sm">NO B-SIDES. NO FILLER.</Sticker>
        </div>

        <div style={{ background: 'white', borderRadius: 20, border: '2px solid var(--ykc-navy-900)', boxShadow: '8px 8px 0 var(--ykc-navy-900)', overflow: 'hidden' }}>
          {tracks.map((t, i) => (
            <a key={t.n} href={t.href} style={{
              display: 'grid', gridTemplateColumns: '56px 1fr auto auto', gap: 20, alignItems: 'center',
              padding: '20px 26px', textDecoration: 'none', color: 'var(--ykc-navy-900)',
              borderTop: i === 0 ? 'none' : '1.5px dotted rgba(7,20,57,0.25)',
              transition: 'background .16s var(--ease-snap)',
            }} className="tl-row"
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-blue-100)'; const p = e.currentTarget.querySelector('.tl-play'); if (p) p.style.background = 'var(--ykc-blue-500)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; const p = e.currentTarget.querySelector('.tl-play'); if (p) p.style.background = 'var(--ykc-navy-900)'; }}
            >
              <span className="tl-play" style={{
                width: 40, height: 40, borderRadius: '50%', background: 'var(--ykc-navy-900)', color: 'white',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                transition: 'background .16s',
              }}>▶</span>
              <span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--ykc-blue-500)', display: 'block', marginBottom: 4 }}>TRACK {t.n}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 }}>{t.title}</span>
                <span style={{ fontSize: 14, color: 'var(--ykc-navy-700)', display: 'block', marginTop: 5, lineHeight: 1.5 }}>{t.note}</span>
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--ykc-navy-500)', textTransform: 'uppercase', textAlign: 'right' }} className="hide-mobile">
                feat.<br/>{t.partners}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ykc-navy-500)' }} className="hide-mobile">{t.dur}</span>
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--ykc-navy-500)', margin: '22px 0 0', textTransform: 'uppercase' }}>
          ℗ 2026 YOUKNOW Connect · Recorded live in Cape Town · Mixed platform-agnostically
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) { .tl-row { grid-template-columns: 44px 1fr !important; } }
      `}</style>
    </section>
  );
}


function RefusedRequests() {
  const refused = [
    { t: '"The 40-Slide Deck (Extended Mix)"', why: 'Runtime: 90 minutes. Content: none. Permanently off the playlist.' },
    { t: '"Commission Anthem"', why: "We don't take requests from whoever pays best. Commission-blind, always." },
    { t: '"Jargon (feat. Synergy)"', why: 'Catchy hook, means nothing. We speak human on this station.' },
    { t: '"Ghost After Go-Live (Club Edit)"', why: 'We refuse to play it. Call us when something breaks — we answer.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '104px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="Refused requests">
      <img src="assets/collages/no-fluff-sheep.png" alt="Vintage cut-out, sheared sheep, no fluff" className="hide-mobile" style={{
        position: 'absolute', right: '4%', top: 80, width: 155, transform: 'rotate(4deg)',
      }} />
      <div className="wrap">
        <Eyebrow>Why us · station policy</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
          margin: '14px 0 44px', maxWidth: 800,
        }}>
          Requests we<br/>
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>refuse to play.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="rr-grid">
          {refused.map((r, i) => (
            <div key={i} style={{
              border: '1.5px dotted rgba(7,20,57,0.3)', borderRadius: 16,
              padding: '24px 26px', background: i % 2 ? 'var(--ykc-beige-200)' : 'var(--ykc-beige-100)',
              display: 'flex', gap: 18, alignItems: 'flex-start',
            }}>
              <span style={{
                width: 38, height: 38, borderRadius: '50%', flexShrink: 0,
                border: '2px solid var(--ykc-navy-900)', color: 'var(--ykc-navy-900)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
              }}>✕</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{r.t}</div>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: '8px 0 0' }}>{r.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .rr-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}


function DemoToPlatinum() {
  const steps = [
    { s: 'THE DEMO', t: 'You ping us', b: 'Email, WhatsApp voice note, a "help!" hummed down the phone.' },
    { s: 'THE SESSION', t: 'We listen', b: 'Properly. We learn your stack, your sound, your gaps.' },
    { s: 'THE MIX', t: 'We pick the tool', b: 'Platform-agnostic — whatever fits your team, budget, and mission.' },
    { s: 'THE TOUR', t: 'We wire it up & stay', b: 'Set up fast, team trained, and we stay on the road with you.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }} data-screen-label="How we work">
      <div className="wrap">
        <ConnectorLine heading="FROM DEMO TO PLATINUM" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginTop: 52 }} className="dp-grid">
          <div className="dp-line" style={{ position: 'absolute', top: 26, left: 30, right: 30, borderTop: '1.5px dotted var(--ykc-navy-500)', zIndex: 0 }} />
          {steps.map((s, i) => (
            <div key={s.s} style={{ position: 'relative', zIndex: 1, paddingRight: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', borderRadius: 999,
                fontFamily: 'var(--font-mono)', fontSize: 10, padding: '11px 14px',
                border: '5px solid var(--ykc-beige-500)', marginBottom: 14, letterSpacing: '0.18em',
              }}>{s.s}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ykc-navy-700)', margin: 0, lineHeight: 1.55 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .dp-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .dp-line { display: none; }
        }
      `}</style>
    </section>
  );
}


function StudioCta() {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', padding: '104px 0 116px', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', left: -140, top: -140, width: 460, opacity: 0.18, pointerEvents: 'none' }} />
      <img src="assets/collages/telephone-girl.png" alt="Vintage cut-out, woman with two telephones taking your call" className="sc-collage" style={{
        position: 'absolute', right: '2%', bottom: -30, width: 'clamp(220px, 20vw, 340px)', pointerEvents: 'none',
      }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.28em', color: 'var(--ykc-blue-400)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span className="fm-onair" style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--ykc-blue-400)', display: 'inline-block' }}></span>
          Lines are open
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(48px, 7vw, 112px)', letterSpacing: '-0.04em', lineHeight: 0.93,
          margin: '22px 0 0', color: 'var(--ykc-beige-500)', maxWidth: '13em',
        }}>
          Caller,<br/>
          <span style={{ color: 'var(--ykc-blue-400)' }}>you're on air.</span>
        </h2>
        <p style={{ color: 'var(--ykc-navy-200)', fontSize: 18, lineHeight: 1.55, maxWidth: 520, margin: '24px 0 32px' }}>
          One email, one honest answer about whether we're the right fit.
          No hold music, no 40-slide deck. Promise.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Btn intent="on-dark" size="lg" href="contact.html">Call the studio</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za">connect@youknow.co.za →</Btn>
        </div>
        <div style={{
          marginTop: 64, borderTop: '1px dotted rgba(255,255,255,0.25)', paddingTop: 22,
          display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--ykc-blue-400)' }}>◉ Session musicians</span>
          {['Braze', 'OneSignal', 'InsiderOne', 'Amperity', 'Amplitude', 'DOMO', 'AppsFlyer', 'Branch'].map(p => (
            <PartnerLogo key={p} name={p} height={19} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.85 }} />
          ))}
        </div>
        <div style={{ marginTop: 34, fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-400)', fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .sc-collage { display: none; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { RadioHero, Tracklist, RefusedRequests, DemoToPlatinum, StudioCta });
