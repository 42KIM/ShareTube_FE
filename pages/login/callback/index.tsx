import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { authApi } from '@/apis';

const CallbackPage = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const handleLogin = async (id: string) => {
    const data = await authApi.getLoginData(id);

    // 데이터를 스토리지/스토어에 보관 후, 메인페이지로 리다이렉트
    console.log(data);
    router.replace('/');
  };

  useEffect(() => {
    if (id) {
      handleLogin(id as string);
    }
  }, [id]);

  // loading spinner 적용 필요
  return <>is processing...</>;
};

export default CallbackPage;
