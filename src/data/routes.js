const routes = [
  {
    label: 'Didier Rodrigues Lopes',
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
    submenu: [
      {
        label: 'Experience',
        path: 'experience',
      },
      {
        label: 'Articles',
        path: 'articles',
      },
      {
        label: 'Education',
        path: 'education',
      },
      {
        label: 'Courses',
        path: 'courses',
      },
    ],
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Books',
    path: '/books',
  },
  {
    label: 'Videos',
    path: '/videos',
  },
  {
    label: 'Contacts',
    path: '/contacts',
  },
];

export default routes;
