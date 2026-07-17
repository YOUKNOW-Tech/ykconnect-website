// YOUKNOW Connect — About page
import { SiteShell, PageHero, useToast } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Btn } from '../components/brand.jsx';
import { TrackedLink } from '../components/TrackedLink.jsx';
import { CtaSection } from '../components/CtaSection.jsx';
import { Seo } from '../components/Seo.jsx';

function AboutStory() {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ flex: 1, borderTop: '1.5px dotted currentColor' }} />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
            padding: '5px 14px', border: '1.5px dotted currentColor', borderRadius: 4,
            whiteSpace: 'nowrap', letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>THE SHORT VERSION</span>
          <span style={{ flex: 1, borderTop: '1.5px dotted currentColor' }} />
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, marginTop: 36, alignItems: 'start',
        }} className="about-story-grid">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(34px, 3.8vw, 52px)', lineHeight: 1.02, letterSpacing: '-0.025em',
            margin: 0,
          }}>
            We started YOUKNOW Connect because <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>African businesses deserve better</em> than the reseller playbook.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
              For years, customer technology in Sub-Saharan Africa has worked like this: a global platform appoints a local reseller, the reseller earns margin on every licence they shift, and the recommendation that lands in your inbox happens to match what they sell. Funny, that.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
              We do it the other way around. We partner with the platforms that genuinely lead their categories (Amperity, Amplitude, AppsFlyer, Branch, DOMO, InsiderOne, OneSignal), but we're paid to solve your problem, not to push a licence. If the right answer is a tool we don't sell, we'll say so. If two of our partners would both work, we'll tell you the trade-offs honestly.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
              And we stay around after the contract is signed. The relationship starts at go-live, not ends there.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

