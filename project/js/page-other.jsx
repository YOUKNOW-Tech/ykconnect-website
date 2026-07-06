// YOUKNOW Connect, About, Partners, Contact pages

/* ============================================================
   ABOUT
   ============================================================ */

function AboutPage() {
  return (
    <SiteShell page="about">
      <PageHero
        eyebrow="So YOUKNOW who we are"
        title={<>The platform-agnostic <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>customer technology partner</em> for Africa.</>}
        lead="We help businesses across Sub-Saharan Africa get more from their customer data. And we recommend what's actually right for you, not what earns us the best margin."
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>#YK · 2026</Sticker>}
        art="assets/collages/globe.png"
        artAlt="Collage, globe showing the African continent"
      >
        <div style={{ display: 'flex', gap: 12, marginTop: 6, flexWrap: 'wrap' }}>
          <Btn intent="primary" size="lg" href="contact.html">Let's talk</Btn>
          <Btn intent="ghost" size="lg" href="partners.html">Our partners →</Btn>
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

function AboutStory() {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }}>
      <div className="wrap">
        <ConnectorLine heading="THE SHORT VERSION" />
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
              We do it the other way around. We partner with the platforms that genuinely lead their categories (Braze, OneSignal, InsiderOne, Amperity, Amplitude, DOMO, AppsFlyer, Branch), but we're paid to solve your problem, not to push a licence. If the right answer is a tool we don't sell, we'll say so. If two of our partners would both work, we'll tell you the trade-offs honestly.
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
    { t: "Confident, direct, human.", b: "No jargon. No deck-flipping. The conversation feels like talking to a sharp expert who respects your time." },
    { t: "Africa-first.", b: "POPIA. WhatsApp-primary channels. Patchy connectivity. Mobile-money. We don't bolt local context on. We build from it." },
    { t: "Honest about scope.", b: "If you don't need us yet, we'll tell you. If a smaller tool would do the job, we'll point you at it." },
    { t: "Stay after the contract.", b: "We're the partner you call when something isn't working, not just when you're buying." },
    { t: "Boringly predictable delivery.", b: "We've made implementation almost dull. The drama left the building. Customers prefer it." },
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
            }}>Six things we believe.<br/><em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>Out loud.</em></h2>
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
      <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -150, top: -150, width: 560, opacity: 0.22, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'center' }} className="about-africa-grid">
          <div>
            <Eyebrow color="var(--ykc-blue-400)">SUB-SAHARAN AFRICA</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 60px)', lineHeight: 1, letterSpacing: '-0.028em',
              margin: '10px 0 20px', color: 'var(--ykc-beige-500)',
            }}>
              We understand the<br/>
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-400)' }}>texture of doing business here.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-200)', margin: '0 0 22px', maxWidth: 540 }}>
              Most customer technology playbooks are written for North American or European markets. They don't translate cleanly here, and we don't force them. We build from what's actually true on the ground.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="about-africa-list">
              {[
                ['POPIA-native', "Consent built into the data model from day one."],
                ['WhatsApp-first', 'Often the primary channel, not the afterthought.'],
                ['Connectivity-aware', "Designed for users on patchy data, not gigabit fibre."],
                ['Mobile-money fluent', 'We know what M-Pesa and friends mean for identity stitching.'],
                ['Currency- and tax-savvy', "ZAR, NGN, KES, GHS, and friends. Handled."],
                ['On the ground', 'Cape Town based. We come to your office.'],
              ].map(([t, b], i) => (
                <li key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 10, borderTop: '1px dotted rgba(255,255,255,0.22)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, color: 'var(--ykc-blue-400)', letterSpacing: '-0.005em' }}>{t}</span>
                  <span style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ykc-navy-200)' }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stylised "map" collage */}
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
                    <circle cx="3" cy="3" r="1.5" fill="var(--ykc-blue-400)" opacity="0.5"/>
                  </pattern>
                  <path id="africa-shape" d="M 83 27 L 103 32 L 130 21 L 166 18 L 172 39 L 193 48 L 218 49 L 229 47 L 244 53 L 268 56 L 282 55 L 292 76 L 299 100 L 308 118 L 315 136 L 321 152 L 338 176 L 343 183 L 356 181 L 379 173 L 382 183 L 374 201 L 364 218 L 345 238 L 330 257 L 324 273 L 318 288 L 325 313 L 325 341 L 304 356 L 298 383 L 284 404 L 276 429 L 259 448 L 247 454 L 218 459 L 210 456 L 209 445 L 200 421 L 190 386 L 177 359 L 183 323 L 177 283 L 165 261 L 163 243 L 163 222 L 158 217 L 142 214 L 132 207 L 120 208 L 106 216 L 93 214 L 75 219 L 45 188 L 23 156 L 28 127 L 31 101 L 46 77 L 64 60 L 78 38 Z"/>
                  <path id="madagascar-shape" d="M 371 320 L 376 341 L 360 398 L 350 402 L 343 376 L 346 345 L 355 331 Z"/>
                </defs>
                {/* sticker: offset shadow, die-cut border, solid fill, halftone texture */}
                <g transform="rotate(-2 200 240)">
                  <g transform="translate(8, 10)" fill="var(--ykc-navy-900)" opacity="0.55">
                    <use href="#africa-shape"/>
                    <use href="#madagascar-shape"/>
                  </g>
                  <g stroke="var(--ykc-beige-500)" strokeWidth="12" strokeLinejoin="round" fill="var(--ykc-beige-500)">
                    <use href="#africa-shape"/>
                    <use href="#madagascar-shape"/>
                  </g>
                  <g fill="var(--ykc-blue-500)">
                    <use href="#africa-shape"/>
                    <use href="#madagascar-shape"/>
                  </g>
                  <g fill="url(#africa-dots)">
                    <use href="#africa-shape"/>
                    <use href="#madagascar-shape"/>
                  </g>
                  {/* connector lines */}
                  <g stroke="var(--ykc-beige-500)" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.7" fill="none">
                    <path d="M212 448 L 260 406"/>
                    <path d="M260 406 L 306 254"/>
                    <path d="M306 254 L 271 258"/>
                    <path d="M271 258 L 133 212"/>
                    <path d="M133 212 L 112 218"/>
                    <path d="M260 406 L 181 300"/>
                  </g>
                  {/* city pins */}
                  {[
                    ['Cape Town', 212, 448, 'right'],
                    ['Joburg',    260, 406, 'right'],
                    ['Lagos',     133, 212, 'right'],
                    ['Accra',     112, 218, 'left'],
                    ['Nairobi',   306, 254, 'right'],
                    ['Kigali',    271, 258, 'left'],
                    ['Luanda',    181, 300, 'right'],
                  ].map(([n, x, y, side]) => (
                    <g key={n}>
                      <circle cx={x} cy={y} r="7" fill="var(--ykc-beige-500)"/>
                      <circle cx={x} cy={y} r="4" fill="var(--ykc-navy-900)"/>
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
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }}>
      <div className="wrap-narrow" style={{ textAlign: 'center' }}>
        <img src="assets/collages/team.png" alt="Vintage cut-out, the team, layered collage" style={{
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
        <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: '0 auto 32px', maxWidth: 660 }}>
          YOUKNOW Connect is the customer technology arm. We sit alongside the rest of the YOUKNOW group, sharing context and clients where it makes sense, and otherwise staying out of each other's way.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: 16 }}>
          <Sticker bg="white" color="var(--ykc-navy-900)" rotate={-2} size="sm">Cape Town · ZA</Sticker>
          <Sticker bg="var(--ykc-blue-500)" color="white" rotate={3} size="sm">Since 2015</Sticker>
          <Sticker bg="var(--ykc-navy-900)" color="var(--ykc-blue-400)" rotate={-3} size="sm" shadow="var(--ykc-blue-500)">YOUKNOW &lt;3</Sticker>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
   PARTNERS
   ============================================================ */

function PartnersPage() {
  return (
    <SiteShell page="partners">
      <PageHero
        eyebrow="Our partner stack"
        title={<>The category leaders. <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>And only when they fit.</em></>}
        lead="We partner with the customer technology platforms that genuinely lead their categories. We're platform-agnostic. That's a fancy way of saying we recommend what's right for you, not what's easiest for us."
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>PLATFORM-AGNOSTIC</Sticker>}
      />
      <PartnersByCategory />
      <PartnersHonestyNote />
      <CtaSection />
    </SiteShell>
  );
}

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

function PartnersByCategory() {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '64px 0 96px' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {PARTNERS_DATA.map((cat) => (
          <div key={cat.cat}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 14,
                padding: '10px 14px', background: 'var(--ykc-blue-500)', color: 'white',
                borderRadius: 8, letterSpacing: '0.08em',
              }}>{cat.cat}</span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700,
                letterSpacing: '-0.02em', lineHeight: 1.1, margin: 0, color: 'var(--ykc-navy-900)',
              }}>{cat.catLong}</h2>
              <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)' }}/>
              <a href={cat.href} style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                color: 'var(--ykc-blue-500)', textDecoration: 'none',
                padding: '8px 14px', borderRadius: 999, border: '1.5px solid var(--ykc-blue-500)',
                transition: 'all .15s', whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-blue-500)'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-blue-500)'; }}
              >See the service →</a>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: cat.items.length === 1 ? '1fr' : `repeat(${Math.min(cat.items.length, 3)}, 1fr)`,
              gap: 16,
            }} className="partners-card-grid">
              {cat.items.map(p => (
                <article key={p.name} style={{
                  background: 'var(--ykc-beige-300)',
                  border: '1.5px dotted rgba(7,20,57,0.22)',
                  borderRadius: 20, padding: '28px 28px 24px',
                  display: 'flex', flexDirection: 'column', gap: 14,
                  transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-100)'; e.currentTarget.style.borderColor = 'var(--ykc-blue-500)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-300)'; e.currentTarget.style.borderColor = 'rgba(7,20,57,0.22)'; }}
                >
                  <img src="assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -50, top: -50, width: 200, opacity: 0.22, pointerEvents: 'none' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, margin: 0 }}>{p.name}</h3>
                    <Badge intent="blue-tint">{p.role}</Badge>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>{p.what}</p>
                  <div style={{ paddingTop: 12, borderTop: '1px dotted rgba(7,20,57,0.2)' }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)', marginBottom: 6 }}>Best for</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ykc-navy-900)', margin: 0 }}>{p.bestFor}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)', marginBottom: 8 }}>How we partner</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {p.wedoes.map(w => (
                        <span key={w} style={{
                          fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 500,
                          padding: '5px 10px', borderRadius: 999,
                          border: '1px solid rgba(7,20,57,0.24)', color: 'var(--ykc-navy-900)',
                          background: 'white',
                        }}>{w}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
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

