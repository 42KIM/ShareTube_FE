import { Text, Button, Icon } from '@/base';
import { COLOR, FONT, ICON_SIZE } from '@/constants';
import { useClickAway } from '@/hooks';
import { ChangeEvent, ReactElement, useState } from 'react';
import {
  StyledBackground,
  StyledContainer,
  StyledButton,
  StyledInputWrapper,
  StyledInput,
  StyledTextarea,
  StyledButtonContainer
} from './styles';
import type { DrawerProps } from './types';

const Drawer = ({
  visible,
  onClose,
  onSubmit,
  onBackgroundClick
}: DrawerProps): ReactElement => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clickAwayHandler = () => {
    onBackgroundClick();
  };

  const drawerRef = useClickAway<HTMLDivElement>(clickAwayHandler);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { tagName, value } = e.target;
    switch (tagName) {
      case 'INPUT':
        setTitle(value);
        break;
      case 'TEXTAREA':
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleClose = () => {
    onClose();
  };
  const handleSubmit = () => {
    console.log('submit drawer', title, description);
    // onSubmit();
  };

  return (
    <StyledBackground visible={visible}>
      <StyledContainer ref={drawerRef}>
        <StyledButton onClick={onClose}>
          <Icon icon={'arrowDown'} size={ICON_SIZE.sm} />
        </StyledButton>
        <StyledInputWrapper>
          <Text font={FONT.h1_bold}>새 리스트 생성</Text>
          <StyledInput
            placeholder={'구독 리스트 제목(최대 20자)'}
            onChange={handleChange}
            maxLength={20}
          />
          <StyledTextarea
            placeholder={'구독 리스트 소개글(최대 40자)'}
            onChange={handleChange}
            maxLength={40}
          />
          <StyledButtonContainer>
            <Button
              size={'small'}
              color={COLOR.lightGray}
              onClick={handleClose}
            >
              <Text font={FONT.h1_bold} color={COLOR.darkGray}>
                취소
              </Text>
            </Button>
            <Button size={'small'} color={COLOR.coral} onClick={handleSubmit}>
              <Text font={FONT.h1_bold} color={COLOR.white}>
                완료
              </Text>
            </Button>
          </StyledButtonContainer>
        </StyledInputWrapper>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Drawer;
