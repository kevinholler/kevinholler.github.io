import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const oldProjects = [
  'pluto',
  'shake',
  'trackplan',
  'the-irish-bavarian',
  'the-untapped-life',
  'grit-sweat-and-tears',
];

const projectRedirects = Object.fromEntries(
  oldProjects.map((slug) => [`/projects/${slug}/`, '/projects/']),
);

export default defineConfig({
  site: 'https://kevinholler.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  redirects: {
    ...projectRedirects,
    '/blog/creating-fast-websites/': '/blog/appetite-for-risk/',
  },
  integrations: [sitemap()],
});
