import React from 'react';
import ChevronRightIcon from '../assets/ChevronRightIcon';
import TwitterLogoLettersIcon from '../assets/TwitterLogoLetters';
import LinkedinLogoLettersIcon from '../assets/LinkedinLogoLetters';
import MediumLogoLettersIcon from '../assets/MediumLogoLetters';

// Get the components associated with this page
// import AboutSection from '../components/Index/About';
// import OpenSourceSection from '../components/Index/OpenSource';
// import MyTravelSection from '../components/Index/MyTravel';
// import OpenBBProgressSection from '../components/Index/OpenBBProgress';

// Get the data necessary for this page
// import githubData from '../data/index/githubData';

// Index page
const Index = () => (
  <div>
    { /* Hero shot */ }
    <div className="mx-auto mt-16 grid grid-cols-2 max-w-[1024px] flex-col p-12 text-center">
      <div className="title text-left">
        <p className="whitespace-nowrap">Founder and CEO</p>
        <p className="text-orange">OpenBB</p>
        <div className="subtitle text-left mt-4">
          <p>I like to build stuff and learn things.</p>
        </div>
        <a
          href="https://cal.com/didierlopes/15min"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex font-K2D text-gray-400 hover:text-white text-base font-light mt-2">
            <p>Meet me</p>
            <ChevronRightIcon className="mt-[.2rem] ml-2" />
          </div>
        </a>
      </div>
      <div className="flex center content-center text-white mx-auto align-center justify-between">
        <figure className="pr-4">
          <img
            className="rounded-3xl max-w-[200px]"
            src={`${process.env.PUBLIC_URL}/images/me_openbb.webp`}
            alt="Myself"
          />
        </figure>
      </div>
    </div>
    { /* Socials */ }
    <div className="mt-16 grid grid-cols-4 max-w-[1024px] space-x-8 mx-auto align-center justify-between">
      <a
        href="https://twitter.com/didier_lopes"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-400 hover:text-orange"
      >
        <TwitterLogoLettersIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/didier-lopes/"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-400 hover:text-orange"
      >
        <LinkedinLogoLettersIcon />
      </a>
      <a
        href="https://medium.com/@dro-lopes"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-400 hover:text-orange"
      >
        <MediumLogoLettersIcon />
      </a>
      <a
        href="https://github.com/DidierRLopes"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-400 hover:text-orange"
      >
        <TwitterLogoLettersIcon />
      </a>
    </div>
  </div>
);

export default Index;
