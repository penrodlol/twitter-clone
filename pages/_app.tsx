import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

function TwitterClone({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone in NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default TwitterClone;
