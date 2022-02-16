import styled from 'styled-components';
import type { DropdownProps, SubMenuProps } from './types';
import { DROPDOWN_SIZE } from '@/constants';

const StyledSubMenu = styled.div<SubMenuProps>`
  position: absolute;
  top: 110%;
  display: ${({ isDisplaying }) => (isDisplaying ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);
`;

const StyledContainer = styled.div<DropdownProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }): string => DROPDOWN_SIZE[size].width};
  height: ${({ size }): string => DROPDOWN_SIZE[size].height};
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

export { StyledContainer, StyledSubMenu };
