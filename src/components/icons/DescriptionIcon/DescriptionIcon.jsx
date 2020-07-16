import * as React from 'react';

function DescriptionIcon(props) {
  return (
    <svg width={16} height={20} viewBox="0 0 16 20" {...props}>
      <title>{'description'}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M-4-2h24v24H-4z" />
        <path
          d="M4 14h8v2H4v-2zm0-4h8v2H4v-2zm6-10H2C.9 0 0 .9 0 2v16c0 1.1.89 2 1.99 2H14c1.1 0 2-.9 2-2V6l-6-6zm4 18H2V2h7v5h5v11z"
          fill="#1D1D1D"
        />
      </g>
    </svg>
  );
}

export default DescriptionIcon;
