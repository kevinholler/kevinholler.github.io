/*
  The reading list.

  One entry has been filled in, because the about page names it as the thing
  that started everything. Every other line is a placeholder with a TODO in
  it, and that is deliberate: a reading list is the one page on a personal
  site that cannot be written by anyone but the person, and a plausible list
  of books you have not read is worse than an empty shelf.

  Fill in the ones you would actually press on someone. Ten entries you mean
  beats fifty you have skimmed — this page is a recommendation, not an
  inventory.

  Each entry:
    title   what it is called
    by      author, publication, or the person who writes it
    href    optional. Omit for books; nobody needs a link to a bookshop
    note    optional. Why it is here, in your voice. This is the whole
            value of the page — a title with no note is a title anyone
            could have listed
    year    optional. Shown after the author
*/

export interface ReadingEntry {
  title: string;
  by: string;
  href?: string;
  note?: string;
  year?: number;
}

export interface Shelf {
  /** Heading over the group. */
  name: string;
  /** One line under the heading. Optional. */
  blurb?: string;
  entries: ReadingEntry[];
}

export const shelves: Shelf[] = [
  {
    name: 'Books',
    blurb: 'The ones I have bought more than one copy of, because I keep giving them away.',
    entries: [
      {
        title: 'TODO — a book',
        by: 'TODO — author',
        note: 'TODO — one or two sentences on why. Not a summary of the book: a reason to read it.',
      },
    ],
  },
  {
    name: 'Essays and articles',
    blurb: 'Single pieces I have sent to people more than once.',
    entries: [
      {
        title: 'How to Become a Hacker',
        by: 'Eric S. Raymond',
        href: 'http://www.catb.org/~esr/faqs/hacker-howto.html',
        note: 'I found this at 14 and it was the unlock. Python, Linux, building machines, and the idea that you could just go and learn the thing — the whole career came out of one essay a stranger put on the web for free.',
      },
      {
        title: 'TODO — an essay',
        by: 'TODO — author',
        note: 'TODO — why it stuck.',
      },
    ],
  },
  {
    name: 'Blogs and newsletters',
    blurb: 'People whose new post I open immediately.',
    entries: [
      {
        title: 'TODO — a blog',
        by: 'TODO — who writes it',
        note: 'TODO — what they are good on.',
      },
    ],
  },
];
