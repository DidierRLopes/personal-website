import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const OpenBBProgress = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/openbb-finance/openbbterminal',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className="link-to" id="openbb progress" />
      <div className="title">
        <h2 className="blue-text">OpenBB Progress</h2>
      </div>
      <Table data={data} />
    </div>
  );
};

export default OpenBBProgress;
