import theme from 'styles/theme';
import Image from 'next/image';
import { rem } from 'polished';
import styled, { keyframes } from 'styled-components';
import { FC } from 'react';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: ${rem(154)};
  height: ${rem(154)};
  position: relative;
  background-color: ${theme.colors.gray};
  border-radius: 50%;
`;

const OuterImage = styled.div`
  display: flex;
  padding: ${rem(8)};

  img {
    animation: ${spin} 16s linear infinite;
  }
`;

const InnerImage = styled.div`
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
`;

export const BlackBadge: FC<{}> = ({ ...rest }) => (
  <Container {...rest}>
    <OuterImage>
      <Image
        alt=""
        width="154px"
        height="154px"
        src="/images/white-badge-outer.png"
      />
    </OuterImage>
    <InnerImage>
      <Image
        alt=""
        width="82px"
        height="106px"
        src="/images/white-badge-inner.png"
      />
    </InnerImage>
  </Container>
);

export default BlackBadge;
