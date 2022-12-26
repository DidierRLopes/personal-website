import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ data }) => (
  <div className="container relative justify-center items-center mb-8">
    <div className="min-h-[110px]">
      <h3 className="justify-center items-center mb-1 text-base text-white">
        {data.title}
      </h3>
      <div className="_subtitle justify-center mb-4">
        {data.author}
      </div>
    </div>
    <div className="flex place-items-center justify-center items-center rounded-sm mx-auto">
      <img
        src={data.image}
        alt={data.title}
        width="200px"
        className="border-2 rounded-xl"
      />
    </div>
  </div>
);

Books.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
