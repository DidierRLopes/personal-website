import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const Personal = () => (
  <div>
    <div className="link-to" id="personal" />
    <div className="title">
      <h2 className="blue-text">Personal</h2>
    </div>
    <Table data={data} />
  </div>
);

export default Personal;
