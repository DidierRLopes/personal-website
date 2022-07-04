import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = ['Experience', 'Education'];

const Resume = () => (
  <Main title="Resume" description="Didier Rodrigues Lopes Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
    </article>
  </Main>
);

export default Resume;
