import { Route } from 'react-router-dom';
import { CommissaireDashboard } from '../pages/dashboard';

export const CommissaireRoutes = () => {
  return (
    <>
      <Route
        exact
        path='/commissaire/dashboard'
        component={CommissaireDashboard}
      />
    </>
  );
};
