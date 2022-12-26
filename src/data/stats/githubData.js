import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/openbb-finance/openbbterminal
 */
const githubData = [
  {
    label: 'Stars',
    key: 'stargazers_count',
    link: 'https://github.com/openbb-finance/openbbterminal/stargazers',
  },
  {
    label: 'Forks',
    key: 'forks',
    link: 'https://github.com/openbb-finance/openbbterminal/network',
  },
  {
    label: 'Watchers',
    key: 'subscribers_count',
    link: 'https://github.com/openbb-finance/openbbterminal/stargazers',
  },
  {
    label: 'Open Issues and Pull Requests',
    key: 'open_issues_count',
    link: 'https://github.com/openbb-finance/openbbterminal/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/openbb-finance/openbbterminal/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default githubData;
