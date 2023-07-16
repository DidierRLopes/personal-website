import React from 'react';
import PropTypes from 'prop-types';

import ChevronRightIcon from '../../assets/ChevronRightIcon';

const Video = ({ data }) => (
  <div className="container relative justify-center items-center mb-8">
    <div className="min-h-[80px]">
      <h3 className="justify-center items-center mb-1 text-base text-white">
        {data.title}
      </h3>
      <div className="_subtitle flex mb-4 w-96">
        <div className="container text-left items-left">
          {data.date}
        </div>
        <div className="container text-right items-right">
          {data.time}
        </div>
      </div>
    </div>
    <div className="flex place-items-center justify-center items-center rounded-sm mx-auto">
      <iframe
        src={data.embed}
        width="512"
        height="256"
        title={data.title}
      />
    </div>
    <div className="flex-none h-[156px] overflow-y-scroll rounded-sm mx-auto text-sm text-gray-400 mt-4 p-2 pr-8">
      <p>{data.description}</p>
    </div>
  </div>
);

Video.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    embed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

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
            <ChevronRightIcon className="-rotate-90" />
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
