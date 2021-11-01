import { Route } from 'react-router-dom';
import { AdminDashBoard } from '../pages/dashboard';

export const AdminRoutes = () => {
  return (
    <>
      <Route path='/admin/dashboard' component={AdminDashBoard} />
    </>
  );
};
