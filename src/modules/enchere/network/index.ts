import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const fetchProduitEnchere = (
  productId: string,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.get(API_ROUTES.SALLES_ENCHERE.PRODUCT_ENCHERE(productId));
};
