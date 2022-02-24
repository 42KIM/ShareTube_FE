import type { IColor, ITextSize } from '@/types';
import { ReactChild } from 'react';

interface TextProps {
  children?: ReactChild;
  size: ITextSize;
  color?: IColor;
  bold?: boolean;
  italic?: boolean;
  block?: boolean;
}

export type { TextProps };
