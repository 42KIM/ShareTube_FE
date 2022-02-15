import styled from 'styled-components';
import { ImageProps } from './types';

const StyledImageWrapper = styled.div<
  Pick<ImageProps, 'width' | 'height' | 'round'>
>`
  position: relative;
  width: ${({ width }): string =>
    typeof width === 'number' ? `${width}px` : width};
  height: ${({ height }): string =>
    typeof height === 'number' ? `${height}px` : height};
  overflow: hidden;
  border-radius: ${({ round }): string => (round ? '50%' : '0')};
`;

export { StyledImageWrapper };
