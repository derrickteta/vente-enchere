import { UserTypeAction } from './actions';
import { CREATE_USER } from './actionTypes';

export type UserStateType = {
  authentifie: boolean;
  roles: [];
  _id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  compteId: string;
  token: string;
  nextAuthDate: number;
};
const INITIAL_STORE: UserStateType = {
  authentifie: false,
  roles: [],
  _id: '',
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  compteId: '',
  token: '',
  nextAuthDate: 0,
};

export const userReducer = (state = INITIAL_STORE, action: UserTypeAction) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
