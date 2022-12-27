import React from 'react';
import PropTypes from 'prop-types';

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

export default Video;
