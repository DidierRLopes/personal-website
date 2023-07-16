import React from 'react';
import ChevronRightIcon from '../../assets/ChevronRightIcon';

import PersonalStats from './PersonalStats';

const About = () => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1 !mb-2">
        Who am I?
      </h1>
      <div className="_subtitle text-lg">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://openbb.co/"
          className="flex items-center justify-center hover:text-blue-700"
        >
          Founder & CEO of OpenBB
          <ChevronRightIcon className="-rotate-90" />
        </a>
      </div>
      <div className="flex-none overflow-y-scroll rounded-sm mx-auto text-lg text-white mt-4 p-2 pr-8 mb-4">
        <span>I am a builder by nature 🛠. I am curious and love to learn new things.</span>
      </div>
      <div className="flex center content-center text-white mx-auto align-center justify-between">
        <figure className="pr-4">
          <img
            className="rounded-3xl max-w-[200px]"
            src={`${process.env.PUBLIC_URL}/images/me_openbb.webp`}
            alt="Myself"
          />
        </figure>
        <PersonalStats />
      </div>
      <div className="flex-none overflow-y-scroll rounded-sm mx-auto text-base text-gray-400 mt-4 p-2 pr-8 mb-4">
        <p>
          Nowadays my time is very limited and I&apos;d rather
          use all my spare time towards growing OpenBB.
        </p>
        <p>
          I am active on Twitter, so feel free to ping me there anytime.
        </p>
        <p>
          Otherwise, I am available for 15 minutes calls as long
          as you set an agenda and it is worth my time.
        </p>
        <div className="w-64 mx-auto mt-4">
          <div className="flex justify-center items-center rounded-xl mb-2 mr-2 px-2.5 py-0.5 text-black bg-blue-200 hover:text-white hover:bg-blue-700">
            <a
              href="https://twitter.com/didier_lopes"
              target="_blank"
              rel="noreferrer noopener"
            >
              TWEET 🐦
            </a>
          </div>
          <div className="flex justify-center items-center rounded-xl mb-2 mr-2 px-2.5 py-0.5 text-black bg-blue-200 hover:text-white hover:bg-blue-700">
            <a
              href="https://cal.com/didierlopes/15min"
              target="_blank"
              rel="noreferrer noopener"
            >
              15 MINUTES CAL.com 📆
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
