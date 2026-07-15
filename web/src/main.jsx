import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { initAnalytics, trackPageView } from './lib/analytics.js'

// Every route renders <Seo/> (React 19 hoists its <title>/<meta> into <head>).
// Drop the static fallbacks from index.html so crawlers that run JS don't see
// duplicate/competing tags; non-JS scrapers still get the static ones.
document.head.querySelector('title')?.remove()
document.head.querySelector('meta[name="description"]')?.remove()

initAnalytics();

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

function ScrollToTop() {
  const { pathname, search } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const properties = { referrer: document.referrer || null };
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      const params = new URLSearchParams(search);
      for (const key of UTM_KEYS) {
        if (params.has(key)) properties[key] = params.get(key);
      }
      properties.query_string = search ? search.slice(1) : null;
    }

    // Defer so document.title reflects the new route's <Seo/>-rendered title,
    // which commits in the same pass as this effect. setTimeout (not rAF) so
    // this still fires promptly for page loads that start in a background tab.
    setTimeout(() => trackPageView(pathname, properties), 0);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
