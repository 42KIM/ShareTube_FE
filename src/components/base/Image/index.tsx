import { ReactElement } from 'react';
import { StyledImageWrapper } from './styles';
import type { ImageProps } from './types';
import NextImage from 'next/image';

const Image = ({ src, width, height, round }: ImageProps): ReactElement => {
  return (
    <StyledImageWrapper width={width} height={height} round={round}>
      <NextImage src={src} layout={'fill'} />
    </StyledImageWrapper>
  );
};

export default Image;
