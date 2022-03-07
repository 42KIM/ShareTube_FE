import { ReactElement } from 'react';
import { StyledInfoContainer } from './styles';
import type { InfoBoardItemProps } from './types';
import { Text } from '@/base';
import Link from 'next/link';

const InfoBoardItem = ({
  titleText,
  linkUrl,
  infoContent,
  titleFont,
  contentFont,
  contentColor
}: InfoBoardItemProps): ReactElement => {
  // from store
  let isLoggedIn = false;

  return (
    <StyledInfoContainer>
      <Text font={titleFont}>{titleText}</Text>
      <Link href={isLoggedIn ? linkUrl : '/login'}>
        <a>
          <Text font={contentFont} color={contentColor} bold>
            {isLoggedIn ? infoContent : '?'}
          </Text>
        </a>
      </Link>
    </StyledInfoContainer>
  );
};

export default InfoBoardItem;
