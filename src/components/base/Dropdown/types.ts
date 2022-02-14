import { ReactChild } from 'react';
import type { IColor, IDropdownSize } from '../../../types';

interface DropdownProps extends Omit<SubMenuProps, 'isDisplaying'> {
  children: ReactChild;
}

interface IContent {
  link: string;
  text: string;
}

interface SubMenuProps {
  size: IDropdownSize;
  color: IColor;
  content: IContent[];
  isDisplaying: boolean;
}

export type { DropdownProps, SubMenuProps };
