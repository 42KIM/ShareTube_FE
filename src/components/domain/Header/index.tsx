import { ReactElement } from 'react';
import { StyledContainer, StyledLogo, StyledButton } from './styles';
import { Icon } from '@/base';
import { ICON_SIZE } from '@/constants';
import Link from 'next/link';

// temp urls
const Header = (): ReactElement => {
  // from store
  let isLoggedIn = true;

  // onclick logout fn
  const logOut = () => {
    console.log('log out!');
    // logout dispatch -> refresh page?
  };

  return (
    <StyledContainer>
      <Link href={'#'}>
        <a>
          <Icon icon={'add'} size={ICON_SIZE.lg} />
        </a>
      </Link>
      {/* // temp Logo Icon */}
      <Link href={'#'}>
        <a>
          <StyledLogo>
            <Icon icon={'bookmark'} size={ICON_SIZE.lg} />
          </StyledLogo>
        </a>
      </Link>
      {isLoggedIn ? (
        <StyledButton onClick={logOut} type={'button'}>
          {'로그아웃'}
        </StyledButton>
      ) : (
        <Link href={'/auth'}>
          <a>
            <Icon icon={'share'} size={ICON_SIZE.lg} />
          </a>
        </Link>
      )}
    </StyledContainer>
  );
};

export default Header;
