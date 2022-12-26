import React from 'react';

// Get the components associated with this page
import PersonalStats from '../components/Stats/PersonalStats';
import OpenSourceStats from '../components/Stats/OpenSource';
import OpenBBProgress from '../components/Stats/OpenBBProgress';
import MyTravel from '../components/Stats/MyTravel';

// Get the data necessary for this page
import githubData from '../data/stats/githubData';

const Stats = () => (
  <div>
    <div id="personal-stats">
      <PersonalStats />
    </div>
    <div id="open-source-stats">
      <OpenSourceStats />
    </div>
    <div id="openbb-progress">
      <OpenBBProgress initialGithubData={githubData} />
    </div>
    <div id="my-travels">
      <MyTravel />
    </div>
  </div>
);

export default Stats;
