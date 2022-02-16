import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import type { ButtonProps } from './types';
import { BUTTON_SIZE } from '@/constants';

const StyledButton = styled.button<ButtonProps>`
  width: ${({ size }): string => BUTTON_SIZE[size].width};
  height: ${({ size }): string => BUTTON_SIZE[size].height};
  padding: 0;
  cursor: pointer;
  background-color: ${({ color }): string => color};
  border: none;
  ${({ boxShadow }): false | undefined | FlattenSimpleInterpolation =>
    boxShadow &&
    css`
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    `}
  ${({ floatPosition }): 0 | undefined | FlattenSimpleInterpolation =>
    floatPosition &&
    css`
      position: fixed;
      top: ${floatPosition}%;
      right: 0;
      left: 0;
      margin: auto;
    `}

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
