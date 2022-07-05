import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-container">
    <a href={data.link}>
      <p className="course-name">
        <strong>{data.title}</strong>
      </p>
      <p className="course-date">
        {data.date} - {data.university}
      </p>
    </a>
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
  }).isRequired,
};

export default Course;
