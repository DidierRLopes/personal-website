const routes = [
  {
    label: 'Didier Rodrigues Lopes',
    path: '/',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Books',
    path: '/books',
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
    label: 'Blog',
    path: '/blog',
    submenu: [
      {
        label: 'My posts',
        path: 'blog',
      },
      {
        label: 'Favourites',
        path: 'favourites',
      },
    ],
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
];

export default routes;
