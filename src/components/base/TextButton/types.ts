import { IColor, IFont } from '@/types';
import { HTMLAttributes, ReactNode } from 'react';

interface TextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  font: IFont;
  textColor?: IColor;
  width?: number | string;
  height?: number | string;
}

export type { TextButtonProps };
