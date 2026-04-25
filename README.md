# kevinholler.com

Personal site for Kevin Holler — Staff Solutions Engineer at LaunchDarkly, building suky.ai.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

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

## Add a blog post

Drop a markdown file in `src/content/blog/`:

```markdown
---
title: "Post title"
description: "One-line summary."
pubDate: 2026-04-26
tags: ["Writing"]
---

Post body in markdown.
```

It surfaces automatically on `/blog/` and the home page Writing strip.
