import { ReactElement } from 'react';
import { StyledText } from './styles';
import type { TextProps } from './types';

const Text = ({
  children,
  size,
  color,
  bold,
  block
}: TextProps): ReactElement => {
  return (
    <StyledText size={size} color={color} bold={bold} block={block}>
      {children}
    </StyledText>
  );
};

export default Text;
