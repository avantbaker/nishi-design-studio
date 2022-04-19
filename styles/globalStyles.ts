import { createGlobalStyle } from 'styled-components';
import { breakpoints } from 'styles/media';
import theme from 'styles/theme';

export const GlobalStyles = createGlobalStyle`
  
  html.is-locked,
  html.is-locked body {
    height: calc(var(--window-inner-height) - 1px);
    overflow: hidden;
    box-sizing: border-box;
  }

  #__next {
    overflow-x: hidden;
    position: relative;
  }

  * {
    cursor: none !important;
  }
  body {
     font-family: ${({ theme }) => theme.typography.fonts.primary};
     background: ${({ theme }) => theme.colors.tan};
     color: ${({ theme }) => theme.colors.black};
     font-weight: 400;
     transition: all 0.50s linear; 
     margin: 0;
     cursor: none !important;
  }
  a {
    text-decoration: none;
  }

  #circularcursor {
    position: fixed;
    display: none;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000000;
    transition: transform .2s;
    pointer-events: none;
    border: 2px solid ${theme.colors.lightOrange};
    mix-blend-mode: multiply;

    @media only screen and (min-width: 992px) {
      display: block;
    }
  }
  
`;
