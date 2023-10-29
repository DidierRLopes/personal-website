import React from 'react';
import PropTypes from 'prop-types';

// Get the components associated with this page
// import BooksToReadSection from '../components/Books/BooksToRead';
// import BooksAlreadyReadSection from '../components/Books/BooksAlreadyRead';

// Get the data necessary for this page
import books2read from '../data/books/books2read';
import booksread from '../data/books/booksread';

const InvidualBook = ({ data }) => (
  <div className="container relative justify-center items-center mb-8">
    <div
      className="relative w-[320px] h-[320px] flex flex-col place-items-center justify-center items-center mx-auto shadow-[0_6px_5px_0px_rgba(0,0,0,0.25)] rounded-[24px] p-4"
      style={{ background: 'linear-gradient(223deg, #FF8C00 0%, #A93400 100%)' }}
    >
      <div className="absolute top-2 justify-center items-center font-K2D text-xs text-white">
        {data.author}
      </div>
      <img
        src={data.image}
        alt={data.title}
        className="absolute top-8 w-[200px] h-[200px] p-2 rounded-xl"
      />
      <div className="absolute bottom-2 flex place-items-center justify-center items-center mb-1 text-white font-K2D font-bold text-l px-2">
        {data.title}
      </div>
    </div>
  </div>
);

InvidualBook.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// Books page
const Books = () => {
  const booksToReadShuffled = books2read
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const booksAlreadyReadShuffled = booksread
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div>
      <div className="mx-auto mt-16 text-left max-w-[1024px]">
        <div className="title !text-[96px]">
          Books to read
        </div>
        <div className="subtitle !text-[24px] mt-4">
          If there is a particular book that you think I should read, feel free to recommend it
        </div>
      </div>
      <div
        className="relative max-w-[1280px] mx-auto mt-16"
      >
        <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-8 gap-8 ml-16 mr-16">
          {booksToReadShuffled.map((book) => (
            <InvidualBook data={book} key={book.title} />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 text-left max-w-[1024px]">
        <div className="title !text-[96px]">
          Books already read
        </div>
        <div className="subtitle !text-[24px] mt-4">
          Not all the books I have read, but the ones I have enjoyed the most
        </div>
      </div>
      <div
        className="relative max-w-[1280px] mx-auto mt-16"
      >
        <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.64),1fr))] p-8 gap-8 ml-16 mr-16">
          {booksAlreadyReadShuffled.map((book) => (
            <InvidualBook data={book} key={book.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
