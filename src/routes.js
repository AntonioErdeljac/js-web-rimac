import { Home, Settings } from './views';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    icon: 'tachometer-alt',
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    icon: 'cog',
  },
];
