import { ReactElement } from 'react';
import {
  StyledContainer,
  StyledTextContainer,
  StyledTextWrapper
} from './styles';
import type { ChannelCardProps } from './types';
import { Image, Text } from '@/base';
import { FONT } from '@/constants';
import { openInNewTab } from '@/utils';

const ChannelCard = ({
  url,
  direction,
  size,
  thumbnail = 'https://via.placeholder.com/200?text=See+More',
  title,
  subTitle
}: ChannelCardProps): ReactElement => {
  return (
    <StyledContainer
      direction={direction}
      size={size}
      onClick={() => openInNewTab(url)}
    >
      <Image src={thumbnail} width={size} height={size} borderRadius={10} />
      <StyledTextContainer direction={direction} size={size}>
        <StyledTextWrapper>
          <Text font={FONT.title}>{title}</Text>
        </StyledTextWrapper>
        <Text font={FONT.subTitle}>
          {subTitle !== undefined ? `${subTitle}명` : ''}
        </Text>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default ChannelCard;
