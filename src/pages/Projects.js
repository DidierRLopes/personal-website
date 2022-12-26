import React from 'react';

// Get the components associated with this page
import ProjectsSection from '../components/Projects/Projects';

// Get the data necessary for this page
import projectsData from '../data/projects/projects';

// Project page
const Projects = () => (
  <div>
    <div>
      <ProjectsSection data={projectsData} />
    </div>
  </div>
);

export default Projects;
