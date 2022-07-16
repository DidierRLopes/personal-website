import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h3 className="degree">{data.degree}</h3>
      <p className="date">{data.year}</p>
      <a className="school" href={data.link}>
        {data.school}
      </a>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Degree;
