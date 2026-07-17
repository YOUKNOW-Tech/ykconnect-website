// Server-side proxy: receives ContactForm submissions and forwards them to
// HubSpot's Forms Submission API. Keeps HUBSPOT_PORTAL_ID/HUBSPOT_FORM_GUID
// out of the client bundle and lets us re-validate/honeypot before HubSpot
// ever sees a request.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KNOWN_INTENTS = ['optimize', 'evaluate', 'implementation', 'analytics', 'engagement'];

function validate(body) {
  const errors = {};
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!firstName) errors.firstName = 'What should we call you?';
  else if (firstName.length > 100) errors.firstName = 'Too long.';

  if (!lastName) errors.lastName = 'And your last name?';
  else if (lastName.length > 100) errors.lastName = 'Too long.';

  if (!email) errors.email = "We'll need somewhere to reply.";
  else if (!EMAIL_RE.test(email)) errors.email = "That doesn't look like an email.";
  else if (email.length > 254) errors.email = 'Too long.';

  if (!message) errors.message = 'Tell us what\'s going on, even one sentence.';
  else if (message.length < 12) errors.message = 'Just a bit more context, if you can.';
  else if (message.length > 5000) errors.message = 'Too long.';

  return errors;
}

function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim();
  return undefined;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }

  try {
    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_FORM_GUID;
    if (!portalId || !formGuid) {
      console.error('[hubspot-contact] missing HUBSPOT_PORTAL_ID/HUBSPOT_FORM_GUID env vars');
      res.status(500).json({ ok: false, error: 'config' });
      return;
    }

    const body = req.body && typeof req.body === 'object' ? req.body : {};

    // Honeypot: humans never fill this hidden field. Swallow silently.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      res.status(200).json({ ok: true });
      return;
    }

    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      res.status(422).json({ ok: false, error: 'validation', fields: errors });
      return;
    }

    const firstname = body.firstName.trim();
    const lastname = body.lastName.trim();
    const email = body.email.trim();
    const message = body.message.trim();
    const company = typeof body.company === 'string' ? body.company.trim() : '';
    const intents = Array.isArray(body.intents) ? body.intents.filter((v) => KNOWN_INTENTS.includes(v)) : [];

    const fields = [
      { name: 'email', value: email },
      { name: 'firstname', value: firstname },
      { name: 'lastname', value: lastname },
      ...(company ? [{ name: 'company', value: company }] : []),
      { name: 'message', value: message },
      ...(intents.length ? [{ name: 'intents', value: intents.join(';') }] : []),
    ];

    const context = {
      ...(typeof body.pageUri === 'string' && body.pageUri ? { pageUri: body.pageUri } : {}),
      ...(typeof body.pageName === 'string' && body.pageName ? { pageName: body.pageName } : {}),
      ...(typeof body.hutk === 'string' && body.hutk ? { hutk: body.hutk } : {}),
      ...(getClientIp(req) ? { ipAddress: getClientIp(req) } : {}),
    };

    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    let hsRes;
    try {
      hsRes = await fetch(hsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, context }),
        signal: controller.signal,
      });
    } catch (err) {
      if (err.name === 'AbortError') {
        res.status(504).json({ ok: false, error: 'timeout' });
        return;
      }
      console.error('[hubspot-contact] network error contacting HubSpot', err);
      res.status(502).json({ ok: false, error: 'upstream' });
      return;
    } finally {
      clearTimeout(timeout);
    }

    if (!hsRes.ok) {
      const errBody = await hsRes.text().catch(() => '');
      console.error('[hubspot-contact] HubSpot rejected submission', hsRes.status, errBody);
      res.status(502).json({ ok: false, error: 'upstream' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[hubspot-contact] unexpected error', err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
}
