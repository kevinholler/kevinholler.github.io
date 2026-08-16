# kevinholler.com

Personal site for Kevin Holler. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Current state: placeholder

The site is a single "coming soon" page while a new one is written.

- `src/pages/index.astro` — the placeholder
- `src/pages/404.astro` — matching not-found page
- `src/layouts/Minimal.astro` — the only layout; all styling lives here

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
