import { ReactElement } from 'react';
import Link from 'next/link';
import { StyledSubContainer, StyledLi } from './styles';
import type { SubMenuProps } from './types';

const SubMenu = ({
  size,
  color,
  content,
  isDisplaying
}: SubMenuProps): ReactElement => {
  return (
    <StyledSubContainer size={size}>
      <ul>
        {content.map((list) => (
          <Link href={list.link}>
            <StyledLi size={size} color={color} isDisplaying={isDisplaying}>
              <a>{list.text}</a>
            </StyledLi>
          </Link>
        ))}
      </ul>
    </StyledSubContainer>
  );
};

export default SubMenu;
