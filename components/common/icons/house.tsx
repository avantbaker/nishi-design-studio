import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const House: FC<Props> = ({
  size = 24,
  fill = theme.colors.black,
  ...rest
}) => (
  <svg
    width="24px"
    height="27px"
    viewBox="0 0 24 27"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Component-/-Footer-/-Light-/-Mobile"
        transform="translate(-31.000000, -344.000000)"
        fill="#D78B32"
      >
        <g id="Group-14" transform="translate(31.000000, 344.000000)">
          <polygon
            id="Fill-1"
            points="0 0 0 26.8540282 8.77364565 26.8540282 8.77364565 18.3990457 14.6047327 18.3990457 14.6047327 26.8540282 23.3783784 26.8540282 23.3783784 11.6002334 5.81654054 6.42963636 5.81654054 0"
          ></polygon>
        </g>
      </g>
    </g>
  </svg>
);

export default House;
