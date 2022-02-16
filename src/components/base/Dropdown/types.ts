import { ReactChild } from 'react';
import type { IDropdownSize } from '@/types';

interface DropdownProps {
  children: [ReactChild, ReactChild];
  size: IDropdownSize;
}

interface SubMenuProps {
  children: ReactChild;
  isDisplaying: boolean;
}

export type { DropdownProps, SubMenuProps };