function AboutPrinciples() {
  const list = [
    { t: "Recommend what's right.", b: "Even when that's a tool we don't sell. Sometimes we talk ourselves out of a sale. That's the job." },
    { t: "Confident, direct, human.", b: "No jargon. No deck-flipping. You're talking to a sharp expert who respects your time." },
    { t: "Africa-first.", b: "POPIA. WhatsApp-primary channels. Patchy connectivity. Mobile-money. We don't bolt local context on. We build from it." },
    { t: "Honest about scope.", b: "If you don't need us yet, we'll tell you. If a smaller tool would do the job, we'll point you at it." },
    { t: "Stay after the contract.", b: "We're the partner you call when something isn't working, not just when you're buying." },
    { t: "Sharp delivery, zero drama.", b: "We set it up properly the first time, ship on time, and go further than the brief asks. No fire drills, no excuses." },
  ];
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'end', marginBottom: 40 }} className="about-prin-intro">
          <div>
            <Eyebrow>HOW WE OPERATE</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(34px, 3.8vw, 52px)', lineHeight: 1.02, letterSpacing: '-0.025em',
              margin: '10px 0 0',
            }}>Six things we believe.<br /><em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>Out loud.</em></h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 500 }}>
            These aren't taglines. They're the rules we point at when a decision gets hard.
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        }} className="about-prin-grid">
          {list.map((p, i) => (
            <article key={i} style={{
              background: 'white', borderRadius: 20, padding: '28px 26px',
              border: '1.5px solid rgba(7,20,57,0.08)',
              display: 'flex', flexDirection: 'column', gap: 10, minHeight: 220,
            }}>
              <div style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 12,
                color: 'var(--ykc-blue-500)', letterSpacing: '0.08em',
              }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2, margin: '6px 0 4px' }}>{p.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>{p.b}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .about-prin-intro { grid-template-columns: 1fr !important; gap: 16px !important; align-items: start !important; }
          .about-prin-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 881px) and (max-width: 1100px) {
          .about-prin-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function AboutAfrica() {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -150, top: -150, width: 560, opacity: 0.22, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'center' }} className="about-africa-grid">
          <div>
            <Eyebrow color="var(--ykc-blue-400)">SUB-SAHARAN AFRICA</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1, letterSpacing: '-0.028em',
              margin: '10px 0 20px', color: 'var(--ykc-beige-500)',
            }}>
              We understand the<br />
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-400)' }}>texture of doing business here.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-200)', margin: '0 0 22px', maxWidth: 540 }}>
              Most customer technology playbooks are written for North American or European markets. They don't translate cleanly here, and we don't force them. We build from what's actually true on the ground.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="about-africa-list">
              {[
                ['POPIA-native', 'Consent built into the data model from day one.'],
                ['WhatsApp-first', 'Often the primary channel, not the afterthought.'],
                ['Connectivity-aware', 'Designed for users on patchy data, not gigabit fibre.'],
                ['Mobile-money fluent', 'We know what M-Pesa and friends mean for identity stitching.'],
                ['Currency- and tax-savvy', 'ZAR, NGN, KES, GHS, and friends. Handled.'],
                ['On the ground', 'Centurion HQ, with Joburg & Cape Town (Durbanville) on the ground.'],
              ].map(([t, b], i) => (
                <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 10, borderTop: '1px dotted rgba(255,255,255,0.22)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, color: 'var(--ykc-blue-400)', letterSpacing: '-0.005em' }}>{t}</span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ykc-navy-200)' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Saharan Africa map collage: die-cut sticker silhouette, halftone-filled, geo-pinned cities */}
          <div style={{ position: 'relative', minHeight: 460 }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(255,255,255,0.03)',
              border: '1.5px dotted rgba(255,255,255,0.22)',
              borderRadius: 24, overflow: 'hidden',
            }}>
              <svg viewBox="0 0 400 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <defs>
                  <pattern id="africa-dots" width="13" height="13" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="var(--ykc-blue-400)" opacity="0.5" />
                  </pattern>
                  <path id="africa-shape" d="M 83 27 L 103 32 L 130 21 L 166 18 L 172 39 L 193 48 L 218 49 L 229 47 L 244 53 L 268 56 L 282 55 L 292 76 L 299 100 L 308 118 L 315 136 L 321 152 L 338 176 L 343 183 L 356 181 L 379 173 L 382 183 L 374 201 L 364 218 L 345 238 L 330 257 L 324 273 L 318 288 L 325 313 L 325 341 L 304 356 L 298 383 L 284 404 L 276 429 L 259 448 L 247 454 L 218 459 L 210 456 L 209 445 L 200 421 L 190 386 L 177 359 L 183 323 L 177 283 L 165 261 L 163 243 L 163 222 L 158 217 L 142 214 L 132 207 L 120 208 L 106 216 L 93 214 L 75 219 L 45 188 L 23 156 L 28 127 L 31 101 L 46 77 L 64 60 L 78 38 Z" />
                  <path id="madagascar-shape" d="M 371 320 L 376 341 L 360 398 L 350 402 L 343 376 L 346 345 L 355 331 Z" />
                </defs>
                {/* sticker: offset shadow, die-cut border, solid fill, halftone texture */}
                <g transform="rotate(-2 200 240)">
                  <g transform="translate(8, 10)" fill="var(--ykc-navy-900)" opacity="0.55">
                    <use href="#africa-shape" />
                    <use href="#madagascar-shape" />
                  </g>
                  <g stroke="var(--ykc-beige-500)" strokeWidth="12" strokeLinejoin="round" fill="var(--ykc-beige-500)">
                    <use href="#africa-shape" />
                    <use href="#madagascar-shape" />
                  </g>
                  <g fill="var(--ykc-blue-500)">
                    <use href="#africa-shape" />
                    <use href="#madagascar-shape" />
                  </g>
                  <g fill="url(#africa-dots)">
                    <use href="#africa-shape" />
                    <use href="#madagascar-shape" />
                  </g>
                  {/* connector lines */}
                  <g stroke="var(--ykc-beige-500)" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.7" fill="none">
                    <path d="M212 448 L 260 406" />
                    <path d="M260 406 L 306 254" />
                    <path d="M306 254 L 271 258" />
                    <path d="M271 258 L 133 212" />
                    <path d="M133 212 L 112 218" />
                    <path d="M260 406 L 181 300" />
                  </g>
                  {/* city pins */}
                  {[
                    ['Cape Town', 212, 448, 'right'],
                    ['Joburg', 260, 406, 'right'],
                    ['Centurion', 248, 388, 'left'],
                    ['Lagos', 133, 212, 'right'],
                    ['Accra', 112, 218, 'left'],
                    ['Nairobi', 306, 254, 'right'],
                    ['Kigali', 271, 258, 'left'],
                    ['Luanda', 181, 300, 'right'],
                  ].map(([n, x, y, side]) => (
                    <g key={n}>
                      <circle cx={x} cy={y} r="7" fill="var(--ykc-beige-500)" />
                      <circle cx={x} cy={y} r="4" fill="var(--ykc-navy-900)" />
                      <text x={side === 'left' ? x - 14 : x + 14} y={y + 4}
                        textAnchor={side === 'left' ? 'end' : 'start'}
                        fontFamily="Roboto, sans-serif" fontSize="11" fontWeight="700"
                        fill="var(--ykc-beige-500)" letterSpacing="0.04em"
                        style={{ paintOrder: 'stroke' }} stroke="var(--ykc-navy-900)" strokeWidth="3" strokeLinejoin="round">{n}</text>
                    </g>
                  ))}
                </g>
              </svg>

              <div style={{ position: 'absolute', top: 22, left: 24, fontFamily: 'var(--font-mono)', color: 'var(--ykc-blue-400)', fontSize: 11, opacity: 0.7, letterSpacing: '0.3em' }}>
                0 1 1 1 1 0 0 1
              </div>
            </div>
            <div style={{ position: 'absolute', top: 0, right: -14, zIndex: 2 }}>
              <Sticker bg="var(--ykc-blue-500)" color="white" rotate={6}>SSA-NATIVE</Sticker>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .about-africa-grid { grid-template-columns: 1fr !important; }
          .about-africa-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function AboutFamily() {
  const showToast = useToast();
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }}>
      <div className="wrap-narrow" style={{ textAlign: 'center' }}>
        <img src="/assets/collages/team.png" alt="Vintage cut-out, the team, layered collage" style={{
          width: 'min(360px, 70%)', display: 'block', margin: '0 auto 26px',
        }} />
        <Eyebrow>THE YOUKNOW FAMILY</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(34px, 3.8vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.025em',
          margin: '12px 0 18px',
        }}>
          A vital division of the broader <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>YOUKNOW family</em>.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: '0 auto 18px', maxWidth: 660 }}>
          YOUKNOW Connect is the customer technology arm. We sit alongside the rest of the YOUKNOW group, sharing context and clients where it makes sense, and otherwise staying out of each other's way.
        </p>
        <TrackedLink to="https://youknow.co.za" target="_blank" rel="noreferrer" trackProps={{ location: 'about_family' }} style={{
          display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--ykc-blue-500)', textDecoration: 'none', marginBottom: 28,
        }}>
          Visit youknow.co.za ↗
        </TrackedLink>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 16 }}>
          <Sticker bg="white" color="var(--ykc-navy-900)" rotate={-2} size="sm">CTN · JHB · CPT</Sticker>
          <Sticker bg="var(--ykc-blue-500)" color="white" rotate={3} size="sm"
            onClick={() => showToast('2013 called. Still proud of us.')}>Since 2013</Sticker>
          <Sticker bg="var(--ykc-navy-900)" color="var(--ykc-blue-400)" rotate={-3} size="sm" shadow="var(--ykc-blue-500)">YOUKNOW &lt;3</Sticker>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <SiteShell>
      <Seo
        title="About · YOUKNOW Connect"
        description="Who we are: a small, expert, platform-agnostic customer technology team in South Africa, helping African businesses get real value from engagement, data, and analytics."
        path="/about"
      />
      <PageHero
        eyebrow="So YOUKNOW who we are"
        title={<>The platform-agnostic <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>customer technology partner</em> for Africa.</>}
        lead="We help businesses across Sub-Saharan Africa get more from their customer data. And we recommend what's actually right for you, not what earns us the best margin."
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>#YK · 2026</Sticker>}
        art="/assets/collages/globe.png"
        artAlt="Collage, globe showing the African continent"
      >
        <div style={{ display: 'flex', gap: 12, marginTop: 6, flexWrap: 'wrap' }}>
          <Btn intent="primary" size="lg" href="/contact" trackProps={{ location: 'about_hero' }}>Let's talk</Btn>
          <Btn intent="ghost" size="lg" href="/partners" trackProps={{ location: 'about_hero' }}>Our partners →</Btn>
        </div>
      </PageHero>

      <AboutStory />
      <AboutPrinciples />
      <AboutAfrica />
      <AboutFamily />
      <CtaSection />
    </SiteShell>
  );
}
