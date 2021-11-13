import { Button, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { VendeurContainer } from '../components/VendeurContainer';

export const VendeurProductPage = () => {
  const router = useHistory();

  return (
    <VendeurContainer clicked='products'>
      <div>
        <h2>Vendeur Product page</h2>
        <ButtonWithModal
          buttonText='Nouveau Lots'
          buttonProps={{ style: { backgroundColor: PRIMARY, borderWidth: 0 } }}
          modalProps={{ title: 'Création du lot' }}
        >
          {() => (
            <div>
              <h3>Voulez vous commencer la création du lot des produit(s) ?</h3>
              <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button
                  onClick={() => router.push(ROUTES.VENDEUR_PAGE.NEW_PRODUCT)}
                >
                  Fermer
                </Button>
                <Button
                  type='primary'
                  style={{ backgroundColor: PRIMARY, borderWidth: 0 }}
                  onClick={() => {
                    // logic pour création du lot : Appel à l'API
                    router.push(ROUTES.VENDEUR_PAGE.NEW_PRODUCT);
                  }}
                >
                  Continuer
                </Button>
              </Space>
            </div>
          )}
        </ButtonWithModal>

        <p>Design sera fait suivant le taf de Zoua</p>
      </div>
    </VendeurContainer>
  );
};
