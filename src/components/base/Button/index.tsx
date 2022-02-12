import { ReactElement } from 'react';
import { StyledButton } from './styles';
import type { ButtonProps } from './types';

const Button = ({
  children,
  size,
  color,
  boxShadow
}: ButtonProps): ReactElement => {
  return (
    <StyledButton size={size} color={color} boxShadow={boxShadow}>
      {children}
    </StyledButton>
  );
};

export default Button;
