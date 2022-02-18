import { ReactChild } from 'react';
import type { IPageUrl } from '@/types';

interface LinkTextProps {
  children: ReactChild;
  url: IPageUrl;
}

export type { LinkTextProps };
