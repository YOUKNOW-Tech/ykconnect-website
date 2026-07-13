# Webflow / Framer vs. the current stack

Written 2026-07-13 in response to a review question: should the site move off React + GitHub + Vercel and onto Webflow or Framer? **Recommendation: stay on the current stack.** Details and reasoning below, including where that recommendation would flip.

## What the current site actually is

This isn't a simple marketing site with a few static pages — worth being precise about that before comparing tools, because it changes the answer:

- **Real client-side interactivity with state**: the contact form (now embedded on 6 pages) has live validation, a true multi-select intent field, and a submit/success flow; the header has scroll-aware styling and a separate mobile drawer; stickers trigger toast notifications on click.
- **Data-driven, templated pages, not one-off designs**: 5 service pages, 7 partner detail pages, and 9 blog posts are all generated from shared templates reading from plain JS data files (`src/data/services.js`, `src/data/partners.js`, `src/data/posts/*.js`). Adding a partner or a post is a data change, not a new page design.
- **Bespoke, code-level animation**: the homepage hero has a custom cursor-tracking eye effect built from layered image crops and clip windows, a scroll-snap filmstrip with custom easing, and a partner-logo component that normalizes visual size per-logo based on measured whitespace ratios. None of this is off-the-shelf.
- **Automated SEO plumbing**: a build-time script generates `sitemap.xml` from the same data files that drive the pages, so adding content automatically keeps the sitemap correct.

That combination, real app-like state plus a component/template system plus custom animation, is what a code framework is for. It's also exactly the kind of thing that's expensive to reproduce in a visual builder.

## Webflow

**Where it's strong here:** Webflow's CMS Collections are a genuinely good match for the blog and partner pages specifically — repeatable, structured content is Webflow's home turf, and non-technical staff could edit that content directly in a visual editor with zero code involved.

**Where it struggles here:**
- Webflow's box-model visual builder doesn't have a native equivalent for the eye-tracking hero, the ink-ratio-normalized logo component, or the toggleable multi-select form logic. Reproducing any of that means embedding raw HTML/CSS/JS per component, which is the same code-authoring burden this migration would be trying to escape, just harder to maintain (embedded code in a visual tool has worse version control, no shared component reuse across pages, and no linting).
- Every one of the ~40+ components in this codebase would need to be manually rebuilt in Webflow's editor. This is a full redesign-and-rebuild, not a lift-and-shift. Realistically weeks of dedicated design + development time, not days.
- Adds a recurring CMS/hosting subscription cost. The current setup runs on Vercel's free/low-cost tier plus GitHub, effectively $0–20/month at this traffic level.

**Genuine upside worth naming:** Webflow (and Framer) generate real server-rendered HTML per page by default. That would directly fix the SEO/AEO gap flagged in `docs/deploy-seo-notes.md` (generic pre-hydration meta tags on the current SPA), where this codebase would need a separate architectural change (SSR/prerendering) to get the same benefit.

## Framer

Similar profile to Webflow, with two differences worth noting:

- Framer's animation tools (scroll-linked effects, shared-element transitions) are stronger out of the box and could replicate *some* of this site's motion design without custom code, more than Webflow could.
- Framer supports custom **code components** written in React, which is a genuine middle ground: things like the contact form's validation logic or the partner-logo sizing logic could theoretically be ported in as actual React code rather than rebuilt visually from scratch. This softens the "full rewrite" cost somewhat versus Webflow.
- Same CMS Collection model as Webflow for blog/partner content, so the current data-file-driven page generation pattern would map onto Framer's CMS reasonably well, just not identically.

Framer is the better of the two no-code options if this migration ever happens, precisely because of the code-component escape hatch. It's still a substantial rebuild, just a somewhat less total one than Webflow.

## The workflow question this was really about

The stated motivation for asking about Webflow/Framer was partly about non-technical teammates being able to make changes (issue 16). Worth being direct about this: **that problem is already solved on the current stack.** This entire batch of 18 review issues, spanning copy edits, a new contact-form field, a new page template, and content migration, was made by describing the desired changes in plain English to an AI coding agent, which read the code, made the changes, and pushed them live. `CONTRIBUTING.md` (added alongside this memo) documents exactly that workflow for the rest of the team. A no-code visual builder solves the same problem for a narrower slice of changes (copy and layout tweaks) while making the harder changes (new interactive features, new page types) *more* expensive, not less, because they'd require raw code embeds instead of a proper codebase.

## Recommendation

**Stay on React + GitHub + Vercel.** The current stack is doing more than a typical marketing site would need from a code framework, and that complexity is exactly what would be expensive to rebuild in Webflow or Framer. The AI-agent workflow already gives non-technical teammates a practical way to request changes without touching code directly, which was the main reason a no-code tool would otherwise be attractive.

**This recommendation would flip if:**
- The team wants marketing/ops staff editing pages directly in a visual canvas with zero AI-agent or developer involvement at all, including for structural changes, not just copy.
- Access to any coding agent or developer time genuinely dries up long-term.
- The SEO/AEO gap from client-side-only rendering turns out to matter more than expected and can't be justified as a smaller fix (SSR/prerendering) within the current stack.

If it does flip, **Framer over Webflow**, for the code-component escape hatch, and treat it as a full redesign project with a real timeline, not a technical migration.
