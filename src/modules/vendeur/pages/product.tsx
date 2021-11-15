import { Button, notification, Space } from 'antd';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { VendeurContainer } from '../components/VendeurContainer';
import { createLot } from '../network';

export const VendeurProductPage = () => {
  const router = useHistory();
  const [isLoading, setIsLoading] = useState(false);

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
              <h3 style={{ marginBottom: 20 }}>
                Voulez vous commencer la création du lot des produit(s) ?
              </h3>
              <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button
                  danger
                  onClick={() => router.push(ROUTES.VENDEUR_PAGE.NEW_PRODUCT)}
                >
                  Fermer
                </Button>
                <Button
                  type='primary'
                  style={{ backgroundColor: PRIMARY, borderWidth: 0 }}
                  loading={isLoading}
                  onClick={async () => {
                    setIsLoading(true);
                    await createLot({}).then((data) => {
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
                    setIsLoading(false);
                  }}
                >
                  Créer le lot
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
