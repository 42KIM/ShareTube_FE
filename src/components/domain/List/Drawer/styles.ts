import { COLOR } from '@/constants';
import styled from 'styled-components';
import { DrawerProps } from './types';
import { FONT } from '@/constants';

const StyledBackground = styled.div<Pick<DrawerProps, 'visible'>>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: ${({ visible }): string => (visible ? 'block' : 'none')};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 40%;
  margin: auto;
  border-radius: 10px 10px 0 0;
  animation: 0.5s ease-in-out appear;

  @keyframes appear {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled.button`
  width: 15%;
  height: 5%;
  background-color: ${COLOR.white};
  border: none;
  border-radius: 10px 10px 0 0;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95%;
  background-color: ${COLOR.white};
`;

const StyledInput = styled.input`
  width: 75%;
  height: 15%;
  padding: 2%;
  font: ${FONT.h2};
  background-color: ${COLOR.lightGray};
  border: none;

  &::placeholder {
    font: ${FONT.h2};
    color: ${COLOR.gray};
  }

  &:focus {
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  width: 75%;
  height: 30%;
  padding: 2%;
  font: ${FONT.h2};
  resize: none;
  background-color: ${COLOR.lightGray};
  border: none;

  &::placeholder {
    font: ${FONT.h2};
    color: ${COLOR.gray};
  }

  &:focus {
    outline: none;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export {
  StyledBackground,
  StyledContainer,
  StyledButton,
  StyledInputWrapper,
  StyledInput,
  StyledTextarea,
  StyledButtonContainer
};
