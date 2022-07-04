import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>{data.title}</a>
        </h3>
        <p>{data.desc}</p>
      </header>
      <a href={data.link} className="image">
        <div className="container">
          <img
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt={data.title}
            height="500"
          />
        </div>
      </a>
      <div className="description">
        <p>{data.language}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
