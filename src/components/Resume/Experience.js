import React from 'react';
import PropTypes from 'prop-types';

import BriefcaseIcon from '../../assets/BriefcaseIcon';

// Single job component
const Job = ({ data }) => (
  <div>
    <li className="mb-10 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.company} website`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <BriefcaseIcon />
      </a>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {data.position} @ {data.company}
      </h3>
      <time className="_subtitle">
        {data.daterange}
      </time>
      <p className="_normaltext mb-4 list-disc ml-4">
        {data.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </p>
    </li>
  </div>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// Experience (collection of jobs) component
const Experience = ({ data }) => (
  <div
    id="experience"
    className="relative pt-20 rounded-[14px] shadow-md text-white"
  >
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        EXPERIENCE
      </h1>
    </div>
    <ol className="border-l border-gray-200 dark:border-gray-700 ml-32">
      {data.map((job) => (
        <Job data={job} key={job.company} />
      ))}
    </ol>
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Experience.defaultProps = {
  data: [],
};

export default Experience;
