import { ReactElement } from 'react';
import Link from 'next/link';
import { Text } from '@/base';
import { StyledLinkText, StyledA } from './styles';
import { LinkTextProps } from './types';

const LinkText = ({
  children,
  url,
  textFont,
  textColor
}: LinkTextProps): ReactElement => {
  return (
    <StyledLinkText>
      <Link href={url}>
        <StyledA>
          <Text font={textFont} color={textColor} bold>
            {children}
          </Text>
        </StyledA>
      </Link>
    </StyledLinkText>
  );
};

export default LinkText;
