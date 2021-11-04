import { Route } from 'react-router-dom';
import { GerantDashboard } from '../pages/dashboard';

export const GerantRoutes = () => {
  return (
    <>
      <Route exact path='/gerant/dashboard' component={GerantDashboard} />
    </>
  );
};
