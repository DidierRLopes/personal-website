import React from 'react';
import PropTypes from 'prop-types';

import GraduationHatIcon from '../../assets/GraduationHatIcon';

// Single degree component
const Degree = ({ data }) => (
  <div>
    <li className="mb-10 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.link} school`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <GraduationHatIcon />
      </a>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {data.degree}
      </h3>
      <div className="_subtitle">
        {data.school}
      </div>
      <time className="_subtitle text-white">
        {data.year}
      </time>
      <p className="_normaltext mb-4 list-disc ml-4">
        {data.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </p>
    </li>
  </div>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

// Education (collection of degree) component
const Education = ({ data }) => (
  <div
    id="education"
    className="relative pt-20 rounded-[14px] shadow-md text-white"
  >
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        EDUCATION
      </h1>
    </div>
    <ol className="border-l border-gray-200 dark:border-gray-700 ml-32">
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
    </ol>
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
