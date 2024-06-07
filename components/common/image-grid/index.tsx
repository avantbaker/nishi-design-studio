import useMediaQuery from "hooks/use-media-query";
import Image from "next/image";
import { rem } from "polished";
import MasonryGrid from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";
import { breakpoints, queries } from "styles/media";

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

const ImgWrapper = styled("div")`
  position: relative;
  width: 100%;
  min-height: ${({ isMobileLarge, height }) =>
    !isMobileLarge ? "205px" : `${height}px`};
`;

const breakpointColumnsObj = {
  default: 3,
  640: 1,
};

const clickSide = () => {
  setTimeout(() => {
    const wrapper = document.querySelectorAll(`.SRLElementWrapper > img`);
    if (wrapper && wrapper.length > 0) {
      const image = wrapper[0] as HTMLElement;
      image.click();
    }
  }, 100);
};

const callbacks = {
  onLightboxOpened: clickSide,
  onSlideChange: clickSide,
};

const ConditionalSRLWrapper = ({ shouldWrap, children, ...rest }) => {
  if (!shouldWrap) return <>{children}</>;
  return (
    <SRLWrapper {...rest} style={{ width: "100%" }}>
      {children}
    </SRLWrapper>
  );
};
export default function ImageGrid({
  images,
  wrap = true,
  defaults = [],
  ...rest
}) {
  const isMobileLarge = useMediaQuery(queries.minMobileLarge);
  const finalImages = defaults?.length > 0 ? defaults : images;
  return images ? (
    <ConditionalSRLWrapper callbacks={callbacks} shouldWrap={wrap}>
      <Container {...rest}>
        <MasonryGrid
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {finalImages.map(({ image, imgixUrl, width, height }, idx) => {
            const ixUrl =
              imgixUrl?.url &&
              `${imgixUrl?.url}?w=1700&h=1700&fit=clip&q=80s&auto=format&wm=webp`;
            const imageUrl = image?.sourceUrl;
            const imgSrc = ixUrl || imageUrl;
            return imgSrc ? (
              <ImgWrapper
                key={`image-${idx}`}
                isMobileLarge={isMobileLarge}
                width={width}
                height={height}
              >
                <Image
                  quality="100"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={imgSrc}
                  src={imgSrc}
                />
              </ImgWrapper>
            ) : null;
          })}
        </MasonryGrid>
      </Container>
    </ConditionalSRLWrapper>
  ) : null;
}
