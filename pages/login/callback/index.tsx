import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import { authApi } from '@/apis';
import { logIn } from '@/store';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from '@/hooks';

const CallbackPage = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [, setValue] = useLocalStorage('TOKEN', '');

  const handleLogin = async (id: string) => {
    const data = await authApi.getInitialData(id);

    // isLoggedIn 검증 후 처리해서 payload에 추가해서 dispatch 시키기
    // or 디스패치 후 _App에서 accessToken 존재 여부를 확인해서 isLoggedIn 업데이트.
    // 단 이때는 단순히 존재가 아니라 유효성도 검증해야한다.

    dispatch(logIn(data));
    setValue(data.accessToken);
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
