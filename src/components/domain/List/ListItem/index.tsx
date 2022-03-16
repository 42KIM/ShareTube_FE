import { ReactElement } from 'react';
import {
  StyledContainer,
  StyledCheckbox,
  StyledImageWrapper,
  StyledTitleWrapper,
  StyledViewWrapper,
  StyledIconBox
} from './styles';
import type { ListItemProps } from './types';
import { Image, Icon, Text } from '@/base';
import { COLOR, FONT, ICON_SIZE } from '@/constants';
import Link from 'next/link';

const ListItem = ({
  id,
  thumbnail,
  title,
  views
}: ListItemProps): ReactElement => {
  return (
    <StyledContainer>
      <StyledCheckbox type={'checkbox'} value={id} />
      <StyledImageWrapper>
        <Image src={thumbnail} width={70} height={70} borderRadius={50} />
      </StyledImageWrapper>
      <StyledTitleWrapper>
        <Text font={FONT.h4}>{title}</Text>
      </StyledTitleWrapper>
      <StyledViewWrapper>
        <Text font={FONT.view_tiny} color={COLOR.darkGray}>
          {views}
        </Text>
      </StyledViewWrapper>
      <StyledIconBox>
        <Icon icon={'share'} size={ICON_SIZE.md} color={COLOR.darkGray} />
        <Link href={`/list/edit/${id}`}>
          <a>
            <Icon icon={'edit'} size={ICON_SIZE.md} color={COLOR.darkGray} />
          </a>
        </Link>
      </StyledIconBox>
    </StyledContainer>
  );
};

export default ListItem;
