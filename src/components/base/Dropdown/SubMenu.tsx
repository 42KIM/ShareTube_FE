import { ReactElement } from 'react';
import { StyledSubMenu } from './styles';
import type { SubMenuProps } from './types';

const SubMenu = ({ children, isDisplaying }: SubMenuProps): ReactElement => {
  return <StyledSubMenu isDisplaying={isDisplaying}>{children}</StyledSubMenu>;
};

export default SubMenu;
