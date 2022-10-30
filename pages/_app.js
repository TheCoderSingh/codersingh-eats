import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../components';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
