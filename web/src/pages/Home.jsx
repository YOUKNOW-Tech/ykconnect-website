// YOUKNOW Connect — Home, "Night Edition" (v3), the direction the user picked.
// BroadcastHero (cursor spotlight + idle drift), ServicesRail (scroll-snap filmstrip),
// NoYesList, MiniSteps, CtaNavy.

import { useState, useRef, useEffect, Fragment } from 'react';
import { SiteShell, useToast } from '../components/chrome.jsx';
import { Eyebrow, Sticker, Btn, BinaryStrip, PartnerLogo, ConnectorLine } from '../components/brand.jsx';
import { TrackedLink } from '../components/TrackedLink.jsx';
import { Seo } from '../components/Seo.jsx';

// Her painted eyes, re-rendered inside elliptical windows from small inpainted
// crops (shades/background removed) so the gaze can slide toward the light
// without dragging the pixel shades along. Coordinates are px in the source
// 1200x1080 collage; the crops carry a 12px margin around each window.
const FIGURE_IMG = { w: 1200, h: 1080 };
const FIGURE_EYES = [
  { src: '/assets/collages/eye-left.png',  cx: 543, cy: 366, rx: 11, ry: 9,  crop: { x: 520, y: 345, w: 46, h: 42 } },
  { src: '/assets/collages/eye-right.png', cx: 609, cy: 402, rx: 15, ry: 10, crop: { x: 582, y: 380, w: 54, h: 44 } },
];
// Where she sits in the hero (% of section) and how far the gaze may travel (source px).
const GAZE = { x: 71, y: 46, reach: 7 };

