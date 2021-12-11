/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Button, Space } from 'antd';
import { ProduitEntity } from '../../../../entities/Gestionproduit/produit.entity';
import { ImageCarousel } from '../../../shared/ImageCarousel';

const ProductInfoContainer = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    p {
      font-size: 16px;
      margin: 3px;
    }

    h2 {
      font-family: 'Montserrat';
      font-size: 20px;
      margin-bottom: 5px;
    }

    .icon {
      margin-bottom: -3px;
      margin-right: 10px;
    }

    .info {
      margin-left: 40px;
      margin-bottom: 20px;
    }

    @media (min-width: 768px) {
      p {
        font-size: 16px;
      }
    }
  }
`;

export const AuctionProductDetails = ({
  product,
  closeModal,
}: {
  product: ProduitEntity;
  closeModal?: () => void;
}) => {
  return (
    <div>
      <Space style={{ alignItems: 'flex-start', flexWrap: 'wrap' }} size={30}>
        <ImageCarousel imageListIds={product.images} />
        <ProductInfoContainer>
          <div>
            <h2>Informations du Produit</h2>
            <p>
              Nom: <strong>{product.nom}</strong>
            </p>
            <p>
              Categorie: <strong>{product.category.nom}</strong>
            </p>
            <p>
              Prix min: <strong>{product.prixMin} FCFA</strong>
            </p>
            <p>
              Quantité:{' '}
              <strong>
                {product.quantite.valeur} {product.quantite.unite}
              </strong>
            </p>
          </div>
        </ProductInfoContainer>
      </Space>

      <h3>Description:</h3>
      <p>{product.description}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button danger onClick={closeModal}>
          Fermer
        </Button>
      </div>
    </div>
  );
};
