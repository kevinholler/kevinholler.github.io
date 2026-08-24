import type { ImageMetadata } from 'astro';

/*
  Everything I've built, newest first.

  Each entry now has a page of its own at /new/projects/<id>/, so there are
  two lengths of copy to keep straight:

    summary      one line. The listings show this; nothing else.
    description  a paragraph. Opens the detail page.
    sections     the rest of the detail page. Omit it and the page is just
                 the opening paragraph and the facts, which is a perfectly
                 respectable page for something that hasn't earned more.

  `kind` is what the Startups and Ideas pages filter on. It is not a badge
  for its own sake — the two sections in the nav have to be built from
  something, and a field is better than two hand-maintained lists that
  drift apart.

  The book is deliberately not here. It has its own section and its own
  page at /new/book/ (src/data/book.ts), because a book in a list of
  software is a book nobody clicks.

  Where a description exists below, it was written from your own words on
  the about page and the archived suky.ai case study — condensed, not
  invented. Read it anyway; it should sound like you, not like a summary
  of you.

  Anything marked TODO is a genuine gap: nothing in this repo says what
  Pluto was, so the page says so rather than guessing.

  `years` is optional on purpose. None of the date ranges have been
  confirmed, so rather than print a guess, an entry without them shows no
  dates at all. Fill them in and they appear.

  To add a screenshot:
    1. drop the file in src/assets/projects/
    2. `import shot from '../assets/projects/name.png'`
    3. set `image: shot` and write a caption

  One image per project. 1600 × 1000 or thereabouts, cropped to the part
  that makes the point — a full browser-chrome shot is mostly toolbar.
*/

export type ProjectKind = 'startup' | 'idea';

export interface ProjectSection {
  heading: string;
  /** One string per paragraph. Plain text — no markup. */
  body: string[];
}

export interface Project {
  /** URL segment. /new/projects/<id>/ */
  id: string;
  name: string;
  kind: ProjectKind;
  /** "2025 —" for something current, "2015 — 2018" for something finished.
   *  Omit until it's confirmed; the entry renders fine without it. */
  years?: string;
  /** One line, for the listings. */
  summary: string;
  /** Two or three sentences. Past tense once it stops being current. */
  description: string;
  /** The body of the detail page. */
  sections?: ProjectSection[];
  /** Shown down the side of the detail page. Role, status, stack, outcome —
   *  whatever is true and short. */
  facts?: { label: string; value: string }[];
  links?: { label: string; href: string }[];
  image?: ImageMetadata;
  imageCaption?: string;
  /** Coverage lives here, dated — not in a press section. */
  coverage?: { publication: string; href: string; year: number }[];
}

