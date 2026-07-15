// Thin Amplitude wrapper — the only file that imports the SDK directly.
// Every call is safe to make even if analytics is disabled or misconfigured;
// tracking must never be able to break the site.
import * as amplitude from '@amplitude/analytics-browser';

let enabled = false;

export function initAnalytics() {
  const apiKey = import.meta.env.VITE_AMPLITUDE_API_KEY;
  if (!apiKey) {
    console.info('[analytics] disabled — no VITE_AMPLITUDE_API_KEY set');
    return;
  }
  try {
    amplitude.init(apiKey, {
      defaultTracking: {
        pageViews: false,
        sessions: true,
        formInteractions: false,
        fileDownloads: false,
      },
    });
    enabled = true;
  } catch (err) {
    enabled = false;
    console.warn('[analytics] failed to initialize', err);
  }
}

function viewportBucket() {
  const w = window.innerWidth;
  if (w < 768) return 'mobile';
  if (w < 1024) return 'tablet';
  return 'desktop';
}

function commonProperties() {
  return {
    page_path: window.location.pathname,
    page_title: document.title,
    viewport: viewportBucket(),
  };
}

export function trackEvent(name, properties = {}) {
  if (!enabled) return;
  try {
    amplitude.track(name, { ...commonProperties(), ...properties });
  } catch (err) {
    console.warn('[analytics] failed to track event', name, err);
  }
}

export function trackPageView(pathname, properties = {}) {
  trackEvent('Page Viewed', { page_path: pathname, ...properties });
}
