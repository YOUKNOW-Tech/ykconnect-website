// Shared closing CTA band — used on About, Partners, and every Service page.
import { Btn, BinaryStrip } from './brand.jsx';

export function CtaSection() {
  return (
    <section style={{
      background: 'var(--ykc-blue-500)', padding: '104px 0', position: 'relative', overflow: 'hidden',
    }}>
      <img src="/assets/shapes/concentric-circles-beige.png" alt="" style={{ position: 'absolute', top: '-30%', right: '-8%', width: 540, opacity: 0.3, pointerEvents: 'none' }} />
      <img src="/assets/shapes/halftone-circle-beige.png" alt="" style={{ position: 'absolute', bottom: '-40%', left: '-5%', width: 460, opacity: 0.55, pointerEvents: 'none' }} />
      <img src="/assets/collages/heart-fingers.png" alt="Vintage cut-out, hands making a heart" className="cta-collage" style={{
        position: 'absolute', right: '3%', bottom: -24, width: 'clamp(180px, 17vw, 280px)',
        transform: 'rotate(-4deg)', pointerEvents: 'none',
      }} />
      <div className="wrap-narrow" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <BinaryStrip color="white" size={12} opacity={0.65} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 5.5vw, 80px)',
          letterSpacing: '-0.03em', lineHeight: 1, margin: '24px 0 18px', color: 'white',
        }}>
          Sharp. Let's connect.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 19, lineHeight: 1.55, maxWidth: 600, margin: '0 auto 32px' }}>
          One email, one honest answer about whether we're the right fit. No 40-slide deck, promise.
        </p>
        <div style={{ display: 'inline-flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Btn intent="on-dark" size="lg" href="/contact" trackProps={{ location: 'cta_section' }}>Start a conversation</Btn>
          <Btn intent="ghost-light" size="lg" href="mailto:connect@youknow.co.za" trackProps={{ location: 'cta_section' }}>connect@youknow.co.za →</Btn>
        </div>
        <div style={{ marginTop: 36, fontFamily: 'var(--font-handwritten)', color: 'white', fontSize: 24, transform: 'rotate(-2deg)' }}>
          YOUKNOW &lt;3
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .cta-collage { display: none; }
        }
      `}</style>
    </section>
  );
}
