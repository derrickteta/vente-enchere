import { Route } from 'react-router-dom';
import { AdminDashBoard } from '../pages/dashboard';
import { PersonnelPage } from '../pages/personnel';

export const AdminRoutes = () => {
  return (
    <>
      <Route path='/admin/dashboard' component={AdminDashBoard} />
      <Route path='/admin/personnel' component={PersonnelPage} />
    </>
  );
};
