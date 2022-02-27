import { COLOR } from '@/constants';
import styled from 'styled-components';
import type { ChannelCardProps } from './types';

const StyledContainer = styled.div<
  Pick<ChannelCardProps, 'direction' | 'size'>
>`
  display: flex;
  flex-direction: ${({ direction }): string =>
    direction === 'parallel' ? 'row' : 'column'};
  width: ${({ direction, size }): string =>
    direction === 'parallel'
      ? '100%'
      : typeof size === 'number'
      ? `${size}px`
      : size};
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.whiteGray};
  }
`;

const StyledTextContainer = styled.div<
  Pick<ChannelCardProps, 'direction' | 'size'>
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ direction, size }): string =>
    direction === 'parallel'
      ? '300px'
      : typeof size === 'number'
      ? `${size}px`
      : size};
  ${({ direction }) =>
    direction === 'parallel' ? { marginLeft: '10px' } : { marginTop: '7px' }}
  padding: 0 5px;
`;

const StyledTextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export { StyledContainer, StyledTextContainer, StyledTextWrapper };
