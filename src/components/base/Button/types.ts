import { ReactChild } from 'react';
import { IButtonSize, IButtonColor } from '../../../types';

interface ButtonProps {
  children: ReactChild;
  size: IButtonSize;
  color: IButtonColor;
  floatPosition?: number;
  boxShadow?: boolean;
}

export type { ButtonProps };
