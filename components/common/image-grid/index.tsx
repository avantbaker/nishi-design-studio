import MasonryGrid from 'react-masonry-css';
import styled from 'styled-components';
import { rem } from 'polished';
import Image from 'next/image';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { SRLWrapper } from 'simple-react-lightbox';

const Container = styled.section`
  position: relative;
  max-width: ${rem(1076)};
  margin: 0 auto;
  width: 100vw;

  img {
    object-fit: cover;
    transition transform 0.5s ease-in-out;

    :hover {
      transform: scale(1.05);
    }
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

  @media only screen and (min-width: ${breakpoints.mobileLarge}) {
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

const breakpointColumnsObj = {
	default: 3,
	640: 1,
};

export default function ImageGrid({ images, ...rest }) {
	const isMobileLarge = useMediaQuery(queries.minMobileLarge);
	return images ? (
		<Container {...rest}>
			<SRLWrapper>
				<MasonryGrid
					breakpointCols={breakpointColumnsObj}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{images.map(({ image, width, height }, idx) => {
						return (
							<Image
								key={`image-${idx}`}
								alt="Grid image"
								width={!isMobileLarge ? '321px' : `${width}px`}
								height={!isMobileLarge ? '205px' : `${height}px`}
								src={image.sourceUrl}
							/>
						);
					})}
				</MasonryGrid>
			</SRLWrapper>
		</Container>
	) : null;
}
