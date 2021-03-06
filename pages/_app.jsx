import React from 'react';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>The Feeks</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
