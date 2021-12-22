import { Route } from 'react-router-dom';
import { EnchereDetails } from '../page/detailenchere';

export const CatalogRoutes = () => {
  return (
    <>
      <Route exact path='/enchere/enchere-details' component={EnchereDetails} />
    </>
  );
};
