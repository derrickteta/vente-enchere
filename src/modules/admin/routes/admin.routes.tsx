import { Route } from 'react-router-dom';
import { AdminDashBoard } from '../pages/dashboard';
import { LogPage } from '../pages/logs';
import { PersonnelPage } from '../pages/personnel';
import { StatisticsPage } from '../pages/statistics';

export const AdminRoutes = () => {
  return (
    <>
      <Route exact path='/admin/dashboard' component={AdminDashBoard} />
      <Route exact path='/admin/personnel' component={PersonnelPage} />
      <Route exact path='/admin/logs' component={LogPage} />
      <Route exact path='/admin/statistics' component={StatisticsPage} />
    </>
  );
};
