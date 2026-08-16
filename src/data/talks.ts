import type { ImageMetadata } from 'astro';

/*
  Talks, newest first.

  Everything marked TODO is a placeholder. Fill in the real title,
  year, and recording URL for the LeadDev Berlin talk.

  To add the video still:
    1. grab a frame at 1280 × 720 and drop it in src/assets/talks/
    2. `import leaddev from '../assets/talks/leaddev-berlin.jpg'`
    3. set `still: leaddev`

  A talk without a recording is just a line and a paragraph — the page
  does not invent a thumbnail to keep the rhythm. Nothing embeds: an
  iframe would drag third-party JavaScript onto a site that has none.
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
    title: 'TODO — talk title',
    event: 'LeadDev Berlin',
    year: null,
    description: 'TODO — one paragraph on what the talk argued.',
    // video: 'https://…',
  },
];
