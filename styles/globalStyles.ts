import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: ${({ theme }) => theme.typography.fonts.primary};
     background: ${({ theme }) => theme.colors.tan};
     color: ${({ theme }) => theme.colors.black};
     font-weight: 400;
     transition: all 0.50s linear; 
     margin: 0;
     overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
`;
