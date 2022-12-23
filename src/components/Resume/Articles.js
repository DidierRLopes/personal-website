import React from 'react';
import PropTypes from 'prop-types';

import BookReadIcon from '../../assets/BookReadIcon';

// Single article component
const Article = ({ data }) => (
  <div>
    <li className="mb-10 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.title} article`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <BookReadIcon />
      </a>
      <strong>{data.title}</strong>
      <p className="_subtitle">{data.conference}</p>
    </li>
  </div>
);

Article.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
  }).isRequired,
};

// Articles (collection of article) component
const Articles = ({ data }) => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        ARTICLES
      </h1>
    </div>
    <ol className="ml-32">
      {data.map((article, idx) => (
        <Article
          data={article}
          key={article.title}
          last={idx === data.length - 1}
        />
      ))}
    </ol>
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
