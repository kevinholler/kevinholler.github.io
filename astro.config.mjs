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
  // /book/ — the book's short link — is a page (src/pages/book/), not a
  // redirect here, so it follows the title set in src/data/book.ts.
  redirects: Object.fromEntries(retiredPaths.map((path) => [path, '/'])),
  integrations: [
    // /new/ is the rebuild in progress. It ships so it can be looked at,
    // but it stays out of the sitemap and carries noindex until it moves
    // to the root.
    // The book's thanks page only makes sense straight after the signup
    // form, and /book/ is only a redirect.
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          !path.startsWith('/new/') &&
          path !== '/book/' &&
          !path.endsWith('/thanks/')
        );
      },
    }),
  ],
});
