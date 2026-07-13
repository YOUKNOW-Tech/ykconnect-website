// YOUKNOW Connect — Blog index
import { Link } from 'react-router-dom';
import { SiteShell, PageHero } from '../components/chrome.jsx';
import { Badge, Sticker } from '../components/brand.jsx';
import { CtaSection } from '../components/CtaSection.jsx';
import { Seo } from '../components/Seo.jsx';
import { PostCard, formatPostDate } from '../components/PostCard.jsx';
import { POSTS } from '../data/posts/index.js';
import { SITE_URL } from '../data/site.js';

const FEATURED_SLUG = 'introducing-youknow-connect';

function FeaturedPost({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="blog-featured" style={{
        background: 'var(--ykc-navy-900)', borderRadius: 24, overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', minHeight: 300,
        border: '1.5px dotted transparent',
        transition: 'all .2s cubic-bezier(.2,.9,.2,1)', position: 'relative',
      }}
      onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--ykc-blue-400)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseOut={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
      >
        <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          <div><Badge intent="blue">{post.category}</Badge></div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.08, letterSpacing: '-0.025em',
            margin: 0, color: 'white',
          }}>{post.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ykc-navy-200)', margin: 0, maxWidth: 560 }}>
            {post.description}
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ykc-blue-400)' }}>
            {formatPostDate(post.date)} · {post.readingTime} read · Read the post →
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }} className="blog-featured-art">
          <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -80, top: -80, width: 320, opacity: 0.35, pointerEvents: 'none' }} />
          <img src={post.hero} alt={post.heroAlt} style={{ maxHeight: '78%', maxWidth: '80%', objectFit: 'contain', position: 'relative' }} />
        </div>
      </article>
    </Link>
  );
}

export default function Blog() {
  const featured = POSTS.find((p) => p.slug === FEATURED_SLUG) ?? POSTS[0];
  const rest = POSTS.filter((p) => p.slug !== featured.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The YOUKNOW Connect Blog',
    url: `${SITE_URL}/blog`,
    description: 'Honest thinking on customer engagement, data, analytics, and BI for African businesses.',
    publisher: { '@type': 'Organization', name: 'YOUKNOW Connect', url: SITE_URL },
  };

  return (
    <SiteShell>
      <Seo
        title="Blog · YOUKNOW Connect"
        description="Honest thinking on customer engagement, data, analytics, and BI for African businesses — plus straight-talking spotlights on the platforms we partner with."
        path="/blog"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow="The Connect blog"
        title={<>Straight talk on <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>customer technology</em>.</>}
        lead="Platform spotlights, market insight, and the occasional strong opinion — written for African businesses that want more from their customer data. No buzzword soup."
        sticker={<Sticker bg="var(--ykc-blue-500)" color="white" rotate={4}>NO FLUFF</Sticker>}
        stickerPos={{ right: 90, top: 'auto', bottom: 30 }}
      />
      <section style={{ background: 'var(--ykc-white)', padding: '64px 0 96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <FeaturedPost post={featured} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 700,
              letterSpacing: '-0.02em', margin: 0, color: 'var(--ykc-navy-900)',
            }}>Partner spotlights</h2>
            <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)' }} />
          </div>
          <div className="blog-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20,
          }}>
            {rest.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .blog-featured { grid-template-columns: 1fr !important; }
            .blog-featured-art { min-height: 220px; }
          }
        `}</style>
      </section>
      <CtaSection />
    </SiteShell>
  );
}
