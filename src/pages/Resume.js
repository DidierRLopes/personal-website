import React from 'react';

// Get the components associated with this page
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Courses from '../components/Resume/Courses';
import Articles from '../components/Resume/Articles';

// Get the data necessary for this page
import experience from '../data/resume/experience';
import articles from '../data/resume/articles';
import education from '../data/resume/education';
import courses from '../data/resume/courses';

// Resume page
const Resume = () => (
  <div>
    <div id="experience">
      <Experience data={experience} />
    </div>
    <div id="articles">
      <Articles data={articles} />
    </div>
    <div id="education">
      <Education data={education} />
    </div>
    <div id="courses">
      <Courses data={courses} />
    </div>
  </div>
);

export default Resume;
