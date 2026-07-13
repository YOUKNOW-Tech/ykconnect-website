export default {
  slug: 'partner-spotlight-amplitude',
  title: 'Partner spotlight: Amplitude — answers to the questions GA4 can’t give you',
  heroTitle: { before: 'Partner spotlight: ', accent: 'Amplitude', after: '' },
  description:
    'Why we partner with Amplitude for product analytics: funnels, retention curves, and feature adoption your product team can self-serve — alongside GA4, not instead of it.',
  date: '2026-07-06',
  author: 'YOUKNOW Connect',
  category: 'Partner Spotlight',
  partner: 'Amplitude',
  serviceHref: '/services/pa',
  serviceName: 'Product Analytics',
  hero: '/assets/collages/binoculars-lady-dark.png',
  heroAlt: 'Vintage cut-out collage, lady with binoculars spotting insights',
  readingTime: '5 min',
  body: [
    {
      type: 'p',
      text: 'You shipped a feature six weeks ago. Did it work? Not “did people click it” — did it move retention? If answering that means filing a ticket with an analyst and waiting three days, your product team isn’t making data-informed decisions. They’re making instinct-informed decisions with a data-flavoured delay.',
    },
    {
      type: 'p',
      text: 'GA4 can’t save you here, because GA4 was never built for this. It answers marketing questions: where did traffic come from, which campaign converted. What happens inside the product after the install is a different discipline with a different tool — and the one we back is Amplitude.',
    },
    { type: 'h2', text: 'What Amplitude actually is' },
    {
      type: 'p',
      text: 'Amplitude is a product analytics platform, purpose-built rather than repurposed from web analytics. It models your product as events and users, then lets anyone — not just analysts — ask behavioural questions: funnel analysis, cohort retention curves, user journey mapping, feature adoption. Its custom event taxonomy means you track what your product actually does, not what a page-view model assumes it does.',
    },
    { type: 'h2', text: 'Where it genuinely shines' },
    {
      type: 'list',
      items: [
        'Retention curves, cohort by cohort — the single most important chart most products never produce.',
        'Funnel analysis that shows where users drop, why, and which segments drop worst.',
        'Genuinely self-serve: product managers building their own queries by week two, no SQL, no tickets.',
        'Plays well in a stack: 150+ integrations including Braze, OneSignal, AppsFlyer, and Branch.',
        'Audience sync back to Google Ads and Meta, so behavioural insight closes the loop into acquisition.',
      ],
    },
    { type: 'h2', text: 'The honest bit' },
    {
      type: 'p',
      text: 'Amplitude is not a GA4 replacement, and anyone selling it to you as one is doing you a disservice. GA4 stays better for marketing attribution and the Google Ads ecosystem — most of our clients run both. Costs can climb at high event volumes, and the platform is only as good as its event taxonomy: implement it carelessly and three months later nobody trusts the data. That taxonomy stage is where most rollouts fail, which is exactly why it’s where we start.',
    },
    {
      type: 'quote',
      text: 'We’re honest about where GA4 is sufficient. We don’t implement Amplitude where it isn’t needed.',
      attrib: 'Our product analytics rule',
    },
    { type: 'h2', text: 'Who it’s right for' },
    {
      type: 'p',
      text: 'Product and growth teams at digital businesses — app or web — who are making roadmap calls on instinct because the data isn’t there, isn’t trusted, or takes three days to arrive. If leadership keeps asking for cohort retention and your current tooling keeps not producing it, this is your platform.',
    },
    { type: 'h2', text: 'How we implement it' },
    {
      type: 'list',
      items: [
        'Audit what’s already tracked in GA4 and elsewhere, and reuse what’s worth reusing.',
        'Workshop a clean event taxonomy with product, growth, and engineering — named once, properly.',
        'Integrate via SDK or your CDP; your stack, your call.',
        'Build the first ten charts that matter, then train PMs to self-serve. We measure success by their queries, not ours.',
      ],
    },
    {
      type: 'callout',
      title: 'The African market angle',
      text: 'African product teams are typically leaner than their global counterparts, which makes self-serve analytics worth more here, not less. A tool that removes the analyst bottleneck effectively adds headcount you didn’t have to hire.',
    },
    {
      type: 'cta',
      text: 'Tired of roadmap decisions by gut feel?',
      href: '/services/pa',
      label: 'Explore our product analytics service',
    },
  ],
};
