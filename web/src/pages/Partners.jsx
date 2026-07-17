// YOUKNOW Connect — Partners page
// Shipped in the "Grid / Soft / Default" configuration (the design tool's
// tweak panel was a design-exploration surface, not a customer-facing control —
// this bakes in the combination that was actually chosen).
import { useEffect } from 'react';
import { SiteShell, PageHero } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Badge, PartnerLogo } from '../components/brand.jsx';
import { TrackedLink } from '../components/TrackedLink.jsx';
import { CtaSection } from '../components/CtaSection.jsx';
import { Seo } from '../components/Seo.jsx';
import { PARTNERS_DATA } from '../data/partners.js';

function PartnersByCategory() {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '64px 0 96px' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {PARTNERS_DATA.map((cat) => (
          <div key={cat.cat} id={cat.cat.toLowerCase()} style={{ scrollMarginTop: 96 }}>
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
              <TrackedLink to={cat.href} trackProps={{ location: 'partners_category_header' }} style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                color: 'var(--ykc-blue-500)', textDecoration: 'none',
                padding: '8px 14px', borderRadius: 999, border: '1.5px solid var(--ykc-blue-500)',
                transition: 'all .15s', whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-blue-500)'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-blue-500)'; }}
              >See the service →</TrackedLink>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: cat.items.length === 1 ? 'minmax(0, 620px)' : `repeat(${Math.min(cat.items.length, 3)}, 1fr)`,
              gap: 16,
            }} className="partners-card-grid">
              {cat.items.map(p => (
                <article key={p.slug} style={{
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
                  <TrackedLink to={`/partners/${p.slug}`} trackProps={{ location: 'partner_card' }} style={{
                    marginTop: 2, alignSelf: 'flex-start', position: 'relative',
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5,
                    color: 'var(--ykc-blue-500)', textDecoration: 'none',
                  }}>Learn more about {p.name} →</TrackedLink>
                </article>
              ))}
            </div>

            {cat.secondary && cat.secondary.length > 0 && (
              <div style={{
                marginTop: 22, paddingTop: 20, borderTop: '1px dotted rgba(7,20,57,0.18)',
                display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--ykc-navy-500)', whiteSpace: 'nowrap',
                }}>We also implement &amp; support</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
                  {cat.secondary.map((name) => (
                    <PartnerLogo key={name} name={name} height={16} style={{ color: 'var(--ykc-navy-700)', opacity: 0.6 }} />
                  ))}
                </div>
              </div>
            )}
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
            <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>And we're glad to work with plenty of others too.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="ph-note-grid">
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ykc-navy-700)', margin: 0 }}>
              If you're already using a tool we don't formally partner with, we'll still help you make it work. If two of our partners would both suit you, we'll walk you through the trade-offs honestly.
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
  useEffect(() => {
    if (!window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <SiteShell>
      <Seo
        title="Technology partners · YOUKNOW Connect"
        description="The platforms we stand behind: OneSignal, InsiderOne, Amperity, Amplitude, DOMO, AppsFlyer, and Branch — recommended only when they genuinely fit."
        path="/partners"
      />
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
