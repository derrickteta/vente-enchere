import { UpdateAccout } from '../components/UpdateAccout';
import { VendeurContainer } from '../components/VendeurContainer';

export const AccountUpdatePage = () => {
  return (
    <VendeurContainer clicked='account/update'>
      <div>
        <UpdateAccout></UpdateAccout>
      </div>
    </VendeurContainer>
  );
};
