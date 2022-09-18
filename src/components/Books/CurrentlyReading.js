import React from 'react';
import PropTypes from 'prop-types';

const CurrentlyReading = ({ data }) => (
  <div className="article-container">
    <div style={{ display: 'flex' }}>
      <p><strong>{data.title}</strong></p>
      <p className="article-date">{data.author}</p>
    </div>
  </div>
);

CurrentlyReading.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default CurrentlyReading;
