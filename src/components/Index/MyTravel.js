import React from 'react';

const MyTravel = () => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1 !mb-2">
        MY TRAVELS
      </h1>
      <div className="flex-none overflow-y-scroll rounded-sm text-center mx-auto text-lg text-gray-400 p-2 pr-8 mb-4">
        <span>
          I love to travel and experience new cultures. Nowadays I put work first.
        </span>
        <p>
          But one day I hope to accomplish my goal of visiting over 100 countries.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <iframe
        // Note that the &zoom=9 is important to set the zoom level
        src="https://www.google.com/maps/d/u/0/embed?mid=174MaDCD2ho7QwEt4uk16eJnPxnZNxzU&ehbc=2E312F&zoom=9"
        width="960"
        height="480"
        title="My travels"
      />
    </div>
    <div className="flex-none text-center overflow-y-scroll rounded-sm mx-auto text-lg text-white mt-4 p-2 pr-8 mb-16">
      <span>A reminder that there&apos;s more to life than work and my dogs.</span>
      <p>
        Other hobbies include: play football,
        read-write-code (rwx), invest, and play Nintendo Switch.
      </p>
    </div>
  </div>
);

export default MyTravel;
