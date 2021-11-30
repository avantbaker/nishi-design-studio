import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';
import ArrowRight from 'components/common/icons/arrow-right';

import { compose, space } from 'styled-system';

export const PrimaryButton = styled.button<{ large?: boolean }>`
  padding: ${rem(14)};
  background-color: transparent;
  border: ${rem(0.81)} solid ${theme.colors.orange};
  border-radius: ${rem(27.52)};
  font-family: ${theme.typography.fonts.primary};
  font-size: ${rem(12)};
  font-weight: bold;
  letter-spacing: ${rem(0.12)};
  line-height: ${rem(14)};
  color: ${theme.colors.orange};
  cursor: pointer;
  white-space: nowrap;

  ${({ large }) =>
    large &&
    css`
      padding: ${rem(16)};
      font-size: ${rem(15)};
      line-height: ${rem(18)};
      font-weight: bold;
      letter-spacing: ${rem(0.15)};
    `}

  ${compose(space)};
`;

export function FilterButton({ children }) {
  return <PrimaryButton>{children}</PrimaryButton>;
}

const SecondaryBtn = styled.button<{
  large?: boolean;
  color?: string;
  m?: string;
}>`
  padding: ${rem(16)} ${rem(4)};
  border: none;
  background-color: transparent;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${rem(12)};
  font-weight: bold;
  letter-spacing: ${rem(0.12)};
  line-height: ${rem(14)};
  color: ${theme.colors.orange};
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  svg {
    width: ${rem(16)};
    margin-left: ${rem(13)};
    fill: ${theme.colors.orange};
  }

  ${({ large }) =>
    large &&
    css`
      padding: ${rem(16)} 0;
      font-size: ${rem(15)};
      line-height: ${rem(18)};
      font-weight: bold;
      letter-spacing: ${rem(0.15)};
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};

      svg {
        fill: ${color};
      }
    `}

  ${compose(space)};
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);

  margin-right: ${rem(13)};
`;

export function SecondaryButton({
  children,
  arrowLeft,
  large,
  color,
  m,
  ...rest
}: {
  large?: boolean;
  arrowLeft?: boolean;
  color?: string;
  children: React.ReactNode;
  m?: any;
}) {
  return (
    <SecondaryBtn large={large} color={color} {...rest}>
      {arrowLeft && <ArrowLeft />}
      {children}
      {!arrowLeft && <ArrowRight />}
    </SecondaryBtn>
  );
}
