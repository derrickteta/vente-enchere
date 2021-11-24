/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Space, Statistic, Tooltip } from 'antd';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { PRIMARY } from '../../../shared/colors';
import { AuctionCard } from '../../shared/AuctionCard';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { ImageCarousel } from '../../shared/ImageCarousel';
import { Layout } from '../../shared/Layout';

const CommentSection = styled.div`
  .horizontal-scroll {
    display: flex;
    overflow: auto;
    white-space: nowrap;
  }
`;

export const ProductDetails = () => {
  const router = useHistory();
  // const params = new URLSearchParams(useLocation().search);
  // params.get('id')
  // const [produits, setProduits] = useState<ProduitEntity[]>([]);

  // useEffect(() => {
  //   fetchProduit().then((data) => {
  //     if (data.success) {
  //       setProduits(data.result);
  //     }
  //   });
  // }, []);

  const [product, setProduct] = useState<ProduitEntity>(
    router.location.state as any,
  );

  return (
    <Layout maxWidth={1300}>
      <h2>Details Produit</h2>
      <h3>{product.nom} </h3>
      <Space style={{ alignItems: 'flex-start' }} size={30}>
        <ImageCarousel imageListIds={product.images}></ImageCarousel>
        <div style={{ maxWidth: 500 }}>
          <h2>Informations du Produit</h2>
          <h3>
            Nom: <strong>{product.nom}</strong>
          </h3>
          <h3>
            Categorie: <strong>{product.category.nom}</strong>
          </h3>
          <h3>
            Prix min: <strong>{product.prixMin} FCFA</strong>
          </h3>
          <h3>
            Quantité:{' '}
            <strong>
              {product.quantite.valeur}
              {product.quantite.unite}{' '}
            </strong>
          </h3>
          <h3>
            Description: <strong>{product.description}</strong>
          </h3>
          <h3>
            Date création:{' '}
            <strong>{DateFrHrWithTime(product.dateCreation)}</strong>
          </h3>
          <Space style={{ justifyContent: 'center' }}>
            <Tooltip title='Ajouter aux favoris'>
              <AiOutlineHeart size={35} color='red' />
            </Tooltip>
            <Tooltip title='Me rappeler'>
              <FaRegPaperPlane size={30} color={PRIMARY} />
            </Tooltip>
            <Statistic.Countdown
              valueStyle={{ fontSize: 20, color: 'red' }}
              value={Date.now() + 1000 * 60 * 60 * 24 * 1 + 1000 * 30}
            />
          </Space>
        </div>
      </Space>
      <h3>Autres produit du lot</h3>
      <CommentSection>
        <div className='horizontal-scroll'>
          {/* {produits.map((produit) => (
          <AnimationOnScroll key={produit._id} animation='zoom-in-up'>
            <AuctionCard produit={produit} />
          </AnimationOnScroll>
        ))} */}
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
          <AuctionCard produit={product} />
        </div>
      </CommentSection>
    </Layout>
  );
};
