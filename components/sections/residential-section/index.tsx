import styled from 'styled-components';
import Image from 'next/image';
import { rem } from 'polished';
import Text from 'components/common/text';
import SpaceCard from 'components/common/space-card';
import { PrimaryButton } from 'components/common/button';
import { breakpoints } from 'styles/media';
import { mockSpacesData } from 'pages/api/mocks';

const Container = styled.div`
  position: relative;
  padding: 0 ${rem(20)} ${rem(113)} ${rem(20)};

  ${PrimaryButton} {
    display: none;
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding: 0 0 ${rem(203)} ${rem(20)};

    ${PrimaryButton} {
      display: block;
      width: ${rem(274)};
      margin: 0 auto;
    }
  }
`;

const ContentWrap = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: 1300px;
    margin-right: 0;
    margin-left: auto;
  }
`;

const ImgWrap = styled.div`
  width: ${rem(130)};
  height: ${rem(168)};
  position: absolute;
  left: calc(50% - 65px);
  bottom: -${rem(75)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    width: ${rem(274)};
    height: ${rem(393)};
    left: ${rem(85)};
    padding-top: ${rem(13)};
    bottom: initial;
  }
`;

export default function ResidentialSection() {
  return (
    <Container>
      <ContentWrap>
        <Text
          mb={[rem(41), rem(41), rem(89)]}
          variant={['headingSmall', 'headingSmall', 'heading']}
        >
          residential spaces
        </Text>
        {mockSpacesData.map((space) => (
          <SpaceCard key={space.title} {...space} />
        ))}
      </ContentWrap>
      <PrimaryButton large>load more</PrimaryButton>
      <ImgWrap>
        <Image
          alt="Nishi Logo"
          src="/images/signature-ochre.png"
          width="274px"
          height="353px"
        />
      </ImgWrap>
    </Container>
  );
}
