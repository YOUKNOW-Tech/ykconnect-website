// YOUKNOW Connect — Partner detail page (/partners/:slug)
import { useParams } from 'react-router-dom';
import { SiteShell, PageHero } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Btn, Badge, PartnerLogo, ConnectorLine } from '../components/brand.jsx';
import { TrackedLink } from '../components/TrackedLink.jsx';
import { CtaSection } from '../components/CtaSection.jsx';
import { Seo } from '../components/Seo.jsx';
import { getPartnerBySlug, getPartnersByCategory } from '../data/partners.js';

function NotFound() {
  return (
    <SiteShell>
      <Seo
        title="Partner not found · YOUKNOW Connect"
        description="That partner page doesn't exist. Head back to our technology partners for the full list."
        path="/partners"
      />
      <section style={{ background: 'var(--ykc-beige-500)', padding: '120px 0 140px', textAlign: 'center' }}>
        <div className="wrap-narrow">
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14, color: 'var(--ykc-blue-500)', marginBottom: 20 }}>404</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 4.5vw, 56px)',
            letterSpacing: '-0.025em', lineHeight: 1.05, margin: '0 0 16px', color: 'var(--ykc-navy-900)',
          }}>That partner isn’t on our list. <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>Yet.</em></h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: '0 0 28px' }}>
            The link may be old, or the partner may have moved. The rest of our partner stack is very much alive.
          </p>
          <Btn intent="primary" size="lg" href="/partners" trackProps={{ location: 'partner_detail_404' }}>Back to our partners</Btn>
        </div>
      </section>
    </SiteShell>
  );
}

export default function PartnerDetail() {
  const { slug } = useParams();
  const partner = getPartnerBySlug(slug);
  if (!partner) return <NotFound />;

  const others = getPartnersByCategory(partner.cat, partner.slug);

  return (
    <SiteShell>
      <Seo
        title={`${partner.name} · YOUKNOW Connect`}
        description={partner.overview}
        path={`/partners/${partner.slug}`}
      />
      <PageHero
        eyebrow={`${partner.catLong} partner`}
        title={<>{partner.name}</>}
        lead={partner.overview}
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>{partner.role}</Sticker>}
        art={partner.heroImg}
        artAlt={partner.heroAlt}
      >
        <div style={{ display: 'flex', gap: 12, marginTop: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <PartnerLogo name={partner.name} height={30} style={{ color: 'var(--ykc-navy-900)', marginRight: 8 }} />
          <Btn intent="primary" size="lg" href="/contact" trackProps={{ location: 'partner_detail_hero' }}>Get connected</Btn>
          <Btn intent="ghost" size="lg" href={partner.serviceHref} trackProps={{ location: 'partner_detail_hero' }}>See the {partner.catLong} service →</Btn>
        </div>
      </PageHero>

      <section style={{ background: 'var(--ykc-white)', padding: '88px 0' }}>
        <div className="wrap pd-fits-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} data-screen-label="Where it fits">
          <div>
            <Eyebrow>WHERE IT FITS</Eyebrow>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
              color: 'var(--ykc-navy-900)', margin: '14px 0 0',
            }}>{partner.bestFor}</p>
          </div>
          <div>
            <Eyebrow>WHAT IT DOES</Eyebrow>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
              color: 'var(--ykc-navy-700)', margin: '14px 0 0',
            }}>{partner.what}</p>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .pd-fits-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          }
        `}</style>
      </section>

      <section style={{ background: 'var(--ykc-beige-500)', padding: '88px 0' }}>
        <div className="wrap">
          <Eyebrow withLine>WHAT WE OFFER AROUND {partner.name.toUpperCase()}</Eyebrow>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65,
            color: 'var(--ykc-navy-900)', margin: '18px 0 28px', maxWidth: 760,
          }}>{partner.weOffer}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {partner.wedoes.map((w) => (
              <span key={w} style={{
                fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
                padding: '9px 16px', borderRadius: 999,
                border: '1.5px solid rgba(7,20,57,0.2)', color: 'var(--ykc-navy-900)',
                background: 'white',
              }}>{w}</span>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section style={{ background: 'var(--ykc-white)', padding: '88px 0' }}>
          <div className="wrap">
            <ConnectorLine heading={`OTHER ${partner.catLong.toUpperCase()} PARTNERS`} />
            <div style={{
              display: 'grid', gridTemplateColumns: `repeat(${Math.min(others.length, 3)}, 1fr)`,
              gap: 16, marginTop: 36,
            }} className="pd-related-grid">
              {others.map((p) => (
                <TrackedLink key={p.slug} to={`/partners/${p.slug}`} trackLabel={p.name} trackProps={{ location: 'related_partner_card' }} style={{
                  display: 'block', padding: '24px 26px', borderRadius: 18,
                  background: 'var(--ykc-beige-300)', border: '1.5px solid transparent',
                  textDecoration: 'none', color: 'var(--ykc-navy-900)',
                  transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--ykc-blue-500)'; e.currentTarget.style.background = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--ykc-beige-300)'; }}
                >
                  <h3 style={{ margin: '0 0 10px' }}><PartnerLogo name={p.name} height={22} style={{ color: 'var(--ykc-navy-900)' }} /></h3>
                  <div style={{ marginBottom: 8 }}><Badge intent="blue-tint">{p.role}</Badge></div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0 }}>{p.bestFor}</p>
                  <div style={{ marginTop: 14, fontSize: 13, color: 'var(--ykc-blue-500)', fontWeight: 600 }}>Learn more →</div>
                </TrackedLink>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .pd-related-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      )}

      <CtaSection />
    </SiteShell>
  );
}
