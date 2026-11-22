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
| Book | `pages/chasing-rainbows/` (public, at the root; `/book/` redirects) | `src/data/book.ts` |
| Speaking | `pages/new/speaking/` | `src/data/talks.ts` |
| About | `pages/new/about.astro` | in the page, plus `src/data/career.ts` (the timeline) |

Reading, Startups, Ideas, Projects, Food & Wine, Gardening, and the old Book
page are parked in `src/_archive/sections/`, which mirrors `src/` — move a
file back to the same path under `src/` and its relative imports work again.
(The archived `data/book.ts` would now clash with the live one.)

### The book

The book page is public and indexed now, ahead of the rest of the rebuild,
so it can be promoted. Everything it says lives in `src/data/book.ts`, and
**the rules at the top of that file govern every word**: no real names but
Kevin's and institutions', no private details (investor amounts, family
finances, health, letters), and nothing that gives away the ending.

The title is a working title. `title` and `slug` in `src/data/book.ts` are
the only places it is set: the page (`src/pages/[book]/`), its URL, the
thank-you page, the nav and the homepage link all follow. `/book/` is a
short link that always forwards to the current URL.

Shared links show the cover (`og:image`). Early-reader quotes (`praise`)
and the free chapters' titles (`freeChapters`) appear once filled in.

### The book signup

The form posts straight to [Kit](https://kit.com): no JavaScript, nothing
stored here. To switch it on:

1. In Kit, create a **form** (any template; only its settings matter).
2. Under the form's **Incentive** settings, turn on the incentive email and
   attach the opening chapters (PDF and/or EPUB) once they're ready. Until
   then the confirmation email simply puts people on the list.
3. Under **After subscribing**, choose *Redirect to an external page* and
   set `https://kevinholler.com/<slug>/thanks/` — today,
   `https://kevinholler.com/chasing-rainbows/thanks/`.
4. Copy the form's numeric ID from its embed code
   (`https://app.kit.com/forms/<ID>/subscriptions`) into `kitFormId` in
   `src/data/book.ts`.

Until `kitFormId` is set, the page shows an email link instead of a form.
The thank-you page is not indexed and is left out of the sitemap.

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
- The one-line notes on the about page's timeline (`src/data/career.ts`)
  are drafts written from the resume; rewrite them in your own voice.
- The about page's opening still says "the last 12 years"; from 2011 it is
  closer to 15.

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
