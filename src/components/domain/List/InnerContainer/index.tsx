import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { InnerContainerProps } from './types';

const InnerContainer = ({ children }: InnerContainerProps): ReactElement => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default InnerContainer;
