import React from 'react';
import PropTypes from 'prop-types';

import Books from './Books';

const BooksToRead = ({ data }) => {
  const dataShuffled = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div>
      <div
        className="relative pt-20 rounded-[14px] shadow-md text-white"
      >
        <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
          <h1 className="_h1 mb-2">
            BOOKS TO READ
          </h1>
          <div className="_subtitle mb-16">
            <span>
              If there is a particular book that you think I should read,
              feel free to recommend it
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
};

BooksToRead.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BooksToRead;
