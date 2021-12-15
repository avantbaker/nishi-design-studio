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
  width: ${rem(168)};
  height: ${rem(168)};
  position: relative;
`;

const OuterImage = styled.div`
  display: flex;

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

export const GoldBadge: FC<{}> = ({ ...rest }) => (
  <Container>
    <OuterImage>
      <Image alt="" layout="fill" src="/images/nishi-gold-badge.png" />
    </OuterImage>
    <InnerImage>
      <Image
        alt=""
        width="82px"
        height="106px"
        src="/images/nishi-gold-badge-inner.png"
      />
    </InnerImage>
  </Container>
);

export default GoldBadge;
