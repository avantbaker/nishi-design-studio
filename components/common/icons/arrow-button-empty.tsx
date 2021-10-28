import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const ArrowButtonEmpty: FC<Props> = ({ size = 24, ...rest }) => (
  <svg
    height="69"
    viewBox="0 0 69 69"
    width="69"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#d78b32"
      transform="translate(.5 .5)"
    >
      <path
        d="m18.9947917 0-4.151875 4.11345455 9.0066666 8.98327275h-23.8495833v5.8065454h23.8495833l-9.0066666 8.9832728 4.151875 4.1134545 16.0052083-16z"
        fillRule="nonzero"
        transform="matrix(-1 0 0 1 51.5 18.5)"
      />
      <circle cx="34" cy="34" r="33.5" />
    </g>
  </svg>
);

export default ArrowButtonEmpty;
