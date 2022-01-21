import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { getOneLot } from '../../commissaire/network';
import { ProductCaution } from '../../shared/ProductCaution';

const ProductContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const ProduitEnchere = ({ lots }: { lots: LotEntity[] }) => {
  const [produits, setProduits] = useState<ProduitEntity[]>([]);

  const getProducts = async () => {
    const listProd: ProduitEntity[] = [];
    for (let lot of lots) {
      await getOneLot(lot._id).then((data) => {
        if (data.success) {
          listProd.push(...data.result.produits);
        }
      });
    }
    setProduits(listProd);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductContainer>
      {produits.map((produit) => (
        <ProductCaution key={produit._id} produit={produit} />
      ))}
    </ProductContainer>
  );
};