function BroadcastHero() {
  const showToast = useToast();
  const [m, setM] = useState({ x: 38, y: 42 });
  const lastMove = useRef(0);
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // Gaze vector in source px, saturating as the cursor moves away from her.
  const gaze = reducedMotion
    ? { dx: 0, dy: 0 }
    : {
        dx: Math.max(-1, Math.min(1, (m.x - GAZE.x) / 34)) * GAZE.reach,
        dy: Math.max(-1, Math.min(1, (m.y - GAZE.y) / 30)) * GAZE.reach * 0.75,
      };

  // Idle drift: when the mouse hasn't moved for a bit, the spotlight
  // wanders on its own so the page stays alive for passive viewers.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const tick = () => {
      if (performance.now() - lastMove.current > 2400) {
        const s = performance.now() / 1000;
        setM({
          x: 50 + 34 * Math.sin(s * 0.30),
          y: 44 + 24 * Math.sin(s * 0.19 + 1.4),
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section data-screen-label="Broadcast hero"
      onMouseMove={(e) => {
        lastMove.current = performance.now();
        const r = e.currentTarget.getBoundingClientRect();
        setM({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      style={{ background: 'var(--ykc-navy-900)', color: 'var(--ykc-beige-500)', position: 'relative', overflow: 'hidden' }}>

      {/* cursor spotlight glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(640px circle at ${m.x}% ${m.y}%, rgba(0,87,255,0.38), transparent 70%)`,
      }} />
      {/* faint grid revealed by spotlight */}
      <svg viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.5,
        WebkitMaskImage: `radial-gradient(520px circle at ${m.x}% ${m.y}%, black, transparent 70%)`,
        maskImage: `radial-gradient(520px circle at ${m.x}% ${m.y}%, black, transparent 70%)`,
      }}>
        <defs>
          <pattern id="nt-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 44 0 L 44 44" fill="none" stroke="rgba(79,125,255,0.35)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1400" height="900" fill="url(#nt-grid)" />
      </svg>

      {/* news ticker */}
      <div style={{ background: 'var(--ykc-blue-500)', overflow: 'hidden', padding: '10px 0', position: 'relative', zIndex: 3 }}>
        <div className="nt-ticker" style={{ display: 'flex', width: 'max-content' }}>
          {[0, 1].map(k => (
            <div key={k} aria-hidden={k === 1} style={{ display: 'flex', alignItems: 'center', gap: 26, paddingRight: 26 }}>
              {[
                'LIVE: dashboards being opened voluntarily',
                'UPDATE: WhatsApp confirmed as where your customers are',
                'JUST IN: honest answer given, no deck attached',
                'CONFIRMED: churn dropped, nobody popped champagne',
                'DEVELOPING: marketing and IT agreeing on something',
                'BREAKING: campaign sent without three approval meetings',
                'UPDATE: customer data lives in one place now',
                'LIVE: segment built in minutes, not sprints',
                'CONFIRMED: WhatsApp opt-in rate up, ad budget down',
                'UPDATE: attribution numbers finally match across teams',
              ].map(w => (
                <Fragment key={w}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'white', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>{w}</span>
                  <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--ykc-navy-900)' }}>◉</span>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap-wide" style={{ position: 'relative', zIndex: 2, padding: '76px 32px 88px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'center' }} className="nt-grid2">
          <div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 30 }}>
              <Eyebrow color="var(--ykc-blue-400)">Customer technology · for Africa</Eyebrow>
              <Sticker bg="var(--ykc-beige-500)" color="var(--ykc-navy-900)" rotate={-3} size="sm" shadow="var(--ykc-blue-500)"
                onClick={() => showToast('We monitor everything 👀')}>CTN · JHB · CPT</Sticker>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
              fontSize: 'clamp(54px, 7.8vw, 124px)', lineHeight: 0.93, letterSpacing: '-0.04em',
              margin: 0, color: 'var(--ykc-beige-500)',
            }}>
              <span style={{ display: 'block' }}>Turn up</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-blue-400)' }}>your customer</span>
              <span style={{ display: 'block', color: 'var(--ykc-blue-400)' }}>data<span style={{ color: 'var(--ykc-beige-500)' }}>.</span>
                <span style={{
                  fontFamily: 'var(--font-handwritten)', fontWeight: 400, textTransform: 'none',
                  fontSize: '0.26em', letterSpacing: 0, color: 'var(--ykc-beige-500)',
                  display: 'inline-block', transform: 'rotate(-3deg)', marginLeft: '0.5em', verticalAlign: 'middle',
                }}>loud &amp; honest</span>
              </span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ykc-navy-200)', maxWidth: 520, margin: '30px 0 0' }}>
              Platform-agnostic customer technology for Sub-Saharan Africa. We set up
              engagement, customer data, analytics, BI and attribution, and we'll happily
              tell you when you don't need something.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', margin: '30px 0 0' }}>
              <Btn intent="on-dark" size="lg" href="/contact" trackProps={{ location: 'home_hero' }}>Let's connect</Btn>
              <Btn intent="ghost-light" size="lg" href="#chapters" trackProps={{ location: 'home_hero' }}>Browse the chapters ↓</Btn>
            </div>
            <div style={{ marginTop: 26, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <BinaryStrip color="var(--ykc-blue-400)" size={11} opacity={0.8} />
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 17, color: 'var(--ykc-navy-300)', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                ← this means "sawubona, neighbour"
              </span>
            </div>
          </div>

          <div className="nt-figure" style={{ position: 'relative' }}>
            <img src="/assets/shapes/halftone-faded-circle-blue.png" alt="" style={{
              position: 'absolute', inset: '0 -6% auto', width: '110%', opacity: 0.55, pointerEvents: 'none',
              transform: `translate(${(m.x - 50) * 0.16}px, ${(m.y - 50) * 0.16}px)`,
            }} />
            <div style={{
              position: 'relative', width: '100%', maxWidth: 560, margin: '0 auto',
              transform: `translate(${(m.x - 50) * -0.1}px, ${(m.y - 50) * -0.1}px)`,
            }}>
              <img src="/assets/collages/megaphone-girl-dark.png" alt="Vintage cut-out, girl with pearl earring holding a megaphone, wearing headphones, her eyes following the light"
                draggable="false"
                style={{ display: 'block', width: '100%', userSelect: 'none' }} />
              {FIGURE_EYES.map((e) => (
                <div key={e.src} aria-hidden="true" style={{
                  position: 'absolute',
                  left: `${((e.cx - e.rx) / FIGURE_IMG.w) * 100}%`,
                  top: `${((e.cy - e.ry) / FIGURE_IMG.h) * 100}%`,
                  width: `${((e.rx * 2) / FIGURE_IMG.w) * 100}%`,
                  height: `${((e.ry * 2) / FIGURE_IMG.h) * 100}%`,
                  borderRadius: '50%', overflow: 'hidden', pointerEvents: 'none',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    transform: `translate(${(gaze.dx / (e.rx * 2)) * 100}%, ${(gaze.dy / (e.ry * 2)) * 100}%)`,
                    transition: 'transform 110ms ease-out',
                  }}>
                    <img src={e.src} alt="" draggable="false" style={{
                      position: 'absolute',
                      left: `${((e.crop.x - (e.cx - e.rx)) / (e.rx * 2)) * 100}%`,
                      top: `${((e.crop.y - (e.cy - e.ry)) / (e.ry * 2)) * 100}%`,
                      width: `${(e.crop.w / (e.rx * 2)) * 100}%`,
                      maxWidth: 'none', height: 'auto', userSelect: 'none',
                    }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hide-mobile" style={{
              position: 'absolute', bottom: '2%', right: '0%',
              fontFamily: 'var(--font-handwritten)', fontSize: 18, color: 'var(--ykc-blue-400)',
              transform: 'rotate(4deg)', pointerEvents: 'none',
            }}>
              move your mouse,<br />she follows the light ✳
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nt-ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: no-preference) {
          .nt-ticker { animation: nt-ticker-scroll 38s linear infinite; }
        }
        @media (max-width: 1000px) {
          .nt-grid2 { grid-template-columns: 1fr !important; }
          .nt-figure { max-width: 420px; margin: 12px auto 0; }
        }
      `}</style>
    </section>
  );
}


const RAIL_SERVICES = [
  { n: '01', tag: 'CEP',  title: 'Customer Engagement',    desc: 'Real-time, personalised messaging across email, push, SMS, in-app, and WhatsApp.', partners: ['InsiderOne', 'OneSignal'], href: '/services/cep', img: '/assets/collages/customer-engagement-strategy.png', bg: 'var(--ykc-beige-300)' },
  { n: '02', tag: 'CDP',  title: 'Customer Data Platform', desc: 'Every version of your customer, stitched into one profile your whole business can trust.', partners: ['Amperity'], href: '/services/cdp', img: '/assets/collages/team.png', bg: 'var(--ykc-blue-100)' },
  { n: '03', tag: 'PA',   title: 'Product Analytics',      desc: "The answers GA4 can't give you: funnels, retention and adoption, without waiting on an analyst.", partners: ['Amplitude'], href: '/services/pa', img: '/assets/collages/reading-analytics-insights.png', bg: 'var(--ykc-beige-300)' },
  { n: '04', tag: 'BI',   title: 'Business Intelligence',  desc: 'Dashboards the whole business actually uses, not just the data team.', partners: ['DOMO'], href: '/services/bi', img: '/assets/collages/art-of-reporting.png', bg: 'var(--ykc-blue-100)' },
  { n: '05', tag: 'ATTR', title: 'Mobile Attribution',     desc: 'The truth about where your app users come from, plus deep links that actually land.', partners: ['AppsFlyer', 'Branch'], href: '/services/attribution', img: '/assets/collages/magnifying-glass.png', bg: 'var(--ykc-beige-300)' },
];

function ServicesRail() {
  const railRef = useRef(null);
  const scrollBy = (dir) => {
    const el = railRef.current;
    if (el) el.scrollBy({ left: dir * (el.querySelector('a')?.offsetWidth + 20 || 440), behavior: 'smooth' });
  };
  return (
    <section id="chapters" style={{ background: 'var(--ykc-white)', padding: '104px 0 96px', overflow: 'hidden' }} data-screen-label="Services rail">
      <div className="wrap-wide">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <Eyebrow>What we do · five chapters</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
              margin: '14px 0 0',
            }}>
              Pick the one that<br />
              <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>hurts the most.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="hide-mobile">
            {[-1, 1].map(d => (
              <button key={d} onClick={() => scrollBy(d)} aria-label={d < 0 ? 'Scroll left' : 'Scroll right'} style={{
                width: 52, height: 52, borderRadius: '50%', cursor: 'pointer',
                border: '1.5px solid var(--ykc-navy-900)', background: 'transparent',
                fontSize: 18, color: 'var(--ykc-navy-900)',
                transition: 'all .18s var(--ease-snap)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-navy-900)'; e.currentTarget.style.color = 'var(--ykc-beige-500)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-navy-900)'; }}
              >{d < 0 ? '←' : '→'}</button>
            ))}
          </div>
        </div>
      </div>

      <div ref={railRef} className="rail" style={{
        display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory',
        padding: '44px 32px 24px', margin: '0 auto', maxWidth: 1320,
        scrollbarWidth: 'none',
      }}>
        {RAIL_SERVICES.map((s) => (
          <div key={s.tag} style={{
            flex: '0 0 auto', width: 'min(420px, 82vw)', scrollSnapAlign: 'start',
            background: s.bg, borderRadius: 22, padding: '30px 28px 28px',
            border: '2px solid var(--ykc-navy-900)',
            color: 'var(--ykc-navy-900)',
            display: 'flex', flexDirection: 'column', gap: 0, position: 'relative',
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                display: 'inline-block', fontFamily: 'var(--font-pixel)', fontSize: 10,
                padding: '6px 10px', background: 'var(--ykc-blue-500)', color: 'white',
                borderRadius: 6, letterSpacing: '0.08em',
              }}>{s.tag}</span>
              <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 13, color: 'var(--ykc-blue-500)' }}>{s.n}</span>
            </div>
            <img src={s.img} alt="" style={{ width: '78%', maxHeight: 240, objectFit: 'contain', margin: '18px auto 6px' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '10px 0 10px' }}>{s.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ykc-navy-700)', margin: 0 }}>{s.desc}</p>
            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {s.partners.map(p => (
                <span key={p} style={{
                  fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700,
                  padding: '5px 11px', borderRadius: 999, border: '1px dotted var(--ykc-navy-700)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>{p}</span>
              ))}
            </div>
            <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <TrackedLink to={`/partners#${s.tag.toLowerCase()}`} trackLabel={`${s.title} — product`} trackProps={{ location: 'service_rail' }} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                textDecoration: 'none', color: 'var(--ykc-navy-900)',
                padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--ykc-navy-900)',
                background: 'transparent', transition: 'all .15s',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-navy-900)'; e.currentTarget.style.color = 'var(--ykc-beige-500)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ykc-navy-900)'; }}
              >Looking for a product? <span>↗</span></TrackedLink>
              <TrackedLink to={s.href} trackLabel={`${s.title} — services`} trackProps={{ location: 'service_rail' }} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                textDecoration: 'none', color: 'white',
                padding: '12px 16px', borderRadius: 12, border: '1.5px solid var(--ykc-navy-900)',
                background: 'var(--ykc-navy-900)', transition: 'all .15s',
              }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = 0.85; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = 1; }}
              >Need help with current stack? <span>↗</span></TrackedLink>
            </div>
          </div>
        ))}
      </div>
      <div className="wrap-wide" style={{ marginTop: 8 }}>
        <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 19, color: 'var(--ykc-navy-500)', transform: 'rotate(-1deg)', display: 'inline-block' }}>
          ← drag or scroll sideways, there are five
        </span>
      </div>
      <style>{`
        .rail::-webkit-scrollbar { display: none; }
        @media (min-width: 900px) {
          .rail {
            -webkit-mask-image: linear-gradient(to right, black 0%, black calc(100% - 64px), transparent 100%);
            mask-image: linear-gradient(to right, black 0%, black calc(100% - 64px), transparent 100%);
          }
        }
      `}</style>
    </section>
  );
}


