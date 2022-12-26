import React, { useState, useEffect } from 'react';

// Get age in years updating every 25ms
const CurrentAge = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-06-04T07:37:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <span>{age}</span>;
};

// Get current date
export const CurrentDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <>{`${dateTime.toLocaleDateString()}`}</>;
};

// Get current time
export const CurrentTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <>{`${dateTime.toLocaleTimeString()}`}</>;
};

const PersonalStats = () => (
  <div className="relative pt-20 rounded-[14px] shadow-md text-white">
    <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
      <h1 className="_h1">
        PERSONAL STATS
      </h1>
    </div>
    <div className="flex items-center justify-center">
      <table className="max-w-[880px] flex-col px-3 text-center text-black border-separate space-y-6 text-sm">
        <tbody>
          <tr className="rounded-xl align-items-center bg-blue-200 mb-3">
            <td className="p-3 rounded-l-xl">
              <strong>Age</strong>
            </td>
            <td className="p-3 rounded-r-xl">
              <CurrentAge />
            </td>
          </tr>
          <tr className="rounded-xl align-items-center bg-blue-200 mb-3">
            <td className="p-3 rounded-l-xl">
              <strong>City</strong>
            </td>
            <td className="p-3 rounded-r-xl">
              <span>London, United Kingdom</span>
            </td>
          </tr>
          <tr className="rounded-xl bg-blue-200 mb-3">
            <td className="p-3 rounded-l-xl">
              <strong>Date</strong>
            </td>
            <td className="p-3 align-left rounded-r-xl">
              <CurrentDate />
            </td>
          </tr>
          <tr className="rounded-xl align-items-center bg-blue-200 mb-3">
            <td className="p-3 rounded-l-xl">
              <strong>Time</strong>
            </td>
            <td className="p-3 rounded-r-xl">
              <CurrentTime />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PersonalStats;
