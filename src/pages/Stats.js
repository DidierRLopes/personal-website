import React from 'react';

// Get the components associated with this page
import PersonalStatsSection from '../components/Stats/PersonalStats';
import OpenSourceStatsSection from '../components/Stats/OpenSource';
import OpenBBProgressSection from '../components/Stats/OpenBBProgress';
import MyTravelSection from '../components/Stats/MyTravel';

// Get the data necessary for this page
import githubData from '../data/stats/githubData';

const Stats = () => (
  <div>
    <div id="personal-stats">
      <PersonalStatsSection />
    </div>
    <div id="open-source-stats">
      <OpenSourceStatsSection />
    </div>
    <div id="openbb-progress">
      <OpenBBProgressSection initialGithubData={githubData} />
    </div>
    <div id="my-travels">
      <MyTravelSection />
    </div>
  </div>
);

export default Stats;
