import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ data }) => (
  <div className="article-container">
    <div style={{ display: 'flex' }}>
      <p><strong>{data.title}<br /></strong>{data.author}</p>
    </div>
  </div>
);

Book.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
