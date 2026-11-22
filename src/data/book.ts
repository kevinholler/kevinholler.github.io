/*
  The book — everything the public book page says, in one place.

  ── Rules for anything on this page (from the book's README) ──────────
  The book's planning files are private working notes, not website copy.
  Before adding anything here:

  1. No real names of anyone in the book except Kevin, and institutions.
  2. No private details: salaries, investor amounts, family finances,
     health details, the contents of private letters.
  3. Protect the ending. Never mention the companies that came after,
     the decision at the luggage carousel, the money that was turned
     down, or the two rocks. Nothing that hints he started again.
  4. The title is a working title. It lives here, once: change `title`
     and `slug` and the whole site follows (page, URL, nav, thank-you
     page, the homepage link). /book/ always redirects to the current URL.
  5. Chapter titles are working titles too. Never put them in a URL.

  Copy follows the book's own voice: understatement, no lessons, never
  telling the reader what to feel.

  ── The signup ──────────────────────────────────────────────────────────
  The list lives in Kit (kit.com). The form posts straight to Kit — no
  JavaScript, nothing stored on this site. Kit sends the confirmation
  email and, once the chapters are ready and attached as the form's
  incentive, the chapters. See README.md → "The book signup".
  Until `kitFormId` is set, the page shows an email link instead.
*/

export const book = {
  /** Working title. */
  title: 'Chasing Rainbows',
  subtitle: 'A memoir of building, and burying, a startup',
  /** The page's URL segment — the title, as a slug. */
  slug: 'chasing-rainbows',

  /** What a subscriber gets. Reads after "Read". */
  freebie: 'the opening chapters',

  /**
   * The numeric ID of the Kit form, from its embed code
   * (https://app.kit.com/forms/<this>/subscriptions). Empty = the page
   * shows an email link instead of the form.
   */
  kitFormId: '',
};

export const bookPath = `/${book.slug}/`;
export const bookThanksPath = `/${book.slug}/thanks/`;
export const kitAction = (id: string) => `https://app.kit.com/forms/${id}/subscriptions`;

/**
 * The pitch, in the first person. Built from the back-cover copy in the
 * Cover & Brand design. Says what happened, not what it meant.
 */
export const pitch = [
  'In 2014 I started a company to help graduates find their first jobs. Over the next two years I took it from Ireland to Silicon Valley and back, raised money one cheque at a time, lived out of spare rooms in San Francisco, had lunch with the President of Ireland, and watched the money run out anyway.',
  'Told in scenes rather than lessons — for anyone who has ever bet everything on an idea, and for the people who loved them through it.',
];

/**
 * The book's shape: sixteen chapters in three parts, one colour each, red
 * to violet — the bars from the cover, which shrink as the story runs
 * down. Heights and colours are the cover's (Cover & Brand → Brand sheet).
 * Part names and years only; chapter titles stay off the site.
 */
export const parts = [
  { name: 'The Leap', years: '2014', chapters: 5 },
  { name: 'The Illusion', years: '2015', chapters: 6 },
  { name: 'The Unraveling', years: '2016', chapters: 5 },
];

export const bars: { color: string; height: number }[] = [
  { color: '#C8553D', height: 87 },
  { color: '#D06E40', height: 95 },
  { color: '#D98742', height: 85 },
  { color: '#E08E45', height: 100 },
  { color: '#E4A946', height: 89 },
  { color: '#E8C547', height: 76 },
  { color: '#A9B259', height: 83 },
  { color: '#6A9F6B', height: 65 },
  { color: '#548D8E', height: 69 },
  { color: '#3E7CB1', height: 53 },
  { color: '#4565A0', height: 57 },
  { color: '#4B4E8C', height: 40 },
  { color: '#5F5293', height: 31 },
  { color: '#755697', height: 34 },
  { color: '#8A5A9E', height: 17 },
  { color: '#7E5194', height: 4 },
];

/**
 * "What you'll read" — moments from the book, in order. Each one is a
 * scene from the chapter map, stated flatly. Nothing from the ending,
 * no amounts, no health details, no names.
 */
export const moments: string[] = [
  'A bus across Dublin to a free meet-up, and the first break: “You should work for us.”',
  'A company run from a kitchen table, in a flat the third housemate slowly lost to it.',
  'Launch day: Ireland’s first graduate recruitment marketplace.',
  'Live on national television, then a bus home I couldn’t pay for — and a driver who didn’t recognise me.',
  'The last three hundred euro, spent in a San Francisco bar.',
  'Spare rooms, ninety-day immigration clocks, and lunch with the President of Ireland.',
  'A suitcase at my mother’s house, and a bus at five in the morning.',
  'A new name that nobody noticed.',
  'A wake for dead companies, and a hundred people raising whiskey.',
];

/** How the book is written — the standing rules from its style guide, as
 *  promises a reader can hold it to. */
export const promises: { name: string; gloss: string }[] = [
  { name: 'Scenes, not lessons', gloss: 'No advice, no frameworks. What happened, in the order it happened.' },
  { name: 'Nothing invented', gloss: 'If I don’t remember the colour of the bag, the bag has no colour.' },
  { name: 'Names changed', gloss: 'It’s my account, not an audit of anyone else’s life.' },
  { name: 'No startup required', gloss: 'If a scene needs a glossary to land, it isn’t in the book.' },
];

/** Early-reader quotes — real readers, with permission. The section
 *  appears once there is one. */
export const praise: { quote: string; name: string; role?: string }[] = [];

/** The free chapters by title, shown inside the offer once settled. Leave
 *  empty while chapter titles are still working titles. */
export const freeChapters: { title: string; line?: string }[] = [];
