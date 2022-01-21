import { CommissaireEntity } from '../../../entities/GestionCompte/commissiare.entity';
import { GerantEntity } from '../../../entities/GestionCompte/gerant.entity';
import { UserEntity } from '../../../entities/GestionCompte/user.entity';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const fetchUsers = (): Promise<ResponseType<UserEntity>> => {
  return customFetch.get(API_ROUTES.USERS.BASE);
};
export const fetchCategories = (): Promise<ResponseType<CategorieEntity>> => {
  return customFetch.get(API_ROUTES.CATEGORIES.BASE);
};

export const createGerant = (
  gerantToCreate: string,
): Promise<ResponseType<GerantEntity>> => {
  return customFetch.post(API_ROUTES.GERANTS.BASE, gerantToCreate);
};
export const createCategory = (
  categoryToCreate: string,
): Promise<ResponseType<CategorieEntity>> => {
  return customFetch.post(API_ROUTES.CATEGORIES.BASE, categoryToCreate);
};

export const updateCategory = (
  id: string,
  categoryToCreate: string,
): Promise<ResponseType<CategorieEntity>> => {
  return customFetch.put(API_ROUTES.CATEGORIES.BASEID(id), categoryToCreate);
};
export const deleteCategory = (
  id: string,
): Promise<ResponseType<CategorieEntity>> => {
  return customFetch.delete(API_ROUTES.CATEGORIES.BASEID(id));
};

export const createCommissaire = (
  commissaireToCreate: string,
): Promise<ResponseType<CommissaireEntity>> => {
  return customFetch.post(API_ROUTES.COMMISSAIRES.BASE, commissaireToCreate);
};
