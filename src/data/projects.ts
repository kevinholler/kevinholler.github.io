import type { ImageMetadata } from 'astro';

/*
  Projects, newest first.

  Where a description exists below, it was written from your own words on
  the about page — condensed, not invented. Read it anyway; it should
  sound like you, not like a summary of you.

  Two entries are still empty because there was nothing to work from:
  the book and Pluto. Anything marked TODO is a genuine gap.

  `years` is optional on purpose. None of the date ranges have been
  confirmed, so rather than print a guess, an entry without them shows
  no dates at all. Fill them in and they appear.

  To add a screenshot:
    1. drop the file in src/assets/projects/
    2. `import shot from '../assets/projects/name.png'`
    3. set `image: shot` and write a caption

  One image per project. 1600 × 1000 or thereabouts, cropped to the part
  that makes the point — a full browser-chrome shot is mostly toolbar.
*/

export interface Project {
  name: string;
  /** "2025 —" for something current, "2015 — 2018" for something finished.
   *  Omit until it's confirmed; the entry renders fine without it. */
  years?: string;
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
    name: 'TODO — book title',
    years: 'In progress',
    description:
      'TODO — what the book is about, who it is for, and where it is up to. Worth saying plainly that it is unfinished; a work in progress described honestly is more interesting than one described vaguely.',
  },
  {
    name: 'Suky',
    description:
      'Data contracts for behavioral events — a guardrail layer that catches tracking drift before bad data reaches the warehouse. It is the tool I wish I had at every previous job that touched data.',
    links: [{ label: 'suky.ai', href: 'https://suky.ai' }],
  },
  {
    name: 'Trackplan',
    description:
      'My third venture, out of my own frustration with behavioral tracking. We had strong traction and commitments for $750K of a planned $2M round — and lost the lead investor in due diligence at the last hour.',
  },
  {
    // Placed here provisionally. Nothing in the repo says when Pluto ran,
    // so its position in the order is a guess — move it once you know.
    name: 'Pluto',
    description: 'TODO — what it was, when it ran, and what happened to it.',
  },
  {
    name: 'Shake',
    description:
      'My first company. Started with €50K from friends and family, grew to $250K from Silicon Valley investors, and did not make it. I took on €30K of personal debt to wind it down properly and not leave anyone holding the bag.',
  },
];
