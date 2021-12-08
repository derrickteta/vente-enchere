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

export const createCommissaire = (
  commissaireToCreate: string,
): Promise<ResponseType<CommissaireEntity>> => {
  return customFetch.post(API_ROUTES.COMMISSAIRES.BASE, commissaireToCreate);
};
