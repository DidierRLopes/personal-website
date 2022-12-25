import React from 'react';

import PersonalStats from '../components/Stats/PersonalStats';
import OpenSourceStats from '../components/Stats/OpenSource';
import OpenBBProgress from '../components/Stats/OpenBBProgress';
import MyTravel from '../components/Stats/MyTravel';

const Stats = () => (
  <div>
    <PersonalStats />
    <OpenSourceStats />
    <OpenBBProgress />
    <MyTravel />
  </div>
);

export default Stats;
