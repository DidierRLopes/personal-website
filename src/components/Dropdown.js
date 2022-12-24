import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ label, submenus, dropdown }) => (
  <ul className={`${dropdown ? '' : 'hidden'}`}>
    {submenus.map((submenu) => (
      <li
        key={submenu.label}
        className="__navbar flex-none block py-2 pl-3 pr-4 rounded"
      >
        <a
          href={`/${label}#${submenu.path}`}
          className="flex gap-2 items-center font-semibold m-2 p-2 rounded-sm"
        >
          {submenu.label}
        </a>
      </li>
    ))}
  </ul>
);

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
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
