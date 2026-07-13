// YOUKNOW Connect — Blog post template (/blog/:slug)
import { useParams } from 'react-router-dom';
import { SiteShell, PageHero } from '../components/chrome.jsx';
import { Btn, Callout } from '../components/brand.jsx';
import { CtaSection } from '../components/CtaSection.jsx';
import { Seo } from '../components/Seo.jsx';
import { PostCard, formatPostDate } from '../components/PostCard.jsx';
import { POSTS, getPostBySlug } from '../data/posts/index.js';
import { SITE_URL } from '../data/site.js';

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(24px, 2.8vw, 32px)', lineHeight: 1.15, letterSpacing: '-0.02em',
          color: 'var(--ykc-navy-900)', margin: '44px 0 14px',
        }}>{block.text}</h2>
      );
    case 'p':
      return (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.7,
          color: 'var(--ykc-navy-700)', margin: '0 0 18px',
        }}>{block.text}</p>
      );
    case 'list':
      return (
        <ul style={{ margin: '0 0 22px', paddingLeft: 6, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {block.items.map((item) => (
            <li key={item} style={{
              fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.6,
              color: 'var(--ykc-navy-700)', display: 'flex', gap: 12, alignItems: 'flex-start',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ykc-blue-500)', flexShrink: 0, marginTop: 8 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote style={{
          margin: '32px 0', padding: '4px 0 4px 24px',
          borderLeft: '4px solid var(--ykc-blue-500)',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(19px, 2.2vw, 24px)',
            lineHeight: 1.35, letterSpacing: '-0.015em', color: 'var(--ykc-navy-900)', margin: 0,
          }}>“{block.text}”</p>
          {block.attrib && (
            <footer style={{
              marginTop: 10, fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ykc-blue-500)',
            }}>— {block.attrib}</footer>
          )}
        </blockquote>
      );
    case 'callout':
      return (
        <div style={{ margin: '28px 0' }}>
          <Callout title={block.title} intent="blue" icon="i">{block.text}</Callout>
        </div>
      );
    case 'cta':
      return (
        <div style={{
          margin: '36px 0 8px', padding: '28px 30px',
          background: 'var(--ykc-navy-900)', borderRadius: 20,
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 18,
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, lineHeight: 1.4,
            color: 'var(--ykc-beige-500)', margin: 0, flex: '1 1 280px',
          }}>{block.text}</p>
          <Btn intent="on-dark" size="md" href={block.href}>{block.label} →</Btn>
        </div>
      );
    default:
      return null;
  }
}

function NotFound() {
  return (
    <SiteShell>
      <Seo
        title="Post not found · YOUKNOW Connect"
        description="That blog post doesn't exist. Head back to the YOUKNOW Connect blog for the rest of our writing."
        path="/blog"
      />
      <section style={{ background: 'var(--ykc-beige-500)', padding: '120px 0 140px', textAlign: 'center' }}>
        <div className="wrap-narrow">
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14, color: 'var(--ykc-blue-500)', marginBottom: 20 }}>404</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px, 4.5vw, 56px)',
            letterSpacing: '-0.025em', lineHeight: 1.05, margin: '0 0 16px', color: 'var(--ykc-navy-900)',
          }}>That post doesn’t exist. <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>Yet.</em></h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: '0 0 28px' }}>
            The link may be old, or the post may have moved. The rest of the blog is very much alive, though.
          </p>
          <Btn intent="primary" size="lg" href="/blog">Back to the blog</Btn>
        </div>
      </section>
    </SiteShell>
  );
}

function relatedPosts(post) {
  const siblings = POSTS.filter((p) => p.slug !== post.slug);
  const sameService = post.serviceHref
    ? siblings.filter((p) => p.serviceHref === post.serviceHref)
    : [];
  const others = siblings.filter((p) => !sameService.includes(p));
  return [...sameService, ...others].slice(0, 3);
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFound />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'YOUKNOW Connect',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/logos/full-logo-blue.png` },
    },
    image: SITE_URL + post.hero,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <SiteShell>
      <Seo
        title={`${post.title} · YOUKNOW Connect`}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.hero}
        type="article"
        jsonLd={jsonLd}
      />
      <PageHero
        eyebrow={post.category}
        title={<>
          {post.heroTitle.before}
          <em style={{ fontStyle: 'normal', color: 'var(--ykc-blue-500)' }}>{post.heroTitle.accent}</em>
          {post.heroTitle.after}
        </>}
        lead={post.description}
      >
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--ykc-navy-700)', marginTop: 4,
        }}>
          {formatPostDate(post.date)} · {post.readingTime} read · by {post.author}
        </div>
      </PageHero>

      <section style={{ background: 'var(--ykc-white)', padding: '0 0 96px' }}>
        <div className="wrap-narrow">
          <div style={{
            background: 'var(--ykc-navy-900)', borderRadius: 24, margin: '-32px 0 48px',
            height: 'clamp(220px, 32vw, 340px)', position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -90, top: -90, width: 340, opacity: 0.32, pointerEvents: 'none' }} />
            <img src="/assets/shapes/dots-blue.png" alt="" style={{ position: 'absolute', left: -40, bottom: -60, width: 260, opacity: 0.25, pointerEvents: 'none' }} />
            <img src={post.hero} alt={post.heroAlt} style={{ maxHeight: '80%', maxWidth: '72%', objectFit: 'contain', position: 'relative' }} />
          </div>

          <article>
            {post.body.map((block, i) => <Block key={i} block={block} />)}
          </article>

          <div style={{
            marginTop: 48, paddingTop: 28, borderTop: '1.5px dotted rgba(7,20,57,0.28)',
            display: 'flex', flexWrap: 'wrap', gap: 12,
          }}>
            {post.serviceHref && (
              <Btn intent="primary" size="md" href={post.serviceHref}>
                Explore {post.serviceName || 'the service'} →
              </Btn>
            )}
            <Btn intent="secondary" size="md" href="/partners">Our technology partners</Btn>
            <Btn intent="ghost" size="md" href="/blog">← All posts</Btn>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ykc-beige-500)', padding: '72px 0 88px' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 700,
              letterSpacing: '-0.02em', margin: 0, color: 'var(--ykc-navy-900)',
            }}>Keep reading</h2>
            <span style={{ flex: 1, borderTop: '1.5px dotted rgba(7,20,57,0.32)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {relatedPosts(post).map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CtaSection />
    </SiteShell>
  );
}