function NoYesList() {
  const nos = ['Biased recommendations', '40-slide decks', 'Jargon', 'Shelfware', 'Vanishing after go-live'];
  const yeses = ['Honest answers', 'Platform-agnostic picks', 'WhatsApp-first thinking', 'POPIA-native setups', 'Sticking around'];
  const item = (t, yes) => (
    <li key={t} style={{
      fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
      fontSize: 'clamp(26px, 3vw, 42px)', letterSpacing: '-0.03em', lineHeight: 1.15,
      listStyle: 'none', display: 'flex', alignItems: 'baseline', gap: 16,
      color: yes ? 'var(--ykc-navy-900)' : 'var(--ykc-navy-300)',
      textDecoration: yes ? 'none' : 'line-through',
      textDecorationColor: 'var(--ykc-blue-500)', textDecorationThickness: 4,
      padding: '10px 0', borderBottom: '1.5px dotted rgba(7,20,57,0.2)',
    }}>
      <span style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: yes ? 'var(--ykc-blue-500)' : 'var(--ykc-navy-300)', textDecoration: 'none' }}>
        {yes ? '✓' : '✗'}
      </span>
      {t}
    </li>
  );
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '110px 0', position: 'relative', overflow: 'hidden' }} data-screen-label="No / Yes">
      <img src="/assets/collages/no-fluff-sheep.png" alt="Vintage cut-out, sheared sheep, no fluff" className="hide-mobile" style={{
        position: 'absolute', right: '4%', top: 64, width: 170, transform: 'rotate(4deg)',
      }} />
      <div className="wrap">
        <Eyebrow>Why us · the house rules</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(38px, 4.6vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.035em',
          margin: '14px 0 48px', maxWidth: 760,
        }}>
          We sell fewer things<br />
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>on purpose.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="ny-grid">
          <div>
            <div style={{ marginBottom: 14 }}>
              <Sticker bg="var(--ykc-navy-900)" color="var(--ykc-beige-500)" rotate={-2} size="sm">NOT ON THE MENU</Sticker>
            </div>
            <ul style={{ margin: 0, padding: 0 }}>{nos.map((t) => item(t, false))}</ul>
          </div>
          <div>
            <div style={{ marginBottom: 14 }}>
              <Sticker bg="var(--ykc-blue-500)" color="white" rotate={2} size="sm">ALWAYS INCLUDED</Sticker>
            </div>
            <ul style={{ margin: 0, padding: 0 }}>{yeses.map((t) => item(t, true))}</ul>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ykc-navy-700)', maxWidth: 560, margin: '44px 0 0' }}>
          Platform-agnostic, always: we recommend what actually fits, not what's
          easiest to sell. Sometimes that means pointing you at a tool we don't
          even offer. Terrible salesmanship. Great partnerships.
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) { .ny-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }
      `}</style>
    </section>
  );
}


function MiniSteps() {
  const steps = [
    { n: 1, t: 'You ping us', b: 'Email, WhatsApp voice note, a "help!" on a serviette.' },
    { n: 2, t: 'We listen', b: 'Properly. We learn your stack and the gaps inside it.' },
    { n: 3, t: 'We pick the tool', b: 'The one that fits your team, budget, and mission.' },
    { n: 4, t: 'We wire it up', b: 'Quickly. Then we train your team and stick around.' },
  ];
  return (
    <section style={{ background: 'var(--ykc-white)', padding: '96px 0' }} data-screen-label="How we work">
      <div className="wrap">
        <ConnectorLine heading="HOW IT WORKS" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginTop: 52 }} className="ms-grid">
          <div className="ms-line" style={{ position: 'absolute', top: 28, left: 28, right: 28, borderTop: '1.5px dotted var(--ykc-navy-500)', zIndex: 0 }} />
          {steps.map((s) => (
            <div key={s.n} style={{ position: 'relative', zIndex: 1, paddingRight: 24 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--ykc-blue-500)', color: 'white',
                fontFamily: 'var(--font-pixel)', fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '6px solid var(--ykc-white)', marginBottom: 16,
              }}>0{s.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: 'var(--ykc-navy-700)', margin: 0, lineHeight: 1.55 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .ms-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .ms-line { display: none; }
        }
      `}</style>
    </section>
  );
}

