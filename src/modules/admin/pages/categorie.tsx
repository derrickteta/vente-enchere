import { Space } from 'antd';
import { PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { AdminContainer } from '../components/AdminContainer';
import { CategorieComponent } from '../components/CategorieComponent';
import { GerantForm } from '../components/GerantForm';

export const CategoriePage = () => {
  return (
    <AdminContainer clicked='category'>
      <Space>
        <ButtonWithModal
          buttonText='Nouvelle Categorie'
          buttonProps={{ style: { backgroundColor: PRIMARY, borderWidth: 0 } }}
          modalProps={{ title: 'Création du nouveau gérant' }}
        >
          {(closeModal) => <GerantForm closeModal={closeModal} />}
        </ButtonWithModal>
      </Space>

      <CategorieComponent />
    </AdminContainer>
  );
};
