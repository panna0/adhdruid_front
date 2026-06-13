import type { StaggeredMenuItem } from './StaggeredMenu';

export const homeMenuItems: StaggeredMenuItem[] = [
  {
    label: 'Home',
    ariaLabel: 'Vai alla home',
    link: '/',
  },
  {
    label: 'Privacy',
    ariaLabel: 'Vai alla pagina privacy',
    link: '/privacy',
  },
  {
    label: 'Assistenza',
    ariaLabel: 'Vai alla pagina assistenza',
    link: '/assistenza',
  },
];

export const menuColors = ['#2e3a8a', '#1c1a3a', '#12102b'] as const;
