import { ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './styles';
import { Button } from '@/base';
import { COLOR } from '@/constants';

const FloatButton = ({
  children,
  handler
}: {
  children: ReactNode;
  handler: () => void;
}): ReactElement => {
  return (
    <Button
      size={'medium'}
      color={COLOR.coral}
      floatPosition={90}
      onClick={handler}
    >
      <StyledWrapper>{children}</StyledWrapper>
    </Button>
  );
};

export default FloatButton;
