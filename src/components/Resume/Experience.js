import React from 'react';
import PropTypes from 'prop-types';

/*
<div className="mb-4">
<div
  className="border-spacing-1 border-2 border-rose-500 mx-auto content-center font-FiraCode"
  style={{ fontFamily: 'aktiv-grotesk-extended', fontWeight: 500 }}
>
  <a href={data.link}>{data.company}</a>
</div>
<p>{data.position}</p>
<p className="daterange"> {data.daterange}</p>
<ul className="">
  {data.points.map((point) => (
    <li key={point}>{point}</li>
  ))}
</ul>
</div>

<a href="#d" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900
bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10
focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800
dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
dark:focus:ring-gray-700">
  <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0
    0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0
    10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
  </svg> Download ZIP
</a>
*/

// Single job component
const Job = ({ data }) => (
  <div>
    <li className="mb-10 ml-8">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {data.position}
        <a
          target="_blank"
          rel="noreferrer"
          href={data.link}
          title={`${data.company} website`}
        >
          <span className="__btn">
            {data.company}
          </span>
        </a>
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
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        EXPERIENCE
      </h1>
    </div>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-32">
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
