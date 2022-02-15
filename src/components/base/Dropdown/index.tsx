import { ReactElement, useState } from 'react';
import SubMenu from './SubMenu';
import { StyledContainer } from './styles';
import type { DropdownProps } from './types';

const Dropdown = ({ children, size }: DropdownProps): ReactElement => {
  const [display, setDisplay] = useState(false);

  const handleClick = (): void => setDisplay(!display);

  return (
    <StyledContainer size={size} onClick={handleClick}>
      {children[0]}
      <SubMenu isDisplaying={display}>{children[1]}</SubMenu>
    </StyledContainer>
  );
};

export default Dropdown;
