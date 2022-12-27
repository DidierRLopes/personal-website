import React from 'react';

// Get the components associated with this page
import Videos from '../components/Media/Videos';
import Podcasts from '../components/Media/Podcasts';
import News from '../components/Media/News';

// Get the data necessary for this page
import videos from '../data/media/videos';
import podcasts from '../data/media/podcasts';
import news from '../data/media/news';

// Media page
const Media = () => (
  <div>
    <div
      id="videos"
    >
      <Videos data={videos} youtubeProfile="didierlopes" />
    </div>
    <div
      id="podcasts"
    >
      <Podcasts data={podcasts} />
    </div>
    <div
      id="news"
    >
      <News data={news} />
    </div>
  </div>
);

export default Media;
