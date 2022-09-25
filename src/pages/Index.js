import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Didier Rodrigues Lopes personal website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About Me</Link>
          </h2>
        </div>
      </header>
      <ul>
        <li>I am Portuguese 🇵🇹, but I was born in Switzerland 🇨🇭,
          and now I currently live in London 🇬🇧.
        </li>
        <li>I&apos;m the author behind the viral{' '}
          <a href="https://www.vice.com/en/article/qjp9vp/gamestonk-terminal-is-a-diy-meme-stock-version-of-bloomberg-terminal">Gamestonk Terminal</a>.
          Read my story <a href="https://openbb.co/blog/gme-didnt-take-me-to-the-moon-but-gamestonk-terminal-did">here</a>.
        </li>
        <li>When I&apos;m not working on OpenBB I play football,
          do boxing, code, invest, travel or play Switch.
        </li>
      </ul>
      <p className="center">
        <img src="https://user-images.githubusercontent.com/25267873/134752033-18df2fdc-58d8-413f-8b61-2a17b0c8271c.JPG" width="500" alt="Didier and Morty" />
        <p>
          Me and Morty in a snowy London.
        </p>
      </p>
      <p>
        Open source is the way. The code behind this website is available{' '}
        <a href="https://github.com/didierlopes/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
