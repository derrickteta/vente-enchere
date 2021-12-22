import { Button, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { Footer } from '../../homePage/components/Footer';
import { Layout } from '../../shared/Layout';
import { ProduitEnchere } from '../components/produit_Enchere';
import { fetchProduitEnchere } from '../network';

export const EnchereDetails = () => {
  const router = useHistory();
  const [product, setProduct] = useState<ProduitEntity>(
    router.location.state as any,
  );
  const [enchere, setEnchere] = useState<EnchereEntity>();
  useEffect(() => {
    fetchProduitEnchere(product._id).then((data) => {
      if (data.success) {
        setEnchere(data.result[0]);
      }
    });
  }, []);

  return (
    <Layout maxWidth={1300} footer={<Footer />}>
      <h1>Informations sur l'enchère</h1>
      <Space style={{ alignItems: 'flex-start', flexWrap: 'wrap' }} size={30}>
        <div>
          <p>
            Date d'enchère: <strong>{enchere?.dateOuverture}</strong>
          </p>
          <p>
            Nombre de produits: <strong>{enchere?.lots}</strong>
          </p>
          <p>
            Durée: <strong>{enchere?.duree}</strong>
          </p>
          <p>
            Statut: <strong>{enchere?.statut}</strong>
          </p>
        </div>
        <Button>Rejoindre</Button>
      </Space>
      <div>
        <h2>Produits de l'enchère</h2>
        <ProduitEnchere lots={enchere?.lots as LotEntity[]} />
      </div>
    </Layout>
  );
};
