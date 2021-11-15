import { Button, notification, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { VendeurContainer } from '../components/VendeurContainer';
import { createLot } from '../network';

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
                  onClick={async () => {
                    await createLot({
                      numeroLot: 123456,
                    }).then((data) => {
                      if (data.success) {
                        notification.success({
                          message: 'Succes',
                          description: data.message,
                        });
                        router.push(
                          ROUTES.VENDEUR_PAGE.NEW_PRODUCT,
                          data.result,
                        );
                      } else {
                        notification.error({
                          message: 'Erreur',
                          description: data.message,
                        });
                      }
                    });

                    // logic pour création  du lot : Appel à l'API
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
