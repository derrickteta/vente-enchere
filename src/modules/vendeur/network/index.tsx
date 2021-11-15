import { customFetch } from '../../../shared/customFetch';
export const createProduit = (produit: any) => {
  return customFetch.post('http://192.168.43.215:3001/api/produits', produit);
};
export const createLot = (lot: any) => {
  return customFetch.post('http://192.168.43.215:3001/api/lots', lot);
};
