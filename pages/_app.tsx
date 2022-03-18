import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultPageLayout } from '@/layout';
import { wrapper } from '@/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ShareTube | 쉐어튜브</title>
      </Head>
      <DefaultPageLayout>
        <Component {...pageProps} />
      </DefaultPageLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
