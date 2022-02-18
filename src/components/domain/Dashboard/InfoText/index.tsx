import { ReactElement } from 'react';
import { Text } from '@/base';
import type { InfoTextProps } from './types';

const InfoText = ({
  isLoggedIn,
  name,
  percentile
}: InfoTextProps): ReactElement => {
  return isLoggedIn ? (
    <>
      <Text size='02px' bold>
        {name}
      </Text>
      <Text size='02px'>님은 구독 채널 수</Text>
      <Text size='02px' color='red' bold>
        {percentile + '%'}
      </Text>
      <Text size='02px'>입니다</Text>
    </>
  ) : (
    <Text size='02px' bold>
      구독자의 랭킹이 궁금하다면 로그인 해주세요!
    </Text>
  );
};

export default InfoText;
