import { Home, Settings } from './views';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
  },
];
