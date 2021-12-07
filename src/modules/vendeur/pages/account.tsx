import { ProfileDescription } from '../components/ProfileDescription';
import { VendeurContainer } from '../components/VendeurContainer';

export const VendeurAccountPage = () => {
  return (
    <VendeurContainer clicked='account'>
      <ProfileDescription />
    </VendeurContainer>
  );
};
