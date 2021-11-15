import { ProductForm } from '../components/ProductForm';
import { VendeurContainer } from '../components/VendeurContainer';

export const NewProductPage = () => {
  return (
    <div>
      <VendeurContainer clicked='products'>
        <h1>Creation d'un produit</h1>
        <ProductForm />
      </VendeurContainer>
    </div>
  );
};
