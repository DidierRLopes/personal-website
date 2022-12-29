import React from 'react';

// Get the components associated with this page
import AboutSection from '../components/Index/About';
import OpenSourceSection from '../components/Index/OpenSource';
import MyTravelSection from '../components/Index/MyTravel';
import OpenBBProgressSection from '../components/Index/OpenBBProgress';

// Get the data necessary for this page
import githubData from '../data/index/githubData';

// Index page
const Index = () => (
  <div>
    <div>
      <AboutSection />
    </div>
    <div>
      <OpenSourceSection />
    </div>
    <div>
      <OpenBBProgressSection initialGithubData={githubData} />
    </div>
    <div>
      <MyTravelSection />
    </div>
  </div>
);

export default Index;
