import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '../assets/ChevronDownIcon';

const SingleBlog = ({ data }) => (
  <div className="justify-center mb-16">
    <div className="w-32 mx-auto">
      <div className="flex justify-center items-center rounded-xl mb-2 mr-2 px-2.5 py-0.5 text-black bg-blue-200">
        {data.pubDate.split(' ')[0]}
      </div>
    </div>
    <a
      target="_blank"
      rel="noreferrer"
      href={data.link}
    >
      <h3 className="flex justify-center items-center mb-1 text-lg font-semibold text-white hover:text-blue-700">
        {data.title.replace('&gt;&gt;', '>>')}
        <ChevronDownIcon className="-rotate-90" />
      </h3>
    </a>
    <div className="_subtitle flex justify-center mb-4">
      {data.categories.join(', ')}
    </div>
    <div className="flex justify-center items-center">
      <img
        src={`${data.thumbnail}`}
        alt={data.title}
        width="800px"
        className="border-2 border-blue-200 rounded-xl"
      />
    </div>
  </div>
);

SingleBlog.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dro-lopes',
      );
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  const usePosts = posts.status === 'ok' && posts.items.map((post) => (
    <SingleBlog data={post} key={post.title} />
  ));

  return (
    <div>
      <div
        className="relative pt-20 rounded-[14px] shadow-md text-white"
      >
        <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
          <h1 className="_h1">
            BLOGPOSTS
          </h1>
        </div>
        <p>
          https://dro-lopes.medium.com/
          For my OpenBB blogposts check <strong><a href="https://openbb.co/blog/author/didier-lopes">HERE</a></strong>
        </p>
        {usePosts}
      </div>
    </div>
  );
};

export default Blog;
