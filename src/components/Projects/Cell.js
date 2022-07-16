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
        <div className="project-img">
          <img
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt={data.title}
          />
        </div>
      </a>
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
