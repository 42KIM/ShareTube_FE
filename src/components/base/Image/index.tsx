import { ReactElement } from 'react';
import { StyledImageWrapper } from './styles';
import type { ImageProps } from './types';
import NextImage from 'next/image';

const Image = ({
  src,
  width,
  height,
  borderRadius
}: ImageProps): ReactElement => {
  return (
    <StyledImageWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <NextImage src={src} layout={'fill'} />
    </StyledImageWrapper>
  );
};

export default Image;
