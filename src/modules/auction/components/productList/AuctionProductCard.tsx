import styled from '@emotion/styled';
import { Badge, Button, Card, Space } from 'antd';
import { FaClock } from 'react-icons/fa';
import { ProduitEntity } from '../../../../entities/Gestionproduit/produit.entity';
import { ButtonWithModal } from '../../../shared/ButtonWithModal';
import { AuctionProductDetails } from './AuctionProductDetail';

const CardContainer = styled.div`
  margin: 5px;
  height: 120px;
  border-radius: 20px;

  .name {
    font-size: 15px;
    margin-bottom: 10px;
    font-family: 'Montserrat';
  }

  .category {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .price {
    font-size: 15px;
    margin-bottom: 0px;
    font-family: 'Montserrat';
  }

  .qte {
    font-size: 14px;
    margin-bottom: 0px;
    font-style: italic;
  }
`;

export const AuctionProductCard = ({
  produit,
  getProduit,
  current,
}: {
  produit: ProduitEntity;
  getProduit?: (produit: ProduitEntity) => void;
  current: boolean;
}) => {
  return (
    <CardContainer>
      <Badge count={current ? <FaClock color='red' size={25} /> : null}>
        <Card
          hoverable
          style={{ width: 200, height: '100%', borderRadius: 20 }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className='name'>{produit.nom}</p>
              <p className='category'>{produit.category.nom} </p>
            </div>
            <Space>
              <span className='price'>{produit.prixMin} FCFA, </span>
              <span className='qte'>
                {produit.quantite.valeur} {produit.quantite.unite}
              </span>
            </Space>
          </div>
          <Space style={{ marginTop: 10, justifyContent: 'flex-end' }}>
            {getProduit && (
              <ButtonWithModal
                buttonText='Débuter'
                modalProps={{ title: 'Détail du produit' }}
                buttonProps={{ size: 'small' }}
              >
                {(closeModal) => (
                  <div>
                    <h2>
                      Voulez-vous débuter la mise à enchère de ce produit ?
                    </h2>

                    <Space>
                      <Button danger onClick={() => closeModal()}>
                        Fermer
                      </Button>
                      <Button
                        type='primary'
                        onClick={async () => {
                          getProduit?.(produit);
                          closeModal();
                        }}
                      >
                        Débuter
                      </Button>
                    </Space>
                  </div>
                )}
              </ButtonWithModal>
            )}

            <ButtonWithModal
              buttonText='Détail'
              modalProps={{ title: 'Détail du produit', width: 900 }}
              buttonProps={{ size: 'small' }}
            >
              {(closeModal) => (
                <AuctionProductDetails
                  product={produit}
                  closeModal={closeModal}
                />
              )}
            </ButtonWithModal>
          </Space>
        </Card>
      </Badge>
    </CardContainer>
  );
};
