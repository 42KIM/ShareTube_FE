import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultPageLayout } from '@/layout';
import { wrapper } from '@/store/configureStore';
import { getLocalStorageItem } from '@/utils';
import { useEffect } from 'react';
import { logIn } from '@/store';
import { authApi } from '@/apis';
import { useDispatch } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = getLocalStorageItem('USER');
    if (userInfo) {
      const getUserInfo = async () => {
        const data = await authApi.getInitialData(userInfo.id);
        dispatch(logIn(data));
        // 만약 요청 보낼 때 토큰이 만료되었다면 서버에서 알아서 검증해서 새 토큰을 준다
        // 그거 업데이트 해야?
      };
      getUserInfo();
    }
  }, []);

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
