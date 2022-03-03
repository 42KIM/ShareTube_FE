import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// snap not working?
// temp size
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledMoreButton = styled.button`
  display: inline-block;
  height: 150px;
  padding: 15px;
  background-color: red;
  border: none;
`;

export { StyledContainer, StyledCardContainer, StyledMoreButton };
