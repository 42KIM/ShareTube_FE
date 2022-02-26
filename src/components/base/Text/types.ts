import type { IColor, IFont } from '@/types';
import { ReactChild } from 'react';

interface TextProps {
  children?: ReactChild;
  size: IFont;
  color?: IColor;
  bold?: boolean;
  italic?: boolean;
  block?: boolean;
}

export type { TextProps };
