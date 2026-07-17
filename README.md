# Balkan Constructions — Website

Bilingual (Greek/English) Nuxt 3 website for Balkan Constructions, rebuilt from
the current WordPress site at balkan-constructions.gr.

## Stack
- **Nuxt 3** (Vue 3, SSR)
- **@nuxtjs/i18n** — EL/EN language toggle (`/` = Greek, `/en` = English)
- **@nuxt/content** — CMS-style content (company history, philosophy, project
  register) lives as markdown/YAML frontmatter in `content/el/` and
  `content/en/`, editable without touching code
- **Tailwind CSS** — custom design tokens (navy/steel/copper palette,
  Space Grotesk + Inter + IBM Plex Mono type system)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing content

- **UI labels / navigation / short strings**: `locales/el.json` and `locales/en.json`
- **Long-form content** (company history, philosophy, project list, budget
  table): `content/el/*.md` and `content/en/*.md` — edit the frontmatter,
  no code changes needed
- **Pages**: `pages/*.vue`
- **Global styling**: `assets/css/main.css` and the `tailwindcss.config` block
  in `nuxt.config.ts`

## Build for production

```bash
npm run build     # SSR build → .output/
node .output/server/index.mjs

# or, for a fully static export:
npm run generate  # → .output/public/
```

## Deploying

Works out of the box on Vercel, Netlify, Cloudflare Pages, or any Node
host (Nuxt's Nitro server auto-detects the target — see
https://nuxt.com/docs/getting-started/deployment).

## Next steps to consider
- Swap the stock photography placeholders (currently none are wired in —
  add real project/site photos under `public/images/`)
- Replace the generic testimonials from the old site with real client quotes
- Add a contact form (currently the Contact page links to phone/email;
  a form would need a backend endpoint or a service like Formspree)
