import { ReactElement } from 'react';
import { Text } from '@/base';
import { StyledContainer } from './styles';
import type { InfoTextProps } from './types';
import { useAppSelector } from '@/hooks';

const InfoText = ({
  textFont,
  highlightColor
}: InfoTextProps): ReactElement => {
  // percent
  let percentile = '0.0';
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  return (
    <StyledContainer>
      {isLoggedIn ? (
        <>
          <Text font={textFont} bold>
            {user.nickname}
          </Text>
          <Text font={textFont}>{'님은 구독 채널 수'}</Text>
          <Text font={textFont} color={highlightColor} bold>
            {percentile + '%'}
          </Text>
          <Text font={textFont}>{'입니다! 🤭'}</Text>
        </>
      ) : (
        <Text font={textFont} bold>
          {'당신의 YouTube 구독 랭킹이 궁금하다면 로그인 해보세요!'}
        </Text>
      )}
    </StyledContainer>
  );
};

export default InfoText;
