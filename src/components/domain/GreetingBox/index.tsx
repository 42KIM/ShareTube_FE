import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { GreetingBoxProps } from './types';
import { Text } from '@/base';

const GreetingBox = ({
  textContents,
  textSizes,
  isBold
}: GreetingBoxProps): ReactElement => {
  return (
    <StyledContainer>
      {textContents.map((content, index) => (
        <Text size={textSizes[index]} bold={isBold[index]} block>
          {content}
        </Text>
      ))}
    </StyledContainer>
  );
};

export default GreetingBox;
