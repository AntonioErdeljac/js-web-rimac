export default ({ Home, Settings, Help } = {}) => [
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
  {
    path: '/help',
    component: Help,
    exact: true,
    icon: 'question',
  },
];
