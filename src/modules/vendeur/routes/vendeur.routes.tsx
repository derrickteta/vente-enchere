import { Route } from 'react-router-dom';
import { VendeurAccountPage } from '../pages/account';
import { VendeurDashboard } from '../pages/dashboard';
import { DetailLot } from '../pages/detailLot';
import { VendeurEventPage } from '../pages/evenement';
import { NewProductPage } from '../pages/newProduct';

export const VendeurRoutes = () => {
  return (
    <>
      <Route exact path='/vendeur/dashboard' component={VendeurDashboard} />
      <Route exact path='/vendeur/event' component={VendeurEventPage} />
      <Route exact path='/vendeur/products/new' component={NewProductPage} />
      <Route exact path='/vendeur/account' component={VendeurAccountPage} />
      <Route path='/vendeur/lot-details' component={DetailLot} />
    </>
  );
};
