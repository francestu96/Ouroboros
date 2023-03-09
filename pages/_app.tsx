import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import "../styles/globals.css";
import { Session } from 'next-auth';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const theme = extendTheme({ config });

const Ouroboros = ({Component, pageProps}: AppProps<{session: Session}>) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
};

export default Ouroboros;
