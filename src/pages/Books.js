import React from 'react';

import Main from '../layouts/Main';

import Book from '../components/Books/Book';
import { booksread, books2read } from '../data/books';

const sections = ['Reading', 'Next', 'Already Read'];

const Reading = () => (
  <Main title="Books" description="Didier Rodrigues Lopes Books.">
    <div className="text-white">
      <h2>Books</h2>
      <div className="link-container" style={{ display: 'flex' }}>
        {sections.map((sec) => (
          <h4 key={sec}>
            <a href={`#${sec.toLowerCase()}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'|'}&nbsp;
              {sec}
              &nbsp;{'|'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </h4>
        ))}
      </div>
      <div className="text-white">
        <h2 className="blue-text">Reading</h2>
        <p><strong>{books2read[0].title}<br /></strong>{books2read[0].author}</p>
      </div>
      <hr />
      <div className="text-white mt-20">
        <h2>Next</h2>
        <p><center>(not in any particular order - feel free to suggest something)</center></p>
        {books2read.slice(1).map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
      <hr />
      <div className="text-white">
        <h2>Already Read</h2>
        {booksread.map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
    </div>
  </Main>
);

export default Reading;
