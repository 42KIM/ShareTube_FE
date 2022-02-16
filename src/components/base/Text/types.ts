import type { ITextSize } from '@/types';

interface TextProps {
  children: string | number;
  size: ITextSize;
  color: string;
  bold?: boolean;
  italic?: boolean;
  block?: boolean;
}

export type { TextProps };
