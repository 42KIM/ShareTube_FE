import { HTMLAttributes, ReactNode } from 'react';
import { IButtonSize, IColor } from '@/types';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: IButtonSize;
  color: IColor;
  floatPosition?: number;
  boxShadow?: boolean;
}

export type { ButtonProps };
