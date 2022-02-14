import { ReactElement, useState } from 'react';
import SubMenu from './SubMenu';
import { StyledContainer } from './styles';
import type { DropdownProps } from './types';

const Dropdown = ({
  children,
  size,
  color,
  content
}: DropdownProps): ReactElement => {
  const [display, setDisplay] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.target === e.currentTarget && setDisplay(!display);
  };

  return (
    <StyledContainer size={size} onClick={handleClick}>
      {children}
      <SubMenu
        size={size}
        color={color}
        content={content}
        isDisplaying={display}
      />
    </StyledContainer>
  );
};

export default Dropdown;
