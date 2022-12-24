import React from 'react';
import PropTypes from 'prop-types';

import BookIcon from '../../assets/BookIcon';

// Single course component
const Course = ({ data }) => (
  <div>
    <div className="mb-10 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.title} article`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <BookIcon />
      </a>
      <strong>{data.title}</strong>
      <span className="_subtitle">{data.university}</span>
      <span className="_subtitle">{data.date}</span>
    </div>
  </div>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
  }).isRequired,
};

// Courses (collection of course) component
const Courses = ({ data }) => (
  <div
    id="courses"
    className="relative pt-20 rounded-[14px] shadow-md text-white"
  >
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        COURSES
      </h1>
    </div>
    <ol className="ml-32">
      {data.map((course, idx) => (
        <Course
          data={course}
          key={course.title}
          last={idx === data.length - 1}
        />
      ))}
    </ol>
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
