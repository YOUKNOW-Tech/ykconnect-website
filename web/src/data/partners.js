// YOUKNOW Connect — partner catalogue data.
// Shared by the Partners listing page and the per-partner detail pages
// (/partners/:slug). Pure data (no JSX/asset imports) so it can be
// imported by scripts/generate-sitemap.mjs in Node too.
export const PARTNERS_DATA = [
  {
    cat: 'CEP', catLong: 'Customer Engagement', href: '/services/cep',
    items: [
      {
        slug: 'onesignal',
        name: 'OneSignal', role: 'Mid-market CEP · Push-first',
        what: 'The fast, developer-friendly step up from Firebase. Best-in-class push performance alongside email, SMS, and in-app from a single platform. Days to implement, predictable pricing, marketer-operable.',
        overview: "OneSignal is the platform most growing apps outgrow Firebase into. It handles push, email, SMS, and in-app messaging from one dashboard, without the enterprise price tag or the months-long implementation some CEPs demand. For teams that need to move fast without sacrificing reliability, it's usually the right first serious engagement platform.",
        weOffer: "We handle the OneSignal implementation end to end: migrating your event model off Firebase, wiring up the SDKs, and setting up the segmentation and automation your marketing team will actually use day to day. Once you're live, we train your team to run campaigns without needing us in the room, and we stay reachable for the edge cases that come up later.",
        bestFor: 'Scaling apps and lean teams that need speed to value and predictable cost.',
        wedoes: ['Implementation', 'Firebase migration', 'Event model', 'Self-serve enablement'],
        heroImg: '/assets/collages/megaphone-girl-dark.png',
        heroAlt: 'Vintage cut-out collage, girl with a megaphone',
      },
      {
        slug: 'insiderone',
        name: 'InsiderOne', role: 'CEP + Personalisation + CDP',
        what: "Cross-channel engagement plus deep on-site and in-app personalisation, with a built-in CDP. Particularly strong in retail, e-commerce, and travel, where the website experience matters as much as the message.",
        overview: "InsiderOne earns its keep where the on-site experience and the outbound message need to move as one system, not two. It bundles cross-channel engagement with on-site personalisation and a built-in CDP, which matters most for retail, e-commerce, and travel businesses where a mistimed banner or a generic homepage costs real revenue.",
        weOffer: "We configure the data model and CDP setup that InsiderOne's personalisation actually depends on, build out the rules that decide what each visitor sees, and get marketing and product teams trained to run and iterate on campaigns without engineering in the loop.",
        bestFor: "Companies where website experience and customer comms must work as one: retail, e-commerce, travel.",
        wedoes: ['Data model', 'CDP config', 'Personalisation rules', 'Marketing+product training'],
        heroImg: '/assets/collages/customer-engagement-strategy.png',
        heroAlt: 'Vintage cut-out collage, customer engagement strategy',
      },
    ],
    secondary: ['Braze', 'Customer.io', 'Iterable', 'Moengage'],
  },
  {
    cat: 'CDP', catLong: 'Customer Data Platform', href: '/services/cdp',
    items: [
      {
        slug: 'amperity',
        name: 'Amperity', role: 'Enterprise CDP',
        what: "Enterprise customer data platform with AI-driven identity resolution. Amperity stitches messy first-party data from every system into one accurate, always-fresh customer profile. The golden record the rest of your stack wishes it had.",
        overview: "Amperity exists for the moment a business realises its ‘single customer view’ is actually six different views that disagree with each other. Its AI-driven identity resolution reconciles first-party data from every system you run into one accurate, always-current profile, which is the foundation everything else in your stack, from engagement to BI, ends up depending on.",
        weOffer: "We map every source system into Amperity, tune the identity resolution rules so the matches are actually right, and build the consent model your legal team will sign off on. From there we activate the clean profile out to your engagement and BI platforms, so the golden record doesn't just sit in Amperity looking pretty.",
        bestFor: "Enterprises with customer data fragmented across many systems and no reliable single view of the customer.",
        wedoes: ['Source mapping', 'Identity resolution', 'Consent model', 'Activation to CEP + BI'],
        heroImg: '/assets/collages/drowning-in-data.png',
        heroAlt: 'Vintage cut-out collage, a hand reaching out of a pile of numbered blocks',
      },
    ],
  },
  {
    cat: 'PA', catLong: 'Product Analytics', href: '/services/pa',
    items: [
      {
        slug: 'amplitude',
        name: 'Amplitude', role: 'Product Analytics',
        what: "Purpose-built product analytics. Funnels, retention, cohort analysis, feature adoption, for product and growth teams that need answers without filing a ticket. Designed to sit alongside GA4, not replace it.",
        overview: "Amplitude is what product and growth teams reach for once GA4's marketing-shaped analytics stop answering product-shaped questions. Funnels, retention curves, cohort analysis, and feature adoption are first-class here, and it's built so a PM can self-serve an answer instead of filing a ticket and waiting a week.",
        weOffer: "We design the event taxonomy so your data is trustworthy from day one, connect Amplitude to your SDKs or CDP, and build the initial set of charts your team actually needs. Then we train your product managers to build their own queries, so Amplitude becomes a habit, not a dashboard nobody opens.",
        bestFor: "Product and growth teams making roadmap decisions on instinct because GA4 can't keep up.",
        wedoes: ['Event taxonomy', 'SDK or CDP integration', 'Charts that matter', 'PM self-serve training'],
        heroImg: '/assets/collages/binoculars-lady-dark.png',
        heroAlt: 'Vintage cut-out collage, lady with binoculars spotting insights',
      },
    ],
    secondary: ['Mixpanel'],
  },
  {
    cat: 'BI', catLong: 'Business Intelligence', href: '/services/bi',
    items: [
      {
        slug: 'domo',
        name: 'DOMO', role: 'BI & Visualisation',
        what: "Real-time BI and data visualisation with 1,000+ pre-built connectors. Enterprise-grade where it matters (security, governance, scale); genuinely approachable for non-technical stakeholders everywhere else.",
        overview: "DOMO is real-time BI for businesses whose data lives in a dozen different systems and whose leadership team is done waiting for the monthly report. With over 1,000 pre-built connectors, it gets to a usable dashboard fast, while still holding up on the security, governance, and scale that enterprise buyers ask for.",
        weOffer: "We connect your source systems, build dashboards by audience instead of one generic view for everyone, and set up the governance so the numbers stay trustworthy as more people get access. Then we train your business users so DOMO gets opened daily, not just at month-end.",
        bestFor: "Mid-market to enterprise with data spread across multiple systems and a leadership team tired of waiting.",
        wedoes: ['Source integration', 'Dashboards by audience', 'Governance setup', 'Business-user training'],
        heroImg: '/assets/collages/art-of-reporting.png',
        heroAlt: 'Vintage cut-out collage, the art of reporting',
      },
    ],
  },
  {
    cat: 'ATTR', catLong: 'Mobile Attribution', href: '/services/attribution',
    items: [
      {
        slug: 'appsflyer',
        name: 'AppsFlyer', role: 'MMP',
        what: "Market-leading mobile measurement partner. A neutral measurement layer above Meta, Google, TikTok, ASA and beyond. Industry-best fraud protection. Privacy-preserving framework built for iOS/Android post-IDFA.",
        overview: "AppsFlyer is the neutral referee sitting above Meta, Google, TikTok, and every other channel you're paying to acquire users on, telling you the truth about what's actually working. Its fraud protection is best-in-class, and its measurement framework was built for the post-IDFA world, not bolted onto an older one.",
        weOffer: "We handle the SDK implementation, wire up your partner integrations, and set attribution windows that match how your app actually converts. We also configure fraud rules tuned to your specific acquisition mix, so your paid budget goes toward real users, not bots.",
        bestFor: "Apps running paid acquisition at scale across multiple channels, especially where fraud is a concern.",
        wedoes: ['Implementation', 'Partner integrations', 'Attribution windows', 'Fraud rules'],
        heroImg: '/assets/collages/rocket-ladies-dark.png',
        heroAlt: 'Vintage cut-out collage, ladies riding a rocket launch',
      },
      {
        slug: 'branch',
        name: 'Branch', role: 'Deep Linking + MMP',
        what: "Leading deep linking combined with solid mobile attribution. Universal links, deferred deep links, contextual deep links, so every campaign, email, push, or social link drops users exactly where they should land.",
        overview: "Branch matters most the moment a link is supposed to take someone somewhere specific inside your app and instead dumps them on the home screen. It combines leading deep linking, universal links, deferred deep links, contextual deep links, with solid mobile attribution, so every campaign, email, push, or social link actually lands where it's meant to.",
        weOffer: "We build out the link infrastructure and wire it into your CEP so campaigns and deep links work as one system, then QA every flow across devices and states before go-live. We test the edge cases most teams skip, like a fresh install versus an already-installed user tapping the same link, so nothing breaks in production.",
        bestFor: "Apps where deep linking is core to the experience: email-to-app, web-to-app, social-to-app flows.",
        wedoes: ['Link infrastructure', 'Integrations with CEP', 'Flow QA', 'Go-live testing'],
        heroImg: '/assets/collages/point-hand.png',
        heroAlt: 'Vintage cut-out collage, pointing hand',
      },
    ],
  },
];

export function getPartnerBySlug(slug) {
  for (const cat of PARTNERS_DATA) {
    const found = cat.items.find((p) => p.slug === slug);
    if (found) return { ...found, cat: cat.cat, catLong: cat.catLong, serviceHref: cat.href };
  }
  return null;
}

export function getPartnersByCategory(cat, excludeSlug) {
  const group = PARTNERS_DATA.find((c) => c.cat === cat);
  if (!group) return [];
  return group.items.filter((p) => p.slug !== excludeSlug);
}

export const ALL_PARTNER_SLUGS = PARTNERS_DATA.flatMap((cat) => cat.items.map((p) => p.slug));
