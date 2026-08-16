import type { ImageMetadata } from 'astro';
import leaddevBerlin from '../assets/talks/leaddev-berlin.jpg';

/*
  Talks, newest first.

  The LeadDev Berlin entry below is a DRAFT, written from the publicly
  listed session page and the recording on the LeadDev channel. The title,
  event, year and video URL are taken from those sources; the description
  is a summary written for this site, not LeadDev's own copy. Read it
  before it goes to the root — it should sound like you.

  The still is the LeadDev title card at 588 × 330, which is smaller than
  the 44rem (704px) figure it sits in. The page caps its srcset at the
  source width rather than upscaling, so it renders sharp but not at full
  column width. A 1280 × 720 frame would fill it properly — worth asking
  LeadDev for, or grabbing from the recording.

  To swap it: replace src/assets/talks/leaddev-berlin.jpg. Nothing else
  needs to change.

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
    still: leaddevBerlin,
  },
];
