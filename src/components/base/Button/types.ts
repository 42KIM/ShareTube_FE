import { ReactChild } from 'react';
import { IButtonSize, IButtonColor } from '../../../types';

interface ButtonProps {
  children: ReactChild;
  size: IButtonSize;
  color: IButtonColor;
  boxShadow?: boolean;
}

export type { ButtonProps };
