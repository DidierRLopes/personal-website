import React from 'react';
import PropTypes from 'prop-types';

const Videos = () => (
  <div>
    <div
      className="relative pt-20 rounded-[14px] shadow-md text-white"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 mb-2">
          VIDEOS
        </h1>
        <div className="_subtitle mb-16">
          <span>Currently reading{' '}</span>
          <span className="text-white">
            {data[0].title.includes(':') ? data[0].title.split(':')[0] : data[0].title}
          </span>
          <span>{' '}by{' '}</span>
          <span className="text-white">
            {data[0].author}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-8 gap-8 ml-16 mr-16">
        {dataShuffled.map((book) => (
          <Books data={book} key={book.title} />
        ))}
      </div>
    </div>
  </div>
);

export default Videos;
