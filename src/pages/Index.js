import React from 'react';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Didier Rodrigues Lopes personal website">
    <div className="container content-center text-center py-4 align-center justify-between mx-auto">
      <div className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#2B2B2C] text-white border-spacing-3 mb-5">
        <p>
          I am Portuguese 🇵🇹, but I was born in Switzerland 🇨🇭,
          and now I currently live in London 🇬🇧.
        </p>
        <p>
          I&apos;m the author behind the viral{' '}
          <a href="https://www.vice.com/en/article/qjp9vp/gamestonk-terminal-is-a-diy-meme-stock-version-of-bloomberg-terminal">
            Gamestonk Terminal
          </a>.
        </p>
        <p>
          Read my story <a href="https://openbb.co/blog/gme-didnt-take-me-to-the-moon-but-gamestonk-terminal-did">here</a>.
          When I&apos;m not working on OpenBB I play football,
          do boxing, code, invest, travel or play Switch.
        </p>
      </div>
      <div className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#2B2B2C] text-white border-spacing-3 mb-5">
        <figure className="center content-center text-white mx-auto align-center justify-between">
          <img
            className="rounded-3xl mx-auto"
            src="https://user-images.githubusercontent.com/25267873/134752033-18df2fdc-58d8-413f-8b61-2a17b0c8271c.JPG"
            width="500"
            alt="Didier and Morty"
          />
          <figcaption>Me and Morty in a snowy London.</figcaption>
        </figure>
      </div>
      <div className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#2B2B2C] text-white">
        <p>
          Open source is the way. The code behind this website is available{' '}
          <a href="https://github.com/didierrlopes/personal-website">here</a>.
        </p>
      </div>
    </div>
  </Main>
);

export default Index;
