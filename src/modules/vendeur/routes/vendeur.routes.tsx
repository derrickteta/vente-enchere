import { Route } from 'react-router-dom';
import { ProtectedRoutes } from '../../shared/ProtectedRoutes';
import { VendeurAccountPage } from '../pages/account';
import { VendeurDashboard } from '../pages/dashboard';
import { NewProductPage } from '../pages/newProduct';
import { VendeurProductPage } from '../pages/product';

export const VendeurRoutes = () => {
  return (
    <ProtectedRoutes authorization='vendeur'>
      <Route exact path='/vendeur/dashboard' component={VendeurDashboard} />
      <Route exact path='/vendeur/products' component={VendeurProductPage} />
      <Route exact path='/vendeur/products/new' component={NewProductPage} />
      <Route exact path='/vendeur/account' component={VendeurAccountPage} />
    </ProtectedRoutes>
  );
};
