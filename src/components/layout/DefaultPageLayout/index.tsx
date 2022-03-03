import { ReactElement, ReactNode } from 'react';
import { StyledLayout } from './styles';
import { Header } from '@/domain';

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  // shared page 일 때는 Header 렌더링 하지 않도록 useRouter를 사용하여 분기 필요
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
