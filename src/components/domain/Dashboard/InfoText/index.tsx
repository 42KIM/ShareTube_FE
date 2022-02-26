import { ReactElement } from 'react';
import { Text } from '@/base';
import type { InfoTextProps } from './types';

const InfoText = ({
  textFont,
  highlightColor
}: InfoTextProps): ReactElement => {
  // from store
  let isLoggedIn = true;
  let name = 'User';
  let percentile = '0.0';

  return isLoggedIn ? (
    <div>
      <Text font={textFont} bold>
        {name}
      </Text>
      <Text font={textFont}>{'님은 구독 채널 수 '}</Text>
      <Text font={textFont} color={highlightColor} bold>
        {percentile + '%'}
      </Text>
      <Text font={textFont}>{'입니다.'}</Text>
    </div>
  ) : (
    <Text font={textFont} bold>
      {'구독자의 랭킹이 궁금하다면 로그인 해주세요!'}
    </Text>
  );
};

export default InfoText;
