import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Dropdown = ({
  label,
  submenus,
  dropdown,
  setDropdown,
}) => {
  function toggle() {
    setDropdown(!dropdown);
  }
  return (
    <ul
      onMouseLeave={toggle}
      className={`absolute mt-4 ml-4 border-2 rounded-xl bg-blue-200 border-blue-700 ${dropdown ? '' : 'hidden'}`}
    >
      {submenus.map((submenu, index) => (
        <li
          key={submenu.label}
          className="__navbar block pl-3 pr-4"
        >
          <a
            href={`/${label}#${submenu.path}`}
            className={clsx('flex items-center font-semibold p-2 rounded-sm', { 'border-t-2 border-blue-700': index !== 0 })}
            onClick={toggle}
          >
            {submenu.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  submenus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ),
  dropdown: PropTypes.bool.isRequired,
  setDropdown: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  submenus: [],
};

export default Dropdown;
