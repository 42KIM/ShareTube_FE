import styled from 'styled-components';
import { BUTTON_SIZE } from '../../../constants';
import type { ButtonProps } from './types';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }): string => BUTTON_SIZE[size].width};
  height: ${({ size }): string => BUTTON_SIZE[size].height};
  padding: 0;
  cursor: pointer;
  background-color: ${({ color }): string => color};
  border: none;
  box-shadow: ${({ boxShadow }): string =>
    boxShadow ? '0px 1px 1px rgba(0, 0, 0, 0.25)' : 'none'};

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(1.2);
    box-shadow: none;
    transform: translateY(1px);
  }
`;

export { StyledButton };
