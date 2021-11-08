import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import SpaceCard from 'components/common/space-card';
import Input from 'components/common/input';
import { PrimaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';

const Container = styled.section`
  position: relative;
  padding: 0 ${rem(20)} ${rem(170)} ${rem(20)};

  ${PrimaryButton} {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 0 ${rem(20)} ${rem(203)} ${rem(20)};
    max-width: 1250px;
    margin: 0 auto;

    ${PrimaryButton} {
      display: block;
      width: ${rem(274)};
      margin: ${rem(83)} auto 0 auto;
    }
  }
`;

const ImgWrap = styled.div`
  width: ${rem(274)};
  height: ${rem(393)};
  position: absolute;
  padding-top: ${rem(13)};
  left: ${rem(85)};
`;

const mockData = [
  {
    location: 'New York, NY',
    year: '2021',
    title: 'runaway getaway',
    href: '/',
    src: '/elements/residential/runaway.png',
  },
  {
    location: 'Atlanta, GA',
    year: '2021',
    title: 'generations haven',
    href: '/',
    src: '/elements/residential/red-couch.png',
  },
  {
    location: 'Austin, TX',
    year: '2021',
    title: 'underground escape',
    href: '/',
    src: '/elements/residential/billiards.png',
  },
  {
    location: 'Mexico City, Mexico',
    year: '2021',
    title: 'international crashpad',
    href: '/',
    src: '/elements/residential/pool.png',
  },
  {
    location: 'New York, NY',
    year: '2021',
    title: 'urban retreat',
    href: '/',
    src: '/elements/residential/urban-retreat.png',
  },
];

export default function ResidentialSection() {
  return (
    <Container>
      <Text
        mb={[rem(41), rem(41), rem(89)]}
        variant={['headingSmall', 'headingSmall', 'heading']}
      >
        residential spaces
      </Text>
      {mockData.map((space) => (
        <SpaceCard key={space.title} {...space} />
      ))}
      <PrimaryButton large>load more</PrimaryButton>
      <ImgWrap>
        <Image
          src="/images/signature-ochre.png"
          width={'274px'}
          height={'353px'}
        />
      </ImgWrap>
    </Container>
  );
}
