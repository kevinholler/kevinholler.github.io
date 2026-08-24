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

Ten sections, grouped in the masthead. The list lives in `src/data/nav.ts`
and nothing else reads it, so adding a section means adding it there and
adding the page.

| Section | Page | Data |
| --- | --- | --- |
| Writing | `pages/new/writing/` | `src/content/blog/` |
| Book | `pages/new/book/` | `src/data/book.ts` |
| Reading | `pages/new/reading/` | `src/data/reading.ts` |
| Startups | `pages/new/startups/` | `src/data/projects.ts` (`kind: 'startup'`) |
| Ideas | `pages/new/ideas/` | `src/data/projects.ts` (`kind: 'idea'`) |
| Projects | `pages/new/projects/` | `src/data/projects.ts` |
| Talks | `pages/new/talks/` | `src/data/talks.ts` |
| Food & Wine | `pages/new/food-and-wine/` | in the page |
| Gardening & Landscaping | `pages/new/gardening/` | in the page |
| About | `pages/new/about.astro` | in the page |

Every project has a page of its own at `/new/projects/<id>/`, generated from
`projects.ts` by `pages/new/projects/[id].astro`. Startups and Ideas are
filtered views of the same list — there is one source of truth for the work,
not three.

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

Several pages carry visible `TODO` copy where this repository held no facts
to write from — Pluto, the book's chapter list, most of the reading list, and
the specifics on the food and gardening pages. They are deliberate: they read
as gaps rather than as filler, and they are the list of what to write before
`/new/` moves to the root.

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
