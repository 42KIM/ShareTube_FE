import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { InfoBoardProps } from './types';
import InfoBoardItem from './InfoBoardItem';

const InfoBoard = ({
  titleSize,
  contentSize,
  contentColor
}: InfoBoardProps): ReactElement => {
  // from store
  let subscriptions = 100;
  let sharedLists = 5;
  let totalViews = 99;

  return (
    <StyledContainer>
      <InfoBoardItem
        titleText={'구독 중인 채널'}
        infoContent={subscriptions}
        titleSize={titleSize}
        contentSize={contentSize}
        contentColor={contentColor}
      />
      <InfoBoardItem
        titleText={'내가 공유한 리스트'}
        infoContent={sharedLists}
        titleSize={titleSize}
        contentSize={contentSize}
        contentColor={contentColor}
      />
      <InfoBoardItem
        titleText={'내 리스트 총 조회수'}
        infoContent={totalViews}
        titleSize={titleSize}
        contentSize={contentSize}
        contentColor={contentColor}
      />
    </StyledContainer>
  );
};

export default InfoBoard;