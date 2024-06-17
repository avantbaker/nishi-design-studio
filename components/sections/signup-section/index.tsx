import styled from "styled-components";
import theme from "styles/theme";
import Image from "next/image";
import { Flex } from "rebass/styled-components";
import { rem } from "polished";
import Text from "components/common/text";
import Input from "components/common/input";
import { PrimaryButton } from "components/common/button";
import { breakpoints, queries } from "styles/media";
import useMediaQuery from "hooks/use-media-query";
import { useForm } from "@formspree/react";
import { useState, useEffect, useMemo } from "react";

const Container = styled.div`
  background: ${theme.colors.brown};
  position: relative;

  ${({ isHideLogoBottom }) => `
  padding: ${isHideLogoBottom ? rem(101) : rem(43)} ${rem(28)} ${rem(
    118
  )} ${rem(28)};
  `}
  .center-image {
    z-index: 1;
  }

  .nishi-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 40%);
  }

  .nishi-logo-mobile {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 42%);
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    ${({ isHideLogoBottom }) => `
    padding-top: ${rem(101)};
    padding-bottom: ${isHideLogoBottom ? rem(140) : rem(203)};
    `}
  }
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: ${rem(50)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;

  input {
    margin-bottom: ${rem(14)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: initial;
    flex-direction: row;
    margin-bottom: 0;

    ${Input} {
      margin-bottom: 0;
      max-width: ${rem(299)};
      margin-right: ${rem(15)};
      flex-grow: 1;
    }

    ${PrimaryButton} {
      width: ${rem(172)};
    }
  }
`;

const GoldLineLeft = styled.img`
  position: absolute;
  z-index: 0;
  left: 0;
  bottom: ${rem(153)};
  height: ${rem(37.62)};
  width: ${rem(182.73)};
  transform: scaleX(-1) rotate(-9deg);
  display: none;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    transform: scaleY(1) scaleX(-1);
    width: 35%;
    height: ${rem(75.78)};
    left: -${rem(5)};
    bottom: ${rem(275)};
  }
`;
const GoldLineRight = styled.img`
  width: 33%;
  top: 50%;
  position: absolute;
  right: -${rem(95)};
  display: none;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    display: block;
    right: 0;
    top: 40%;
  }
`;

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=100`;
};

export default function SignupSection({
  newsletterTitle: title,
  newsletterImage: image,
  isHideLogoBottom = false,
  children,
}) {
  const isTablet = useMediaQuery(queries.minTablet);
  const [state, handleSubmit] = useForm("mzbojlrn");
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  }, [state]);

  const newsletterImage = useMemo(() => {
    const hasImage = image && image?.url;
    const qs = "?w=1770&h=1770&q=90&fit=clip";
    const currentImage = hasImage && `${hasImage}${qs}`;
    const DETAULT_IMG = `https://nishidesignstudio.imgix.net/something-socal/12.jpg${qs}`;
    return currentImage || DETAULT_IMG;
  }, [image]);

  return (
    <Container isHideLogoBottom={true}>
      <Flex flexDirection="column" maxWidth="890px" m="0 auto">
        {/* <Flex
					flexDirection={['column', 'column', 'row']}
					justifyContent={[null, 'space-between', 'space-between']}
					alignItems="center"
					mb={[null, null, rem(87)]}
				>
					<Text
						px={[rem(40), rem(40), 0]}
						variant="highlight"
						color={theme.colors.tan}
						mb={[rem(36), rem(36), 0]}
						mr={[0, rem(15), rem(15)]}
						textAlign={['center', 'center', 'initial']}
					>
						{title}
					</Text>
					<Form onSubmit={handleSubmit}>
						<Input large color={theme.colors.tan} placeholder="email address" />
						<PrimaryButton large type="submit">
							submit
						</PrimaryButton>
						{showSuccess && (
							<Text color={theme.colors.orange} variant="body">
								Success!
							</Text>
						)}
					</Form>
				</Flex> */}
        <Flex justifyContent="center" px={[rem(20), rem(20), 0]}>
          {children ? (
            children
          ) : isTablet ? (
            <Image
              quality="100"
              className="center-image"
              alt="Join the newsletter"
              src={newsletterImage}
              layout="fixed"
              width="890px"
              height="466px"
            />
          ) : (
            <Image
              quality="100"
              className="center-image"
              alt="Join the newsletter"
              src={newsletterImage}
              width="446px"
              height="424px"
            />
          )}
          <GoldLineLeft src="/elements/goldlines/Gold-Line-6.png" />
          <GoldLineRight src="/images/gold-line-four.png" />
        </Flex>
      </Flex>
      {!isHideLogoBottom &&
        (isTablet ? (
          <div className="nishi-logo">
            <Image
              quality="100"
              alt="Nishi"
              width="138px"
              height="178px"
              src="/images/nishi-gold.png"
            />
          </div>
        ) : (
          <div className="nishi-logo-mobile">
            <Image
              quality="100"
              alt="Nishi"
              width="76px"
              height="98px"
              src="/images/nishi-gold-mobile.png"
            />
          </div>
        ))}
    </Container>
  );
}
