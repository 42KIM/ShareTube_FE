import { ReactChild } from 'react';
import type { IColor, IPageUrl, ITextSize } from '@/types';

interface LinkTextProps {
  children: ReactChild;
  url: IPageUrl;
  textSize: ITextSize;
  textColor: IColor;
}

export type { LinkTextProps };
