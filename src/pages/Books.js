import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Book from '../components/Books/Book';
import { booksread, books2read } from '../data/books';

const sections = ['Reading', 'Next', 'Already Read'];

const Reading = () => (
  <Main title="Books" description="Didier Rodrigues Lopes Books.">
    <article className="post" id="books">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="books">Books</Link>
          </h2>
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
        </div>
      </header>
      <div>
        <div className="link-to" id="reading" />
        <div className="title">
          <h2 className="blue-text">Reading</h2>
        </div>
        <div style={{ display: 'flex' }}>
          <p><strong>{books2read[0].title}<br /></strong>{books2read[0].author}</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="link-to" id="next" />
        <div className="title">
          <h2 className="blue-text">Next</h2>
          <p><center>(not in any particular order - feel free to suggest something)</center></p>
        </div>
        {books2read.slice(1).map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
      <hr />
      <div>
        <div className="link-to" id="already read" />
        <div className="title">
          <h2 className="blue-text">Already Read</h2>
        </div>
        {booksread.map((book) => (
          <Book data={book} key={book.title} />
        ))}
      </div>
    </article>
  </Main>
);

export default Reading;
