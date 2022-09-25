import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Didier Lopes</h2>
        <p>Founder and CEO @ OpenBB 🦋</p>
      </header>
    </section>

    <section className="blurb">
      <h2>CONTACT ME</h2>
      <p>
        <a href="https://cal.com/didierlopes/15min">
          schedule a 15 min meeting
        </a><br />
        didier.lopes@openbb.finance
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Didier Rodrigues Lopes</p>
    </section>
  </section>
);

export default SideBar;