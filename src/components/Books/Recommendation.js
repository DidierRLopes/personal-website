import React from 'react';
import PropTypes from 'prop-types';

const Recommendation = ({ data }) => (
  <div className="article-container">
    <div style={{ display: 'flex' }}>
      <p><strong>{data.title}</strong></p>
      <p className="article-date">{data.author}</p>
    </div>
  </div>
);

Recommendation.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recommendation;
