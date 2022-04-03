import { ReactElement } from 'react';
import { StyledInfoContainer } from './styles';
import type { InfoBoardItemProps } from './types';
import { Text } from '@/base';
import Link from 'next/link';
import { useAppSelector } from '@/hooks';

const InfoBoardItem = ({
  titleText,
  linkUrl,
  infoContent,
  titleFont,
  contentFont,
  contentColor
}: InfoBoardItemProps): ReactElement => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

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
