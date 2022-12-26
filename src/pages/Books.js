import React from 'react';
import PropTypes from 'prop-types';

import { booksread, books2read } from '../data/books';

const Book = ({ data }) => (
  <div className="container relative justify-center items-center mb-8">
    <div className="min-h-[110px]">
      <h3 className="justify-center items-center mb-1 text-base text-white">
        {data.title}
      </h3>
      <div className="_subtitle justify-center mb-4">
        {data.author}
      </div>
    </div>
    <div className="flex place-items-center justify-center items-center rounded-sm mx-auto">
      <img
        src={data.image}
        alt={data.title}
        width="200px"
        className="border-2 rounded-xl "
      />
    </div>
  </div>
);

Book.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const Reading = () => (
  <div>
    <div
      className="relative pt-20 rounded-[14px] shadow-md text-white"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 mb-2">
          BOOKS TO READ
        </h1>
        <div className="_subtitle mb-16">
          <span>Currently reading{' '}</span>
          <span className="text-white">
            {books2read[0].title.includes(':') ? books2read[0].title.split(':')[0] : books2read[0].title}
          </span>
          <span>{' '}by{' '}</span>
          <span className="text-white">
            {books2read[0].author}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-8 gap-8 ml-16 mr-16">
        {books2read.map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
    </div>
    <div
      className="relative pt-20 rounded-[14px] shadow-md text-white"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 mb-16">
          ALREADY READ
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-8 gap-8 ml-16 mr-16">
        {booksread.map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
    </div>
  </div>
);

export default Reading;
