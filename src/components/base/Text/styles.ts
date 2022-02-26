import styled from 'styled-components';
import { TextProps } from './types';

const StyledText = styled.span<TextProps>`
  display: ${({ block }): string => (block ? 'block' : 'inline')};
  font: ${({ font }): string => font};
  color: ${({ color }): string => (color ? color : 'black')};
`;

export { StyledText };
