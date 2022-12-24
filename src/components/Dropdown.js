import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ submenus, dropdown }) => (
  <ul className={`${dropdown ? '' : 'hidden'}`}>
    {submenus.map((submenu) => (
      <li
        key={submenu.label}
        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        <a href={`/resume#${submenu.path}`}>{submenu.label}</a>
      </li>
    ))}
  </ul>
);

Dropdown.propTypes = {
  submenus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ),
  dropdown: PropTypes.bool.isRequired,
};

Dropdown.defaultProps = {
  submenus: [],
};

export default Dropdown;
