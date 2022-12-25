import React from 'react';

import PersonalStats from '../components/Stats/PersonalStats';
import OpenSourceStats from '../components/Stats/OpenSource';
import OpenBBProgress from '../components/Stats/OpenBBProgress';
// import Travel from '../components/Stats/Travel';

const Stats = () => (
  <div>
    <PersonalStats />
    <OpenSourceStats />
    <OpenBBProgress />
    { /* <OpenSourceStats />
    <Travel />
     */ }
  </div>
);

export default Stats;
