import React from 'react';

import ChevronDownIcon from '../../assets/ChevronDownIcon';

// Another good graph is:
// https://github-stats.vercel.app/api?username=DidierRLopes&show_icons=true

const OpenSource = () => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1 italic !mb-2">
        Open source is the way.
      </h1>
      <div className="_subtitle text-lg">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DidierRLopes"
          className="flex items-center justify-center hover:text-blue-700"
        >
          Building an open-source legacy, one commit at a time.
          <ChevronDownIcon className="-rotate-90" />
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center border-blue-200">
      <iframe
        src="https://github-stats-alpha.vercel.app/api?username=DidierRLopes&cc=000&tc=fff&ic=fff&bc=000"
        width="800"
        title="GitHub Stats"
      />
    </div>
  </div>
);

export default OpenSource;
