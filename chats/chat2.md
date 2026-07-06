# YOUKNOW Connect branding integration

_Started 2026-07-03 07:10 UTC_

---

## User

for the YOUKNOW Connect Website, add the actual YOUKNOW Connect Logo, and integrate the stickers and graphics from the libraries that have been created

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: update_todos]_

_[tool: copy_files]_

_[tool: grep]_

_[tool: copy_files]_

_[tool: grep]_

Now applying all edits:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now the About/Partners/Contact touches:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

All logo and graphic integrations are in. Handing off for verification:

_[tool: ready_for_verification]_

Done. Changes across the site:

- **Real logo**: header now uses the full YOUKNOW Connect lockup (blue), footer the white version — replacing the hand-built text lockups.
- **Home**: hero navy card features the `yk-guy` telephone collage (+ stars accent), "no fluff" sheep in the Why Us section, heart-fingers collage in the CTA band.
- **Service pages**: each hero now has its own dark-variant collage — notifications (CEP), binoculars lady (PA), statues-at-laptop (BI), rocket ladies (Attribution).
- **About**: South Africa collage in the hero, team collage in the family section.
- **Partners**: tools-products-partners collage in the hero.
- **Contact**: telephone-girl collage under the info card.

The verifier is checking the pages in the background; other pages (partners, services, about, contact) are reachable via the nav if you want to look them over.

## User

Lets use the actual concentric circles in the graphics library in place of the existing ones - ou can also use the other radial graphics to mix it up

## Assistant

_[tool: copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

Transparent PNGs — good. Swapping all hand-drawn ring SVGs for the library graphics:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: ready_for_verification]_

All hand-drawn concentric-ring SVGs are now replaced with the real library graphics, mixed up by context:

- **Concentric circles** (blue/beige PNGs): home hero card, footer, page heroes, partner cards, About-Africa panel, contact backdrop
- **Contour lines**: service heroes + partners strip on home
- **Halftone circles / faded halftones**: service cards, partners block, CTA band, contact form corners

Partner-card decor also adapts per card style (beige circles on sticker-blue, blue on navy/soft). Verifier is checking in the background.

## User

