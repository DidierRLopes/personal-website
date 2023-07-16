import React from 'react';
import ChevronRightIcon from '../assets/ChevronRightIcon';

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
              <a
                target="_blank"
                rel="noreferrer"
                href={project.link}
              >
                <button
                  className="flex rounded-[37.736px] text-white px-4 py-1 mt-4"
                  style={{ background: 'linear-gradient(223deg, #FF8C00 0%, #A93400 100%)' }}
                  type="button"
                  width="100px"
                >
                  View work
                  <ChevronRightIcon className="mt-[.2rem] ml-2" />
                </button>
              </a>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={`${process.env.PUBLIC_URL}${project.image}`}
                alt={project.title}
                className="border-2 rounded-xl w-96 h-64"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
