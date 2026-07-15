// Blog post card — used on the /blog index grid and in "keep reading" on posts.
import { TrackedLink } from './TrackedLink.jsx';
import { Badge, PartnerLogo } from './brand.jsx';

export function formatPostDate(iso) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

export function PostCard({ post }) {
  return (
    <TrackedLink to={`/blog/${post.slug}`} trackLabel={post.title} trackProps={{ location: 'post_card' }} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <article style={{
        background: 'var(--ykc-beige-300)',
        border: '1.5px dotted rgba(7,20,57,0.22)',
        borderRadius: 20, overflow: 'hidden',
        display: 'flex', flexDirection: 'column', height: '100%',
        transition: 'all .2s cubic-bezier(.2,.9,.2,1)',
      }}
      onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-100)'; e.currentTarget.style.borderColor = 'var(--ykc-blue-500)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
      onMouseOut={(e) => { e.currentTarget.style.background = 'var(--ykc-beige-300)'; e.currentTarget.style.borderColor = 'rgba(7,20,57,0.22)'; e.currentTarget.style.transform = 'none'; }}
      >
        <div style={{
          background: 'var(--ykc-navy-900)', height: 180, position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        }}>
          <img src="/assets/shapes/concentric-circles-blue.png" alt="" style={{ position: 'absolute', right: -60, top: -60, width: 220, opacity: 0.3, pointerEvents: 'none' }} />
          <img src={post.hero} alt={post.heroAlt} style={{ maxHeight: '82%', maxWidth: '70%', objectFit: 'contain', position: 'relative' }} />
        </div>
        <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
            <Badge intent="blue-tint">{post.category}</Badge>
            {post.partner && <PartnerLogo name={post.partner} height={18} />}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19,
            lineHeight: 1.25, letterSpacing: '-0.015em', margin: 0, color: 'var(--ykc-navy-900)',
          }}>{post.title}</h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ykc-navy-700)', margin: 0, flex: 1 }}>
            {post.description}
          </p>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--ykc-blue-500)',
            paddingTop: 12, borderTop: '1px dotted rgba(7,20,57,0.2)',
          }}>
            {formatPostDate(post.date)} · {post.readingTime} read
          </div>
        </div>
      </article>
    </TrackedLink>
  );
}
