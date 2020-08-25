import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '../lib/hooks';

import { Header } from './Header/Header'
import { Container } from 'reactstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="The Feeks Management Panel"
        />
        <meta property="og:title" content="The Feeks" />
        <meta
          property="og:description"
          content="The Feeks Management Panel"
        />
      </Head>

      <Header />

      <Container>
        <main>{children}</main>
        <footer>
          <p>
            <span role="img" aria-label="Fire">
              🔥
          </span>
         The Feeks
        </p>
        </footer>
      </Container>
    </>
  );
};

export default Layout;