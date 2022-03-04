import { IColor, IFont } from '@/types';
import { HTMLAttributes, ReactChild } from 'react';

interface TextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactChild;
  font: IFont;
  textColor?: IColor;
  width?: number | string;
  height?: number | string;
}

export type { TextButtonProps };
