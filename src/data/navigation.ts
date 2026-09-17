export interface NavLink {
  label: string;
  href: string;
  html?: string; // bunch of html you can inject as navigation description
  badge?: string;
}

export const navLinks: NavLink[] = [
  { label: 'Index', href: '/', html: '<span>00 — Home base</span>' },
  { label: 'Topics', href: '/topics', html: '<span>All explorations & notes</span>', badge: '36' },
  { label: 'Writing', href: '/topics?filter=writing', html: '<em>Essays, systems thinking</em>' },
  { label: 'Projects', href: '/projects', html: '<strong>Selected builds</strong> · 2023—2026' },
  { label: 'Experiments', href: '/topics?filter=experiments', html: '<span>Lab / R&D / Prototypes</span>' },
  { label: 'About', href: '/about', html: '<span>Bio, stack, contact</span>' },
];

export const externalLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Read.cv', href: '#' },
  { label: 'Email', href: 'mailto:hello@example.com' },
];
