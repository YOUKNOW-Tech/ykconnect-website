import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Every route renders <Seo/> (React 19 hoists its <title>/<meta> into <head>).
// Drop the static fallbacks from index.html so crawlers that run JS don't see
// duplicate/competing tags; non-JS scrapers still get the static ones.
document.head.querySelector('title')?.remove()
document.head.querySelector('meta[name="description"]')?.remove()

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
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
