import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const createProduit = (
  produit: any,
): Promise<ResponseType<ProduitEntity>> => {
  return customFetch.post(API_ROUTES.PRODUITS.BASE, produit);
};

export const addImageProduit = (
  produitId: string,
  images: [],
): Promise<ResponseType<ProduitEntity>> => {
  let formData = new FormData();
  for (let image of images) {
    formData.append('image', image);
  }

  return fetch(API_ROUTES.PRODUITS.ADD_IMAGES(produitId), {
    method: 'put',
    body: formData,
  }).then((res) => res.json());
};

export const createLot = (lot: any): Promise<ResponseType<LotEntity>> => {
  return customFetch.post(API_ROUTES.LOTS.BASE, lot);
};

export const fetchCategories = (): Promise<ResponseType<CategorieEntity>> => {
  return customFetch.get(API_ROUTES.CATEGORIES.BASE);
};
