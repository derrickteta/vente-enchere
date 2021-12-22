import styled from '@emotion/styled';
import { useState } from 'react';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { PRIMARY } from '../../../shared/colors';
import { AnimationOnScroll } from '../../shared/AnimationOnScroll';
import { ProductCaution } from '../../shared/ProductCaution';

const ProductContainer = styled.div`
  margin-bottom: 30px;
  h2 {
    color: ${PRIMARY};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProduitEnchere = ({ lots }: { lots: LotEntity[] }) => {
  const [produits, setProduits] = useState<ProduitEntity[]>([]);
  const list = [];
  for (let lot of lots) {
    list.push(...lot.produits);
  }
  setProduits(list);

  return (
    <ProductContainer>
      <div>
        {produits.map((produit) => (
          <AnimationOnScroll key={produit._id} animation='zoom-in-up'>
            <ProductCaution produit={produit} showInfo />
          </AnimationOnScroll>
        ))}
      </div>
    </ProductContainer>
  );
};
