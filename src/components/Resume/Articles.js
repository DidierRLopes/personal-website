import React from 'react';
import PropTypes from 'prop-types';

import Article from './Articles/Article';

const getRows = (articles) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  articles.map((article, idx) => (
    <Article
      data={article}
      key={article.title}
      last={idx === articles.length - 1}
    />
  ));

const Articles = ({ data }) => (
  <div className="articles">
    <div className="link-to" id="articles" />
    <div className="title">
      <h3>Articles</h3>
    </div>
    <ul className="article-list">{getRows(data)}</ul>
  </div>
);

Articles.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Articles.defaultProps = {
  data: [],
};

export default Articles;
