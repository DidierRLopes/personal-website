import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header className="sticky top-0 z-50 bg-[#040406]">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a
        href="/"
        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        Didier Rodrigues Lopes
      </a>
      <Navbar />
    </div>
  </header>
);

export default Header;
