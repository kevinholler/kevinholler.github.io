import type { ImageMetadata } from 'astro';

/*
  Projects, newest first.

  Everything marked TODO is a placeholder — the names and links come
  from the old site, but nothing here has been checked, and no copy
  has been written yet. Replace the descriptions with your own words
  before this goes to the root.

  To add a screenshot:
    1. drop the file in src/assets/projects/
    2. `import shot from '../assets/projects/name.png'`
    3. set `image: shot` and write a caption

  One image per project. 1600 × 1000 or thereabouts, cropped to the
  part that makes the point — a full browser-chrome shot is mostly
  empty toolbar.
*/

export interface Project {
  name: string;
  /** "2025 —" for something current, "2015 — 2018" for something finished. */
  years: string;
  /** Two or three sentences. Past tense once it stops being current. */
  description: string;
  links?: { label: string; href: string }[];
  image?: ImageMetadata;
  imageCaption?: string;
  /** Coverage lives here, dated — not in a press section. */
  coverage?: { publication: string; href: string; year: number }[];
}

export const projects: Project[] = [
  {
    name: 'Suky',
    years: 'TODO',
    description:
      'TODO — what it does, who it is for, and what is hard about it. Two or three sentences.',
    links: [{ label: 'suky.ai', href: 'https://suky.ai' }],
  },
  {
    name: 'Shake',
    years: 'TODO',
    description:
      'TODO — same shape, past tense. The date range says it ended; no explanation needed.',
    coverage: [
      // { publication: 'TODO', href: 'https://…', year: 2017 },
    ],
  },
];
