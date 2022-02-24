import { ReactElement } from 'react';
import { StyledContainer } from './styles';
import type { ContainerProps } from './types';

const Container = ({ children }: ContainerProps): ReactElement => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
