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
      <div>{other}</div>
      <div style={{ maxWidth: 1000, margin: 'auto', padding: 20 }}>
        {children}
      </div>
    </div>
  );
};
