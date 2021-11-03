import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';

const Input = styled.input<{ color?: string; large?: boolean }>`
  border-radius: ${rem(27.52)};
  border: ${rem(0.81)} solid
    ${({ color }) => (color ? color : theme.colors.gray)};
  background-color: transparent;
  padding: ${rem(14)};
  font-size: ${rem(12.14)};
  font-weight: bold;
  letter-spacing: ${rem(0.12)};
  line-height: ${rem(14)};
  color: ${({ color }) => (color ? color : theme.colors.gray)};

  ::placeholder {
    color: ${({ color }) => (color ? color : theme.colors.gray)};
  }

  ${({ large }) =>
    large &&
    css`
      padding: ${rem(16)};
      font-size: ${rem(15)};
      line-height: ${rem(18)};
      font-weight: bold;
      letter-spacing: ${rem(0.15)};
    `}
`;

export default Input;
