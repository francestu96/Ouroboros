import { ChakraProvider, StyleFunctionProps } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { mode } from '@chakra-ui/theme-tools';
import "../styles/globals.css";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors['chakra-body-bg']._light,
        '#2F3849',
      )(props),
    },
  })
};

const theme = extendTheme({ config, styles });

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
