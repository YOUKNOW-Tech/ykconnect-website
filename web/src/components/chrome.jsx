// YOUKNOW Connect — Site chrome
// Header (active-route aware, mobile drawer), Footer, Toast, SiteShell, PageHero

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Btn, BinaryStrip, Eyebrow } from './brand.jsx';
import { TrackedLink } from './TrackedLink.jsx';
import { ToastContext, useToast } from '../context/ToastContext.js';
import { PARTNERS_DATA } from '../data/partners.js';

export { useToast };

const NAV = [
  { href: '/',                       label: 'Home',     id: 'home' },
  { href: '/about',                  label: 'About',    id: 'about' },
  { href: '/services/cep',           label: 'CEP',      id: 'cep',  group: 'services' },
  { href: '/services/cdp',           label: 'CDP',      id: 'cdp',  group: 'services' },
  { href: '/services/pa',            label: 'Analytics',id: 'pa',   group: 'services' },
  { href: '/services/bi',            label: 'BI',       id: 'bi',   group: 'services' },
  { href: '/services/attribution',   label: 'Attribution', id: 'attribution', group: 'services' },
  { href: '/partners',                label: 'Technology', id: 'partners' },
  { href: '/blog',                    label: 'Blog',     id: 'blog' },
];

function currentIdFromPath(pathname) {
  if (pathname === '/') return 'home';
  if (pathname === '/about') return 'about';
  if (pathname === '/partners' || pathname.startsWith('/partners/')) return 'partners';
  if (pathname === '/contact') return 'contact';
  if (pathname === '/blog' || pathname.startsWith('/blog/')) return 'blog';
  const m = pathname.match(/^\/services\/(cep|cdp|pa|bi|attribution)$/);
  return m ? m[1] : null;
}

function servicesFullLabel(id) {
  return {
    cep: 'Customer Engagement',
    cdp: 'Customer Data Platform',
    pa:  'Product Analytics',
    bi:  'Business Intelligence',
    attribution: 'Mobile Attribution',
  }[id];
}

