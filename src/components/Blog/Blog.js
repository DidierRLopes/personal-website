import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronRightIcon from '../../assets/ChevronRightIcon';

// Single blogpost component
const SingleBlog = ({ data }) => (
  <div className="justify-center mb-4 mt-16">
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
        <ChevronRightIcon className="-rotate-90" />
      </h3>
    </a>
    <div className="_subtitle flex justify-center mb-4">
      {data.categories.join(', ')}
    </div>
    <div className="flex justify-center items-center">
      <img
        src={`${data.thumbnail}`}
        alt={data.title}
        className="border-2 border-blue-200 rounded-xl h-[300px]"
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

// Collection of blogposts component
const Blog = ({ mediumProfile }) => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    const fetchBlogposts = async () => {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumProfile}`,
      );
      const blogpostsData = await response.json();
      setBlogposts(blogpostsData);
    };
    fetchBlogposts();
  }, []);

  return (
    <div>
      <div
        className="relative pt-20 rounded-[14px] shadow-md text-white"
      >
        <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
          <h1 className="_h1 !mb-2">
            BLOGPOSTS
          </h1>
          <div className="_subtitle text-lg">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://openbb.co/blog/author/didier-lopes"
              className="flex items-center justify-center hover:text-blue-200"
            >
              Check out my OpenBB Blogposts
              <ChevronRightIcon className="-rotate-90" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://${mediumProfile}.medium.com/`}
              className="flex items-center justify-center hover:text-blue-200"
            >
              Follow my Medium profile to not miss any new blogposts
              <ChevronRightIcon className="-rotate-90" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.96),1fr))] p-8 gap-8 ml-16 mr-16">
          {
            blogposts.status === 'ok' && blogposts.items.map((blog) => (
              <SingleBlog data={blog} key={blog.title} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  mediumProfile: PropTypes.string.isRequired,
};

export default Blog;
