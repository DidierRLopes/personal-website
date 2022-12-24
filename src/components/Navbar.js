import React from 'react';

import routes from '../data/routes';

import MenuItems from './MenuItems';

const Navbar = () => (
  <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#040406]">
    <div className="container-fluid hidden w-full md:block md:w-auto">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:bg-[#040406] dark:border-gray-700">
        {routes.slice(1).map((route) => (
          <MenuItems items={route} />
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
