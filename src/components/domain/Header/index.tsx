import { ReactElement } from 'react';
import {
  StyledWrapper,
  StyledContainer,
  StyledLogo,
  StyledGoogleButton,
  StyledButtonWrapper,
  StyledLogoutButton
} from './styles';
import { Icon, Image } from '@/base';
import { ICON_SIZE } from '@/constants';
import Link from 'next/link';

// temp urls
const Header = (): ReactElement => {
  // from store
  let isLoggedIn = false;

  const handleLogIn = async () => {
    let res = await fetch('https://sharetube-be.herokuapp.com/auth/login');
    console.log(res);
  };

  // onclick logout fn
  const logOut = () => {
    console.log('log out!');
    // logout dispatch -> refresh page?
  };

  return (
    <StyledWrapper>
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
              <Icon icon={'star'} size={ICON_SIZE.lg} />
            </StyledLogo>
          </a>
        </Link>
        {isLoggedIn ? (
          <StyledLogoutButton onClick={logOut} type={'button'}>
            {'로그아웃'}
          </StyledLogoutButton>
        ) : (
          <StyledButtonWrapper>
            <StyledGoogleButton onClick={handleLogIn} />
          </StyledButtonWrapper>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Header;
