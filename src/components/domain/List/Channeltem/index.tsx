import { ReactElement } from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper,
  StyledInfoContainer,
  StyledTextWrapper
} from './styles';
import type { ChannelItemProps } from './types';
import { Image, Text } from '@/base';
import { COLOR, FONT } from '@/constants';
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
      <StyledInfoContainer onClick={() => openInNewTab(url)}>
        <StyledTextWrapper>
          <Text font={FONT.title}>{title}</Text>
        </StyledTextWrapper>
        <Text font={FONT.subTitle} color={COLOR.darkGray}>
          {subscribers ? `${subscribers}명` : '비공개'}
        </Text>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default ChannelItem;
