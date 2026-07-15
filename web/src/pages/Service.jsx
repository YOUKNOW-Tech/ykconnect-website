// YOUKNOW Connect — shared service-page template
// Reused by all 5 service domains (CEP, CDP, PA, BI, Attribution). Pass a cfg
// object (see src/data/services.js) describing the domain.
import { SiteShell } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Btn, Badge, ConnectorLine, PartnerLogo } from '../components/brand.jsx';
import { TrackedLink } from '../components/TrackedLink.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { Seo } from '../components/Seo.jsx';

function ServiceHero({ cfg }) {
  return (
    <section style={{
      background: 'var(--ykc-beige-500)',
      position: 'relative', overflow: 'hidden',
      padding: '80px 0 84px',
    }}>
      <img src="/assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', right: -120, top: -120, width: 460, opacity: 0.3, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
          gap: 56, alignItems: 'center',
        }} className="svc-hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Eyebrow withLine>{cfg.eyebrow}</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(46px, 5.5vw, 80px)',
              lineHeight: 0.96, letterSpacing: '-0.03em',
              color: 'var(--ykc-navy-900)', margin: 0,
            }}>
              {cfg.heroTitle.before}
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>{cfg.heroTitle.accent}</em>
              {cfg.heroTitle.after}
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55,
              color: 'var(--ykc-navy-700)', maxWidth: 560, margin: 0,
            }}>{cfg.heroLead}</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 6, flexWrap: 'wrap' }}>
              <Btn intent="primary" size="lg" href="#contact-form" trackProps={{ location: 'service_hero' }}>Get connected</Btn>
              <Btn intent="ghost" size="lg" href="/partners" trackProps={{ location: 'service_hero' }}>See the platforms →</Btn>
            </div>
          </div>

          {/* Collage */}
          <div style={{ position: 'relative', minHeight: 460 }}>
            <div style={{
              position: 'absolute', inset: '20px 0 40px 20px',
              background: 'var(--ykc-navy-900)', borderRadius: 24, overflow: 'hidden',
            }}>
              <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '105%', opacity: 0.4, pointerEvents: 'none' }} />
              {cfg.collage ? (
                <img src={cfg.collage} alt={cfg.collageAlt || ''} style={{
                  position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                  width: '80%', maxHeight: '84%', objectFit: 'contain', objectPosition: 'bottom',
                }} />
              ) : (
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                  width: 200, height: 200, borderRadius: '50%',
                  background: 'var(--ykc-blue-500)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 20px 40px -16px rgba(0,0,0,0.4)',
                }}>
                  <span style={{
                    fontFamily: "'Press Start 2P', monospace", fontSize: 36, color: 'white',
                    letterSpacing: '0.06em',
                  }}>{cfg.shortTag}</span>
                </div>
              )}
              <div style={{
                position: 'absolute', top: 20, left: 24, fontFamily: 'var(--font-mono)',
                color: 'var(--ykc-blue-400)', fontSize: 11, opacity: 0.7, letterSpacing: '0.3em',
              }}>0 1 1 1 1 0 0 1 0 1</div>
              {cfg.heroCaption && <div style={{
                position: 'absolute', bottom: 22, left: 24, right: 24,
                fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-beige-500)',
                fontSize: 17, opacity: 0.88, transform: 'rotate(-1.5deg)', maxWidth: '60%',
              }}>{cfg.heroCaption}</div>}
            </div>
            <div style={{ position: 'absolute', top: 6, right: -10, zIndex: 2 }}>
              <Sticker bg="var(--ykc-blue-500)" color="white" rotate={5}>{cfg.sticker1 || 'REAL-TIME'}</Sticker>
            </div>
            <div style={{ position: 'absolute', bottom: 60, right: -22, zIndex: 2 }}>
              <Sticker bg="var(--ykc-beige-500)" color="var(--ykc-navy-900)" rotate={-4} size="sm">{cfg.sticker2 || '#YK'}</Sticker>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .svc-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceWhatYouGet({ cfg }) {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }}>
      <div className="wrap">
        <ConnectorLine heading="WHAT YOU GET" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, marginTop: 36, alignItems: 'start' }} className="svc-wyg-intro">
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.04, letterSpacing: '-0.025em',
            margin: 0,
          }}>
            {cfg.whatYouGet.title.before}
            <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>{cfg.whatYouGet.title.accent}</em>
            {cfg.whatYouGet.title.after}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, maxWidth: 560 }}>
            {cfg.whatYouGet.lead}
          </p>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginTop: 40,
        }} className="svc-wyg-grid">
          {cfg.whatYouGet.items.map((it, i) => (
            <article key={i} style={{
              padding: '24px 26px',
              borderRadius: 20,
              background: i % 2 === 0 ? 'var(--ykc-beige-300)' : 'var(--ykc-beige-100)',
              border: '1.5px dotted rgba(7,20,57,0.22)',
            }}>
              <div style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 11,
                color: 'var(--ykc-blue-500)', letterSpacing: '0.08em', marginBottom: 14,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700,
                letterSpacing: '-0.01em', lineHeight: 1.2, margin: '0 0 8px',
              }}>{it.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>{it.b}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .svc-wyg-intro { grid-template-columns: 1fr !important; gap: 16px !important; }
          .svc-wyg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceProblems({ cfg }) {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'start',
        }} className="svc-prob-grid">
          <div>
            <Eyebrow>SIGNS YOU NEED THIS</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.04, letterSpacing: '-0.025em',
              margin: '10px 0 0',
            }}>{cfg.problemsHeading}</h2>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cfg.problems.map((p, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
                background: 'white', padding: '18px 22px', borderRadius: 14,
                border: '1.5px solid rgba(7,20,57,0.08)',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--ykc-blue-500)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Press Start 2P', monospace", fontSize: 10,
                  marginTop: 1,
                }}>✓</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.55, color: 'var(--ykc-navy-900)' }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .svc-prob-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

