// Blog post — pure data only (no JSX, no asset imports): the sitemap
// generator imports these files in Node.
export default {
  slug: 'wonga-customer-engagement-transformation',
  title: 'How Wonga transformed customer engagement and unlocked new revenue',
  heroTitle: { before: 'How ', accent: 'Wonga', after: ' transformed customer engagement' },
  description:
    "A fragmented, IT-heavy stack was slowing Wonga down. Here's how consolidating onto one customer engagement platform lifted email-driven uptake by 40% and cut operational overhead.",
  date: '2026-06-25',
  author: 'YOUKNOW Connect',
  category: 'Success Story',
  partner: null,
  serviceHref: '/services/cep',
  serviceName: 'Customer Engagement',
  hero: '/assets/collages/rocket-ladies-dark.png',
  heroAlt: 'Vintage cut-out collage, women with a rocket',
  readingTime: '5 min',
  body: [
    {
      type: 'p',
      text: "Wonga's marketing team was fighting its own technology before it could fight for customers. Customer data lived in silos across multiple systems, campaigns had to be built and launched separately on each platform, and every meaningful change needed developer time. None of that is unusual for a business that grew fast and bolted tools on as it went. It's just expensive to keep running that way.",
    },
    { type: 'h2', text: 'The problem, plainly' },
    {
      type: 'p',
      text: 'Three things were costing Wonga real money and real speed:',
    },
    {
      type: 'list',
      items: [
        "No unified customer view. Data sat in separate systems, so nobody had a single accurate picture of a customer's credit lifecycle.",
        'Slow, manual campaigns. Coordinating a single message across channels meant touching multiple platforms by hand, with no event-driven triggers.',
        "Heavy IT dependency. Every campaign tweak queued behind engineering, which is backwards for a marketing team that needs to move at the speed of a customer's day.",
      ],
    },
    { type: 'h2', text: 'What we built' },
    {
      type: 'p',
      text: 'We consolidated the engagement layer onto a single platform and rebuilt it around four things:',
    },
    {
      type: 'list',
      items: [
        'Unified customer profiles, pulling key data into one real-time view instead of several disconnected ones.',
        'Advanced segmentation, built on custom attributes and events tied to actual behaviour and credit lifecycle stage, not static lists.',
        'Cross-channel orchestration, automating journeys across email, in-app messages, outbound calls, and SMS from one place.',
        'Personalisation at scale, so messages triggered off what a customer actually did, not a generic send schedule.',
      ],
    },
    { type: 'h2', text: 'The results' },
    {
      type: 'p',
      text: 'The numbers did the talking:',
    },
    {
      type: 'list',
      items: [
        '40% increase in email-driven customer uptake, from personalised, behaviour-based offers instead of blanket sends.',
        '~20% increase in website traffic, as timelier, more relevant engagement pulled customers back in.',
        'Faster campaign launches across every channel, without waiting on a developer for each one.',
        'Lower operational costs, from consolidating platforms and cutting the IT overhead of running them.',
      ],
    },
    {
      type: 'quote',
      text: 'Seeing the platform in action has been incredible. It enables us to connect with customers in ways we never could before, efficiently and cost-effectively.',
      attrib: 'James Williams, Chief Marketing Officer, Wonga',
    },
    {
      type: 'p',
      text: 'The speed mattered as much as the sophistication. "Our communications now integrate seamlessly with our tech stack, enabling loan delivery within minutes," Williams said. For a lender, that\'s not a nice-to-have feature. That\'s the product.',
    },
    { type: 'h2', text: 'Why this worked' },
    {
      type: 'p',
      text: "None of this was really about picking a clever platform. It was about refusing to accept that a fragmented stack was just the cost of doing business. Wonga's team already understood their customers, credit lifecycle, risk tiers, behaviour patterns; the technology just needed to stop getting in the way of acting on it.",
    },
    {
      type: 'callout',
      title: 'Where Braze fits into this story',
      text: "The platform behind this transformation was Braze, implemented and run by the YOUKNOW group. We still implement and support Braze for clients where it's the right tool for the job, even though it isn't one of Connect's lead partners today. Case in point: sometimes the right platform for a client's specific situation isn't the one at the top of anyone's partner deck.",
    },
    {
      type: 'cta',
      text: 'Running a fragmented engagement stack of your own?',
      href: '/services/cep',
      label: 'Explore our customer engagement service',
    },
  ],
};
