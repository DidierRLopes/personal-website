import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header className="sticky top-0 z-50 bg-blue-200">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a
        href="/"
        className="block py-2 pl-3 pr-4 text-black font-semibold rounded md:border-0 md:hover:text-blue-700"
      >
        Didier Rodrigues Lopes
      </a>
      <Navbar />
    </div>
  </header>
);

export default Header;
