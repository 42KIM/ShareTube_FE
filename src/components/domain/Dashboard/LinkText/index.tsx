import { ReactElement } from 'react';
import Link from 'next/link';
import { Text } from '@/base';
import { StyledLinkText } from './styles';
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
        <a>
          <Text font={textFont} color={textColor} bold>
            {children}
          </Text>
        </a>
      </Link>
    </StyledLinkText>
  );
};

export default LinkText;
