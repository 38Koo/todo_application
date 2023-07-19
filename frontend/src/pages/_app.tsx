import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout/layout';
import { AuthProvider } from '@/context/AuthContext';
import { ChakraProvider } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider>
          <Layout subTitle={pageProps.subTitle}>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
