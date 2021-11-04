import { ReactNode } from 'react';
import { Header } from './header';

export const Layout = ({
  children,
  other,
}: {
  children: ReactNode;
  other?: ReactNode;
}) => {
  return (
    <div>
      <Header />
      <>{other}</>
      <div style={{ maxWidth: 1000, margin: 'auto', padding: 20 }}>
        {children}
      </div>
    </div>
  );
};
