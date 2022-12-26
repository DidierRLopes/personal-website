import React from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '../../assets/ChevronDownIcon';

// Single project component
const SingleProject = ({ data }) => (
  <div className="justify-center items-center mb-16">
    <a
      target="_blank"
      rel="noreferrer"
      href={data.link}
    >
      <h3 className="flex justify-center items-center mb-1 text-lg font-semibold text-white hover:text-blue-700">
        {data.title}
        <ChevronDownIcon className="-rotate-90" />
      </h3>
    </a>
    <div className="_subtitle flex justify-center mb-4">
      {data.desc}
    </div>
    <div className="flex justify-center items-center">
      <img
        src={`${process.env.PUBLIC_URL}${data.image}`}
        alt={data.title}
        width="800px"
        className="border-2 border-blue-200 rounded-xl"
      />
    </div>
  </div>
);

SingleProject.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};

// Collection of projects component
const Projects = ({ data }) => (
  <div>
    <div className="relative pt-20 rounded-[14px] shadow-md text-white">
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1">
          PERSONAL PROJECTS
        </h1>
      </div>
      {data.map((project) => (
        <SingleProject data={project} key={project.title} />
      ))}
    </div>
  </div>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
    }),
  ),
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
