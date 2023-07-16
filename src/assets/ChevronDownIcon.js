import React from 'react';
import PropTypes from 'prop-types';

const ChevronDownIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    className={`${className} pointer-events-none`}
  >
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronDownIcon.propTypes = {
  className: PropTypes.string,
};

ChevronDownIcon.defaultProps = {
  className: '',
};

export default ChevronDownIcon;
