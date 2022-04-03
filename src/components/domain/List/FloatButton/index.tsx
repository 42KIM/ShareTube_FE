import { ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './styles';
import type { FloatButtonProps } from './types';
import { Button, Icon, Text } from '@/base';
import { COLOR, FONT, ICON_SIZE } from '@/constants';
import { useRouter } from 'next/router';

const FloatButton = ({ handler }: FloatButtonProps): ReactElement => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Button
      size={'medium'}
      color={COLOR.coral}
      floatPosition={90}
      onClick={handler}
    >
      <StyledWrapper>
        <Icon icon={'listDelete'} size={ICON_SIZE.md} />
        <Text font={FONT.h1_bold}>
          {pathname === '/list/subscriptions'
            ? '리스트 생성하기'
            : '리스트 삭제하기'}
        </Text>
      </StyledWrapper>
    </Button>
  );
};

export default FloatButton;
