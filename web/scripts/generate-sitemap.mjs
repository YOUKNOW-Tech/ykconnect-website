// Emits dist/sitemap.xml after `vite build`. Post files are pure-data ESM,
// so they import cleanly in Node.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { POSTS } from '../src/data/posts/index.js';
import { SITE_URL } from '../src/data/site.js';

const STATIC_ROUTES = [
  '/',
  '/about',
  '/partners',
  '/contact',
  '/services/cep',
  '/services/cdp',
  '/services/pa',
  '/services/bi',
  '/services/attribution',
  '/blog',
];

const today = new Date().toISOString().slice(0, 10);

const urls = [
  ...STATIC_ROUTES.map((path) => ({ loc: SITE_URL + path, lastmod: today })),
  ...POSTS.map((p) => ({ loc: `${SITE_URL}/blog/${p.slug}`, lastmod: p.date })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

const out = fileURLToPath(new URL('../dist/sitemap.xml', import.meta.url));
writeFileSync(out, xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
