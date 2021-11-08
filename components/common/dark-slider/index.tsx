import React, { useState } from 'react';
import { Flex } from 'rebass/styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const StyledSlider = styled(Slider)`
  position: static;
  width: 100%;
  margin-bottom: -${rem(3)};

  .slick-next:before {
    content: '';
  }

  .slick-slide img {
    // max-width: ${rem(890)};
  }

  .slick-slide:not(.slick-center) {
    // transform: scale(0.75);
  }

  .slick-prev:before {
    content: '';
  }
`;

const ArrowRight = styled.div`
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;
  width: ${rem(35)};
  height: ${rem(35)};
  transform: rotate(180deg);
  margin-left: ${rem(11)};

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
  @media only screen and (min-width: ${breakpoints.laptop}) {
    width: ${rem(69)};
    height: ${rem(69)};
  }
`;

const ArrowLeft = styled.div`
  width: ${rem(35)};
  height: ${rem(35)};
  background-image: url('/images/enabled-left-arrow.png');
  background-size: cover;

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

  @media only screen and (min-width: ${breakpoints.laptop}) {
    width: ${rem(69)};
    height: ${rem(69)};
  }
`;

const SliderButtons = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-right: 10%;
  }
`;

const DarkSlider = React.forwardRef(
  (
    {
      items,
      beforeChange,
    }: { items: any; beforeChange: (prev: number, next: number) => void },
    ref
  ) => {
    var settings = {
      lazyLoad: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: 'center',
      centerMode: true,
      centerPadding: '115px',
      beforeChange,
    };

    const sliderRef = React.useRef(null);
    const [activeArrow, setActiveArrow] = useState('right');
    const [activeIndex, setActiveIndex] = useState(1);
    const sliderItems = [1, 2, 3, 4, 5, 6];

    function handleSliderChange(str) {
      if (str === 'left') {
        sliderRef.current.slickPrev();
      }
      sliderRef.current.slickNext();
    }

    function handleBeforeChange(prev, next) {
      const incrementing = next - prev === 1 || next === 0;
      setActiveArrow(incrementing ? 'right' : 'left');
      setActiveIndex(next);
    }

    function handleIndexChange(idx) {
      sliderRef.current.slickGoTo(idx);
      setActiveIndex(idx);
    }

    return (
      <>
        <StyledSlider ref={sliderRef} {...settings}>
          {items.map((item, idx) => (
            <div key={item}>
              <img src="/images/dark-slider-placeholder.png" />
            </div>
          ))}
        </StyledSlider>
        <Flex>
          <SliderButtons>
            <ArrowLeft
              active={activeArrow === 'left'}
              onClick={() => handleSliderChange('left')}
            />
            <ArrowRight
              active={activeArrow === 'right'}
              onClick={() => handleSliderChange('right')}
            />
          </SliderButtons>
        </Flex>
      </>
    );
  }
);

export default DarkSlider;
DarkSlider.displayName = 'DarkSlider';
