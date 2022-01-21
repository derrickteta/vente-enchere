import { AdminContainer } from '../components/AdminContainer';
import { CategorieComponent } from '../components/CategorieComponent';

export const CategoriePage = () => {
  return (
    <AdminContainer clicked='category'>
      <CategorieComponent />
    </AdminContainer>
  );
};
