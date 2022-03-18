import styled from 'styled-components';
import {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper
} from '@/domain/List/ListItem/styles';

const StyledInfoContainer = styled.div`
  position: absolute;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const StyledTextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper,
  StyledInfoContainer,
  StyledTextWrapper
};
