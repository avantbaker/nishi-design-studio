import { Flex, Box } from 'rebass/styled-components';
import Text from 'components/common/text';
import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { breakpoints } from 'styles/media';
import { rem, rgba } from 'polished';

const Container = styled(Flex)`
  padding-bottom: ${rem(80)};
  position: relative;

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0;
  }
`;

const HeadingText = styled(Text)`
  text-indent: -${rem(30)};
  margin-left: ${rem(30)};
  width: 50%;
  color: ${theme.colors.white};
`;

const ImageWrap = styled.div`
  padding: 0 ${rem(28)};
  position: relative;
  width: ${rem(265)};
  height: ${rem(319)};
  top: ${rem(96)};
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (min-width: ${breakpoints.laptop}) {
    width: ${rem(393)};
    height: ${rem(472.49)};
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const TextContentLeft = styled.div`
  max-width: ${rem(450)};
  margin: 0 auto;
  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-left: auto;
    margin-right: 0;
    width: ${rem(430)};
    z-index: 1;
  }
`;

const TextContentRight = styled.div`
  max-width: ${rem(450)};
  margin: 0 auto;
  @media only screen and (min-width: ${breakpoints.laptop}) {
    margin-left: 40%;
    width: ${rem(275)};
  }
`;

export default function MeetTheBoss() {
  return (
    <Container flexDirection={['column', 'column', 'column', 'row']}>
      <Box
        backgroundColor={rgba(215, 139, 50, 0.55)}
        width={[1, 1, 1, 1 / 2]}
        pt={[rem(80), rem(80), rem(80), rem(223)]}
        pb={[rem(70), rem(70), rem(70), rem(200)]}
        pl={[rem(28), rem(28), rem(28), 'initial']}
        pr={rem(28)}
        display="flex"
        flexDirection="column"
        alignItems={['initial', 'initial', 'center']}
        textAlign="left"
      >
        <TextContentLeft>
          <Text
            variant="highlight"
            mb={[rem(13), rem(13)]}
            color={theme.colors.white}
          >
            MEET THE BOSS
          </Text>
          <HeadingText
            mb={[rem(46), rem(46)]}
            fontSize={[rem(45), rem(45), rem(80)]}
            variant={['headingMobile', 'headingMobile', 'heading']}
          >
            nishi donovan
          </HeadingText>
        </TextContentLeft>
      </Box>
      <ImageWrap>
        <Image
          alt="Nishi Donovan"
          src="/images/nishi-profile.png"
          layout="responsive"
          width="786px"
          height="948px"
        />
      </ImageWrap>
      <Box
        width={[1, 1, 1, 1 / 2]}
        pt={[0, 0, 0, rem(223)]}
        pb={[rem(70), rem(70), rem(70), rem(200)]}
        pl={rem(28)}
        pr={[rem(28), rem(28), rem(28), 'initial']}
        display="flex"
        flexDirection="column"
        alignItems={['center', 'initial', 'initial']}
      >
        <TextContentRight>
          <Text
            mb={[rem(15), rem(15)]}
            variant="highlight"
            color={theme.colors.gray}
          >
            LOREM IPSUM
          </Text>
          <Text
            mb={[rem(26), rem(26)]}
            variant="body"
            color={theme.colors.textGray}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus semper odio eunum dignissim
            porta.
          </Text>
          <Text variant="body" color={theme.colors.textGray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            semper odio eunum dignissim porta. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus semper odio eunum dignissim
            porta.
          </Text>
        </TextContentRight>
      </Box>
    </Container>
  );
}
