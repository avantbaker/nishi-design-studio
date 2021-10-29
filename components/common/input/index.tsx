import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import theme from 'styles/theme';

const Input = styled.input`
  border-radius: ${rem(27.52)};
  border: ${rem(0.81)} solid ${theme.colors.gray};
  background-color: transparent;
  padding: ${rem(14)};
  font-size: ${rem(12.14)};
  font-weight: bold;
  letter-spacing: ${rem(0.12)};
  line-height: ${rem(14)};
  color: ${theme.colors.gray};

  ::placeholder {
    color: ${theme.colors.gray};
  }
`;

export default Input;
