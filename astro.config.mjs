import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The full site is parked in src/_archive/ while a new one is written.
// Everything it used to serve now points back at the placeholder so old
// inbound links land somewhere real instead of a 404.
const retiredPaths = [
  '/about/',
  '/contact/',
  '/blog/',
  '/blog/appetite-for-risk/',
  '/blog/chasing-rainbows/',
  '/blog/creating-fast-websites/',
  '/projects/',
  '/projects/suky/',
  '/projects/pluto/',
  '/projects/shake/',
  '/projects/trackplan/',
  '/projects/the-irish-bavarian/',
  '/projects/the-untapped-life/',
  '/projects/grit-sweat-and-tears/',
];

export default defineConfig({
  site: 'https://kevinholler.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  redirects: Object.fromEntries(retiredPaths.map((path) => [path, '/'])),
  integrations: [
    // /new/ is the rebuild in progress. It ships so it can be looked at,
    // but it stays out of the sitemap and carries noindex until it moves
    // to the root.
    sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/new/') }),
  ],
});