function Header() {
  const current = currentIdFromPath(useLocation().pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const [technologyOpen, setTechnologyOpen] = useState(false);
  const technologyRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDoc = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [servicesOpen]);

  useEffect(() => {
    if (!technologyOpen) return;
    const onDoc = (e) => {
      if (technologyRef.current && !technologyRef.current.contains(e.target)) {
        setTechnologyOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [technologyOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const services = NAV.filter(n => n.group === 'services');
  const partnersFlat = PARTNERS_DATA.flatMap((c) => c.items.map((p) => ({ ...p, cat: c.cat })));
  const topLinks = [
    NAV.find(n => n.id === 'home'),
    NAV.find(n => n.id === 'about'),
    { href: '#', label: 'Services', id: 'services', isMenu: true },
    { href: '#', label: 'Technology', id: 'technology', isMenu: true },
    NAV.find(n => n.id === 'blog'),
  ];
  const isServicesActive = ['cep', 'cdp', 'pa', 'bi', 'attribution'].includes(current);
  const isTechnologyActive = current === 'partners';

  return (
    <>
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(243, 234, 219, 0.94)' : 'rgba(243, 234, 219, 0.6)',
      backdropFilter: scrolled ? 'saturate(160%) blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px dotted rgba(7,20,57,0.22)' : '1px dotted transparent',
      transition: 'all .25s cubic-bezier(.2,.9,.2,1)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
          <Link to="/" style={{
            display: 'flex', alignItems: 'center',
            textDecoration: 'none', minWidth: 0,
          }}>
            <img src="/assets/logos/full-logo-blue.png" alt="YOUKNOW Connect"
              style={{ height: 50, width: 'auto', display: 'block' }} />
          </Link>
          <TrackedLink to="https://youknow.co.za" target="_blank" rel="noreferrer" eventName="Nav Link Clicked" trackProps={{ location: 'header' }} className="hide-mobile" style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--ykc-navy-500)', textDecoration: 'none', whiteSpace: 'nowrap',
            borderLeft: '1px dotted rgba(7,20,57,0.32)', paddingLeft: 12,
          }}>
            Part of YOUKNOW ↗
          </TrackedLink>
        </div>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'baseline', gap: 28 }}>
          {topLinks.map((l) => {
            if (l.id === 'services') {
              const active = isServicesActive || servicesOpen;
              return (
                <div key="services" ref={servicesRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => { setServicesOpen(o => !o); setTechnologyOpen(false); }}
                    style={{
                      background: 'transparent', border: 0, cursor: 'pointer', padding: '0 0 4px',
                      lineHeight: 1.25,
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                      color: active ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      borderBottom: active ? '2px solid var(--ykc-blue-500)' : '2px solid transparent',
                    }}>
                    Services
                    <span style={{ fontSize: 10, transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}>▾</span>
                  </button>
                  {servicesOpen && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 14px)', left: -16,
                      background: 'white', borderRadius: 18,
                      boxShadow: '0 24px 48px -16px rgba(7,20,57,0.24)',
                      border: '1px dotted rgba(7,20,57,0.22)',
                      padding: 12, minWidth: 280,
                      animation: 'pageFadeIn .18s cubic-bezier(.2,.9,.2,1)',
                    }}>
                      {services.map((s) => (
                        <TrackedLink key={s.id} to={s.href} trackLabel={servicesFullLabel(s.id)} eventName="Nav Link Clicked" trackProps={{ location: 'header', nav_group: 'services' }} onClick={() => setServicesOpen(false)} style={{
                          display: 'flex', alignItems: 'center', gap: 12,
                          padding: '10px 12px', borderRadius: 10,
                          textDecoration: 'none',
                          color: current === s.id ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                          background: current === s.id ? 'var(--ykc-blue-100)' : 'transparent',
                          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                        }}
                        onMouseOver={(e) => { if (current !== s.id) e.currentTarget.style.background = 'var(--ykc-beige-300)'; }}
                        onMouseOut={(e) => { if (current !== s.id) e.currentTarget.style.background = 'transparent'; }}
                        >
                          <span style={{
                            width: 28, height: 28, borderRadius: 8,
                            background: 'var(--ykc-blue-500)', color: 'white',
                            fontFamily: "'Press Start 2P', monospace", fontSize: 9,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          }}>{s.label.slice(0, 2).toUpperCase()}</span>
                          {servicesFullLabel(s.id)}
                        </TrackedLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (l.id === 'technology') {
              const active = isTechnologyActive || technologyOpen;
              return (
                <div key="technology" ref={technologyRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => { setTechnologyOpen(o => !o); setServicesOpen(false); }}
                    style={{
                      background: 'transparent', border: 0, cursor: 'pointer', padding: '0 0 4px',
                      lineHeight: 1.25,
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                      color: active ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      borderBottom: active ? '2px solid var(--ykc-blue-500)' : '2px solid transparent',
                    }}>
                    Technology
                    <span style={{ fontSize: 10, transform: technologyOpen ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}>▾</span>
                  </button>
                  {technologyOpen && (
                    <div style={{
                      position: 'absolute', top: 'calc(100% + 14px)', left: -16,
                      background: 'white', borderRadius: 18,
                      boxShadow: '0 24px 48px -16px rgba(7,20,57,0.24)',
                      border: '1px dotted rgba(7,20,57,0.22)',
                      padding: 12, minWidth: 300,
                      animation: 'pageFadeIn .18s cubic-bezier(.2,.9,.2,1)',
                    }}>
                      {partnersFlat.map((p) => (
                        <TrackedLink key={p.slug} to={`/partners/${p.slug}`} trackLabel={p.name} eventName="Nav Link Clicked" trackProps={{ location: 'header', nav_group: 'technology' }} onClick={() => setTechnologyOpen(false)} style={{
                          display: 'flex', alignItems: 'center', gap: 12,
                          padding: '10px 12px', borderRadius: 10,
                          textDecoration: 'none',
                          color: 'var(--ykc-navy-900)',
                          background: 'transparent',
                          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-300)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                        >
                          <span style={{
                            width: 28, height: 28, borderRadius: 8,
                            background: 'var(--ykc-blue-500)', color: 'white',
                            fontFamily: "'Press Start 2P', monospace", fontSize: 9,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          }}>{p.cat.slice(0, 2).toUpperCase()}</span>
                          {p.name}
                        </TrackedLink>
                      ))}
                      <div style={{ borderTop: '1px dotted rgba(7,20,57,0.16)', margin: '8px 6px' }} />
                      <TrackedLink to="/partners" eventName="Nav Link Clicked" trackProps={{ location: 'header', nav_group: 'technology' }} onClick={() => setTechnologyOpen(false)} style={{
                        display: 'block', padding: '10px 12px', borderRadius: 10,
                        textDecoration: 'none', color: 'var(--ykc-blue-500)',
                        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-300)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        All technology partners →
                      </TrackedLink>
                    </div>
                  )}
                </div>
              );
            }
            const isActive = current === l.id;
            return (
              <TrackedLink key={l.id} to={l.href} eventName="Nav Link Clicked" trackProps={{ location: 'header' }} style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                lineHeight: 1.25,
                color: isActive ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
                textDecoration: 'none', paddingBottom: 4,
                borderBottom: isActive ? '2px solid var(--ykc-blue-500)' : '2px solid transparent',
              }}>{l.label}</TrackedLink>
            );
          })}
          <Btn intent="primary" size="sm" href="/contact" trackProps={{ location: 'header' }}>Let's talk</Btn>
        </nav>

        {/* Mobile burger */}
        <button className="only-mobile"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          style={{
            background: 'transparent', border: 0, padding: 8, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center',
          }}>
          <span style={{ width: 22, height: 2, background: 'var(--ykc-navy-900)' }} />
          <span style={{ width: 22, height: 2, background: 'var(--ykc-navy-900)' }} />
          <span style={{ width: 22, height: 2, background: 'var(--ykc-navy-900)' }} />
        </button>
      </div>

    </header>
    {/* Mobile drawer */}
    {mobileOpen && (
      <div className="mobile-nav">
        <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{
          position: 'absolute', top: 18, right: 22,
          background: 'transparent', border: 0, fontSize: 28, cursor: 'pointer',
          color: 'var(--ykc-navy-900)', fontFamily: 'var(--font-display)',
        }}>×</button>
        <div style={{ marginBottom: 8 }}><BinaryStrip /></div>
        {[
          NAV.find(n => n.id === 'home'),
          NAV.find(n => n.id === 'about'),
        ].map(l => (
          <TrackedLink key={l.id} to={l.href} eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile' }} onClick={() => setMobileOpen(false)} style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 28, color: current === l.id ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
            textDecoration: 'none', letterSpacing: '-0.01em',
          }}>{l.label}</TrackedLink>
        ))}
        <div style={{ marginTop: 6, marginBottom: 2, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ykc-blue-500)', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Services</div>
        {services.map(s => (
          <TrackedLink key={s.id} to={s.href} trackLabel={servicesFullLabel(s.id)} eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile', nav_group: 'services' }} onClick={() => setMobileOpen(false)} style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 22, color: current === s.id ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-700)',
            textDecoration: 'none', paddingLeft: 14,
            borderLeft: '1.5px dotted rgba(7,20,57,0.2)',
          }}>{servicesFullLabel(s.id)}</TrackedLink>
        ))}
        <TrackedLink to="/partners" eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile' }} onClick={() => setMobileOpen(false)} style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 28, color: current === 'partners' ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
          textDecoration: 'none', marginTop: 6,
        }}>Technology</TrackedLink>
        {partnersFlat.map(p => (
          <TrackedLink key={p.slug} to={`/partners/${p.slug}`} trackLabel={p.name} eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile', nav_group: 'technology' }} onClick={() => setMobileOpen(false)} style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 18, color: 'var(--ykc-navy-700)',
            textDecoration: 'none', paddingLeft: 14,
            borderLeft: '1.5px dotted rgba(7,20,57,0.2)',
          }}>{p.name}</TrackedLink>
        ))}
        <TrackedLink to="/blog" eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile' }} onClick={() => setMobileOpen(false)} style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 28, color: current === 'blog' ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-900)',
          textDecoration: 'none', marginTop: 6,
        }}>Blog</TrackedLink>
        <div style={{ marginTop: 18 }}>
          <Btn intent="primary" size="lg" href="/contact" trackProps={{ location: 'header_mobile' }}>Let's talk →</Btn>
        </div>
        <TrackedLink to="https://youknow.co.za" target="_blank" rel="noreferrer" eventName="Nav Link Clicked" trackProps={{ location: 'header_mobile' }} onClick={() => setMobileOpen(false)} style={{
          marginTop: 22, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--ykc-navy-500)', textDecoration: 'none',
        }}>
          Part of YOUKNOW ↗
        </TrackedLink>
      </div>
    )}
    </>
  );
}

