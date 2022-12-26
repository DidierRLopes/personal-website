import React from 'react';

// Get the components associated with this page
import ExperienceSection from '../components/Resume/Experience';
import ArticlesSection from '../components/Resume/Articles';
import EducationSection from '../components/Resume/Education';
import CoursesSection from '../components/Resume/Courses';

// Get the data necessary for this page
import experienceData from '../data/resume/experience';
import articlesData from '../data/resume/articles';
import educationData from '../data/resume/education';
import coursesData from '../data/resume/courses';

// Resume page
const Resume = () => (
  <div>
    <div id="experience">
      <ExperienceSection data={experienceData} />
    </div>
    <div id="articles">
      <ArticlesSection data={articlesData} />
    </div>
    <div id="education">
      <EducationSection data={educationData} />
    </div>
    <div id="courses">
      <CoursesSection data={coursesData} />
    </div>
  </div>
);

export default Resume;
