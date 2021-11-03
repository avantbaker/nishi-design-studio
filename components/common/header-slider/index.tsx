import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { breakpoints } from 'styles/media';
import { rem } from 'polished';

const StyledSlider = styled(Slider)`
  position: static;
  margin-bottom: -${rem(3)};
  .slick-next:before {
    content: '';
  }

  .slick-slide img {
    width: 100%;
  }

  .slick-prev:before {
    content: '';
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${rem(734)};
  }
`;

const HeaderSlider = React.forwardRef(
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
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange,
    };

    return (
      <StyledSlider ref={ref} {...settings}>
        {items.map((item, idx) => (
          <div key={item}>
            <img src="/images/header-placeholder.jpg" />
          </div>
        ))}
      </StyledSlider>
    );
  }
);

export default HeaderSlider;
HeaderSlider.displayName = 'HeaderSlider';
