import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { InfoBoardProps } from './types';
import InfoBoardItem from './InfoBoardItem';
import { useAppSelector } from '@/hooks';

const InfoBoard = ({
  titleFont,
  contentFont,
  contentColor
}: InfoBoardProps): ReactElement => {
  const { totalSubscriptions } = useAppSelector(
    (state) => state.auth.youtubeSubs
  );
  const { my, shared } = useAppSelector((state) => state.list);

  return (
    <StyledContainer>
      <InfoBoardItem
        titleText={'구독 중인 채널'}
        linkUrl={'/list/subscriptions'}
        infoContent={totalSubscriptions}
        titleFont={titleFont}
        contentFont={contentFont}
        contentColor={contentColor}
      />
      <InfoBoardItem
        titleText={'내가 공유한 리스트'}
        linkUrl={'/list/my'}
        infoContent={my.totalCreatedListCount}
        titleFont={titleFont}
        contentFont={contentFont}
        contentColor={contentColor}
      />
      <InfoBoardItem
        titleText={'공유 받은 리스트'}
        linkUrl={'/list/shared'}
        infoContent={shared.totalSharedListCount}
        titleFont={titleFont}
        contentFont={contentFont}
        contentColor={contentColor}
      />
    </StyledContainer>
  );
};

export default InfoBoard;
