import { CREATE_USER } from './actionTypes';
import { UserStateType } from './reducer';

export type UserTypeAction = { type: string; data: any };

export const createUser = (user: UserStateType): UserTypeAction => ({
  type: CREATE_USER,
  data: {
    authentifie: user.authentifie,
    roles: user.roles,
    _id: user._id,
    nom: user.nom,
    prenom: user.prenom,
    telephone: user.telephone,
    email: user.email,
    compteId: user.compteId,
    token: user.token,
    nextAuthDate: user.nextAuthDate,
  },
});