function ServicePartnersBlock({ cfg }) {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <img src="/assets/shapes/halftone-faded-circle-blue.png" alt="" style={{ position: 'absolute', left: -150, bottom: -180, width: 540, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <Eyebrow color="var(--ykc-blue-400)">PARTNERS WE USE</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(34px, 3.8vw, 52px)', lineHeight: 1.02, letterSpacing: '-0.028em',
          margin: '10px 0 12px', color: 'var(--ykc-beige-500)', maxWidth: 760,
        }}>
          {cfg.partnersHeading}
        </h2>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--ykc-navy-200)', margin: '0 0 40px', maxWidth: 640 }}>
          {cfg.partnersLead}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: cfg.partners.length === 1 ? 'minmax(0, 620px)' : `repeat(${cfg.partners.length}, 1fr)`,
          gap: 16,
        }} className="svc-partners-grid">
          {cfg.partners.map(p => (
            <div key={p.name} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1.5px dotted rgba(255,255,255,0.22)',
              borderRadius: 20, padding: '28px 26px',
              display: 'flex', flexDirection: 'column', gap: 12,
              transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--ykc-blue-400)'; e.currentTarget.style.background = 'rgba(79,125,255,0.10)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <PartnerLogo name={p.name} height={28} onDark style={{ color: 'var(--ykc-beige-500)' }} />
                <Badge intent="outline-light">{p.role}</Badge>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6,
                color: 'var(--ykc-navy-200)', margin: 0,
              }}>{p.body}</p>
              <div style={{
                marginTop: 6, paddingTop: 14, borderTop: '1px dotted rgba(255,255,255,0.2)',
                fontSize: 12.5, color: 'var(--ykc-blue-400)',
              }}>
                <span style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 10.5, marginRight: 8 }}>Best for</span>
                {p.bestFor}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .svc-partners-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 700px) {
          .svc-partners-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceHowWePartner({ cfg }) {
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }}>
      <div className="wrap">
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>HOW WE PARTNER</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(32px, 3.6vw, 48px)', lineHeight: 1.04, letterSpacing: '-0.025em',
            margin: '10px 0 20px',
          }}>{cfg.howTitle}</h2>
        </div>

        <div style={{
          background: 'var(--ykc-beige-100)',
          border: '1.5px dotted rgba(7,20,57,0.22)',
          borderRadius: 24, padding: '36px 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
        }} className="svc-how-grid">
          <div>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ykc-navy-900)', margin: 0 }}>
              {cfg.howBody}
            </p>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cfg.howSteps.map((s, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                paddingBottom: 12, borderBottom: i < cfg.howSteps.length - 1 ? '1px dotted rgba(7,20,57,0.2)' : 'none',
              }}>
                <span style={{
                  fontFamily: "'Press Start 2P', monospace", fontSize: 11,
                  color: 'var(--ykc-blue-500)', flexShrink: 0, marginTop: 4,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--ykc-navy-900)' }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .svc-how-grid { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceQuote({ cfg }) {
  if (!cfg.quote) return null;
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '64px 0' }}>
      <div className="wrap-narrow">
        <div style={{
          background: 'white', borderRadius: 24,
          padding: '40px 48px',
          border: '1.5px dotted rgba(7,20,57,0.22)',
          display: 'flex', flexDirection: 'column', gap: 18,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -22, left: 40,
            fontFamily: "'San Poster Bold JL', 'Archivo Black', Impact, sans-serif",
            fontSize: 80, color: 'var(--ykc-blue-500)', lineHeight: 1,
          }}>"</div>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.25,
            letterSpacing: '-0.015em', color: 'var(--ykc-navy-900)', margin: 0,
          }}>{cfg.quote.text}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6 }}>
            <ConnectorLine style={{ width: 60, flex: 'none' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ykc-blue-500)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              {cfg.quote.attrib}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceFaq({ cfg }) {
  if (!cfg.faqs || !cfg.faqs.length) return null;
  return (
    <section style={{ background: 'white', padding: '88px 0' }}>
      <div className="wrap-narrow">
        <Eyebrow withLine>FAQS</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(30px, 3.4vw, 46px)', lineHeight: 1.05, letterSpacing: '-0.025em',
          margin: '14px 0 34px', color: 'var(--ykc-navy-900)',
        }}>
          Straight answers to <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>fair questions</em>.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {cfg.faqs.map((f, i) => (
            <details key={i} className="svc-faq" style={{
              background: 'var(--ykc-beige-500)', borderRadius: 16,
              border: '1.5px dotted rgba(7,20,57,0.22)',
            }}>
              <summary style={{
                cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', gap: 16, padding: '18px 22px',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17,
                color: 'var(--ykc-navy-900)',
              }}>
                <span>{f.q}</span>
                <span className="svc-faq-chev" aria-hidden="true" style={{
                  fontFamily: "'Press Start 2P', monospace", fontSize: 10,
                  color: 'var(--ykc-blue-500)', flex: 'none', transition: 'transform .15s',
                }}>+</span>
              </summary>
              <p style={{
                margin: 0, padding: '0 22px 20px', fontSize: 15.5, lineHeight: 1.6,
                color: 'var(--ykc-navy-700)', maxWidth: 720,
              }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        .svc-faq summary::-webkit-details-marker { display: none; }
        .svc-faq[open] .svc-faq-chev { transform: rotate(45deg); }
      `}</style>
    </section>
  );
}

const ALL_DOMAINS = [
  { id: 'cep', label: 'Customer Engagement', tag: 'CEP', href: '/services/cep', body: 'Real-time messaging across every channel.' },
  { id: 'cdp', label: 'Customer Data Platform', tag: 'CDP', href: '/services/cdp', body: 'One trustworthy record per customer.' },
  { id: 'pa', label: 'Product Analytics', tag: 'PA', href: '/services/pa', body: "Answers GA4 can't give." },
  { id: 'bi', label: 'Business Intelligence', tag: 'BI', href: '/services/bi', body: 'Real-time dashboards for the whole business.' },
  { id: 'attribution', label: 'Mobile Attribution', tag: 'ATTR', href: '/services/attribution', body: 'Where users actually come from.' },
];

function ServiceRelated({ cfg }) {
  const others = ALL_DOMAINS.filter(s => s.id !== cfg.id);
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }}>
      <div className="wrap">
        <ConnectorLine heading="OTHER WAYS WE CAN HELP" />
        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${Math.min(others.length, 4)}, 1fr)`, gap: 16, marginTop: 36,
        }} className="svc-related-grid">
          {others.map(s => (
            <TrackedLink key={s.id} to={s.href} trackLabel={s.label} trackProps={{ location: 'related_service_card' }} style={{
              display: 'block', padding: '24px 26px', borderRadius: 18,
              background: 'var(--ykc-beige-300)', border: '1.5px solid transparent',
              textDecoration: 'none', color: 'var(--ykc-navy-900)',
              transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--ykc-blue-500)'; e.currentTarget.style.background = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'var(--ykc-beige-300)'; }}
            >
              <div style={{
                display: 'inline-block', fontFamily: "'Press Start 2P', monospace",
                fontSize: 9, padding: '5px 9px',
                background: 'var(--ykc-blue-500)', color: 'white',
                borderRadius: 5, letterSpacing: '0.08em', marginBottom: 14,
              }}>{s.tag}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{s.label}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0 }}>{s.body}</p>
              <div style={{ marginTop: 14, fontSize: 13, color: 'var(--ykc-blue-500)', fontWeight: 600 }}>Explore →</div>
            </TrackedLink>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 881px) and (max-width: 1150px) {
          .svc-related-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 880px) {
          .svc-related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServiceContact({ cfg }) {
  const serviceName = cfg.eyebrow.split(' · ')[0];
  return (
    <section id="contact-form" style={{
      background: 'var(--ykc-blue-500)', padding: '104px 0', position: 'relative', overflow: 'hidden',
      scrollMarginTop: 100,
    }}>
      <img src="/assets/shapes/concentric-circles-beige.png" alt="" style={{ position: 'absolute', top: '-30%', right: '-8%', width: 540, opacity: 0.3, pointerEvents: 'none' }} />
      <div className="wrap-narrow" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow color="white">Get connected</Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(36px, 4.5vw, 60px)',
            letterSpacing: '-0.03em', lineHeight: 1.02, margin: '14px 0 16px', color: 'white',
          }}>
            Talk to us about {serviceName}.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 17, lineHeight: 1.55, maxWidth: 560, margin: '0 auto' }}>
            One email, one honest answer about whether we're the right fit. No 40-slide deck, promise.
          </p>
        </div>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <ContactForm formLocation="service_page" serviceId={cfg.id} />
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ cfg }) {
  const serviceName = cfg.eyebrow.split(' · ')[0];
  return (
    <SiteShell>
      <Seo
        title={`${serviceName} · YOUKNOW Connect`}
        description={cfg.heroLead}
        path={`/services/${cfg.id}`}
        image={cfg.collage}
      />
      <ServiceHero cfg={cfg} />
      <ServiceWhatYouGet cfg={cfg} />
      <ServiceProblems cfg={cfg} />
      <ServicePartnersBlock cfg={cfg} />
      <ServiceHowWePartner cfg={cfg} />
      <ServiceQuote cfg={cfg} />
      <ServiceFaq cfg={cfg} />
      <ServiceRelated cfg={cfg} />
      <ServiceContact cfg={cfg} />
    </SiteShell>
  );
}