function Footer() {
  const cols = [
    { h: 'Services', l: [
      { t: 'Customer Engagement', href: '/services/cep' },
      { t: 'Customer Data Platform', href: '/services/cdp' },
      { t: 'Product Analytics',   href: '/services/pa' },
      { t: 'Business Intelligence', href: '/services/bi' },
      { t: 'Mobile Attribution',  href: '/services/attribution' },
    ] },
    { h: 'Company', l: [
      { t: 'About',    href: '/about' },
      { t: 'Technology', href: '/partners' },
      { t: 'Blog',     href: '/blog' },
      { t: 'Contact',  href: '/contact' },
    ] },
    { h: 'Connect', l: [
      { t: 'connect@youknow.co.za', href: 'mailto:connect@youknow.co.za' },
      { t: 'youknow.co.za',       href: 'https://youknow.co.za', external: true },
      { t: 'LinkedIn',            href: '#' },
    ] },
  ];
  return (
    <footer style={{
      background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)',
      padding: '72px 32px 28px', position: 'relative', overflow: 'hidden',
    }}>
      <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -120, top: -200, width: 520, opacity: 0.18, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 36 }} className="footer-lead-row">
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: 18, textDecoration: 'none' }}>
              <img src="/assets/logos/full-logo-white.png" alt="YOUKNOW Connect"
                style={{ height: 44, width: 'auto', display: 'block' }} />
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ykc-navy-200)', maxWidth: 340, margin: 0 }}>
              Your platform-agnostic customer technology partner, proudly African.
              We help you get more from your customer data, and we tell you the truth while we do it.
            </p>
            <div style={{ marginTop: 22 }}>
              <BinaryStrip color="var(--ykc-blue-400)" size={11} opacity={0.55} />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ykc-blue-400)', marginBottom: 16 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.l.map((item) => (
                  <li key={item.t}>
                    <TrackedLink to={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}
                      eventName="Nav Link Clicked" trackProps={{ location: 'footer', nav_group: c.h.toLowerCase() }}
                      style={{ color: 'var(--ykc-beige-500)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14, transition: 'opacity .15s' }}
                      onMouseOver={(e) => e.currentTarget.style.opacity = 0.7}
                      onMouseOut={(e) => e.currentTarget.style.opacity = 1}>
                      {item.t}
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px dotted rgba(255,255,255,0.2)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 12, color: 'var(--ykc-navy-300)' }}>
          <span>© 2026 YOUKNOW Connect · A division of the YOUKNOW family · Built in Centurion, Joburg &amp; Cape Town</span>
          <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 17, color: 'var(--ykc-blue-400)' }}>made with &lt;3 in ZA</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .footer-lead-row { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-lead-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* ============================================================
   <SiteShell />, wraps every page: Header + main + Footer + toast
   ============================================================ */
export function SiteShell({ children }) {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);
  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), 2800);
  };
  useEffect(() => () => clearTimeout(timerRef.current), []);
  return (
    <ToastContext.Provider value={showToast}>
      <Header />
      <main>{children}</main>
      <Footer />
      {toast && (
        <div className="toast">
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: 'var(--ykc-blue-400)' }}>&lt;3</span>
          {toast}
        </div>
      )}
    </ToastContext.Provider>
  );
}

