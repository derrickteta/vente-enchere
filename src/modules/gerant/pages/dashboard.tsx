import { useEffect, useState } from 'react';
import { VendeurEntity } from '../../../entities/GestionCompte/vendeur.entity';
import { GerantContainer } from '../components/GerantContainer';
import { Stats } from '../components/Stats';
import { VendorGroup } from '../components/VendorGroup';
import { fetchVendeurs } from '../network/gerant.network';

export const GerantDashboard = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [vendeurs, setVendeurs] = useState<VendeurEntity[]>([]);

  const activatedVendors: VendeurEntity[] = vendeurs.filter(
    (vendeur) => vendeur.accredidation,
  );

  const deactivatedVendors: VendeurEntity[] = vendeurs.filter(
    (vendeur) => !vendeur.accredidation,
  );

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
            { label: 'All', value: vendeurs.length },
            { label: 'Pending Requests', value: 0 },
            { label: 'Activated Accounts', value: activatedVendors.length },
            { label: 'Deactivated Accounts', value: deactivatedVendors.length },
          ]}
        />
        <VendorGroup label='Pending requests' vendors={[]} />
        <VendorGroup label='Activated vendors' vendors={activatedVendors} />
        <VendorGroup label='Deactivated vendors' vendors={deactivatedVendors} />
      </div>
    </GerantContainer>
  );
};
