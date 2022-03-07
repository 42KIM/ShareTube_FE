import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 165px;
`;

export { StyledContainer, StyledInfoContainer };
