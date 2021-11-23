import { Route } from 'react-router-dom';
import { GerantAccount } from '../pages/account';
import { GerantDashboard } from '../pages/dashboard';
import { GerantVendorDetail } from '../pages/details';
import { GerantVendors } from '../pages/vendors';

export const GerantRoutes = () => {
  return (
    <>
      <Route exact path='/gerant/dashboard' component={GerantDashboard} />
      <Route exact path='/gerant/vendors' component={GerantVendors} />
      <Route exact path='/gerant/details' component={GerantVendorDetail} />
      <Route exact path='/gerant/my-account' component={GerantAccount} />
    </>
  );
};
