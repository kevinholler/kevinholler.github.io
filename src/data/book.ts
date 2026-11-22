/*
  Chasing Rainbows — the book page at /book/ and its signup form.

  The page's job is one thing: trade the opening chapters for an email
  address, so there is a list of readers to tell when the book launches.

  The list lives in Kit (kit.com). The form on the page posts straight to
  Kit — no JavaScript, nothing stored on this site. Kit then sends the
  confirmation email, and once someone confirms, the "incentive email" that
  delivers the chapters. See README.md → "The book signup" for setting the
  form up in Kit.

  Until `kitFormId` is set, the page shows an email link in place of the
  form, so a half-configured page never swallows a signup.
*/

export const book = {
  title: 'Chasing Rainbows',
  subtitle: 'A memoir of building, and burying, a startup',

  /** What the reader gets. Used in the headline and the button, so keep
   *  it a noun phrase that reads after "Read". */
  freebie: 'the first two chapters',

  /**
   * The numeric ID of the Kit form, from the form's embed code
   * (https://app.kit.com/forms/<this>/subscriptions). Leave empty to show
   * the email fallback instead of the form.
   */
  kitFormId: '',
};

export const kitAction = (id: string) => `https://app.kit.com/forms/${id}/subscriptions`;

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
