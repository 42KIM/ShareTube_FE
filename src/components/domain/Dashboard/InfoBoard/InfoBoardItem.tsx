import { ReactElement } from 'react';
import { StyledInfo } from './styles';
import type { InfoBoardItemProps } from './types';
import { Text } from '@/base';

const InfoBoardItem = ({
  titleText,
  infoContent,
  titleSize,
  contentSize,
  contentColor
}: InfoBoardItemProps): ReactElement => {
  // from store
  let isLoggedIn = true;

  return (
    <StyledInfo>
      <Text size={titleSize}>{titleText}</Text>
      <Text size={contentSize} color={contentColor} bold>
        {isLoggedIn ? infoContent : '-'}
      </Text>
    </StyledInfo>
  );
};

export default InfoBoardItem;
