import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactNode, useEffect } from 'react';

export const AnimationOnScroll = ({
  children,
  animation,
}: {
  children: ReactNode;
  animation: string;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos={animation} data-aos-duration='800'>
      {children}
    </div>
  );
};
