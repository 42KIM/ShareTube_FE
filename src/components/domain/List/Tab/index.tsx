import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import { TextButton } from '@/base';
import { COLOR, FONT } from '@/constants';
import { useRouter } from 'next/router';

const Tab = (): ReactElement => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <StyledContainer>
      <TextButton
        font={FONT.h1_bold}
        textColor={path === '/list/my' ? COLOR.black : COLOR.gray}
        onClick={() => router.push('/list/my')}
      >
        마이 리스트
      </TextButton>
      <TextButton
        font={FONT.h1_bold}
        textColor={path === '/list/shared' ? COLOR.black : COLOR.gray}
        onClick={() => router.push('/list/shared')}
      >
        공유 받은 리스트
      </TextButton>
    </StyledContainer>
  );
};

export default Tab;
