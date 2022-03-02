import styled from 'styled-components';

// snap not working?
// temp size
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 700px;
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

export { StyledContainer, StyledMoreButton };
