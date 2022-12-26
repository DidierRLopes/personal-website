import React from 'react';

// Get the components associated with this page
import BooksToReadSection from '../components/Books/BooksToRead';
import BooksAlreadyReadSection from '../components/Books/BooksAlreadyRead';

// Get the data necessary for this page
import books2read from '../data/books/books2read';
import booksread from '../data/books/booksread';

// Books page
const Books = () => (
  <div>
    <div
      id="books-to-read"
    >
      <BooksToReadSection data={books2read} />
    </div>
    <div
      id="books-already-read"
    >
      <BooksAlreadyReadSection data={booksread} />
    </div>
  </div>
);

export default Books;
