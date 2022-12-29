import React from 'react';

import routes from '../data/routes';

import MenuItems from './MenuItems';

const Navbar = () => (
  <nav className="px-2 sm:px-4 py-2.5 rounded">
    <div className="hidden w-full md:block md:w-auto">
      <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        {routes.slice(1).map((route) => (
          <MenuItems items={route} />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
