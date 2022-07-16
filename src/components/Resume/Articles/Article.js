import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data }) => (
  <div className="article-container">
    <div>
      <strong>
        <a href={data.link}>{data.title}</a>
      </strong>
      <p className="article-date">{data.conference}</p>
    </div>
  </div>
);

Article.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
