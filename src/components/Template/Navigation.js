import React from 'react';
import { Link } from 'react-router-dom';

// import Hamburger from './Hamburger';
import routes from '../../data/routes';
import MenuItems from '../MenuItems';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <div>
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#040406]">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Didier Rodrigues Lopes
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:bg-[#040406] dark:border-gray-700">
            { /* routes.filter((l) => !l.index).map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded
                    hover:bg-gray-100 md:hover:bg-transparent md:border-0
                    md:hover:text-blue-700 md:p-0 dark:text-gray-400
                    md:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {l.label}
                </Link>
              </li>
            )) */ }
            {routes.filter((l) => !l.index).map((l) => (
              <li key={l.label}>
                <MenuItems
                  to={l.path}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {l.label}
                </MenuItems>
              </li>
            ))}
            <li key="resume">
              <Link
                to="/resume"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                resume
                <div className="subnav-content">
                  <a href="#link1">Link 1</a>
                  <a href="#link2">Link 2</a>
                  <a href="#link3">Link 3</a>
                  <a href="#link4">Link 4</a>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    { /* This needs to be implemented based on the screen size, do that after */ }
    { /* <Hamburger /> */ }
  </div>
);

export default Navigation;
