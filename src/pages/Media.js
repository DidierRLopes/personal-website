import React from 'react';

// Get the components associated with this page
import Videos from '../components/Media/Videos';

// Get the data necessary for this page
import videos from '../data/media/videos';

// Media page
const Media = () => (
  <div>
    <div>
      <Videos data={videos} youtubeProfile="didierlopes" />
    </div>
  </div>
);

export default Media;
