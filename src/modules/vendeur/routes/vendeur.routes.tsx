import { Route } from 'react-router-dom';
import { VendeurDashboard } from '../pages/dashboard';

export const VendeurRoutes = () => {
  return (
    <>
      <Route exact path='/vendeur/dashboard' component={VendeurDashboard} />
    </>
  );
};
