/*
  Chasing Rainbows — the book page at /chasing-rainbows/ and its signup.

  The page's job is one thing: trade the opening chapters for an email
  address, so there is a list of readers to tell when the book launches.
  /book/ redirects here, so it still works as a short link.

  The list lives in Kit (kit.com). The form on the page posts straight to
  Kit — no JavaScript, nothing stored on this site. Kit then sends the
  confirmation email, and once someone confirms, the "incentive email" that
  delivers the chapters. See README.md → "The book signup" for setting the
  form up in Kit.

  Until `kitFormId` is set, the page shows an email link in place of the
  form, so a half-configured page never swallows a signup.

  Everything a reader sees about the story itself — the numbers and the
  beats below — is taken from Kevin's own writing: the about page and the
  essays "Chasing rainbows" and "Appetite for risk". Nothing is invented,
  but the phrasing is a draft; rewrite it in your voice.
*/

export const book = {
  title: 'Chasing Rainbows',
  subtitle: 'A memoir of building, and burying, a startup',
  /** The page's URL segment: /chasing-rainbows/. */
  slug: 'chasing-rainbows',

  /** What the reader gets. Used in headlines and the form's small print,
   *  so keep it a noun phrase that reads after "Read". */
  freebie: 'the first two chapters',

  /**
   * The numeric ID of the Kit form, from the form's embed code
   * (https://app.kit.com/forms/<this>/subscriptions). Leave empty to show
   * the email fallback instead of the form.
   */
  kitFormId: '',
};

export const bookPath = `/${book.slug}/`;
export const kitAction = (id: string) => `https://app.kit.com/forms/${id}/subscriptions`;

/** The free chapters by title. Leave empty until the titles are settled —
 *  the offer reads fine without them; with them, it reads like a promise. */
export const freeChapters: { title: string; line?: string }[] = [];

/** The story in four numbers, under the hero. From the about page. */
export const numbers: { figure: string; label: string }[] = [
  { figure: '3 years', label: 'building my first company' },
  { figure: '€50K', label: 'from friends and family' },
  { figure: '$250K', label: 'from Silicon Valley investors' },
  { figure: '€30K', label: 'of personal debt to close it properly' },
];

/** "What you'll read" — the beats of the book, in order. */
export const beats: string[] = [
  'Leaving a job I loved at New Relic to start a company.',
  'Raising the first €50K from friends and family.',
  'Bringing in $250K from Silicon Valley investors.',
  'Three years of building it with a small team in Dublin.',
  'Deciding to shut it down.',
  'Taking on €30K of personal debt so nobody was left holding the bag.',
  'Writing the shutdown post — and the twenty-four hours after it.',
  'Six months of not being able to introduce myself at a party.',
  'Why I went back and did it again.',
];

/** The four things the writing is held to. From the essay of the same name
 *  (src/content/blog/chasing-rainbows.md). */
export const commitments: { name: string; gloss: string }[] = [
  {
    name: 'Vulnerability',
    gloss: 'No hiding behind the glamorous curtain of Silicon Valley success theatre.',
  },
  { name: 'Honesty', gloss: 'Facts only, even the embarrassing ones.' },
  { name: 'Humility', gloss: 'Leaving ego and pride at the door.' },
  { name: 'Insightful and fun', gloss: 'Life is too short for self-important essays.' },
];

/** Early-reader quotes. The section only appears once there is one —
 *  real quotes from real readers, with their permission. */
export const praise: { quote: string; name: string; role?: string }[] = [];
