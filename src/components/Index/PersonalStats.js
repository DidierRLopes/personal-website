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
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <span>{age}</span>;
};

// Get current date
const CurrentDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <>{`${dateTime.toLocaleDateString('en-GB')}`}</>;
};

// Get current time
const CurrentTime = () => {
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
  <div className="flex items-center justify-center">
    <table className="max-w-[880px] flex-col px-3 text-center text-white border-separate space-y-6 text-sm">
      <tbody>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Nationality</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <span>Switzerland 🇨🇭</span>
          </td>
        </tr>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Citizenship</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <span>Portugal 🇵🇹</span>
          </td>
        </tr>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Current City</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <span>London, United Kingdom</span>
          </td>
        </tr>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Current Age</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <CurrentAge />
          </td>
        </tr>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Current Date</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <CurrentDate />
          </td>
        </tr>
        <tr className="rounded-xl align-items-center mb-3">
          <td className="p-3 rounded-l-xl border-2 border-blue-200">
            <strong>Current Time</strong>
          </td>
          <td className="p-3 rounded-r-xl border-2 border-blue-200">
            <CurrentTime />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PersonalStats;
