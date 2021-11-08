import MasonryGrid from 'react-masonry-css';
import styled from 'styled-components';
import { rem } from 'polished';
import Image from 'next/image';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';

const Container = styled.section`
  position: relative;
  max-width: ${rem(1076)};
  margin: 0 auto;
  width: 100vw;

  img {
    object-fit: cover;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .my-masonry-grid_column > div {
    margin-bottom: ${rem(3)} !important;
  }

  @media only screen and (min-width: ${breakpoints.mobile}) {
    .my-masonry-grid {
      margin-left: -${rem(25)}; /* gutter size offset */
    }
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: initial;
    .my-masonry-grid {
      margin-left: -${rem(25)}; /* gutter size offset */
    }
    /* Style your items */
    .my-masonry-grid_column > div {
      margin-bottom: ${rem(25)} !important;
    }

    .my-masonry-grid_column {
      padding-left: ${rem(25)}; /* gutter size */
      background-clip: padding-box;
    }
  }
`;

const images = [
  { id: 1, src: '/images/social-item-1.jpg', width: 342, height: 452 },
  { id: 3, src: '/images/social-item-3.jpg', width: 342, height: 226 },
  { id: 5, src: '/images/social-item-5.jpg', width: 342, height: 452 },
  { id: 2, src: '/images/social-item-2.jpg', width: 342, height: 323 },
  { id: 4, src: '/images/social-item-4.jpg', width: 342, height: 549 },
  { id: 6, src: '/images/social-item-6.jpg', width: 342, height: 323 },
];

const breakpointColumnsObj = {
  default: 3,
  640: 1,
};

export default function ImageGrid({ className, ...rest }) {
  const isMobileLarge = useMediaQuery(queries.minMobileLarge);
  return (
    <Container className={className} {...rest}>
      <MasonryGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <Image
            alt="Grid image"
            width={!isMobileLarge ? '321px' : `${image.width}px`}
            height={!isMobileLarge ? '205px' : `${image.height}px`}
            key={image.id}
            src={image.src}
          />
        ))}
      </MasonryGrid>
    </Container>
  );
}
