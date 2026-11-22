/*
  The sections of the site, in the order they appear in the masthead.

  Four, on purpose. The site is about one thing now — the work at
  CodeRabbit and what AI is doing to how software (and the rest of life)
  gets made — and the masthead says so by not offering ten other doors.
  The sections that used to sit here (Reading, Startups, Ideas, Projects,
  Food & Wine, Gardening, and the old Book page) are parked in
  src/_archive/sections/. Book came back as /chasing-rainbows/ — at the root,
  not under /new/, because it is public and being promoted now.

  One group. The header still takes groups (and marks a boundary between
  them with a middot) so it doesn't change shape if sections come back —
  but a middot in a row of four is punctuation, not structure.

  Adding a section means adding it here and adding the page. Nothing else
  reads this list.
*/

export type NavId = 'index' | 'writing' | 'book' | 'speaking' | 'about';

export interface NavLink {
  id: NavId;
  label: string;
  href: string;
}

export const navGroups: NavLink[][] = [
  [
    { id: 'writing', label: 'Writing', href: '/new/writing/' },
    { id: 'book', label: 'Book', href: '/chasing-rainbows/' },
    { id: 'speaking', label: 'Speaking', href: '/new/speaking/' },
    { id: 'about', label: 'About', href: '/new/about/' },
  ],
];
