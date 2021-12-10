import styled from '@emotion/styled';
import { Card, Space } from 'antd';
import { ProduitEntity } from '../../../../entities/Gestionproduit/produit.entity';
import { ButtonWithModal } from '../../../shared/ButtonWithModal';
import { AuctionProductDetails } from './AuctionProductDetail';

const CardContainer = styled.div`
  margin: 5px;
  height: 150px;
  border-radius: 20px;
  transition: 0.5s;

  &:hover {
    margin-top: -2px;
    transition: 0.5s;
  }

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
    color: red;
    font-size: 12px;
    margin-bottom: 0px;
    border: 1.5px solid red;
    border-radius: 5px;
    padding: 2px;
    min-width: 80px;
    text-align: center;
  }

  .qte {
    color: blue;
    font-size: 12px;
    margin-bottom: 0px;
    border: 1.5px solid blue;
    border-radius: 5px;
    min-width: 50px;
    padding: 2px;
    text-align: center;
  }
`;

export const AuctionProductCard = ({ produit }: { produit: ProduitEntity }) => {
  return (
    <CardContainer>
      <Card hoverable style={{ width: 200, height: '100%', borderRadius: 20 }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className='name'>{produit.nom}</p>
            <p className='category'>{produit.category.nom} </p>
          </div>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className='price'>{produit.prixMin} FCFA </p>
            <p className='qte'>
              {produit.quantite.valeur} {produit.quantite.unite}
            </p>
          </Space>
        </div>
        <div
          style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}
        >
          <ButtonWithModal
            buttonText='Détail'
            modalProps={{ title: 'Détail du produit', width: 900 }}
          >
            {(closeModal) => (
              <AuctionProductDetails
                product={produit}
                closeModal={closeModal}
              />
            )}
          </ButtonWithModal>
        </div>
      </Card>
    </CardContainer>
  );
};
