import styled from 'styled-components';
import { DROPDOWN_SIZE } from '../../../constants';
import type { SubMenuProps } from './types';

const StyledSubContainer = styled.div<Pick<SubMenuProps, 'size'>>`
  position: absolute;
  top: calc(${({ size }) => DROPDOWN_SIZE[size].height} * 1.2);
`;

const StyledContainer = styled.div<Pick<SubMenuProps, 'size'>>`
  position: relative;
  width: ${({ size }): string => DROPDOWN_SIZE[size].width};
  height: ${({ size }): string => DROPDOWN_SIZE[size].height};
  text-align: center;
  cursor: pointer;
  /* temp */
  border: 1px solid black;
`;

const StyledLi = styled.li<Omit<SubMenuProps, 'content'>>`
  display: ${({ isDisplaying }) => (isDisplaying ? 'block' : 'none')};
  width: ${({ size }): string => DROPDOWN_SIZE[size].width};
  height: ${({ size }): string => DROPDOWN_SIZE[size].height};
  list-style: none;
  background-color: ${({ color }): string => color};

  &:hover {
    filter: brightness(1.2);
  }
`;

export { StyledContainer, StyledSubContainer, StyledLi };
