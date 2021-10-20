import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: ${({ theme }) => theme.typography.fonts.primary};
     background: ${({ theme }) => theme.colors.sand};
     color: ${({ theme }) => theme.colors.black};
     font-weight: 400;
     transition: all 0.50s linear; 
  }
`;
