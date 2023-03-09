import { LinkBox, LinkOverlay, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <LinkBox h='55'>
      <LinkOverlay href="/">
          <Image
            src='/logo.png'
            height={55}
            width={45}
            alt="Ouroboros logo"
          />
      </LinkOverlay>
    </LinkBox>
  );
};

export default Logo;
