import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { InfoBoxProps } from './types';
import { Text } from '@/base';
import { COLOR, FONT } from '@/constants';

const InfoBox = ({ path, listInfo }: InfoBoxProps): ReactElement => {
  switch (path) {
    case '/list/my':
      return (
        <StyledContainer>
          <Text
            font={FONT.title}
            color={COLOR.darkGray}
          >{`내가 공유한 리스트 ${listInfo}`}</Text>
        </StyledContainer>
      );
    case '/list/shared':
      return (
        <StyledContainer>
          <Text
            font={FONT.title}
            color={COLOR.darkGray}
          >{`공유 받은 리스트 ${listInfo}`}</Text>
        </StyledContainer>
      );
    case '/list/subscriptions':
      return (
        <StyledContainer>
          <Text
            font={FONT.title}
            color={COLOR.darkGray}
          >{`내가 구독 중인 채널 ${listInfo}`}</Text>
        </StyledContainer>
      );
    default:
      return <></>;
  }
};

export default InfoBox;
