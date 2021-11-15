export const ROUTES = {
  HOME_PAGE: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  UNAUTHORIZED: '/unauthorized',
  ACTIVATE_ACCOUNT: '/activate-account',
  ADMIN_PAGE: {
    DASHBOARD: '/admin/dashboard',
    PERSONNEL: '/admin/personnel',
    LOGS: '/admin/logs',
    STATISTICS: '/admin/statistics',
  },
  VENDEUR_PAGE: {
    DASHBOARD: '/vendeur/dashboard',
    PRODUCTS: '/vendeur/products',
    ACCOUNT: '/vendeur/account',
    NEW_PRODUCT: '/vendeur/products/new',
  },
  GERANT_PAGE: {
    DASHBOARD: '/gerant/dashboard',
  },
  CATALOG_PAGE: {
    CATALOG: '/catalog',
    PRODUCT: (productId: string) => `/catalog/product/?id=${productId}`,
    LOT: (lotId: string) => `/catalog/lot/?id=${lotId}`,
  },
};
