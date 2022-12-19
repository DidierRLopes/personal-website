import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../components/Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Contacts = () => (
  <aside className="flex flex-1 overflow-hidden overflow-y-auto w-64 content-center text-center rounded-xl darker_grey" aria-label="Sidebar">
    <div className="py-4 ">
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
      <div className="_btn-tertiary">
        <a
          href="https://cal.com/didierlopes/15min"
          target="_blank"
          rel="noreferrer noopener"
        >
          15 min meeting
        </a>
      </div>
      <p className="text-sm font-ligth my-4">didier.lopes [at] openbb.finance</p>
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

export default Contacts;