We need to add a partner to the mix - Amperity, which is a CDP. Let me know if you need more info

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- scope: New 'CDP' service domain — own service page + nav + everywhere
- copy_source: Draft it for me (I'll review)

## Assistant

_[tool: read_file]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

`drowning-in-data` is perfect for the CDP hero (fragmented data, hand reaching out) and it's navy-safe. Building it all now:

_[tool: copy_files]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Two copy spots that list the stack:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Amperity is in as a full fifth domain — draft copy included, please review:

- **New page** `services-cdp.html` — "One customer, one record — finally." with the drowning-in-data collage, identity-resolution positioning, POPIA-first consent angle, and a "we map your data first" partnership rule.
- **Nav + footer**: CDP added to the Services menu (after CEP) and footer links.
- **Home**: services grid is now five cards ("Five service domains"), Amperity in the tools strip and partner grid (now a clean 3×3).
- **Partners page**: new CDP category with the Amperity card.
- **Cross-links**: every service page's "other ways we can help" now includes CDP.

Verifier is checking in the background. Flag anything in the Amperity copy you'd like tightened — especially the "best for" line, which I aimed at enterprise/fragmented-data buyers.

## User

make the copy more human and African - remove all em dashes too please. 

Also please add these logos to the relevant partner sections

## Assistant

_[tool: snip]_

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Now the full copy pass (human + African, all em dashes out) in one script:

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

One scope fix — `PARTNER_LOGO_SRC` must be exported for the trust line:

_[tool: str_replace_edit]_

_[tool: grep]_

All remaining em dashes are in code comments only — user-facing copy is clean.

_[tool: update_todos]_

_[tool: ready_for_verification]_

Done, three things shipped:

**Logos** — all seven uploaded logos are in and used on the home trust strip, home partner grid, Partners page cards, and each service page's partner block. They're normalised for legibility: navy-ish on light backgrounds, white on navy/blue cards. **Note: no Amperity logo was uploaded** — it falls back to a styled text wordmark for now; send the file and I'll drop it in.

**Copy** — every em dash removed from visible copy (only code comments retain them), and a warmer SA voice throughout: "sawubona, neighbour", "Sharp. Let's connect.", "howzit in binary", "lekker", WhatsApp voice notes instead of Looms, and softened partner/service copy across all pages.

The verifier is checking the pages in the background — if logo sizing looks off anywhere (DOMO and Amplitude are very wide marks), say the word and I'll tune heights per logo.

## User

I like the idea here, but lets make it an actual shape of Africa, with the locations pinned

## Assistant

_[tool: update_todos]_

_[tool: snip]_

_[tool: snip]_

_[tool: grep]_

## Assistant

_[tool: read_file]_

Replacing the abstract blob with a real Africa silhouette, geo-accurate pins:

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

The About map is now a proper Africa silhouette (with Madagascar), keeping the halftone dot fill and dotted-line network style. All six cities are pinned at their real geographic positions — Cape Town and Joburg down south, Accra/Lagos on the West African coast, Nairobi and Kigali in the east — with the route lines connecting them.

One outstanding item: still no **Amperity logo** file — it renders as a text wordmark in the partner sections. Upload it whenever and I'll slot it in.

## User

Here's the Amperity logo - please add it in 

Also, the top menu section with the logo and menu items are a bit small and they get lost in the whole design. Please make it bigger and the menu items more bold and easy to read

## Assistant

_[tool: copy_files]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Both done:

- **Amperity logo** is in — it now renders everywhere partner logos appear (home trust strip + partner grid, Partners page, CDP service page), with the same treatment as the others: dark on light backgrounds, white on navy.
- **Header**: logo bumped from 38px to 50px, nav links from 14px/medium to 16px/bold, active underline thickened, and a bit more breathing room in the bar.

Verifier is checking in the background.

## User

The menu items dont all seem to be inline with each other. please adjust accordingly. 

Also, the Africa image on the About page doesn't fit the vibe of the website - can you generate a sticker style version of the African continent instead of weird hand drawn line

## Assistant

_[tool: str_replace_edit]_

_[tool: tool_search_tool_bm25]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Both done:

- **Nav alignment**: all menu items (including the Services dropdown button) now share the same baseline and line-height, so Home / About / Services / Partners sit perfectly in line.
- **Africa sticker**: rebuilt as a die-cut sticker — solid brand blue with a fat beige cut-out border, offset navy drop shadow, halftone dot texture, and a slight tilt, matching the site's sticker language. The coastline is now geographically accurate (with Madagascar), and the six city pins got beige-ringed dots with bolder outlined labels.

Verifier is checking the About page now — if the sticker border feels too thick/thin once you see it, easy to tune.

## User

Please add Luanda, Angola to the africa map on the About page

Also, the hero image on the about page only has a South Africa map there - we need something referring to Sub-Saharan Africa (the whole continent even)

On the partner page, position the platform agnostic sticker on or over the cardboard image

We need FAQs on the bottom of each Services page

remove the 'your customer data, before a CDP.' text from the CDP page

remove the 'The questions worth asking.' text from the PA page

remove the 'One source of truth. Properly trusted.' text from the BI page

remove the '← Cuts through the overclaiming.' text from the Mobile Attribution page

Also, remove the 'where our customers actually are' text - it doesn't make sense being there

Add Joburg to the Office section on the contact page - and change the email to connect@youknow.co.za

## Assistant

_[tool: update_todos]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

`globe.png` in the library is perfect for the About hero. Executing everything:

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: run_script]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

All ten items done:

