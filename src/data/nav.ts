/*
  The sections of the site, in the order they appear in the masthead.

  They're grouped: what I write, what I've built, what I do away from a
  screen, and then about. The groups aren't labelled — the header marks a
  boundary with a middot rather than a heading, the same device the rest of
  the site uses to join short related fragments. A label on four groups of
  two or three items would be more furniture than the sections themselves.

  Adding a section means adding it here and adding the page. Nothing else
  reads this list.
*/

export type NavId =
  | 'index'
  | 'writing'
  | 'book'
  | 'reading'
  | 'startups'
  | 'ideas'
  | 'projects'
  | 'talks'
  | 'food'
  | 'garden'
  | 'about';

export interface NavLink {
  id: NavId;
  label: string;
  href: string;
}

export const navGroups: NavLink[][] = [
  [
    { id: 'writing', label: 'Writing', href: '/new/writing/' },
    { id: 'book', label: 'Book', href: '/new/book/' },
    { id: 'reading', label: 'Reading', href: '/new/reading/' },
  ],
  [
    { id: 'startups', label: 'Startups', href: '/new/startups/' },
    { id: 'ideas', label: 'Ideas', href: '/new/ideas/' },
    { id: 'projects', label: 'Projects', href: '/new/projects/' },
    { id: 'talks', label: 'Talks', href: '/new/talks/' },
  ],
  [
    { id: 'food', label: 'Food & Wine', href: '/new/food-and-wine/' },
    { id: 'garden', label: 'Gardening & Landscaping', href: '/new/gardening/' },
  ],
  [{ id: 'about', label: 'About', href: '/new/about/' }],
];
