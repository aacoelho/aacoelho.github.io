# aacoelho.github.io

Portfolio of Ângela Coelho, live at [angelacoelho.com](https://angelacoelho.com/).

Built with [Astro](https://astro.build) and React. The site is fully static: React components are rendered to HTML at build time, so no React code is sent to the browser.

## Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node 22 (version in [.nvmrc](.nvmrc))

## Getting started

```bash
nvm use            # switches to Node 22 for this folder only
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves `dist/` locally (check the production build) |
| `npm run check` | Type-checks `.astro`/`.ts`/`.tsx` files |
| `npm run visual-diff` | Screenshots the live site and the local preview and compares them pixel by pixel (run `npm run build && npm run preview` first). Use `BASE=…` and `CANDIDATE=…` to compare other URLs |

## Project structure

```
public/                 Copied as-is to the site root
  assets/               Images, fonts, cursors, CV (URLs stay /assets/…)
  assets/projects/<slug>/  Gallery images for each project
  js/main.js            Loader, page transitions, scroll skew (uses jQuery)
  CNAME                 Custom domain
src/
  content/projects/     One Markdown file per project
  content/pages/about.md  About page content
  content.config.ts     Schema for the content above
  data/site.ts          Site settings, social links, navigation
  components/           React components (Header, Footer, GalleryItem, …) and head/script partials
  layouts/              Base page layout and 404 layout
  pages/                Routes: /, /about/, /<project>, /404.html, /feed.xml
  styles/               SCSS (entry: main.scss)
scripts/visual-diff.mjs Visual regression check
```

## Adding or editing a project

1. Create `src/content/projects/<slug>.md`. The file name becomes the URL (`/<slug>`).
2. Put its gallery images in `public/assets/projects/<slug>/` and its avatar in `public/assets/`.
3. Fill in the front matter (copy an existing project as a starting point):
   - `index`: position on the home page; also decides the "See next project" order. Published projects should use consecutive numbers starting at 0.
   - `draft: true` hides the project everywhere.
   - `description`, `type`, captions and detail lines can contain HTML (links, `<i>`).
   - Gallery items use `img` (file name) or `src` (a Vimeo embed URL).

The build fails with a clear message if a field is missing or has the wrong type.

## Deployment

Pushing to `master` deploys the site. The [GitHub Actions workflow](.github/workflows/deploy.yml) builds it with Astro and publishes it to GitHub Pages.

- In the repo, **Settings → Pages → Source** must be set to **GitHub Actions**.
- Custom domain: `angelacoelho.com` (DNS at GoDaddy, pointing to GitHub Pages; the domain is verified on the GitHub account).
- You can also trigger a deploy manually from the **Actions** tab (**Deploy to GitHub Pages → Run workflow**).

## Future improvements

- Convert the GIFs to MP4/WebM video and optimise images (`astro:assets`, lazy loading).
- Replace jQuery and `public/js/main.js` with a plain TypeScript module; consider Astro View Transitions for page fades.
- Replace the Universal Analytics tag (`UA-…`, it stopped collecting data in 2023) with GA4 or a cookie-free alternative.
- SEO: switch `site.url` to `https://`, fill empty `og:image`s, per-page titles, add a sitemap.
- Fonts: keep only woff2, add `font-display: swap`, load Google Fonts with `<link>` instead of `@import`.
- Once the SCSS moves off `@import`, remove `silenceDeprecations` in `astro.config.mjs`.
