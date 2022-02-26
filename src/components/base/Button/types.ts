import { ReactChild } from 'react';
import { IButtonSize, IColor } from '@/types';

interface ButtonProps {
  children: ReactChild;
  size: IButtonSize;
  color: IColor;
  floatPosition?: number;
  boxShadow?: boolean;
}

export type { ButtonProps };
