import Search from 'antd/lib/input/Search';
import { GerantContainer } from '../components/GerantContainer';
import { Stats } from '../components/Stats';
import { VendorGroup } from '../components/VendorGroup';

const headerChildren = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          width: '600px',
        }}
      >
        <h2>Dashboard of the Manager</h2>
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

export const GerantDashboard = () => {
  return (
    <GerantContainer clicked='dashboard' headerChildren={headerChildren()}>
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
        <VendorGroup label='Activated vendors' vendors={[]} />
        <VendorGroup label='Deactivated vendors' vendors={[]} />
      </div>
    </GerantContainer>
  );
};
