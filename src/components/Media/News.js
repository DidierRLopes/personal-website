import React from 'react';
import PropTypes from 'prop-types';

import NewspaperIcon from '../../assets/NewspaperIcon';

// Single news article component
const NewsArticle = ({ data }) => (
  <div>
    <li className="mb-8 ml-12">
      <a
        target="_blank"
        rel="noreferrer"
        href={data.link}
        title={`${data.link} school`}
        className="__btn ml-32 flex absolute -left-3 justify-center items-center w-10 h-10 rounded-sm ring-9 ring-white text-black hover:text-white"
      >
        <NewspaperIcon />
      </a>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {data.title}
      </h3>
      <div className="_subtitle">
        {data.date}
      </div>
      <time className="_subtitle text-white">
        {data.magazine}
      </time>
    </li>
  </div>
);

NewsArticle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    magazine: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

// News (collection of news articles) component
const News = ({ data }) => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        NEWS MENTIONS
      </h1>
    </div>
    <ol className="ml-32 mb-32">
      {data.map((news) => (
        <NewsArticle data={news} key={news.title} />
      ))}
    </ol>
  </div>
);

News.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      magazine: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
};

News.defaultProps = {
  data: [],
};

export default News;
