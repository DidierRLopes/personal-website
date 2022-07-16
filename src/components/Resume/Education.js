import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h2 className="blue-text">Education</h2>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
      points: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
