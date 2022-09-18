import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import OpenBBProgress from '../components/Stats/OpenBB Progress';
import Travel from '../components/Stats/Travel';
import OpenSourceStats from '../components/Stats/Open Source';

const sections = ['Personal', 'Open Source', 'Travel', 'OpenBB Progress'];

const Stats = () => (
  <Main title="Stats" description="Didier Rodrigues Lopes Stats">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="stats">Stats</Link>
          </h2>
          <div className="link-container" style={{ display: 'flex' }}>
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'|'}&nbsp;
                  {sec}
                  &nbsp;{'|'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Personal />
      <hr />
      <OpenSourceStats />
      <hr />
      <Travel />
      <hr />
      <OpenBBProgress />
    </article>
  </Main>
);

export default Stats;
