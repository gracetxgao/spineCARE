import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/global.css';
import { color } from 'framer-motion';

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: '64px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '24px',
      color: '#828282'
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
