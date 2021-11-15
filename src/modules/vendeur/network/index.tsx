import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const createProduit = (produit: any) => {
  return customFetch.post(API_ROUTES.PRODUITS.BASE, produit);
};
export const createLot = (lot: any) => {
  return customFetch.post(API_ROUTES.LOTS.BASE, lot);
};
