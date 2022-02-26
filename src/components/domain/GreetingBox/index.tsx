import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { GreetingBoxProps } from './types';
import { Text } from '@/base';

const GreetingBox = ({
  textContents,
  textFonts,
  isBold
}: GreetingBoxProps): ReactElement => {
  return (
    <StyledContainer>
      {textContents.map((content, index) => (
        <Text font={textFonts[index]} bold={isBold[index]} block>
          {content}
        </Text>
      ))}
    </StyledContainer>
  );
};

export default GreetingBox;
