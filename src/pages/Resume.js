import React from 'react';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Courses from '../components/Resume/Courses';
import Articles from '../components/Resume/Articles';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import courses from '../data/resume/courses';
import articles from '../data/resume/articles';

// const sections = ['Experience', 'Articles', 'Education', 'Courses'];

const Resume = () => (
  <div>
    <Experience data={positions} />
    <Articles data={articles} />
    <Education data={degrees} />
    <Courses data={courses} />
  </div>
);

export default Resume;
