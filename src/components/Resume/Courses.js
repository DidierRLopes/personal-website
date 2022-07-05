import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const getRows = (courses) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  courses.map((course, idx) => (
    <Course
      data={course}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Online Courses</h3>
    </div>
    <ul className="course-list">{getRows(data)}</ul>
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
