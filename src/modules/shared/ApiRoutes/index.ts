// export const BASE_URL = 'http://192.168.43.214:3001/';
export const BASE_URL = 'https://vente-enchere-api.herokuapp.com/';

export const API_ROUTES = {
  SIGNUP: (role: string) => `${BASE_URL}api/auth/signup/${role}`,
  SIGNIN: `${BASE_URL}api/auth/signin`,
  IMAGES: (id: string) => `${BASE_URL}api/images/${id}`,
  PRODUITS: {
    BASE: `${BASE_URL}api/produits`,
    BASEID: (id: string) => `${BASE_URL}api/produits/${id}`,
    ADD_IMAGES: (id: string) => `${BASE_URL}api/produits/images/${id}`,
  },
  LOTS: {
    BASE: `${BASE_URL}api/lots`,
    BASEID: (id: string) => `${BASE_URL}api/lots/${id}`,
  },
  CATEGORIES: {
    BASE: `${BASE_URL}api/categories`,
    BASEID: (id: string) => `${BASE_URL}api/categories/${id}`,
  },
  USERS: {
    BASE: `${BASE_URL}api/users`,
    BASEID: (id: string) => `${BASE_URL}api/users/${id}`,
  },
  VENDEURS: {
    BASE: `${BASE_URL}api/vendeurs`,
    BASEID: (id: string) => `${BASE_URL}api/vendeurs/${id}`,
  },
  GERANTS: {
    BASE: `${BASE_URL}api/gerants`,
    BASEID: (id: string) => `${BASE_URL}api/gerants/${id}`,
  },
  COMMISSAIRES: {
    BASE: `${BASE_URL}api/commissaires`,
    BASEID: (id: string) => `${BASE_URL}api/commissaires/${id}`,
  },
};
