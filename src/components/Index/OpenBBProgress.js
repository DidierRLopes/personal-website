import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ChevronDownIcon from '../../assets/ChevronDownIcon';

// Add latest blogposts from OpenBB
// https://openbb.co/blog/rss.xml

const TableRow = ({
  label, link, value, format,
}) => (
  <tr className="align-items-center bg-blue-200 mb-3">
    <td className={clsx('p-3 w-full items-center font-semibold justify-between rounded-l-xl', { 'hover:bg-blue-700 hover:text-white': link })}>
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
    <td className="p-3 rounded-r-xl bg-black text-white border-2">
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

const OpenBBProgress = ({ initialGithubData }) => {
  const [githubData, updateGithubData] = useState(initialGithubData);
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/openbb-finance/openbbterminal',
    );
    const resData = await res.json();
    updateGithubData(
      initialGithubData.map((field) => ({
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
    <div className="relative pt-20 rounded-[14px] shadow-md text-white">
      <div className="mx-auto mt-16 flex max-w-[880px] flex-col px-3 text-center md:mt-16">
        <h1 className="_h1 !mb-2">
          OPENBB PROGRESS
        </h1>
        <div className="_subtitle text-lg">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://openbb.co/"
            className="flex items-center justify-center hover:text-blue-700"
          >
            OpenBB Handbook
            <ChevronDownIcon className="-rotate-90" />
          </a>
        </div>
        <div className="_subtitle text-lg mb-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://openbb.co/"
            className="flex items-center justify-center hover:text-blue-700"
          >
            OpenBB Metrics
            <ChevronDownIcon className="-rotate-90" />
          </a>
        </div>
      </div>
      <div className="flex justify-center content-center text-white mx-auto align-center">
        <figure className="pr-4">
          <img
            className="rounded-3xl max-w-[200px]"
            src={`${process.env.PUBLIC_URL}/images/tattoo.webp`}
            alt="OpenBB Tattoo"
          />
        </figure>
        <Table data={githubData} />
      </div>
    </div>
  );
};

OpenBBProgress.propTypes = {
  initialGithubData: PropTypes.arrayOf(PropTypes.shape({
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

export default OpenBBProgress;
