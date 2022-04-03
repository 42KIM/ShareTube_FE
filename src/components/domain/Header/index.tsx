import { ReactElement } from 'react';
import {
  StyledWrapper,
  StyledContainer,
  StyledLogo,
  StyledGoogleButton,
  StyledButtonWrapper,
  StyledLogoutButton
} from './styles';
import { Icon } from '@/base';
import { BASE_URL, ICON_SIZE } from '@/constants';
import Link from 'next/link';
import { authApi } from '@/apis';
import { useDispatch } from 'react-redux';
import { logOut } from '@/store';
import { useAppSelector } from '@/hooks';
import { useLocalStorage } from '@/hooks';

const Header = (): ReactElement => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [, , clearValue] = useLocalStorage('USER', '');

  const handlelogOut = async () => {
    await authApi.logout();
    dispatch(logOut());
    clearValue();
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Link href={'/'}>
          <a>
            <Icon icon={'add'} size={ICON_SIZE.lg} />
          </a>
        </Link>
        {/* // temp Logo Icon */}
        <Link href={'/'}>
          <a>
            <StyledLogo>
              <Icon icon={'star'} size={ICON_SIZE.lg} />
            </StyledLogo>
          </a>
        </Link>
        {isLoggedIn ? (
          <StyledLogoutButton onClick={handlelogOut} type={'button'}>
            {'로그아웃'}
          </StyledLogoutButton>
        ) : (
          <StyledButtonWrapper>
            <Link href={`${BASE_URL}/auth/login`}>
              <a>
                <StyledGoogleButton />
              </a>
            </Link>
          </StyledButtonWrapper>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Header;
