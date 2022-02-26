import { ReactElement } from 'react';
import { StyledInfo } from './styles';
import type { InfoBoardItemProps } from './types';
import { Text } from '@/base';

const InfoBoardItem = ({
  titleText,
  infoContent,
  titleFont,
  contentFont,
  contentColor
}: InfoBoardItemProps): ReactElement => {
  // from store
  let isLoggedIn = true;

  return (
    <StyledInfo>
      <Text font={titleFont}>{titleText}</Text>
      <Text font={contentFont} color={contentColor} bold>
        {isLoggedIn ? infoContent : '-'}
      </Text>
    </StyledInfo>
  );
};

export default InfoBoardItem;
