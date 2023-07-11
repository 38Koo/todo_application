import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout/layout';
import { AuthProvider } from '@/context/AuthContext';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout subTitle={pageProps.subTitle}>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
}
