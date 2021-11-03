import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const ArrowRight: FC<Props> = ({
  size = 24,
  fill = theme.colors.black,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill={fill}
    {...rest}
  >
    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
  </svg>
);

export default ArrowRight;
