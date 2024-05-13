import { ChakraProvider, StyleFunctionProps } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { AppProps } from 'next/app';
import "../globals.css"

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors['chakra-body-bg']._light,
        'gray.800',
      )(props),
    },
  })
};

const colors = {
  main: "#DA3F5E",
  input: "#975F6A"
}

const theme = extendTheme({ config, styles, colors });

const Ouroboros = ({Component, pageProps}: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default Ouroboros;
