import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h2 className="blue-text">
          <a href={data.link}>{data.title.replace('&gt;&gt;', '>>')}</a>
        </h2>
        <p className="center">{data.pubDate.split(' ')[0]}</p>
      </header>
      <a href={data.link} className="image">
        <div className="project-img">
          <img
            src={`${data.thumbnail}`}
            alt={data.title}
          />
        </div>
      </a>
    </article>
    <div className="description">
      <div>
        {'TAGS: '}
        {data.categories.join(', ')}
      </div>
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Post;
