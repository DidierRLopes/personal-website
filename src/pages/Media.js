import React from 'react';

// Get the components associated with this page
import Videos from '../components/Media/Videos';
import Podcasts from '../components/Media/Podcasts';

// Get the data necessary for this page
import videos from '../data/media/videos';
import podcasts from '../data/media/podcasts';

// Media page
const Media = () => (
  <div>
    <div>
      <Videos data={videos} youtubeProfile="didierlopes" />
    </div>
    <div>
      <Podcasts data={podcasts} />
    </div>
  </div>
);

export default Media;