- **Luanda** pinned on the Africa map, linked into the route network.
- **About hero** now uses the globe collage (continent-wide) instead of the SA map.
- **Partners**: PLATFORM-AGNOSTIC sticker now sits over the cardboard-box collage.
- **FAQs** added to all five service pages — 4 straight-talking Q&As each (accordion style, brand-dotted cards), placed after the quote and before "other ways we can help".
- **Removed** all four handwritten hero captions (CDP, PA, BI, Attribution) and the "where our customers actually are" line.
- **Contact**: "Offices — Cape Town & Joburg · South Africa", and email changed to connect@youknow.co.za (also updated in the footer and home CTA so they don't contradict).

Verifier is checking now. FAQ copy is drafted by me — review the numbers (e.g. the fraud 15–30% claim, timelines) and I'll adjust to your real figures.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

Also the sticker that's positioned over the art must hide with it:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Fixed: hero collage art (and the sticker positioned over it on Partners) now hides below 1150px, so it can no longer overlap the heading or lead text at laptop widths. Verifier is re-checking.

## User

I need a different image for the home page - the man with the ear is not vibing

## Assistant

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

The megaphone Vermeer girl is the strongest fit (and already in the project). Swapping:

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Swapped the hero to the megaphone Vermeer girl (dark variant) — headphones, deal-with-it glasses, big megaphone — with the caption now "← we say it straight." If you'd rather try another (jetpack guy or the lounging astronaut were the other strong candidates), just say.

## User

I need something new and fresh- you have full creative license

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Went for a completely new direction — a full-width editorial poster hero instead of the copy-left/card-right split:

- **Giant centered headline** with collage cut-outs living *inside* the type — the megaphone girl and heart-fingers sit in rounded pills between the words, magazine-style.
- A handwritten "*honestly.*" tag after "data", pointing-hand cut-out, stars accent, and the PLATFORM-AGNOSTIC / SSA stickers floating off the headline edges.
- **Tilted navy marquee strip** scrolling "NO FLUFF ✦ PLATFORM-AGNOSTIC ✦ PROUDLY AFRICAN ✦ HONEST ANSWERS ✦ WHATSAPP-FIRST ✦ POPIA-NATIVE" (respects reduced-motion).
- Lead, CTAs and the tools strip now centered beneath.

Verifier is checking it now. If this is too loud, I can dial back the marquee tilt or pill count — or explore a second direction entirely.

## User

I like the text-first approach - lets try another direction

## Assistant

_[tool: update_todos]_

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

## User

Check didn’t complete

## Assistant

## User

pls continue

## Assistant

_[tool: show_html]_

_[tool: ready_for_verification]_

The new text-first hero direction is live: an all-caps typographic manifesto — solid "GET MORE", outlined "FROM YOUR" (stroke-only type), blue "CUSTOMER DATA" with a handwritten "honestly." trailing off — with the eyebrow and "EST. CAPE TOWN · SSA" tag on one line up top, lead paragraph and CTAs in a two-column band below, plus the tilted navy marquee strip. The verifier is re-checking it now; if anything's broken it'll flag me. If this direction isn't it either, I can try a third take.

## User

remove all the em-dashes and make the writing more human

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

Doing a site-wide humanizing pass:

_[tool: run_script]_

_[tool: ready_for_verification]_

Done. Em dashes were already cleared from all visible copy (the only ones left live in code comments nobody sees). This pass made the writing sound like a person:

- Hero lead: "…Set up by people who'll happily tell you when you don't need something."
- CDP card: "Every version of your customer, stitched into one profile your whole business can trust."
- Attribution: "…because every ad platform claims the same install."
- Differentiators: "We recommend what's right for you, not what pays us best", "We live and work here", "Call us when something breaks, not just when you're buying."
- Partners: "We only partner with tools we'd stake our own name on" and "platform-agnostic… a fancy way of saying we recommend what's right for you."

If any specific line still reads stiff to you, point at it and I'll rework just that one.

