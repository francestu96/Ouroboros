import { ChakraProvider, StyleFunctionProps } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors['chakra-body-bg']._light,
        'gray.700',
      )(props),
    },
  })
};

const colors = {
  main: "#DA3F5E",
  input: "#975F6A"
}

const theme = extendTheme({ config, styles, colors });

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
