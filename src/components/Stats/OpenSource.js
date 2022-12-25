import React from 'react';

const OpenSourceStats = () => (
  <div
    id="open-source-stats"
    className="relative pt-20 rounded-[14px] shadow-md text-white"
  >
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        OPEN SOURCE STATS
      </h1>
    </div>
    <div className="flex items-center justify-center">
      <iframe
        src="https://github-readme-stats.vercel.app/api?username=DidierRLopes&show_icons=true"
        width="800"
        title="GitHub Stats"
      />
    </div>
  </div>
);

export default OpenSourceStats;
