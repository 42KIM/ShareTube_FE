import { ReactElement } from 'react';
import { StyledButton } from './styles';
import type { TextButtonProps } from './types';
import { Text } from '@/base';

const TextButton = ({
  children,
  font,
  textColor,
  width,
  height,
  onClick
}: TextButtonProps): ReactElement => {
  return (
    <StyledButton
      width={width}
      height={height}
      type={'button'}
      onClick={onClick}
    >
      <Text font={font} color={textColor}>
        {children}
      </Text>
    </StyledButton>
  );
};

export default TextButton;
