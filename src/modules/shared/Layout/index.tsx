import { ReactNode } from 'react';
import { Header } from './header';

export const Layout = ({
  children,
  other,
  maxWidth = 1000,
}: {
  children: ReactNode;
  other?: ReactNode;
  maxWidth?: number;
}) => {
  return (
    <div>
      <Header />
      <>{other}</>
      <div style={{ maxWidth, margin: 'auto', padding: 20 }}>{children}</div>
    </div>
  );
};
