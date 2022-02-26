import { ReactChild } from 'react';
import type { IColor, IPageUrl, IFont } from '@/types';

interface LinkTextProps {
  children: ReactChild;
  url: IPageUrl;
  textFont: IFont;
  textColor?: IColor;
}

export type { LinkTextProps };
