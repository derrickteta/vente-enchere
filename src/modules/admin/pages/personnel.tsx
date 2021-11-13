import { AdminContainer } from '../components/AdminContainer';
import { CommissaireForm } from '../components/CommissaireForm';
import { GerantForm } from '../components/GerantForm';
import { PersonelsList } from '../components/PersonnelsList';
export const PersonnelPage = () => {
  return (
    <AdminContainer clicked='personnel'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '5px',
        }}
      >
        <CommissaireForm />
        <GerantForm />
      </div>
      <PersonelsList />
    </AdminContainer>
  );
};
