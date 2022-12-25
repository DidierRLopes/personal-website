import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ChevronDownIcon from '../../assets/ChevronDownIcon';
import initialData from '../../data/stats/site';

const TableRow = ({
  label, link, value, format,
}) => (
  <tr className="align-items-center bg-blue-200 mb-3">
    <td className={clsx('p-3 w-full items-center font-semibold justify-between rounded-l-xl', { 'hover:text-blue-700': link })}>
      { link ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="flex items-center"
        >
          <span>{label}</span><ChevronDownIcon className="-rotate-90" />
        </a>) : (<div><span>{label}</span><ChevronDownIcon className="-rotate-90" /></div>)}
    </td>
    <td className="p-3 rounded-r-xl">
      <span>{format(value)}</span>
    </td>
  </tr>
);

TableRow.propTypes = {
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
};

const Table = ({ data }) => (
  <div className="flex items-center justify-center">
    <table className="max-w-[880px] flex-col px-3 text-center text-black border-separate space-y-6 text-sm">
      <tbody>
        {data.map((pair) => (
          <TableRow
            format={pair.format}
            key={pair.label}
            label={pair.label}
            link={pair.link}
            value={pair.value}
          />
        ))}
      </tbody>
    </table>
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.func,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
};

const OpenBBProgress = () => {
  const [data, setResponseData] = useState(initialData);
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
        value: Object.keys(resData).includes(field.key) ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      id="openbb-progress"
      className="relative pt-20 rounded-[14px] shadow-md text-white"
    >
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1">
          OPENBB PROGRESS
        </h1>
      </div>
      <div className="text-white">
        <Table data={data} />
      </div>
    </div>
  );
};

export default OpenBBProgress;
