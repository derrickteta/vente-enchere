import { UserEntity } from '../../../entities/GestionCompte/user.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const fetchUsers = (): Promise<ResponseType<UserEntity>> => {
  return customFetch.get(API_ROUTES.USERS.BASE);
};
