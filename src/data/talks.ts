import type { ImageMetadata } from 'astro';

/*
  Talks, newest first.

  The LeadDev Berlin entry below is a DRAFT, written from the publicly
  listed session page and the recording on the LeadDev channel. The title,
  event, year and video URL are taken from those sources; the description
  is a summary written for this site, not LeadDev's own copy. Read it
  before it goes to the root — it should sound like you.

  To add the video still:
    1. grab a frame at 1280 × 720 and drop it in src/assets/talks/
    2. `import leaddev from '../assets/talks/leaddev-berlin.jpg'`
    3. set `still: leaddev`

  A talk without a still is just a line and a paragraph — the page does not
  invent a thumbnail to keep the rhythm. Nothing embeds: an iframe would drag
  third-party JavaScript onto a site that has none.
*/

export interface Talk {
  title: string;
  event: string;
  year: number | null;
  /** One paragraph on what the talk argued, so the page is worth
   *  reading even if nobody presses play. */
  description: string;
  /** Link to the recording. Omit if there isn't one. */
  video?: string;
  still?: ImageMetadata;
}

export const talks: Talk[] = [
  {
    title: 'From code tsunami to controlled innovation: launching software in the age of AI',
    event: 'LeadDev Berlin',
    year: 2025,
    description:
      'Copilots collapsed the distance between an idea and production-ready code, and the result is more change arriving than most delivery processes were built to absorb. The argument: separate deployment from release. Ship continuously, control exposure deliberately, and you keep the speed without paying for it in reliability and customer trust.',
    video: 'https://www.youtube.com/watch?v=lrtkB5UjdEQ',
  },
];
