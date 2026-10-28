# regencyvegas.com

Hyperlocal real estate site for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, NV license S.0197614.LLC.

## Stack
- Next.js 16 (App Router, `src/app`), React 19, JavaScript
- Hosted on Vercel; every PR gets a preview deployment
- npm with a committed `package-lock.json`; Node 24 in CI

## Commands
- `npm ci` install · `npm run dev` local server · `npm run lint` · `npm run build`
- CI runs these on every PR. Run them before you push.

## Rules
- **Fair Housing first.** No protected-class wording or proxies ("safe neighborhood," "good schools," "family-friendly"). Describe square footage, amenities, school names, and commute times instead.
- **This site has no number of its own yet.** It currently shows 702-222-1964 and 702-500-1955. Ask Dr. Jan for the site's number before adding or changing any phone number. 702-222-1964 is for client email and text only.
- **No secrets in git.** `.env*` stays gitignored. A new env var goes in Vercel (Production + Preview), and the PR names it.
- Work on a branch and open a PR. `main` deploys to production.