function PartnersHonestyNote() {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '88px 0' }}>
      <div className="wrap-narrow">
        <div style={{
          background: 'white', borderRadius: 24,
          padding: '48px 52px',
          border: '1.5px dotted rgba(7,20,57,0.22)',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: -18, left: 32, background: 'var(--ykc-beige-500)', padding: '0 12px' }}>
            <Eyebrow>A NOTE ON PLATFORM-AGNOSTIC</Eyebrow>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.08, letterSpacing: '-0.025em',
            margin: '6px 0 18px',
          }}>
            We're partners with these platforms because they're genuinely good.<br/>
            <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>But we're not tied to any of them.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="ph-note-grid">
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
              If your situation calls for a tool we don't partner with, we'll say so. If two of our partners would both work, we'll tell you the trade-offs honestly.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
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
   CONTACT
   ============================================================ */

function ContactPage() {
  return (
    <SiteShell page="contact">
      <ContactLayout />
    </SiteShell>
  );
}

function ContactLayout() {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '64px 0 96px', position: 'relative', overflow: 'hidden', minHeight: '88vh' }}>
      <img src="assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -140, top: -110, width: 440, opacity: 0.28, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'start' }} className="contact-grid">
          <ContactLeft />
          <ContactForm />
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

function ContactLeft() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <Eyebrow withLine>Sharp. Let's connect.</Eyebrow>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(44px, 5vw, 76px)',
        lineHeight: 0.96, letterSpacing: '-0.03em',
        color: 'var(--ykc-navy-900)', margin: 0,
      }}>
        One email.<br/>
        <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>One honest answer.</em>
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 520 }}>
        Tell us a bit about what's going on. We'll come back within two business days, usually with a frank "yes, here's how we'd start" or "actually you don't need us yet, here's why."
      </p>

      <div style={{
        background: 'white', border: '1.5px dotted rgba(7,20,57,0.22)',
        borderRadius: 20, padding: '24px 26px',
        display: 'flex', flexDirection: 'column', gap: 16,
        marginTop: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'var(--ykc-blue-500)', color: 'white',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Press Start 2P', monospace", fontSize: 12,
          }}>@</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)' }}>Email</span>
            <a href="mailto:connect@youknow.co.za" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ykc-navy-900)', textDecoration: 'none' }}>connect@youknow.co.za</a>
          </div>
        </div>
        <div style={{ borderTop: '1px dotted rgba(7,20,57,0.2)' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'var(--ykc-navy-900)', color: 'var(--ykc-blue-400)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Press Start 2P', monospace", fontSize: 11,
          }}>◉</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)' }}>Offices</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ykc-navy-900)' }}>Cape Town &amp; Joburg · South Africa</span>
          </div>
        </div>
        <div style={{ borderTop: '1px dotted rgba(7,20,57,0.2)' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'var(--ykc-beige-300)', color: 'var(--ykc-navy-900)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Press Start 2P', monospace", fontSize: 12,
          }}>↩</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)' }}>Reply time</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--ykc-navy-900)' }}>Within 2 business days</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
        <BinaryStrip />
        <span style={{ fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-500)', fontSize: 16, transform: 'rotate(-3deg)' }}>
          ↑ "howzit" in binary
        </span>
      </div>

      <img src="assets/collages/telephone-girl.png" alt="Vintage cut-out, girl on the telephone" className="hide-mobile" style={{
        width: 220, alignSelf: 'flex-start', marginTop: 4, transform: 'rotate(-2deg)',
      }} />
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', company: '', email: '', domain: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = "What should we call you?";
    if (!v.email.trim()) e.email = "We'll need somewhere to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That doesn't look like an email.";
    if (!v.message.trim()) e.message = "Tell us what's going on, even one sentence.";
    else if (v.message.trim().length < 12) e.message = "Just a bit more context, if you can.";
    return e;
  };

  const update = (field, val) => {
    const next = { ...values, [field]: val };
    setValues(next);
    if (touched[field]) {
      const e = validate(next);
      setErrors(e);
    }
  };
  const blur = (field) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      if (window.showToast) window.showToast("Message sent. We'll come back to you shortly.");
    }
  };

  if (submitted) {
    return (
      <div style={{
        background: 'white', borderRadius: 24, padding: '40px 44px',
        border: '1.5px dotted rgba(7,20,57,0.22)',
        position: 'relative', overflow: 'hidden',
      }}>
        <img src="assets/shapes/halftone-faded-circle-blue.png" alt="" style={{ position: 'absolute', right: -50, top: -50, width: 250, opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'var(--ykc-blue-500)', color: 'white',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Press Start 2P', monospace", fontSize: 24,
          }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
            Got it, <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>{values.name.split(' ')[0] || 'friend'}</em>.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>
            Your message landed safely. We'll come back to you within two business days, usually with a frank yes-or-no on whether we're the right fit, and the next step if we are.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
            <Btn intent="ghost" onClick={() => { setSubmitted(false); setValues({ name: '', company: '', email: '', domain: '', message: '' }); setTouched({}); setErrors({}); }}>← Send another</Btn>
            <Btn intent="primary" href="index.html">Back to home</Btn>
          </div>
          <div style={{ marginTop: 18, fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-500)', fontSize: 22, transform: 'rotate(-2deg)', display: 'inline-block' }}>
            YOUKNOW &lt;3
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{
      background: 'white', borderRadius: 24, padding: '36px 40px',
      border: '1.5px dotted rgba(7,20,57,0.22)',
      display: 'flex', flexDirection: 'column', gap: 18,
      position: 'relative', overflow: 'hidden',
    }}>
      <img src="assets/shapes/halftone-faded-circle-blue.png" alt="" style={{ position: 'absolute', right: -70, bottom: -70, width: 250, opacity: 0.4, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Eyebrow>SEND US A NOTE</Eyebrow>
          <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)' }}/>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
          <div className={`field ${errors.name && touched.name ? 'invalid' : ''}`}>
            <label htmlFor="cf-name">Your name *</label>
            <input id="cf-name" type="text" placeholder="Thandi N." value={values.name}
              onChange={(e) => update('name', e.target.value)} onBlur={() => blur('name')} />
            {errors.name && touched.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="cf-company">Company</label>
            <input id="cf-company" type="text" placeholder="Acme Co." value={values.company}
              onChange={(e) => update('company', e.target.value)} />
          </div>
        </div>

        <div className={`field ${errors.email && touched.email ? 'invalid' : ''}`}>
          <label htmlFor="cf-email">Work email *</label>
          <input id="cf-email" type="email" placeholder="thandi@acme.co.za" value={values.email}
            onChange={(e) => update('email', e.target.value)} onBlur={() => blur('email')} />
          {errors.email && touched.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label>What's on your mind? (optional)</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
            {[
              { v: 'cep', l: 'Customer Engagement' },
              { v: 'pa', l: 'Product Analytics' },
              { v: 'bi', l: 'Business Intelligence' },
              { v: 'attr', l: 'Mobile Attribution' },
              { v: 'other', l: "Not sure yet" },
            ].map(c => {
              const active = values.domain === c.v;
              return (
                <button type="button" key={c.v}
                  onClick={() => update('domain', active ? '' : c.v)}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                    padding: '8px 14px', borderRadius: 999,
                    border: '1.5px solid ' + (active ? 'var(--ykc-blue-500)' : 'rgba(7,20,57,0.18)'),
                    background: active ? 'var(--ykc-blue-500)' : 'white',
                    color: active ? 'white' : 'var(--ykc-navy-900)',
                    cursor: 'pointer', transition: 'all .15s',
                  }}>
                  {c.l}
                </button>
              );
            })}
          </div>
        </div>

        <div className={`field ${errors.message && touched.message ? 'invalid' : ''}`}>
          <label htmlFor="cf-message">Tell us a bit about it *</label>
          <textarea id="cf-message" placeholder="What's the problem you're trying to solve? Even a sentence is fine. We just need a starting point."
            value={values.message}
            onChange={(e) => update('message', e.target.value)} onBlur={() => blur('message')} />
          {errors.message && touched.message && <span className="field-error">{errors.message}</span>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, gap: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, color: 'var(--ykc-navy-500)', lineHeight: 1.5 }}>
            We'll only use this to reply. POPIA-aware, no surprise newsletter.
          </span>
          <Btn intent="primary" size="lg" type="submit">Send it →</Btn>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}

Object.assign(window, { AboutPage, PartnersPage, ContactPage });
