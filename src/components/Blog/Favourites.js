import React from 'react';
import PropTypes from 'prop-types';
import ChevronRightIcon from '../../assets/ChevronRightIcon';

// Single blogpost component
const SingleBlog = ({ data }) => (
  <li className="flex mb-1 align-left items-center text-base text-white hover:text-blue-700">
    <a
      target="_blank"
      rel="noreferrer"
      href={data.link}
      className="flex text-left"
    >
      {data.author}
      <ChevronRightIcon className="-rotate-90" />
    </a>
  </li>
);

SingleBlog.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

// Collection of favourite blogposts component
const Favourites = ({ data }) => (
  <div>
    <div
      className="relative pt-20 rounded-[14px] shadow-md text-white mb-16"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 !mb-2">
          Favourites
        </h1>
        <div className="_subtitle text-lg">
          <span>
            Go-to blog pages. Let me know if there&apos;s any you would add here.
          </span>
        </div>
      </div>
      <div className="flex mx-auto max-w-sm items-right">
        <ul className="text-center justify-center items-center mb-4 mt-4 ml-32">
          {data.map((blog) => (
            <SingleBlog data={blog} key={blog.author} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

Favourites.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

Favourites.defaultProps = {
  data: [],
};

export default Favourites;
