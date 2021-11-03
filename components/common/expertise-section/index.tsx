import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex, Box } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import { SecondaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';
import { useState } from 'react';

const Container = styled(Flex)`
  display: flex;
  background-color: ${theme.colors.lightTan};
  padding: ${rem(96)} ${rem(22)} ${rem(50)} ${rem(24)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: ${rem(129)} ${rem(91)} ${rem(111)} 0;
    margin-left: auto;
    margin-right: 0;
  }

  .left-box {
    position: relative;
  }
`;

const ServiceList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  columns: 2;
  column-gap: ${rem(10)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    columns: initial;

    li {
      font-size: ${rem(15)};
    }
  }
`;

const ServiceItem = styled(Text)<{ selected?: boolean }>`
  margin-bottom: ${rem(32)};
  color: rgba(215, 139, 50, 0.57);
  font-size: ${rem(11)};
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: ${theme.colors.gray};
      cursor: initial;
    `}

  @media only screen and (min-width: ${breakpoints.tablet}) {
    font-size: ${rem(15)};
  }
`;

const TextContent = styled(Flex)`
  z-index: 1;
  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: ${rem(433)};
    position: absolute;
    top: 50%;
    transform: translate(-23%, -50%);
  }
`;

const ImgWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: fit-content;

  img {
    margin-bottom: ${rem(14)};
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    margin-left: auto;
    margin-right: 0;
  }
`;

const SelectedHeadline = styled(Text)`
  text-indent: -${rem(27)};
  margin-left: ${rem(27)};
  width: 50%;
`;

const TriangleImg = styled.img`
  width: ${rem(120.47)};
  height: ${rem(116.53)};
  position: absolute;
  top: -${rem(20)};
  right: -${rem(18)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(212.97)};
    height: ${rem(206)};
  }
`;

export default function ExpertiseSection() {
  const [selectedService, setSelectedService] = useState(
    'service installation'
  );
  const isTablet = useMediaQuery(queries.minTablet);

  function handleServiceSelect(e) {
    e.preventDefault();
    const selectedText = e.target.innerText.toLowerCase().substring(2);
    if (selectedText === selectedService) {
      return;
    }

    setSelectedService(selectedText);
  }

  return (
    <Container as="section" flexDirection={['column', 'column', 'row']}>
      <Box
        width={[1, 1, 2 / 5]}
        mb={[rem(33), rem(33), rem(60)]}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex flexDirection="column" width={['100%', '100%', 'initial']}>
          <Text variant="highlight" mb={[rem(24), rem(24), rem(52)]}>
            OUR EXPERTISE
          </Text>
          <ServiceList>
            <ServiceItem
              as="li"
              variant={['actionMobile', 'actionMobile', 'action']}
              selected={selectedService === 'planning'}
            >
              <a onClick={handleServiceSelect}>/ Planning</a>
            </ServiceItem>
            <ServiceItem
              as="li"
              variant={['actionMobile', 'actionMobile', 'action']}
              selected={selectedService === 'design operation'}
            >
              <a onClick={handleServiceSelect}>/ Design Operation</a>
            </ServiceItem>
            <ServiceItem
              as="li"
              variant={['actionMobile', 'actionMobile', 'action']}
              selected={selectedService === 'ordering + buying'}
            >
              <a onClick={handleServiceSelect}>/ Ordering + Buying</a>
            </ServiceItem>
            <ServiceItem
              as="li"
              variant={['actionMobile', 'actionMobile', 'action']}
              selected={selectedService === 'service installation'}
            >
              <a onClick={handleServiceSelect}>/ Service Installation</a>
            </ServiceItem>
            <ServiceItem
              as="li"
              variant={['actionMobile', 'actionMobile', 'action']}
              selected={selectedService === 'retail'}
            >
              <a onClick={handleServiceSelect}>/ Retail</a>
            </ServiceItem>
          </ServiceList>
        </Flex>
      </Box>
      <Box width={[1, 1, 3 / 5]} className="left-box">
        <TextContent flexDirection="column">
          <SelectedHeadline
            mb={[rem(12), rem(12), rem(4)]}
            variant={['headingMobile', 'headingMobile', 'heading']}
          >
            service installation
          </SelectedHeadline>
          <Text
            mb={[rem(43), rem(43), rem(43)]}
            variant={['bodySmall', 'bodySmall', 'bodyLarge']}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            semper odio eunum dignissim porta.
          </Text>
          {isTablet && (
            <SecondaryButton large>contact for service</SecondaryButton>
          )}
        </TextContent>
        <ImgWrap>
          {isTablet ? (
            <Image
              alt="service installation"
              layout="intrinsic"
              width="433px"
              height="645px"
              src="/images/rectangle-couch.png"
            />
          ) : (
            <Image
              alt="service installation"
              layout="intrinsic"
              width="512px"
              height="526px"
              src="/images/rectangle-couch-small.png"
            />
          )}
          <TriangleImg src="/images/triangle-orange.png" />
          {!isTablet && <SecondaryButton>contact for service</SecondaryButton>}
        </ImgWrap>
      </Box>
    </Container>
  );
}
