import styled from 'styled-components';
import type { TextButtonProps } from './types';

const StyledButton = styled.button<Pick<TextButtonProps, 'width' | 'height'>>`
  width: ${({ width }): string | undefined =>
    width ? (typeof width === 'number' ? `${width}px` : width) : undefined};
  height: ${({ height }): string | undefined =>
    height ? (typeof height === 'number' ? `${height}px` : height) : undefined};
  font-weight: bold;
  background-color: transparent;
  border: none;
`;

export { StyledButton };
