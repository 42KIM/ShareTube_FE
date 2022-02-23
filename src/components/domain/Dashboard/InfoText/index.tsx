import { ReactElement } from 'react';
import { Text } from '@/base';
import type { InfoTextProps } from './types';

const InfoText = ({
  textSize,
  highlightColor
}: InfoTextProps): ReactElement => {
  // from store
  let isLoggedIn = true;
  let name = 'User';
  let percentile = '0.0';

  return isLoggedIn ? (
    <div>
      <Text size={textSize} bold>
        {name}
      </Text>
      <Text size={textSize}>{'님은 구독 채널 수 '}</Text>
      <Text size={textSize} color={highlightColor} bold>
        {percentile + '%'}
      </Text>
      <Text size={textSize}>{'입니다.'}</Text>
    </div>
  ) : (
    <Text size={textSize} bold>
      {'구독자의 랭킹이 궁금하다면 로그인 해주세요!'}
    </Text>
  );
};

export default InfoText;
