import { ReactElement } from 'react';
import { StyledButton } from './styles';
import type { ButtonProps } from './types';

const Button = ({
  children,
  size,
  color,
  floatPosition,
  boxShadow,
  onClick
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      size={size}
      color={color}
      floatPosition={floatPosition}
      boxShadow={boxShadow}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
