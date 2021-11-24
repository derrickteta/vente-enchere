import { useEffect, useState } from 'react';
import { VendeurEntity } from '../../../entities/GestionCompte/vendeur.entity';
import { GerantContainer } from '../components/GerantContainer';
import { VendorGroup } from '../components/VendorGroup';
import { fetchVendeurs } from '../network/gerant.network';

export const GerantVendors = () => {
  const [vendeurs, setVendeurs] = useState<VendeurEntity[]>([]);

  useEffect(() => {
    fetchVendeurs().then((data) => {
      if (data.success) {
        setVendeurs(data.result);
      }
    });
  }, []);

  return (
    <GerantContainer clicked='vendors'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '0 50px',
        }}
      >
        <VendorGroup label='Pending requests' vendors={[]} />
        <VendorGroup label='Activated vendors' vendors={vendeurs} />
        <VendorGroup label='Deactivated vendors' vendors={[]} />
      </div>
    </GerantContainer>
  );
};
