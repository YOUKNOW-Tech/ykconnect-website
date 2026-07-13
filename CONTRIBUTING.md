# How to update this site

This is a short, practical guide for making changes to the YOUKNOW Connect website, written for teammates who aren't developers. You don't need to know how to code. You do need an AI coding agent (like Claude Code) that can read this repository and make edits for you.

The whole flow is: **pull the code → describe your change in plain English → review what changed → push it → Vercel puts it live automatically.**

## One-time setup

You only need to do this once per computer.

1. **Install Git.** On a Mac, open Terminal and type `git --version`. If it's not installed, it'll prompt you to install it.
2. **Get access to the GitHub repo.** Ask whoever manages `github.com/YOUKNOW-Tech/ykconnect-website` to add you as a collaborator.
3. **Install an AI coding agent.** Claude Code is what built this site — see [claude.com/claude-code](https://claude.com/claude-code) for setup. Any coding agent that can read and edit a local folder will work.
4. **Install Node.js.** The site needs it to preview changes locally. Get it from [nodejs.org](https://nodejs.org) (the LTS version).

## Pulling the code

Every time you sit down to make a change, get the latest version first:

```
cd ykconnect-website   # or wherever you saved the folder
git pull
```

If this is your first time, clone it instead:

```
git clone https://github.com/YOUKNOW-Tech/ykconnect-website.git
cd ykconnect-website
```

## Making a change with the AI agent

Open the `ykconnect-website` folder in your coding agent and just describe what you want in plain English. For example:

> "On the About page, change the sticker that says 'Since 2013' to say 'Since 2014'."

> "Add a new FAQ to the CEP service page about pricing."

> "The footer's LinkedIn link is a placeholder. Point it at [real URL]."

The agent will find the right file, make the edit, and tell you what it changed. You don't need to know which file that was, but the agent will usually mention it (e.g. `web/src/pages/About.jsx`) so you can look at it if you're curious.

**Bigger changes** (a new page, a new section, anything that touches how the site works rather than just what it says) are fine to ask for the same way. Just describe the outcome you want; the agent will figure out the implementation.

## Reviewing what changed

Before anything goes live, look at what actually changed:

```
git status
git diff
```

`git status` lists which files changed. `git diff` shows the actual before/after for each one. If you're not sure what a diff means, ask the agent to explain it, or just describe what you *expected* to see and ask it to confirm the diff matches.

**Preview it locally before pushing**, especially for anything visual:

```
cd web
npm install     # only needed the first time, or after dependency changes
npm run dev
```

This starts a local copy of the site, usually at `http://localhost:5173`. Open that in your browser and click around the pages you changed.

## Pushing to GitHub

Once you're happy with the change:

```
git add -A
git commit -m "Short description of what changed"
git push
```

If you're not comfortable with git commands, ask the agent to do this step for you and tell you what it pushed. Either way, know what you're pushing: **anything pushed to the `main` branch goes live automatically within a minute or two.** There's no separate "staging" step, so a quick local preview (above) before pushing is worth the extra minute.

## How the live site updates

The site is hosted on Vercel, connected directly to this GitHub repo. Every push to `main` triggers a new build and deploy automatically, no manual step required. You can watch it happen (or check on a past deploy) at the project's Vercel dashboard.

If a deploy fails (rare, usually a typo that breaks the code), Vercel keeps serving the last working version, so the live site won't go down. Whoever has Vercel access can see the error and roll back or fix it if needed.

## If something goes wrong

- **You pushed a mistake:** ask the agent to fix it and push again, or ask someone with git experience to `git revert` the bad commit. Don't panic, nothing is destroyed, every past version is still in the git history.
- **The live site looks broken:** check the Vercel dashboard for a failed deploy. If the last deploy succeeded but the site still looks wrong, it's a real bug in the change, not a deploy problem, ask the agent to investigate.
- **You're not sure if a change is safe:** ask the agent directly, "is this change risky?" before pushing. Big structural changes are worth a second pair of eyes even if the agent says it's fine.
