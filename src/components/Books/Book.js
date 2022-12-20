import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ data }) => (
  <div className="text-white">
    <strong>{data.title}</strong>
    {data.author}
    {data.image ? (
      <figure className="center content-center text-white mx-auto align-center justify-between">
        <img
          className="rounded-sm mx-auto"
          src={data.image}
          width="50"
          alt="Didier and Morty"
        />
      </figure>
    ) : null}
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

export default Book;
