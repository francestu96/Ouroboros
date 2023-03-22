import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  return (
    <LinkBox h='55'>
      <LinkOverlay href="/">
          <Image
            src='/logo.png'
            height={55}
            width={55}
            alt="Ouroboros logo"
          />
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