function CtaNavy() {
  return (
    <section style={{ background: 'var(--ykc-navy-900)', padding: '110px 0 120px', position: 'relative', overflow: 'hidden' }} data-screen-label="CTA">
      <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', top: '-34%', right: '-8%', width: 520, opacity: 0.2, pointerEvents: 'none' }} />
      <img src="/assets/collages/shaka-hand.png" alt="Vintage cut-out, shaka hand sign" className="ctn-collage" style={{
        position: 'absolute', right: '5%', bottom: -16, width: 'clamp(170px, 15vw, 260px)',
        transform: 'rotate(6deg)', pointerEvents: 'none',
      }} />
      {/* partner logo strip */}
      <div className="wrap" style={{ position: 'relative', marginBottom: 64 }}>
        <div style={{
          padding: '20px 26px', borderRadius: 18, border: '1px dotted rgba(255,255,255,0.24)',
          display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.28em', color: 'var(--ykc-blue-400)', textTransform: 'uppercase' }}>◉ Shipped with</span>
            <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center' }}>
              {['Amperity', 'Amplitude', 'AppsFlyer', 'Branch', 'DOMO', 'InsiderOne', 'OneSignal'].map(p => (
                <PartnerLogo key={p} name={p} height={20} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.85 }} />
              ))}
            </div>
          </div>
          <div style={{
            display: 'flex', gap: 26, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: 16, borderTop: '1px dotted rgba(255,255,255,0.16)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.24em', color: 'var(--ykc-navy-300)', textTransform: 'uppercase' }}>+ we also support</span>
            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', alignItems: 'center' }}>
              {['Braze', 'Customer.io', 'Iterable', 'Mixpanel', 'Moengage'].map(p => (
                <PartnerLogo key={p} name={p} height={14} onDark style={{ color: 'var(--ykc-beige-500)', opacity: 0.5 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ position: 'relative' }}>
        <BinaryStrip color="var(--ykc-blue-400)" size={12} opacity={0.7} />
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase',
          fontSize: 'clamp(52px, 8vw, 128px)', letterSpacing: '-0.04em', lineHeight: 0.92,
          margin: '26px 0 0', color: 'var(--ykc-beige-500)',
        }}>
          <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--ykc-blue-400)' }}>Sharp.</span>
          <span style={{ display: 'block' }}>Let's connect.</span>
        </h2>
        <p style={{ color: 'var(--ykc-navy-200)', fontSize: 18, lineHeight: 1.55, maxWidth: 560, margin: '26px 0 32px' }}>
          One email, one honest answer about whether we're the right fit.
          No 40-slide deck, promise.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Btn intent="on-dark" size="lg" href="/contact" trackProps={{ location: 'home_cta' }}>Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za" trackProps={{ location: 'home_cta' }}>connect@youknow.co.za →</Btn>
        </div>
        <div style={{ marginTop: 40, fontFamily: 'var(--font-handwritten)', color: 'var(--ykc-blue-400)', fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) { .ctn-collage { display: none; } }
      `}</style>
    </section>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <Seo
        title="YOUKNOW Connect — Turn up your customer data."
        description="Platform-agnostic customer technology partner for African businesses. Engagement, customer data, analytics, BI, attribution, wired up honestly."
        path="/"
      />
      <BroadcastHero />
      <ServicesRail />
      <NoYesList />
      <MiniSteps />
      <CtaNavy />
    </SiteShell>
  );
}
