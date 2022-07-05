import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ data }) => (
  <li className="article-container">
    <a href={data.link}>
      <p className="article-name">
        <strong>{data.title}</strong>
      </p>
      <p className="article-date">{data.conference}</p>
    </a>
  </li>
);

Article.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
