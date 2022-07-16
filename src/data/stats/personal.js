import React, { useState, useEffect } from 'react';

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
  return <>{age}</>;
};

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

const data = [
  {
    key: 'age',
    label: 'Age',
    value: <CurrentAge />,
  },
  {
    key: 'location',
    label: 'City',
    value: 'London, United Kingdom',
  },
  {
    key: 'timezone',
    label: 'Date',
    value: <CurrentDate />,
  },
  {
    key: 'timezone',
    label: 'Time',
    value: <CurrentTime />,
  },
];

export default data;
