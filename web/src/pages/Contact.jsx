// YOUKNOW Connect — Contact page
import { SiteShell } from '../components/chrome.jsx';
import { Eyebrow, BinaryStrip } from '../components/brand.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { Seo } from '../components/Seo.jsx';

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
        One email.<br />
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
        <div style={{ borderTop: '1px dotted rgba(7,20,57,0.2)' }} />
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
        <div style={{ borderTop: '1px dotted rgba(7,20,57,0.2)' }} />
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

      <img src="/assets/collages/telephone-girl.png" alt="Vintage cut-out, girl on the telephone" className="hide-mobile" style={{
        width: 220, alignSelf: 'flex-start', marginTop: 4, transform: 'rotate(-2deg)',
      }} />
    </div>
  );
}

function ContactLayout() {
  return (
    <section style={{ background: 'var(--ykc-beige-500)', padding: '64px 0 96px', position: 'relative', overflow: 'hidden', minHeight: '88vh' }}>
      <img src="/assets/shapes/contour-lines-blue.png" alt="" style={{ position: 'absolute', left: -140, top: -110, width: 440, opacity: 0.28, pointerEvents: 'none' }} />
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

export default function Contact() {
  return (
    <SiteShell>
      <Seo
        title="Contact · YOUKNOW Connect"
        description="Tell us what's going on with your customer stack. One email, one honest answer within two business days — even if the answer is that you don't need us yet."
        path="/contact"
      />
      <ContactLayout />
    </SiteShell>
  );
}
