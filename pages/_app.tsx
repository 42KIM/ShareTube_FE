import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultPageLayout } from '@/layout';
import { wrapper } from '@/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ShareTube | μμ΄νλΈ</title>
      </Head>
      <DefaultPageLayout>
        <Component {...pageProps} />
      </DefaultPageLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
