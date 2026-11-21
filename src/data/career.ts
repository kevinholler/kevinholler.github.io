/*
  The career, one row per step, oldest first — the timeline on the about
  page.

  Dates and titles come from Kevin's resume (November 2026), with two
  corrections from Kevin: the first company is called Shake here (the
  resume lists it as Huma Inc.), and CodeRabbit starts in 2026, which
  closes LaunchDarkly at 2024 – 2026. Contrast has no dates of its own, so
  it sits inside the IADT row. Trackplan has none either and is left to the
  prose further down the page.

  DRAFT: the one-line `note` on each row was written for the redesign from
  the resume and the about page's own prose. Rewrite them in your voice.

  `tracks` is what makes the page's argument — that the path moved between
  disciplines on purpose — visible at a glance. Each row fills the squares
  for the disciplines that job was mostly about; read down the column and
  the zig-zag is the career.
*/

export const TRACKS = ['Engineering', 'Sales', 'Product', 'Data', 'Founder'] as const;
export type Track = (typeof TRACKS)[number];

export interface Step {
  years: string;
  role: string;
  org: string;
  note: string;
  tracks: Track[];
  /** The row for the job I'm in now. */
  current?: boolean;
}

export const career: Step[] = [
  {
    years: '2004',
    role: 'Started at 14',
    org: 'Ireland',
    note: 'Read Eric Raymond’s “How to Become a Hacker”. Python, Linux, building computers.',
    tracks: ['Engineering'],
  },
  {
    years: '2008 – 2011',
    role: 'Student, then Contrast',
    org: 'IADT, Dublin',
    note: 'Freelancing as a product engineer while studying, then Contrast — a software shop run by the now co-founders of Intercom.',
    tracks: ['Engineering'],
  },
  {
    years: '2011 – 2013',
    role: 'Sales Engineer, EMEA',
    org: 'Engine Yard',
    note: 'First sales engineer in the region, by choice rather than a developer role.',
    tracks: ['Sales'],
  },
  {
    years: '2013 – 2014',
    role: 'Lead Sales Engineer, EMEA',
    org: 'New Relic',
    note: 'First SE on the EMEA founding team. Left to start a company.',
    tracks: ['Sales'],
  },
  {
    years: '2014 – 2016',
    role: 'Founder & CEO',
    org: 'Shake',
    note: 'My first company. It didn’t make it, and it taught me more than anything since.',
    tracks: ['Founder'],
  },
  {
    years: '2016 – 2017',
    role: 'Head of Product',
    org: 'ChangeX',
    note: 'Led the product team and the data strategy behind its planning.',
    tracks: ['Product'],
  },
  {
    years: '2017 – 2019',
    role: 'Founder & Data Architect',
    org: 'Precision Labs, Munich',
    note: 'Analytics systems for global enterprises, Pampers’ loyalty app among them.',
    tracks: ['Data', 'Founder'],
  },
  {
    years: '2019 – 2020',
    role: 'Alliance Manager, DACH',
    org: 'Fivetran',
    note: 'Employee number one in Germany; opened the Munich office.',
    tracks: ['Sales'],
  },
  {
    years: '2020 – 2022',
    role: 'Enterprise Sales Engineer, DACH',
    org: 'Fivetran',
    note: 'Enterprise pre-sales end to end: architecture, proofs of concept, security reviews.',
    tracks: ['Sales', 'Data'],
  },
  {
    years: '2022 – 2024',
    role: 'Strategic Sales Engineer, EMEA',
    org: 'Atlan',
    note: 'First SE in EMEA — the fourth time — on the largest and most complex deals.',
    tracks: ['Sales', 'Data'],
  },
  {
    years: '2024 – 2026',
    role: 'Staff Solutions Engineer',
    org: 'LaunchDarkly',
    note: 'AI subject-matter expert for DACH and EMEA, taking LLM features into production.',
    tracks: ['Sales', 'Engineering'],
  },
  {
    years: '2026 –',
    role: 'Field Engineering',
    org: 'CodeRabbit',
    note: 'AI code review, and what the software lifecycle looks like once AI writes the code.',
    tracks: ['Engineering', 'Sales'],
    current: true,
  },
];
