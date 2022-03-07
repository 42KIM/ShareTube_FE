import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { TabProps } from './types';
import { TextButton } from '@/base';
import { COLOR, FONT } from '@/constants';

const Tab = ({ tabState, tabHandler }: TabProps): ReactElement => {
  return (
    <StyledContainer>
      <TextButton
        font={FONT.h1_bold}
        textColor={tabState.firstTabSelected ? COLOR.black : COLOR.gray}
        onClick={tabHandler}
      >
        마이 리스트
      </TextButton>
      <TextButton
        font={FONT.h1_bold}
        textColor={!tabState.firstTabSelected ? COLOR.black : COLOR.gray}
        onClick={tabHandler}
      >
        공유 받은 리스트
      </TextButton>
    </StyledContainer>
  );
};

export default Tab;
