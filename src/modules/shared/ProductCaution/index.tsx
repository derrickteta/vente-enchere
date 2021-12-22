import styled from '@emotion/styled';
import { Card, Image, Space } from 'antd';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { defaultImage } from '../../../shared/defaultImage';
import { API_ROUTES } from '../ApiRoutes';

const CardContainer = styled.div`
  margin: 10px;
  height: 370px;
  border-radius: 20px;
  box-shadow: 0 3px 5px 0 rgba(81, 45, 168, 0.3),
    0 6px 20px 0 rgba(81, 45, 168, 0.3);
  transition: 0.5s;

  &:hover {
    margin-top: -2px;
    transition: 0.5s;
  }

  .name {
    font-size: 16px;
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
    padding: 3px;
    min-width: 90px;
    text-align: center;
  }

  .qte {
    color: blue;
    font-size: 12px;
    margin-bottom: 0px;
    border: 1.5px solid blue;
    border-radius: 5px;
    min-width: 50px;
    padding: 3px;
    text-align: center;
  }

  .description {
    color: #777;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (min-width: 768px) {
    margin: 10px;
  }
`;

export const ProductCaution = ({
  produit,
  showInfo,
}: {
  produit: ProduitEntity;
  showInfo?: boolean;
}) => {
  return (
    <CardContainer>
      <Card
        hoverable
        style={{ width: 300, height: '100%', borderRadius: 20 }}
        cover={
          <>
            <Image
              alt='profil_image'
              height={200}
              width='100%'
              style={{
                objectFit: 'cover',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
              preview={false}
              src={API_ROUTES.IMAGES(produit.images[0])}
              fallback={defaultImage}
            />
          </>
        }
      >
        <div style={{ overflow: 'hidden', marginTop: -10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className='name'>{produit.nom}</p>
            <p className='category'>{produit.category.nom} </p>
          </div>
          <Space size={20}>
            <Space>
              <p style={{ margin: 0 }}>Mise à prix : </p>
              <p className='price'>{produit.prixMin} FCFA </p>
            </Space>
            <p className='qte'>
              {produit.quantite.valeur} {produit.quantite.unite}{' '}
            </p>
          </Space>
          <p className='description'>{produit.description}</p>
          {showInfo}
        </div>
      </Card>
    </CardContainer>
  );
};
