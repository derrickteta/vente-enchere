import { Route } from 'react-router-dom';
import { CommissaireAuctions } from '../pages/auction';
import { CommissaireDashboard } from '../pages/dashboard';
import { DetailEnchere } from '../pages/detailauction';
import { DetailLot } from '../pages/detailslot';

export const CommissaireRoutes = () => {
  return (
    <>
      <Route
        exact
        path='/commissaire/dashboard'
        component={CommissaireDashboard}
      />
      <Route path='/commissaire/lot-details' component={DetailLot} />
      <Route path='/commissaire/auction' component={CommissaireAuctions} />
      <Route path='/commissaire/auction-detail' component={DetailEnchere} />
    </>
  );
};
