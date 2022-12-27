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
    submenu: [
      {
        label: 'Personal Stats',
        path: 'personal-stats',
      },
      {
        label: 'Open Source Stats',
        path: 'open-source-stats',
      },
      {
        label: 'OpenBB Progress',
        path: 'openbb-progress',
      },
      {
        label: 'My Travels',
        path: 'my-travels',
      },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Blog',
    path: '/blog',
    submenu: [
      {
        label: 'My posts',
        path: 'blog',
      },
      {
        label: 'My recommendations',
        path: 'recommendation',
      },
    ],
  },
  {
    label: 'Books',
    path: '/books',
  },
  {
    label: 'Media',
    path: '/media',
    submenu: [
      {
        label: 'Videos',
        path: 'videos',
      },
      {
        label: 'Podcasts',
        path: 'podcasts',
      },
      {
        label: 'News',
        path: 'news',
      },
    ],
  },
  {
    label: 'Contacts',
    path: '/contacts',
  },
];

export default routes;
