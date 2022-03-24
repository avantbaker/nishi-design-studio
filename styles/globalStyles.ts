import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  #__next {
    overflow-x: hidden;
    position: relative;
  }

   body {
     font-family: ${({ theme }) => theme.typography.fonts.primary};
     background: ${({ theme }) => theme.colors.tan};
     color: ${({ theme }) => theme.colors.black};
     font-weight: 400;
     transition: all 0.50s linear; 
     margin: 0;
  }
  a {
    text-decoration: none;
  }

  #circularcursor {
    position: fixed;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000000;
    border-color: orange;
    transition: transform .2s;
    pointer-events: none;
  }
  
`;
