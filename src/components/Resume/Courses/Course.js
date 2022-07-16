import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data }) => (
  <li className="course-container">
    <header className="course-title">
      <strong>
        <a href={data.link}>{data.title}</a>
      </strong>
    </header>
    <p className="course-date">
      {data.date} - {data.university}
    </p>
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
