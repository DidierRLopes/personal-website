import React from 'react';
import routes from '../data/routes';
import LetterDIcon from '../icons/LetterDIcon';
import '../global.css';

const Header = () => (
  <section className="header">
    <header className="sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="/"
          className="flex hover:text-[#FF8C00]"
        >
          <LetterDIcon />
          <div className="ml-2 mt-1">
            Didier
          </div>
        </a>
        <nav className="px-2 sm:px-4 py-2.5 rounded">
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {routes.slice(1).map((route) => (
                <li className="hover:text-[#FF8C00]">
                  <a href={`/#${route.path}`}>{route.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </section>
);

export default Header;
