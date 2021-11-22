import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { breakpoints } from 'styles/media';
import theme from 'styles/theme'

export const ArrowRight = styled.div`
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;
  width: ${rem(35)};
  height: ${rem(35)};
  transform: rotate(180deg);
  margin-left: ${rem(11)};
  cursor: pointer;
  position: relative;

  :hover {
    color: initial;
    outline: none;
    background-image: url('/images/enabled-left-arrow.png');
    transform: rotate(180deg);
  }

  ${({ active }) =>
    active &&
    css`
      background-image: url('/images/active-right-arrow.png');
      background-size: cover;
      border-radius: 50%;
      transform: initial;

      :hover {
        color: initial;
        outline: none;
        background-image: url('/images/active-right-arrow.png');
        transform: initial;
      }
    `}
  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(69)};
    height: ${rem(69)};

    :after {
      content: '';
      display: block;
      border-radius: 50%;
      border: ${rem(1)} solid #d78b32;
      width: ${rem(34)};
      height: ${rem(34)};
      position: absolute;
      right: -${rem(6)};
      bottom: -${rem(6)};
    }
  }
`;

export const ArrowLeft = styled.div`
  width: ${rem(35)};
  height: ${rem(35)};
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;
  cursor: pointer;

  :hover {
    color: initial;
    outline: none;
    background-image: url('/images/enabled-left-arrow.png');
  }

  ${({ active }) =>
    active &&
    css`
      background-image: url('/images/active-right-arrow.png');
      background-size: cover;
      border-radius: 50%;
      transform: rotate(180deg);

      :hover {
        color: initial;
        outline: none;
        background-image: url('/images/active-right-arrow.png');
        border-radius: 50%;
        transform: rotate(180deg);
      }
    `}

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(69)};
    height: ${rem(69)};
  }
`;



export const PagerList = styled.ul`
  display: flex;
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: ${rem(0.6)} solid ${theme.colors.sand};

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    height: ${rem(0.6)};
    width: ${rem(50.31)};
    background-color: ${theme.colors.orange};
  }

  li {
    font-size: ${rem(8.45)};
    line-height: ${rem(10)};
    font-family: ${theme.typography.fonts.secondary};
    letter-spacing: ${rem(5.28)};
    text-align: right;
    color: ${theme.colors.gray};
    overflow: auto;

    a {
      padding: 0 ${rem(4)} ${rem(9)} ${rem(4)};
      cursor: pointer;
      display: block;
    }

    &.selected {
      text-shadow: ${rem(0)} ${rem(0)} ${rem(1)} ${theme.colors.gray};
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
      font-size: ${rem(11)};
      line-height: ${rem(13)};

      a {
        padding-bottom: ${rem(16)};
      }
    }
  }
`;