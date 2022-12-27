import React from 'react';
import PropTypes from 'prop-types';

import Video from './Video';

import ChevronDownIcon from '../../assets/ChevronDownIcon';

const Videos = ({ data, youtubeProfile }) => (
  <div>
    <div
      className="relative pt-20 rounded-[14px] shadow-md text-white"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 mb-2">
          VIDEOS
        </h1>
        <div className="_subtitle mb-16">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/@${youtubeProfile}/videos`}
            className="flex items-center justify-center hover:text-blue-200"
          >
            Subscribe to my YouTube to never miss any videos
            <ChevronDownIcon className="-rotate-90" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.96),1fr))] p-8 gap-8 ml-16 mr-16">
        {data.map((video) => (
          <Video data={video} key={video.title} />
        ))}
      </div>
    </div>
  </div>
);

Videos.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      embed: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  youtubeProfile: PropTypes.string.isRequired,
};

export default Videos;
