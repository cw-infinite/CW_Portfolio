export type TopicCategory = 'writing' | 'projects' | 'experiments' | 'notes' | 'talks';
export interface Topic {
  slug: string;
  title: string;
  summary: string;
  category: TopicCategory;
  year: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  contentHtml: string; // you can swap this with MDX later
  links?: { label: string; href: string }[];
}

export const topics: Topic[] = [
  {
    slug: 'designing-for-air',
    title: 'Designing for Air: White Space as a Material',
    summary: 'How to make layouts breathe without feeling empty. Rules for airy UI systems.',
    category: 'writing',
    year: '2026',
    tags: ['design', 'systems', 'minimalism'],
    readingTime: '6 min',
    featured: true,
    contentHtml: `<p>White space is not emptiness. It's a material. In this note I break down how I use 8pt grid + 2x breathing scale to create airy interfaces.</p><h3>Principles</h3><ul><li>60/30/10 for density</li><li>Content needs shadow, not border</li><li>One primary action per viewport</li></ul>`,
  },
  {
    slug: 'astro-react-islands',
    title: 'Astro Islands: When to Hydrate React',
    summary: 'Patterns for mixing Astro static with interactive React islands without shipping a SPA.',
    category: 'notes',
    year: '2026',
    tags: ['astro', 'react', 'performance'],
    readingTime: '8 min',
    featured: true,
    contentHtml: `<p>Islands architecture lets you ship zero JS by default. Here's my heuristic: static by default, island for intent.</p><pre><code>// Only this component hydrates
&lt;Counter client:load /&gt;</code></pre>`,
  },
  {
    slug: 'framer-motion-lab',
    title: 'Motion Study — Magnetic Hover & Stagger',
    summary: 'Recreating Linear / Stripe style micro-interactions with Framer Motion.',
    category: 'experiments',
    year: '2025',
    tags: ['framer-motion', 'animation', 'ux'],
    readingTime: '4 min',
    featured: true,
    contentHtml: `<p>A lab notebook for spring physics, drag elasticity, and layout animations.</p>`,
  },
  {
    slug: 'portfolio-os',
    title: 'Portfolio OS — A Personal CMS',
    summary: 'Built a Notion-like CMS for portfolio case studies. Structured content without losing soul.',
    category: 'projects',
    year: '2025',
    tags: ['next.js', 'cms', 'typescript'],
    readingTime: '12 min',
    contentHtml: `<p>Case study database with tags, relations, and auto-generated OG images.</p>`,
  },
  {
    slug: 'table-vs-card-ux',
    title: 'Table vs Card: The List Dilemma',
    summary: 'When a table is better than cards for dense information — and how to make both switchable.',
    category: 'writing',
    year: '2025',
    tags: ['ux', 'information-architecture'],
    readingTime: '5 min',
    contentHtml: `<p>Sometimes your users want scan, sometimes they want glance. Give them a toggle.</p>`,
  },
  {
    slug: 'anime-js-scroll',
    title: 'Scroll Orchestration with anime.js',
    summary: 'Syncing scroll progress to timelines without jank. Intersection + requestAnimationFrame recipe.',
    category: 'experiments',
    year: '2024',
    tags: ['anime.js', 'scroll', 'performance'],
    readingTime: '7 min',
    contentHtml: `<p>Using anime.timeline() tied to scrollY progress for buttery 60fps reveals.</p>`,
  },
  {
    slug: 'type-system-for-ui',
    title: 'A Type System for UI Variants',
    summary: 'Using discriminated unions to make impossible UI states impossible.',
    category: 'notes',
    year: '2024',
    tags: ['typescript', 'react'],
    readingTime: '9 min',
    contentHtml: `<p>TypeScript as design tool: variant props that enforce correct combinations.</p>`,
  },
  {
    slug: 'talks-modern-web',
    title: 'Talk — Modern Web is Actually Fast',
    summary: 'Slides and notes from my talk about Islands, View Transitions, and zero-JS by default.',
    category: 'talks',
    year: '2024',
    tags: ['talk', 'astro', 'web'],
    readingTime: '21 min video',
    contentHtml: `<p>Recording + deck + Q&A notes.</p>`,
    links: [{ label: 'Watch talk', href: '#' }, { label: 'Slides', href: '#' }]
  },
];

export const categories: TopicCategory[] = ['writing', 'projects', 'experiments', 'notes', 'talks'];
