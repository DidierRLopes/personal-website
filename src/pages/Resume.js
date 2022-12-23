import React from 'react';

import Main from '../layouts/Main';

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
  <Main title="Resume" description="Didier Rodrigues Lopes Resume">
    <div>
      <div className="relative pt-20 rounded-[14px] shadow-md text-white">
        <Experience data={positions} />
      </div>
      <Articles data={articles} />
      <hr />
      <Education data={degrees} />
      <hr />
      <Courses data={courses} />
    </div>
  </Main>
);

export default Resume;
