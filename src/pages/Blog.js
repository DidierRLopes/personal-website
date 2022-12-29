import React from 'react';

// Get the components associated with this page
import BlogSection from '../components/Blog/Blog';
import RecommendationSection from '../components/Blog/Favourites';

// Get the data necessary for this page
import favouritesData from '../data/blog/favourites';

// Blog page
const Blog = () => (
  <div>
    <div
      id="blog"
    >
      <BlogSection mediumProfile="dro-lopes" />
    </div>
    <div
      id="recommendations"
    >
      <RecommendationSection data={favouritesData} />
    </div>
  </div>
);

export default Blog;
