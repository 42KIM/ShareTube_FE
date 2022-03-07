import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { InfoBoxProps } from './types';
import { Text } from '@/base';
import { COLOR, FONT } from '@/constants';

const InfoBox = ({ tabState, listInfo }: InfoBoxProps): ReactElement => {
  return (
    <StyledContainer>
      {tabState.firstTabSelected ? (
        <Text
          font={FONT.title}
          color={COLOR.darkGray}
        >{`내가 공유한 리스트 ${listInfo}`}</Text>
      ) : (
        <Text
          font={FONT.title}
          color={COLOR.darkGray}
        >{`공유 받은 리스트 ${listInfo}`}</Text>
      )}
      {/* Dropdown 위치 */}
    </StyledContainer>
  );
};

export default InfoBox;
