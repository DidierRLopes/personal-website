import React from 'react';

const OpenSourceStats = () => (
  <div>
    <div className="link-to" id="open source" />
    <div className="title">
      <h2 className="blue-text">Open Source</h2>
    </div>
    <div className="center">
      <iframe
        src="https://github-readme-stats.vercel.app/api?username=DidierRLopes&show_icons=true"
        width="620"
        title="GitHub Stats"
      />
    </div>
  </div>
);

export default OpenSourceStats;
