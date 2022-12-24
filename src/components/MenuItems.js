import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import ChevronDownIcon from '../assets/ChevronDownIcon';

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  function toggle() {
    setDropdown(!dropdown);
  }
  return (
    <li className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      {items.submenu ? (
        <div className="__navbar">
          <button
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={toggle}
            className="flex w-full items-center justify-between rounded-sm"
          >
            {items.label}
            <ChevronDownIcon
              className={
                clsx('tw-transition', { '-rotate-90': dropdown })
              }
            />
          </button>
          <Dropdown
            label={items.label}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </div>
      ) : (
        <div className="__navbar">
          <a href={items.path}>{items.label}</a>
        </div>
      )}
    </li>
  );
};

/*
const MenuItems = ({ items }) => (
  <li className="">
    {items.submenu ? (
      <div>
        <button type="button" aria-haspopup="menu">
          {items.label}{' '}
        </button>
        <Link
          to={items.path}
          submenus={items.submenu}
        />
      </div>
    ) : (
      <a href={items.path}>{items.label}</a>
    )}
  </li>
);
*/

MenuItems.propTypes = {
  items: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    submenu: PropTypes.string,
  }),
};

MenuItems.defaultProps = {
  items: {
    submenu: null,
  },
};

export default MenuItems;
