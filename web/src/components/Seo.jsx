// Per-route head tags. React 19 hoists <title>/<meta>/<link> rendered
// anywhere in the tree into <head> and dedupes them — no helmet needed.
import { SITE_URL, SITE_NAME } from '../data/site.js';

export function Seo({ title, description, path, image, type = 'website', jsonLd }) {
  const url = SITE_URL + path;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={SITE_URL + image} />}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  );
}
