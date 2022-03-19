import { ReactElement } from 'react';
import { StyledTextWrapper } from './styles';
import { Icon, TextButton } from '@/base';
import { COLOR, FONT, ICON_SIZE } from '@/constants';
import Link from 'next/link';

const CreateButton = (): ReactElement => {
  return (
    <Link href={'/list/subscriptions'}>
      <a>
        <TextButton font={FONT.h3_bolder} width={'80%'} height={80}>
          <StyledTextWrapper>
            <Icon icon={'darkAdd'} size={ICON_SIZE.lg} color={COLOR.gray} />
            {'새 구독 리스트 만들기'}
          </StyledTextWrapper>
        </TextButton>
      </a>
    </Link>
  );
};

export default CreateButton;
