// YOUKNOW Connect — Partners page
// Shipped in the "Grid / Soft / Default" configuration (the design tool's
// tweak panel was a design-exploration surface, not a customer-facing control —
// this bakes in the combination that was actually chosen).
import { Link } from 'react-router-dom';
import { SiteShell, PageHero } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Badge, PartnerLogo } from '../components/brand.jsx';
import { CtaSection } from '../components/CtaSection.jsx';

const PARTNERS_DATA = [
  {
    cat: 'CEP', catLong: 'Customer Engagement', href: '/services/cep',
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
    cat: 'CDP', catLong: 'Customer Data Platform', href: '/services/cdp',
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
    cat: 'PA', catLong: 'Product Analytics', href: '/services/pa',
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
    cat: 'BI', catLong: 'Business Intelligence', href: '/services/bi',
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
    cat: 'ATTR', catLong: 'Mobile Attribution', href: '/services/attribution',
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
              <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)', minWidth: 40 }} />
              <Link to={cat.href} style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                color: 'var(--ykc-blue-500)', textDecoration: 'none',
                padding: '8px 14px', borderRadius: 999, border: '1.5px solid var(--ykc-blue-500)',
                transition: 'all .15s', whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-blue-500)'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-blue-500)'; }}
              >See the service →</Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: cat.items.length === 1 ? 'minmax(0, 620px)' : `repeat(${Math.min(cat.items.length, 3)}, 1fr)`,
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
                  <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -50, top: -50, width: 200, opacity: 0.22, pointerEvents: 'none' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, position: 'relative' }}>
                    <h3 style={{ margin: 0, lineHeight: 1 }} aria-label={p.name}>
                      <PartnerLogo name={p.name} height={30} style={{ color: 'var(--ykc-navy-900)' }} />
                    </h3>
                    <Badge intent="blue-tint">{p.role}</Badge>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, position: 'relative' }}>{p.what}</p>
                  <div style={{ paddingTop: 12, borderTop: '1px dotted rgba(7,20,57,0.2)', position: 'relative' }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)', marginBottom: 6 }}>Best for</div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ykc-navy-900)', margin: 0 }}>{p.bestFor}</p>
                  </div>
                  <div style={{ position: 'relative' }}>
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
            We're partners with these platforms because they're genuinely good.<br />
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

export default function Partners() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our partner stack"
        title={<>The category leaders. <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>And only when they fit.</em></>}
        lead="We partner with the customer technology platforms that genuinely lead their categories. We're platform-agnostic. That's a fancy way of saying we recommend what's right for you, not what's easiest for us."
        art="/assets/collages/tools-products-partners.png"
        artAlt="Collage, tools, products and partners"
        stickerPos={{ right: 90, top: 'auto', bottom: 30 }}
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>PLATFORM-AGNOSTIC</Sticker>}
      />
      <PartnersByCategory />
      <PartnersHonestyNote />
      <CtaSection />
    </SiteShell>
  );
}
