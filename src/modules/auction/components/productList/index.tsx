import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ProduitEntity } from '../../../../entities/Gestionproduit/produit.entity';
import { fetchLotProduit } from '../../../catalog/network';
import { AuctionProductCard } from './AuctionProductCard';

const Container = styled.div`
  h3 {
    color: white;
  }
`;

export const ProductList = () => {
  const [products, setProducts] = useState<ProduitEntity[]>([]);

  useEffect(() => {
    fetchLotProduit('61ab072fd8029b5757f52ff1').then((response) => {
      if (response.success) {
        setProducts(response.result[0].produits);
      }
    });
  }, []);

  return (
    <Container>
      <h3>Produits de l'enchère</h3>
      <div style={{ maxWidth: 750 }}>
        <div className='horizontal-scroll y-scroll'>
          {products.map((product) => (
            <AuctionProductCard produit={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};
