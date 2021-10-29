import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const ArrowButton: FC<Props> = ({ size = 24, ...rest }) => (
  <svg
    width="69px"
    height="69px"
    viewBox="0 0 69 69"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="UI-Design"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="1.0-NDS---Homepage---Desktop"
        transform="translate(-1187.000000, -698.000000)"
      >
        <g id="Group" transform="translate(1187.500000, 698.500000)">
          <circle id="Oval-Copy" fill="#D78B32" cx="34" cy="34" r="34"></circle>
          <g
            id="iconmonstr-arrow-20"
            transform="translate(16.500000, 18.500000)"
            fill="#EBE4CF"
            fillRule="nonzero"
          >
            <polygon
              id="Path"
              points="18.9947917 0 14.8429167 4.11345455 23.8495833 13.0967273 0 13.0967273 0 18.9032727 23.8495833 18.9032727 14.8429167 27.8865455 18.9947917 32 35 16"
            ></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default ArrowButton;