export const projects: Project[] = [
  {
    id: 'suky',
    name: 'Suky',
    kind: 'startup',
    summary: 'Data contracts for behavioral events.',
    description:
      'Data contracts for behavioral events — a guardrail layer that catches tracking drift before bad data reaches the warehouse. It is the tool I wish I had at every previous job that touched data.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Every product team I have worked with treats event tracking as plumbing — until it breaks. Then it is a six-week archaeology project to work out which deploy silently broke the funnel dashboard the CEO checks every morning.',
          'The frustrating part is that this is not a hard problem. It is drift, schema evolution, and missing fields — three things we already know how to catch in API contracts and database migrations. We just do not do it for events.',
        ],
      },
      {
        heading: 'The approach',
        body: [
          'Suky watches the event stream and runs three loops continuously. Detect: live schema diffing against a versioned contract, which catches missing fields, type mismatches, and out-of-enum values within seconds of an event arriving. Enforce: CI checks that block a pull request which would break a contract, with generated typings keeping producers honest at the source. Resolve: drift routed as a ticket to the team that owns the producer, with the expected schema attached.',
          'Each loop has a different audience — engineers, analysts, and product managers respectively — which is the part most tools get wrong. A schema error that only an engineer can read is a schema error nobody fixes.',
        ],
      },
      {
        heading: 'Where it is up to',
        body: [
          'TODO — current state, what is working, what is not, and what you want from anyone reading this. A pre-launch page that does not say what it wants is a brochure.',
        ],
      },
    ],
    facts: [
      { label: 'Role', value: 'Founder · full-stack · 0→1' },
      { label: 'Status', value: 'TODO — confirm before this goes to the root' },
      { label: 'Stack', value: 'TypeScript · Postgres · ClickHouse · LaunchDarkly' },
    ],
    links: [{ label: 'suky.ai', href: 'https://suky.ai' }],
  },
  {
    id: 'trackplan',
    name: 'Trackplan',
    kind: 'startup',
    summary: 'My third venture. Lost the lead investor in due diligence.',
    description:
      'My third venture, out of my own frustration with behavioral tracking. We had strong traction and commitments for $750K of a planned $2M round — and lost the lead investor in due diligence at the last hour.',
    sections: [
      {
        heading: 'What happened',
        body: [
          'The traction was real and the round was all but closed. Losing a lead at the last hour does not just cost you that cheque — it costs you the other commitments that were contingent on it, and it costs you the months you spend finding out that it did.',
          'The timing coincided with the birth of my son. What initially felt like a setback turned out to be a profound recalibration.',
        ],
      },
      {
        heading: 'What I took from it',
        body: [
          'TODO — the specific lessons, in your words. This is the one people will actually read: a founder writing plainly about a round that did not close is rarer than a founder writing about one that did.',
        ],
      },
    ],
    facts: [{ label: 'Role', value: 'Founder' }],
  },
  {
    // Placed here provisionally. Nothing in the repo says when Pluto ran,
    // so its position in the order is a guess — move it once you know.
    id: 'pluto',
    name: 'Pluto',
    kind: 'idea',
    summary: 'TODO — one line on what Pluto is.',
    description: 'TODO — what it was, when it ran, and what happened to it.',
    sections: [
      {
        heading: 'TODO',
        body: [
          'There is nothing in this repository about Pluto — not a date, not a description, not a link. Rather than pad the page with a guess, it says so. Write two or three paragraphs here and delete this section.',
        ],
      },
    ],
  },
  {
    id: 'shake',
    name: 'Shake',
    kind: 'startup',
    summary: 'My first company. Three years, and it did not make it.',
    description:
      'My first company. Started with €50K from friends and family, grew to $250K from Silicon Valley investors, and did not make it. I took on €30K of personal debt to wind it down properly and not leave anyone holding the bag.',
    sections: [
      {
        heading: 'Three years',
        body: [
          'Shake came out of New Relic, where I had joined the founding EMEA team as its first solutions engineer. That experience was rocket fuel: I had spent two years watching how software got sold and supported at scale, and I wanted to build the thing rather than demo it.',
          'It started with €50K from friends and family and grew to $250K from Silicon Valley investors. It ran for three years. It did not make it.',
        ],
      },
      {
        heading: 'Winding it down',
        body: [
          'I took on €30K of personal debt to close it properly rather than leave anyone holding the bag. It was awful, and it was gone three years later — which is the honest thing to say about financial risk generally: it is the loudest of the risks and the most recoverable.',
          'When it ended I wrote a blog post announcing the shutdown and detailing what had contributed to it. In Ireland at the time, failure was rarely spoken about openly. What followed twenty-four hours later shocked me: job offers, interview requests, founders emailing to share the same experience. The thing I was most afraid to say out loud was the thing other people most needed to hear.',
          'The three years of Shake taught me more about myself, people, and business than any other period of my life.',
        ],
      },
    ],
    facts: [{ label: 'Role', value: 'Founder' }],
  },
];

export const projectsOfKind = (kind: ProjectKind) => projects.filter((p) => p.kind === kind);

export const projectPath = (project: Project) => `/new/projects/${project.id}/`;
