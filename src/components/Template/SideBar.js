import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <aside className="w-64 content-center text-center" aria-label="Sidebar">
    <div className="overflow-y-auto py-4 rounded-xl dark:bg-gray-800">
      <Link to="/">
        <img
          className="rounded-full mx-auto"
          src={`${PUBLIC_URL}/images/me.png`}
          alt="Didier"
        />
      </Link>
      <div className="text-white my-4">
        <p className="text-xl uppercase font-bold mb-2">Didier Lopes</p>
        <p className="text-sm font-ligth mb-0">Founder and CEO</p>
        <p className="text-sm font-ligth">OpenBB 🦋</p>
      </div>
    </div>

    <div className="py-4 px-3 rounded-xl dark:bg-gray-400 text-white">
      <p className="text-xl uppercase font-bold mb-2">REACH OUT</p>
      <div className="dark:bg-gray-800 text-white font-light hover:text-black hover:bg-white py-2 px-4 border border-black hover:border-transparent content-center align-middle rounded">
        <a
          href="https://cal.com/didierlopes/15min"
          target="_blank"
          rel="noreferrer noopener"
        >
          15 min meeting
        </a>
      </div>
      <p className="text-sm font-ligth my-4">didier.lopes@openbb.finance</p>
      {!window.location.pathname.includes('/resume') ? (
        <Link to="/resume" className="w-120">
          Learn More
        </Link>
      ) : (
        <Link to="/" className="w-120">
          About Me
        </Link>
      )}
    </div>

    <div className="w-120">
      <ContactIcons />
      <p className="copyright">&copy; Didier Rodrigues Lopes</p>
    </div>
  </aside>
);

export default SideBar;
