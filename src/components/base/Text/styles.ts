import styled from 'styled-components';
import { TextProps } from './types';

const StyledText = styled.span<TextProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline')};
  font-size: ${({ size }): string => size};
  font-weight: ${({ bold }): string => (bold ? 'bold' : 'normal')};
  color: ${({ color }): string => (color ? color : 'black')};
`;

export { StyledText };
