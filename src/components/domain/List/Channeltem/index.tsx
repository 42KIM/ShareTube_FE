import { ReactElement } from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper,
  StyledInfoContainer,
  StyledTextWrapper,
  StyledIconWrapper
} from './styles';
import type { ChannelItemProps } from './types';
import { Icon, Image, Text } from '@/base';
import { COLOR, FONT, ICON_SIZE } from '@/constants';
import { openInNewTab } from '@/utils';

const ChannelItem = ({
  id,
  thumbnail,
  title,
  subscribers,
  url
}: ChannelItemProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledCheckbox type={'checkbox'} value={id} />
      <StyledImageWrapper>
        <Image src={thumbnail} width={70} height={70} borderRadius={10} />
      </StyledImageWrapper>
      <StyledInfoContainer>
        <StyledTextWrapper>
          <Text font={FONT.title}>{title}</Text>
        </StyledTextWrapper>
        <Text font={FONT.subTitle} color={COLOR.darkGray}>
          {subscribers ? `${subscribers}명` : '비공개'}
        </Text>
      </StyledInfoContainer>
      <StyledIconWrapper onClick={() => openInNewTab(url)}>
        <Icon icon={'youtube'} size={ICON_SIZE.lg} color={COLOR.red} />
      </StyledIconWrapper>
    </StyledContainer>
  );
};

export default ChannelItem;
