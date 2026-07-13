# Deploy behaviour & SEO/AEO notes

Written 2026-07-13 in response to a review question: does redeploying on every push to `main` hurt crawl history, recency, or perceived site trust? Short answer: **no, that specific worry doesn't apply here** — but the investigation surfaced two real, concrete issues worth fixing. Findings below are based on the live Vercel project (`yk-connect-website`, team `james-youknowcozs-projects`), not guesswork.

## How deploys actually work here

- The Vercel project is connected to `YOUKNOW-Tech/ykconnect-website` on GitHub via Vercel's native Git integration (no `vercel.json` in the repo — it's all dashboard-configured, with the project's "Root Directory" set to `web/`).
- Every push to `main` triggers a brand-new production deployment. Confirmed directly from deployment history: each of the recent commits (`Remove Braze as a partner`, the four review-feedback commits, etc.) produced its own `target: production` deployment.
- **Deploys are atomic, not incremental.** Vercel builds the entire site fresh from source and then switches production traffic to the new build in one cutover. There's no partial/incremental publish, and no concept of a "deployment history" that a crawler can see or that resets anything — a crawler only ever sees the current live HTML at each URL, the same as it would for a site that deploys once a year.

## Why the "hurts crawl trust" worry doesn't hold up

Search engines index by **URL**, not by build or deployment. A new deployment just serves updated (or identical) content at the same URLs. There's no mechanism by which Google, Bing, or any other crawler can detect "this site redeploys often" and penalize it for that. Deploy frequency itself is not a ranking or trust signal. If anything, frequent legitimate content updates are usually read as a freshness signal, not a risk.

**No mitigation needed for this specific concern.**

## What the investigation did find

### 1. The canonical domain isn't actually live yet

`SITE_URL` (`web/src/data/site.js`), `robots.txt`, the sitemap generator, and every page's canonical/OG tags all point at `https://connect.youknow.co.za`. But checking the live Vercel project directly: **that domain is not attached**. The project's only live domains right now are the auto-generated `*.vercel.app` ones (`yk-connect-website.vercel.app` and its variants).

Net effect: the site is currently telling search engines "the canonical version of this page lives at connect.youknow.co.za," but that URL doesn't resolve to this deployment at all. This is the same underlying gap as issue 10 (subdomain setup) — the code side is done, but the domain still needs to be attached in the Vercel dashboard and pointed at via DNS. Until that happens, canonical URLs, the sitemap, and robots.txt are all pointing at a domain that isn't serving the site, which is a real (if temporary, pre-launch) SEO problem, not a redeploy-frequency one.

**Action:** attach `connect.youknow.co.za` in the Vercel project's Domains settings and point DNS at it (CNAME to the value Vercel provides). Someone with access to the `youknow.co.za` DNS zone and the Vercel project needs to do this; it isn't something fixable from the repo.

### 2. `sitemap.xml`'s `lastmod` is inaccurate for every static page, on every build

`web/scripts/generate-sitemap.mjs` sets `lastmod` to *today's date* for every static route (`/`, `/about`, `/partners`, every service page, and now every partner detail page) on **every single build**, regardless of whether that page's content actually changed:

```js
const today = new Date().toISOString().slice(0, 10);
const urls = [
  ...STATIC_ROUTES.map((path) => ({ loc: SITE_URL + path, lastmod: today })),
  ...
];
```

So a typo fix to one blog post currently bumps the reported `lastmod` for the entire static site. This isn't the "redeploy hurts trust" problem the review flagged, but it's a related, real inaccuracy: `lastmod` is supposed to reflect genuine content changes so crawlers can prioritize recrawling. Google has said it treats unreliable `lastmod` values with skepticism rather than penalizing sites for them, so this isn't urgent, but it's cheap to fix and worth doing for hygiene.

**Suggested fix (not yet made — flagging for a decision, not implementing speculatively):** either drop `lastmod` for static routes entirely (Google will just crawl on its own schedule) or derive it from `git log -1 --format=%cd -- <file>` for each route's source file at build time so it reflects real change dates. Blog post and partner-page `lastmod` values are already accurate (they use each post's own `date` field / a partner's static slug), so this only affects the fully static routes.

### 3. Pre-hydration `<title>`/`<meta>` are generic and identical on every route

`web/index.html` has a real static `<title>` and `<meta name="description">` in the raw HTML (good — better than an empty shell), but they're the homepage's copy, hardcoded. Every route (`/about`, `/blog/...`, `/partners/onesignal`, etc.) shows this same generic title/description until client-side JS runs and the page's `<Seo>` component replaces them via React 19's head-hoisting.

This is fine for Google, whose indexer executes JavaScript before reading `<head>` content. It's a real risk for crawlers and AI/AEO agents that fetch raw HTML without executing JavaScript (many still don't, or do so unreliably) — they may see the homepage's title/description attached to every URL, which undermines the AEO goal explicitly called out for the new partner pages (issue 8) and the blog.

**Not fixed here** since it would mean moving to server-side rendering or static prerendering, which is a real architectural change (see the companion Webflow/Framer memo, `docs/webflow-framer-assessment.md`, for how that trades off against the current stack). Flagging as a known limitation of the current client-only Vite/React SPA approach, not something to patch superficially.

## Summary

| Concern | Verdict |
|---|---|
| Redeploying on every push hurts crawl trust/recency | Not a real risk. No action needed. |
| Canonical domain not attached in Vercel | Real gap, pre-launch. Needs a DNS + Vercel dashboard action from someone with access. |
| Sitemap `lastmod` inaccurate for static pages | Minor, low-urgency, cheap fix available. |
| No per-route `<title>`/meta before JS executes | Real limitation of the SPA architecture for non-JS crawlers (matters most for AEO). Would require SSR/prerendering to fully fix. |
