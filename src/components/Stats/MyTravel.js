import React from 'react';

const MyTravel = () => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        MY TRAVELS
      </h1>
    </div>
    <div className="flex items-center justify-center mb-10">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=174MaDCD2ho7QwEt4uk16eJnPxnZNxzU&ehbc=2E312F"
        width="960"
        height="480"
        title="myFrame"
      />
    </div>
  </div>
);

export default MyTravel;
