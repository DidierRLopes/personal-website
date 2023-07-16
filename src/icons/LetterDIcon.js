import * as React from 'react';

const LetterDIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={40}
        x2={-8.785}
        y1={-2.7}
        y2={23.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8C00" />
        <stop offset={1} stopColor="#A93400" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize={30}
      fill="#fff"
    >
      D
    </text>
  </svg>
);

export default LetterDIcon;
