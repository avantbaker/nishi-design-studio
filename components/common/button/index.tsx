import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';
import ArrowRight from 'components/common/icons/arrow-right';

import { compose, space } from 'styled-system';

export const PrimaryButton = styled.button<{ size?: string }>`
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

  ${(props) =>
    props.size === 'large' &&
    css`
      padding: ${rem(18)};
    `}

  ${compose(space)}
`;

export function FilterButton({ children }) {
  return <PrimaryButton>{children}</PrimaryButton>;
}

const SecondaryBtn = styled.button`
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

  svg {
    width: ${rem(16)};
    margin-left: ${rem(13)};
    fill: ${theme.colors.orange};
  }
`;

export function SecondaryButton({ children }) {
  return (
    <SecondaryBtn>
      {children}
      <ArrowRight />
    </SecondaryBtn>
  );
}
