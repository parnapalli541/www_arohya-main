import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Arohya Capital',
  tagline: 'One-Stop Financial Solutions',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Loans' },
  { href: '#journey', label: 'How It Works' },
  { href: '#calculator', label: 'EMI Calculator' },
  { href: '#why', label: 'About' },
  { href: '#apply', label: 'Contact' },
];
