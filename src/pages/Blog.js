/* const usePosts = posts.status === 'ok' && posts.items.map((post) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.pubDate}</p>
    <p>{post.link}</p>
    <p>{post.description}</p>
  </div>
)); */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Post from '../components/Blog/Post';

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
    <Post data={post} key={post.title} />
  ));

  return (
    <Main
      title="Blog"
      description="Didier Rodrigues Lopes's blog."
    >
      <article className="post" id="blog">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="/blog">Blog</Link>
            </h2>
            <p>
              Some of my written thoughts <br />
              For my OpenBB blogposts check <strong><a href="https://openbb.co/blog">HERE</a></strong>
            </p>
          </div>
        </header>
        {usePosts}
      </article>
    </Main>
  );
};

export default Blog;
