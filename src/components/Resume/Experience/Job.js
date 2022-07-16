import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <strong>
        <a href={data.link}>{data.company}</a> - {data.position}
      </strong>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
