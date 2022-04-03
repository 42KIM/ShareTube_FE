import { COLOR, FONT } from '@/constants';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  gap: 3%;
  align-items: center;
  height: 80px;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 30px;
  font: ${FONT.h3_bold};
  border: none;

  &::placeholder {
    font: ${FONT.h3_bold};
    color: ${COLOR.gray};
  }

  &:focus {
    outline: none;
  }
`;

export { StyledContainer, StyledInput };
