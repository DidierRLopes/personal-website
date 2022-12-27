import React from 'react';
import PropTypes from 'prop-types';

import MicrophoneIcon from '../../assets/MicrophoneIcon';

// Single podcast component
const Podcast = ({ data }) => (
  <div>
    <li className="mb-10 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.link} school`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <MicrophoneIcon />
      </a>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {data.title}
      </h3>
      <div className="_subtitle">
        {data.host}
      </div>
      <time className="_subtitle text-white">
        {data.date}
      </time>
      <p className="_normaltext mb-4 mr-32 italic">
        {data.summary}
      </p>
    </li>
  </div>
);

Podcast.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    host: PropTypes.string,
    date: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

// Podcasts (collection of podcasts) component
const Podcasts = ({ data }) => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        PODCASTS
      </h1>
    </div>
    <ol className="ml-32">
      {data.map((degree) => (
        <Podcast data={degree} key={degree.title} />
      ))}
    </ol>
  </div>
);

Podcasts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      host: PropTypes.string,
      date: PropTypes.string,
      summary: PropTypes.string,
    }),
  ),
};

Podcasts.defaultProps = {
  data: [],
};

export default Podcasts;
