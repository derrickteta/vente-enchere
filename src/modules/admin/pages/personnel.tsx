import { PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { AdminContainer } from '../components/AdminContainer';
import { CommissaireForm } from '../components/CommissaireForm';
import { GerantForm } from '../components/GerantForm';
import { PersonelsList } from '../components/PersonnelsList';

export const PersonnelPage = () => {
  return (
    <AdminContainer clicked='personnel'>
      <ButtonWithModal
        buttonText='Nouveau gérant'
        buttonProps={{ style: { backgroundColor: PRIMARY, borderWidth: 0 } }}
        modalProps={{ title: 'Création du nouvea gérant' }}
      >
        {() => (
          <div>
            <GerantForm />
          </div>
        )}
      </ButtonWithModal>
      <ButtonWithModal
        buttonText='Nouveau commissaire'
        buttonProps={{ style: { backgroundColor: PRIMARY, borderWidth: 0 } }}
        modalProps={{ title: 'Création du nouvea Commissaire' }}
      >
        {() => (
          <div>
            <CommissaireForm />
          </div>
        )}
      </ButtonWithModal>

      <PersonelsList />
    </AdminContainer>
  );
};
