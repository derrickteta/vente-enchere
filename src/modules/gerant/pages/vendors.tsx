import { Button } from 'antd';
import Search from 'antd/lib/input/Search';
import { GerantContainer } from '../components/GerantContainer';
import { VendorGroup } from '../components/VendorGroup';

const headerChildren = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '600px',
        }}
      >
        <h2>Vendor Accounts</h2>
        <Button type='primary'>Ajouter</Button>
        <Button type='primary' danger>
          Supprimer
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '300px',
        }}
      >
        <Search placeholder='input search text' enterButton width='200px' />
      </div>
    </>
  );
};

export const GerantVendors = () => {
  return (
    <GerantContainer clicked='vendors' headerChildren={headerChildren()}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '0 50px',
        }}
      >
        <VendorGroup label='Pending requests' vendors={[]} />
        <VendorGroup label='Activated vendors' vendors={[]} />
        <VendorGroup label='Deactivated vendors' vendors={[]} />
      </div>
    </GerantContainer>
  );
};
