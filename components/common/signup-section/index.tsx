import styled from 'styled-components';
import theme from 'styles/theme';
import Image from 'next/image';
import { Flex } from 'rebass/styled-components';
import { rem } from 'polished';
import Text from 'components/common/text';
import Input from 'components/common/input';
import { PrimaryButton } from 'components/common/button';
import { breakpoints, queries } from 'styles/media';
import useMediaQuery from 'hooks/use-media-query';

const Container = styled.div`
  background: ${theme.colors.brown};
  position: relative;
  padding: ${rem(43)} ${rem(28)} ${rem(118)} ${rem(28)};

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
    transform: translate(-50%, 45%);
  }

  @media only screen and (min-width: ${breakpoints.tablet}) {
    padding-top: ${rem(101)};
    padding-bottom: ${rem(203)};
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

  @media only screen and (min-width: ${breakpoints.tablet}) {
    transform: scaleY(1) scaleX(-1);
    width: 35%;
    height: ${rem(75.78)};
    left: -${rem(5)};
    bottom: ${rem(200)};
  }
`;
const GoldLineRight = styled.img`
  height: ${rem(180)};
  width: ${rem(34.84)};
  top: ${rem(220)};
  transform: scaleY(-1) rotate(100deg);
  position: absolute;
  right: ${rem(50)};

  @media only screen and (min-width: ${breakpoints.tablet}) {
    height: ${rem(388)};
    width: ${rem(75)};
    top: ${rem(200)};
    right: ${rem(155)};
  }
`;

export default function SignupSection() {
  const isTablet = useMediaQuery(queries.minTablet);

  return (
    <Container>
      <Flex flexDirection="column" maxWidth="890px" m="0 auto">
        <Flex
          flexDirection={['column', 'column', 'row']}
          justifyContent={[null, 'space-between', 'space-between']}
          alignItems="center"
          mb={[null, null, rem(87)]}
        >
          <Text
            px={[0, rem(40), rem(40)]}
            variant="highlight"
            color={theme.colors.tan}
            mb={[rem(36), rem(36), 0]}
            mr={[0, rem(15), rem(15)]}
            textAlign={['center', 'center', 'initial']}
          >
            JOIN THE NEWSLETTER
          </Text>
          <Form>
            <Input large color={theme.colors.tan} placeholder="email address" />
            <PrimaryButton large>submit</PrimaryButton>
          </Form>
        </Flex>
        <Flex justifyContent="center" px={[rem(20), rem(20), 0]}>
          {isTablet ? (
            <Image
              className="center-image"
              alt="Join the newsletter"
              src="/images/signup-bg-desktop.jpg"
              layout="intrinsic"
              width="890px"
              height="466px"
            />
          ) : (
            <Image
              className="center-image"
              alt="Join the newsletter"
              src="/images/signup-bg-mobile.jpg"
              width="446px"
              height="424px"
            />
          )}
          <GoldLineLeft src="/elements/goldlines/Gold-Line-6.png" />
          <GoldLineRight src="/elements/goldlines/Gold-Line-4.png" />
        </Flex>
      </Flex>
      {isTablet ? (
        <div className="nishi-logo">
          <Image
            alt="Nishi"
            width="138px"
            height="178px"
            src="/images/nishi-gold.png"
          />
        </div>
      ) : (
        <div className="nishi-logo-mobile">
          <Image
            alt="Nishi"
            width="76px"
            height="98px"
            src="/images/nishi-gold-mobile.png"
          />
        </div>
      )}
    </Container>
  );
}