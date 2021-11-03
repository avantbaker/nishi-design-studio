import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const OrangeTriangle: FC<Props> = ({
  size = 24,
  fill = theme.colors.black,
  ...rest
}) => (
  <svg
    width="433px"
    height="422px"
    viewBox="0 0 433 422"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Path 2</title>
    <g
      id="UI-Design"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="1.0-NDS---Homepage---Desktop"
        transform="translate(0.000000, -849.000000)"
        fill="#FFB000"
        stroke="#979797"
      >
        <polygon
          id="Path-2"
          points="-2 850.235534 431.957704 1270 431.957704 850.235534"
        ></polygon>
      </g>
    </g>
  </svg>
);

export default OrangeTriangle;
