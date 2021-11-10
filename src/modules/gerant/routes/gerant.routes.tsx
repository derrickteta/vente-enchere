import { Route } from 'react-router-dom';
import { GerantAccount } from '../pages/account';
import { GerantDashboard } from '../pages/dashboard';
import { GerantProducts } from '../pages/products';

export const GerantRoutes = () => {
  return (
    <>
      <Route exact path='/gerant/dashboard' component={GerantDashboard} />
      <Route exact path='/gerant/products' component={GerantProducts} />
      <Route exact path='/gerant/my-account' component={GerantAccount} />
    </>
  );
};
