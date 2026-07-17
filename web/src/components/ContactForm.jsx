// YOUKNOW Connect — shared contact form, used on the Contact page and
// embedded at the bottom of every service page.
import { useRef, useState } from 'react';
import { useToast } from './chrome.jsx';
import { Eyebrow, Btn } from './brand.jsx';
import { trackEvent } from '../lib/analytics.js';

function messageLengthBucket(length) {
  if (length < 80) return 'short';
  if (length < 300) return 'medium';
  return 'long';
}

const INTENTS = [
  { v: 'optimize', l: 'Optimize current tools' },
  { v: 'evaluate', l: 'Evaluate new platform options' },
  { v: 'implementation', l: 'Implementation support' },
  { v: 'analytics', l: 'Analytics & attribution help' },
  { v: 'engagement', l: 'Customer engagement support' },
];

function readHubspotutkCookie() {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match ? match[1] : null;
}

export function ContactForm({ formLocation = 'contact_page', serviceId = null } = {}) {
  const showToast = useToast();
  const [values, setValues] = useState({ firstName: '', lastName: '', company: '', email: '', intents: [], message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const hasStartedRef = useRef(false);

  const validate = (v) => {
    const e = {};
    if (!v.firstName.trim()) e.firstName = 'What should we call you?';
    if (!v.lastName.trim()) e.lastName = 'And your last name?';
    if (!v.email.trim()) e.email = "We'll need somewhere to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That doesn't look like an email.";
    if (!v.message.trim()) e.message = 'Tell us what\'s going on, even one sentence.';
    else if (v.message.trim().length < 12) e.message = 'Just a bit more context, if you can.';
    return e;
  };

  const update = (field, val) => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent('Contact Form Started', { form_location: formLocation, service_id: serviceId });
    }
    const next = { ...values, [field]: val };
    setValues(next);
    if (touched[field]) {
      const e = validate(next);
      setErrors(e);
    }
  };
  const toggleIntent = (v) => {
    const has = values.intents.includes(v);
    update('intents', has ? values.intents.filter((x) => x !== v) : [...values.intents, v]);
  };
  const blur = (field) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    const errs = validate(values);
    setErrors(errs);
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    if (Object.keys(errs).length !== 0) {
      trackEvent('Contact Form Validation Failed', {
        form_location: formLocation,
        service_id: serviceId,
        failed_fields: Object.keys(errs),
      });
      return;
    }

    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/hubspot-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          formLocation,
          serviceId,
          pageUri: window.location.href,
          pageName: document.title,
          hutk: readHubspotutkCookie(),
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setSubmitted(true);
        showToast("Message sent. We'll come back to you shortly.");
        trackEvent('Contact Form Submitted', {
          form_location: formLocation,
          service_id: serviceId,
          has_company: !!values.company.trim(),
          intents_selected: values.intents,
          intents_count: values.intents.length,
          message_length_bucket: messageLengthBucket(values.message.trim().length),
          hubspot_status: 'success',
        });
      } else {
        setSubmitError("That didn't send — mind trying again? If it keeps happening, email us directly at connect@youknow.co.za.");
        trackEvent('Contact Form Submission Failed', {
          form_location: formLocation,
          service_id: serviceId,
          reason: data.error || 'unknown',
        });
      }
    } catch {
      setSubmitError("That didn't send — mind trying again? If it keeps happening, email us directly at connect@youknow.co.za.");
      trackEvent('Contact Form Submission Failed', {
        form_location: formLocation,
        service_id: serviceId,
        reason: 'network',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        background: 'white', borderRadius: 24, padding: '40px 44px',
        border: '1.5px dotted rgba(7,20,57,0.22)',
        position: 'relative', overflow: 'hidden',
      }}>
        <img src="/assets/shapes/halftone-faded-circle-blue.png" alt="" style={{ position: 'absolute', right: -50, top: -50, width: 250, opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'var(--ykc-blue-500)', color: 'white',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Press Start 2P', monospace", fontSize: 24,
          }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
            Got it, <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>{values.firstName || 'friend'}</em>.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0 }}>
            Your message landed safely. We'll come back to you within two business days, usually with a frank yes-or-no on whether we're the right fit, and the next step if we are.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
            <Btn intent="ghost" onClick={() => { setSubmitted(false); setValues({ firstName: '', lastName: '', company: '', email: '', intents: [], message: '', website: '' }); setTouched({}); setErrors({}); }}>← Send another</Btn>
            <Btn intent="primary" href="/">Back to home</Btn>
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
      <img src="/assets/shapes/halftone-faded-circle-blue.png" alt="" style={{ position: 'absolute', right: -70, bottom: -70, width: 250, opacity: 0.4, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Eyebrow>SEND US A NOTE</Eyebrow>
          <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)' }} />
        </div>

        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={values.website} onChange={(e) => update('website', e.target.value)}
          style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
          <div className={`field ${errors.firstName && touched.firstName ? 'invalid' : ''}`}>
            <label htmlFor="cf-first-name">First name *</label>
            <input id="cf-first-name" type="text" placeholder="Thandi" value={values.firstName}
              onChange={(e) => update('firstName', e.target.value)} onBlur={() => blur('firstName')} />
            {errors.firstName && touched.firstName && <span className="field-error">{errors.firstName}</span>}
          </div>
          <div className={`field ${errors.lastName && touched.lastName ? 'invalid' : ''}`}>
            <label htmlFor="cf-last-name">Last name *</label>
            <input id="cf-last-name" type="text" placeholder="Nkosi" value={values.lastName}
              onChange={(e) => update('lastName', e.target.value)} onBlur={() => blur('lastName')} />
            {errors.lastName && touched.lastName && <span className="field-error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" type="text" placeholder="Acme Co." value={values.company}
            onChange={(e) => update('company', e.target.value)} />
        </div>

        <div className={`field ${errors.email && touched.email ? 'invalid' : ''}`}>
          <label htmlFor="cf-email">Work email *</label>
          <input id="cf-email" type="email" placeholder="thandi@acme.co.za" value={values.email}
            onChange={(e) => update('email', e.target.value)} onBlur={() => blur('email')} />
          {errors.email && touched.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="field">
          <label>What's on your mind? (optional — pick as many as apply)</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
            {INTENTS.map(c => {
              const active = values.intents.includes(c.v);
              return (
                <button type="button" key={c.v}
                  aria-pressed={active}
                  onClick={() => toggleIntent(c.v)}
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

        {submitError && (
          <div role="alert" style={{
            background: '#FEF6F6', border: '1.5px solid #D14545', borderRadius: 12,
            padding: '12px 16px', color: '#D14545', fontFamily: 'var(--font-body)', fontSize: 14,
          }}>
            {submitError}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, gap: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 12, color: 'var(--ykc-navy-500)', lineHeight: 1.5 }}>
            We'll only use this to reply. POPIA-aware, no surprise newsletter.
          </span>
          <Btn intent="primary" size="lg" type="submit"
            style={{ opacity: submitting ? 0.6 : 1, pointerEvents: submitting ? 'none' : 'auto' }}>
            {submitting ? 'Sending…' : 'Send it →'}
          </Btn>
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
