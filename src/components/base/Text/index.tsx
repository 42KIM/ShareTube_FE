import { ReactElement } from 'react';
import { StyledText } from './styles';
import type { TextProps } from './types';

const Text = ({
  children,
  font,
  color,
  bold,
  block
}: TextProps): ReactElement => {
  return (
    <StyledText font={font} color={color} bold={bold} block={block}>
      {children}
    </StyledText>
  );
};

export default Text;
