// Blog post registry. Post files are pure data (no JSX/asset imports) so
// scripts/generate-sitemap.mjs can import this module in Node too.
import intro from './introducing-youknow-connect.js';
import onesignal from './partner-spotlight-onesignal.js';
import insiderone from './partner-spotlight-insiderone.js';
import amperity from './partner-spotlight-amperity.js';
import amplitude from './partner-spotlight-amplitude.js';
import domo from './partner-spotlight-domo.js';
import appsflyer from './partner-spotlight-appsflyer.js';
import branch from './partner-spotlight-branch.js';

export const POSTS = [
  intro, onesignal, insiderone, amperity, amplitude, domo, appsflyer, branch,
].sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
