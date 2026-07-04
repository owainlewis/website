<!-- BEGIN:nextjs-agent-rules -->
# Website Agent Notes

This is Owain Lewis's personal website at `owainlewis.com`.

It supports the wider business strategy, but it is not the main business
surface. Keep it simple, personal, and low maintenance.

## Stack

- Next.js `16.2.1`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- Bun is the normal local runtime

Use:

```bash
bun run dev
bun run build
```

Before relying on memory for Next.js behavior, check the installed Next docs in
`node_modules/next/dist/docs/`. This repo uses a newer Next version than many
examples online.

## App Shape

- `src/app/page.tsx` is the homepage.
- `src/app/youtube/page.tsx` and `src/app/linkedin/page.tsx` are Kit lead
  magnet pages.
- `src/app/resources/page.tsx` is the post-signup resources page.
- `src/components/kit-form.tsx` posts to Kit.
- `src/lib/constants.ts` stores canonical external links and the Kit form id.
- `src/app/globals.css` owns theme tokens, font variables, and shared type
  helpers.

## Current Strategy

The homepage should feel like a minimal, cinematic creator site.

Primary jobs:

- show Owain as a real person building a one-person AI business
- drive serious builders to the Kit newsletter
- point people toward YouTube and AI Engineer
- keep the free skills lead magnets working

Do not turn this into a SaaS landing page or a generic AI startup page.

## Design Direction

Keep the design:

- minimal
- cinematic
- personal
- calm
- practical

Avoid:

- decorative AI-looking gradients, blobs, grids, glows, or fake depth
- huge hero text that dominates the video
- generic AI hype language
- dense marketing sections
- adding new sections unless they clearly support the strategy

Use the existing homepage type helpers where possible:

- `type-small`
- `type-body`
- `type-lead`
- `type-title`
- `type-display`
- `measure`
- `measure-wide`

The homepage is the most current design reference. The lead magnet pages and
resources page still contain older one-off text sizing and older visual choices.
Do not copy those patterns into new homepage work.

## Content

Use simple, direct language.

The current positioning:

> I am building a one-person AI business and teaching developers how to use AI
> to build real software, grow useful products, work for themselves, and build
> AI systems that make you unstoppable.

When editing copy, keep it grounded in Owain's actual work:

- AI engineering
- YouTube education
- practical developer workflows
- AI Engineer
- free agent skills
- one-person business building

Do not invent metrics, stories, testimonials, claims, URLs, or product details.

## Assets

Current important assets:

- `public/hero-bg.mp4` is the homepage video background.
- `public/owain-gradient.jpg` is the homepage portrait.

Keep images and video lightweight. Do not add large media without checking file
size and page impact.

## Verification

For normal changes, run:

```bash
bun run build
```

For visual or typography changes:

- run the dev server
- check `http://localhost:3000`
- verify desktop and mobile
- check for clipping, overflow, awkward line breaks, unreadable text, and console
  errors

If Turbopack serves stale CSS, stop the dev server, remove `.next`, and restart:

```bash
rm -rf .next
bun run dev
```

## Git

Do not stage unrelated local changes.

Generated output such as `.next/`, `out/`, and `next-env.d.ts` should not be
committed.
<!-- END:nextjs-agent-rules -->
