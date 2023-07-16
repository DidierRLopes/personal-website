import React from 'react';

// Get the components associated with this page
// import ProjectsSection from '../components/Projects/Projects';

// Get the data necessary for this page
import projectsData from '../data/projects/projects';

// Project page
const Projects = () => (
  <div>
    <div className="mx-auto mt-16 max-w-[1024px] text-left">
      <div className="title !text-[96px]">
        See my full portfolio of personal projects
      </div>
      <div className="subtitle !text-[24px] mt-4">
        OpenBB Terminal is no longer a personal project,
        but oh well 🤷🏽‍♂️
      </div>
    </div>
    <div className="mx-auto mt-16 max-w-[1280px]">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(theme(width.96),1fr))] p-8 gap-8 ml-16 mr-16">
        {projectsData.map((project) => (
          <>
            <div>
              <div className="title !text-[48px]">
                {project.title}
              </div>
              <div className="subtitle !text-[18px] flex mt-4">
                {project.desc}
              </div>
              <div className="justify-center items-center mb-16">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.link}
                >
                  as
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}${project.image}`}
                alt={project.title}
                className="border-2 border-blue-200 rounded-xl h-[300px]"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
