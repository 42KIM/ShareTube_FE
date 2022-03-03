import styled from 'styled-components';
import { COLOR } from '@/constants';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  overflow: hidden;
  background-color: ${COLOR.whiteGray};
  border-radius: 20px;
`;

export { StyledContainer };
