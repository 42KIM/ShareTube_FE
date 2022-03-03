import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #ffffff;
  opacity: 95%;
`;

const StyledContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 30px 0;
`;

const StyledLogo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  margin: auto;
`;

const StyledGoogleButton = styled.button`
  width: 190px;
  height: 45px;
  padding: 0;
  background-color: transparent;
  background-image: url('/images/googleLogin.png');
  background-size: cover;
  border: none;
  outline: 0;

  &:active {
    transform: translateY(2px);
  }
`;

const StyledButtonWrapper = styled.div`
  &:hover {
    filter: opacity(98%) drop-shadow(0 0 0 black);
  }
`;

const StyledLogoutButton = styled.button`
  width: 77px;
  height: 40px;
  font-weight: bold;
  background-color: transparent;
  border: none;
`;

export {
  StyledWrapper,
  StyledContainer,
  StyledLogo,
  StyledGoogleButton,
  StyledButtonWrapper,
  StyledLogoutButton
};
