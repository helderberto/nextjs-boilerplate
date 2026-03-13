import type { AppProps } from 'next/app';
import Head from 'next/head';

import Nav from 'components/Nav';
import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and CSS Modules"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default App;
