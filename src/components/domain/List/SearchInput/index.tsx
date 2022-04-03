import { StyledContainer, StyledInput } from './styles';
import type { SearchInputProps } from './types';
import { Icon } from '@/base';
import { ICON_SIZE } from '@/constants';
import { ChangeEvent, ReactElement } from 'react';

const SearchInput = ({ onChange }: SearchInputProps): ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <StyledContainer>
      <Icon icon={'search'} size={ICON_SIZE.sm} />
      <StyledInput
        placeholder={'내가 구독한 채널 검색하기...'}
        onChange={handleChange}
      />
    </StyledContainer>
  );
};

export default SearchInput;
