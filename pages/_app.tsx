import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import client from 'apollo/client';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Title" />
        <meta property="og:description" content="Description" />
        <meta
          property="og:image"
          content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        />
      </Head>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default MyApp;
