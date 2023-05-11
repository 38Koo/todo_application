import { Layout } from '@/components/Layout/layout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return (
    <ApolloProvider client={client}>
      <Layout subTitle={pageProps.subTitle}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
