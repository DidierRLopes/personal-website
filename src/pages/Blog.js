import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Blog = () => (
  <Main title="Blog" description="Didier Rodrigues Lopes blog">
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/blog">Blog</Link>
          </h2>
        </div>
      </header>
    </article>
  </Main>
);

export default Blog;
