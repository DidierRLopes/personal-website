import React from 'react';
import PropTypes from 'prop-types';

const ChevronRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={17}
    fill="none"
    className={`${className} pointer-events-none`}
  >
    <path
      fill="currentColor"
      d="M9.127 8.912a.577.577 0 0 0 0-.824L1.597.67a.598.598 0 0 0-.836 0 1.467 1.467 0 0 0 0 2.09l5.408 5.327a.577.577 0 0 1 0 .824L.76 14.24a1.467 1.467 0 0 0 0 2.09.598.598 0 0 0 .836 0l7.53-7.418Z"
    />
  </svg>
);

ChevronRightIcon.propTypes = {
  className: PropTypes.string,
};

ChevronRightIcon.defaultProps = {
  className: '',
};

export default ChevronRightIcon;
