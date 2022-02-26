import styled from 'styled-components';

// box-sizing -> global
// button cursor pointer -> global
const StyledContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 30px 35px;
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

const StyledButton = styled.button`
  width: 77px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
`;

export { StyledContainer, StyledLogo, StyledButton };
