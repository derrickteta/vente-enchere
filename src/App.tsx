import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/global-css/modal-styles.css';
import { AdminRoutes } from './modules/admin/routes/admin.routes';
import { CatalogPage } from './modules/catalog/pages/catalog';
import { CommissaireRoutes } from './modules/commissaire/routes/commissaire.routes';
import { GerantRoutes } from './modules/gerant/routes/gerant.routes';
import { HomePage } from './modules/homePage';
import { LoginPage } from './modules/login';
import { RegistrationPage } from './modules/registration';
import { ActivateAccount } from './modules/registration/activateAcount';
import { Unauthorized } from './modules/shared/Unauthorized';
import { VendeurRoutes } from './modules/vendeur/routes/vendeur.routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' component={LoginPage} />
        <Route path='/activate-account' component={ActivateAccount} />
        <Route exact path='/signup' component={RegistrationPage} />
        <Route exact path='/catalog' component={CatalogPage} />
        <Route path='/admin' render={() => <AdminRoutes />} />
        <Route path='/vendeur' render={() => <VendeurRoutes />} />
        <Route path='/gerant' render={() => <GerantRoutes />} />
        <Route path='/commissaire' render={() => <CommissaireRoutes />} />

        <Route exact path='/unauthorized' component={Unauthorized} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
