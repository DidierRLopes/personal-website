import React from 'react';
import PropTypes from 'prop-types';
import ChevronRightIcon from '../../assets/ChevronRightIcon';

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
        <ChevronRightIcon className="-rotate-90" />
      </h3>
    </a>
    <div className="_subtitle flex justify-center mb-4">
      {data.desc}
    </div>
    <div className="flex justify-center items-center">
      <img
        src={`${process.env.PUBLIC_URL}${data.image}`}
        alt={data.title}
        className="border-2 border-blue-200 rounded-xl h-[300px]"
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
        <h1 className="_h1 !mb-2">
          PERSONAL PROJECTS
        </h1>
        <div className="_subtitle text-lg">
          <span>
            I know that OpenBB Terminal is no longer a personal project,
            but am too proud of it to not include it here. :)
          </span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.96),1fr))] p-8 gap-8 ml-16 mr-16">
        {data.map((project) => (
          <SingleProject data={project} key={project.title} />
        ))}
      </div>
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
