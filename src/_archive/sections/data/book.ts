/*
  Chasing Rainbows — the book, and the page at /new/book/.

  The framing below is not invented. It is drawn from the essay of the same
  name in src/content/blog/chasing-rainbows.md, which is where the title and
  the four commitments come from, and from the about page. Everything that
  needed a fact this repository does not hold — a word count, a publication
  route, a date — is marked TODO rather than filled with a plausible number.

  The chapter list is the part most worth keeping current. A book page whose
  progress line has not moved in a year reads worse than a book page with no
  progress line at all, so either keep `status` honest or delete the field.
*/

export interface BookPart {
  title: string;
  /** One or two sentences on what this part covers. */
  summary: string;
  /** Where it actually is. Shown next to the title, so keep it short. */
  status: 'Drafted' | 'In progress' | 'Outlined' | 'Not started';
}

/** The four things the writing is held to. From the essay. */
export const commitments: { name: string; gloss: string }[] = [
  {
    name: 'Vulnerability',
    gloss: 'No hiding behind the glamorous curtain of Silicon Valley success theatre.',
  },
  { name: 'Honesty', gloss: 'Facts only, even the embarrassing ones.' },
  { name: 'Humility', gloss: 'Leaving ego and pride at the door.' },
  { name: 'Insightful and fun', gloss: 'Life is too short for self-important essays.' },
];

export const parts: BookPart[] = [
  {
    title: 'TODO — part one',
    summary:
      'TODO — the parts are the one thing on this page a reader can judge progress by. Replace these four with the real ones, however provisional.',
    status: 'Not started',
  },
];

export const facts: { label: string; value: string }[] = [
  { label: 'Status', value: 'In progress' },
  { label: 'Form', value: 'TODO — memoir, essay collection, something else' },
  { label: 'Length', value: 'TODO' },
  { label: 'Route', value: 'TODO — publisher, self-published, undecided' },
];