/* ============================================================
   <PageHero />, shared interior-page hero
   ============================================================ */
export function PageHero({ eyebrow, title, lead, accent = 'var(--ykc-blue-500)', sticker, stickerPos, art, artAlt = '', children }) {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden', padding: '80px 0 64px' }}>
      <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -80, top: -80, width: 360, opacity: 0.26, pointerEvents: 'none' }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 820 }}>
          <Eyebrow color={accent} withLine>{eyebrow}</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            lineHeight: 0.98, letterSpacing: '-0.028em',
            color: 'var(--ykc-navy-900)', margin: 0,
          }}>
            {title}
          </h1>
          {lead && (
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55,
              color: 'var(--ykc-navy-700)', maxWidth: 640, margin: 0,
            }}>{lead}</p>
          )}
          {children}
        </div>
        {art && (
          <img src={art} alt={artAlt} className="hide-below-1150" style={{
            position: 'absolute', right: 0, bottom: -64, width: 300, maxHeight: '100%',
            objectFit: 'contain', objectPosition: 'bottom', pointerEvents: 'none',
          }} />
        )}
        {sticker && (
          <div className={stickerPos ? 'hide-below-1150' : undefined} style={{ position: 'absolute', right: 32, top: 12, zIndex: 2, ...(stickerPos || {}) }}>{sticker}</div>
        )}
        <style>{`
          @media (max-width: 1150px) {
            .hide-below-1150 { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
