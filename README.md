# kevinholler.com

Personal site for Kevin Holler. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Current state: placeholder at the root, rebuild under `/new/`

The root is still a single "coming soon" page. The new site is being written
under `/new/`, which ships so it can be looked at but carries `noindex,
nofollow` and stays out of the sitemap until it moves to the root.

- `src/pages/index.astro` — the placeholder
- `src/pages/404.astro` — matching not-found page
- `src/layouts/Minimal.astro` — layout for those two, self-contained
- `src/layouts/Reading.astro` — layout for everything under `/new/`
- `src/styles/site.css` — all styling for `/new/`

### Sections

The site is about one thing: Field Engineering at CodeRabbit, the AI-native
software lifecycle, and what AI is changing outside work. Three sections,
listed in `src/data/nav.ts` — adding one means adding it there and adding the
page.

| Section | Page | Data |
| --- | --- | --- |
| Home | `pages/new/index.astro` | in the page, plus `src/content/blog/` and `src/data/talks.ts` |
| Writing | `pages/new/writing/` | `src/content/blog/` |
| Speaking | `pages/new/speaking/` | `src/data/talks.ts` |
| About | `pages/new/about.astro` | in the page |

Book, Reading, Startups, Ideas, Projects, Food & Wine, and Gardening are
parked in `src/_archive/sections/`, which mirrors `src/` — move a file back to
the same path under `src/` and its relative imports work again.

### The backdrop

The front page sits on Conway's Game of Life, drawn as binary digits
(`src/components/LifeField.astro`): live cells are 1s, dead cells 0s, and
cells that have just died stay a brighter 0 for a few generations. It is a
single canvas with no dependencies; it pauses in a hidden tab, renders one
still frame under `prefers-reduced-motion`, follows the theme toggle, and
seeds cells under a mouse pointer. It is opt-in per page with
`<Reading backdrop>`; only the front page uses it.

### Widths

Three tokens in `src/styles/site.css` decide the whole layout:

- `--measure` (36rem) — prose. Everything you read a line at a time.
- `--wide` (56rem) — figures, listings, and the masthead. This is `--frame`
  on single-column pages, so the header rule, the footer rule, and the widest
  thing on the page all land on the same edge.
- `--page` (64rem) — `--frame` on two-column pages, split 3fr / 2fr with a
  4rem gap: a 36rem main column and a 24rem side column.

A page opts into two columns with `layout="spread"` on the `Reading` layout
and `.spread` / `.spread-main` / `.spread-side` in the markup. On a
single-column page, a direct child of `.col` may run past the measure by
taking the `wide` class — that is the only opt-out, and it is for listings.

### TODOs

- The front page copy is a draft written for the redesign; rewrite it in your
  own voice before `/new/` moves to the root.
- The about page's "Applied AI, suky.ai, and what's next" section still
  describes the LaunchDarkly role. The facts at the bottom say CodeRabbit.

The previous site is parked in `src/_archive/` — nothing was deleted. Astro only
routes files under `src/pages/`, so the archived pages, components, layouts,
styles, and images are not built or published. Old URLs (`/about/`, `/blog/`,
`/projects/…`) redirect to `/` via `redirects` in `astro.config.mjs`.

To bring any of it back, move the directory out of `src/_archive/` and back under
`src/` — the relative imports between archived files were preserved.

## Develop

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Static output lands in `dist/`.

## Deploy

Pushes to `main` are built and deployed by `.github/workflows/deploy.yml`. The custom domain is set via `public/CNAME`. In repo settings, GitHub Pages source must be set to **GitHub Actions**.
