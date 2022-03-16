import styled from 'styled-components';
import { COLOR } from '@/constants';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 110px;
  border-top: 0.5px solid rgba(119, 119, 119, 0.5);
`;

const StyledCheckbox = styled.input`
  position: absolute;
  left: 2%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  left: 10%;
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  left: 25%;
  width: 45%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledViewWrapper = styled.div`
  position: absolute;
  left: 70%;
  padding: 4px 8px;
  border: 0.5px solid ${COLOR.darkGray};
  border-radius: 15px;
`;

const StyledIconBox = styled.div`
  position: absolute;
  right: 2%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

export {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledViewWrapper,
  StyledIconBox
};
