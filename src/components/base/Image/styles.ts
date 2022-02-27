import styled from 'styled-components';
import { ImageProps } from './types';

const StyledImageWrapper = styled.div<
  Pick<ImageProps, 'width' | 'height' | 'borderRadius'>
>`
  position: relative;
  width: ${({ width }): string =>
    typeof width === 'number' ? `${width}px` : width};
  height: ${({ height }): string =>
    typeof height === 'number' ? `${height}px` : height};
  overflow: hidden;
  border-radius: ${({ borderRadius }): string | undefined =>
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius};
`;

export { StyledImageWrapper };
