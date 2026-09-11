# Airy Portfolio — Astro + React + TypeScript + Framer Motion

Modern, airy, clean portfolio template you asked for.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## What you get

- **Astro 5 + React 19 + TypeScript** — latest versions (as of 2026)
- **Framer Motion 12** hero with parallax, spring, stagger, marquee
- **Navigation that accepts raw HTML** — edit `src/data/navigation.ts`, put any HTML string in `html` field
- **Topics index** with toggle: **Cards ↔ Table** — exactly what you asked for (variety of topics, list/table, page links)
  - Search + category filter
  - Grid uses animated cards, Table uses dense scannable rows
  - Each topic is a real page at `/topics/[slug]`

## Where to edit

- Nav links + HTML: `src/data/navigation.ts`
- All topics (variety): `src/data/topics.ts` — add as many as you want, supports `contentHtml`
- Hero animation: `src/components/Hero.tsx`
- Global style (airy): `src/styles/global.css` + `tailwind.config.mjs`
- Pages: `src/pages/index.astro` (landing), `src/pages/topics/index.astro` (list), `src/pages/topics/[slug].astro` (detail)

## Build

```bash
npm run build
npm run preview
```

## Deploy
Works on Vercel, Netlify, Cloudflare out of the box. Static output.

Tip: Replace `contentHtml` with Astro Content Collections + MDX when you grow — layout is ready.
