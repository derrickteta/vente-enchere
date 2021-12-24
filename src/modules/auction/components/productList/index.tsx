import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ProduitEntity } from '../../../../entities/Gestionproduit/produit.entity';
import { getProduitEnchere } from '../../network';
import { AuctionProductCard } from './AuctionProductCard';

const Container = styled.div`
  h3 {
    color: white;
  }
`;

export const ProductList = ({ auctionId }: { auctionId: string }) => {
  const [products, setProducts] = useState<ProduitEntity[]>([]);

  useEffect(() => {
    getProduitEnchere(auctionId).then((response) => {
      if (response.success) {
        setProducts(response.result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
