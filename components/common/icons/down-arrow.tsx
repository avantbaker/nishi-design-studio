import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const DownArrow: FC<Props> = ({
  size = 24,
  fill = theme.colors.orange,
  ...rest
}) => (
  <svg width="14px" height="8px" viewBox="0 0 14 8" version="1.1">
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="translate(-1216.000000, -199.000000)" stroke="#D78B32">
        <polyline
          id="Path-3"
          points="1216 200 1223.10511 206 1230 200"
        ></polyline>
      </g>
    </g>
  </svg>
);

export default DownArrow;
