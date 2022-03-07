import type { IColor, IFont } from '@/types';
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  font: IFont;
  color?: IColor;
  bold?: boolean;
  italic?: boolean;
  block?: boolean;
}

export type { TextProps };
