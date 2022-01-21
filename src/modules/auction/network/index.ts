import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const getProduitEnchere = (
  enchereId: any,
): Promise<ResponseType<ProduitEntity>> => {
  return customFetch.get(API_ROUTES.SALLES_ENCHERE.ALL_PRODUCTS(enchereId));
};
