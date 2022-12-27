import React from 'react';

// Get the components associated with this page
import BlogSection from '../components/Blog/Blog';
import RecommendationSection from '../components/Blog/Recommendation';

// Get the data necessary for this page
import recommendationData from '../data/blog/recommendation';

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
      <RecommendationSection data={recommendationData} />
    </div>
  </div>
);

export default Blog;
