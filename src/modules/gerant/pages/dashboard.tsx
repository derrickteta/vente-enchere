import { useEffect, useState } from 'react';
import { VendeurEntity } from '../../../entities/GestionCompte/vendeur.entity';
import { GerantContainer } from '../components/GerantContainer';
import { Stats } from '../components/Stats';
import { VendorGroup } from '../components/VendorGroup';
import { fetchVendeurs } from '../network/gerant.network';

export const GerantDashboard = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [vendeurs, setVendeurs] = useState<VendeurEntity[]>([]);

  useEffect(() => {
    fetchVendeurs().then((data) => {
      if (data.success) {
        setVendeurs(data.result);
      }
    });
  }, []);

  return (
    <GerantContainer clicked='dashboard'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '0 50px',
        }}
      >
        <Stats
          stats={[
            { label: 'All', value: 54 },
            { label: 'Pending Requests', value: 4 },
            { label: 'Activated Accounts', value: 44 },
            { label: 'Deactivated Accounts', value: 6 },
          ]}
        />
        <VendorGroup label='Pending requests' vendors={[]} />
        <VendorGroup label='Activated vendors' vendors={vendeurs} />
        <VendorGroup label='Deactivated vendors' vendors={[]} />
      </div>
    </GerantContainer>
  );
};
