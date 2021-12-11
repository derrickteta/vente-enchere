import { AdminContainer } from '../components/AdminContainer';
import { PersonelsList } from '../components/PersonnelsList';

export const PersonnelPage = () => {
  return (
    <AdminContainer clicked='personnel'>
      <PersonelsList />
    </AdminContainer>
  );
};
