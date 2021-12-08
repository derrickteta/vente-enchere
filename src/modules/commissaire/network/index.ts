import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ResponseType } from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const validerLot = (lotId: string): Promise<ResponseType<LotEntity>> => {
  return customFetch.put(API_ROUTES.LOTS.BASEID(lotId), { statut: 'valide' });
};

export const fetchSallesEnchere = (): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.get(API_ROUTES.SALLES_ENCHERE.BASE);
};

export const createSalleEnchere = (
  salleEnchere: any,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.post(API_ROUTES.SALLES_ENCHERE.BASE, salleEnchere);
};

export const updateSalleEnchere = (
  salleEnchere: any,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.put(API_ROUTES.SALLES_ENCHERE.BASE, salleEnchere);
};

export const refuserLot = (
  lotId: string,
  commentaire: string,
): Promise<ResponseType<LotEntity>> => {
  return customFetch.put(API_ROUTES.LOTS.BASEID(lotId), {
    statut: 'refuse',
    commentaireRefus: commentaire,
    dateRefus: new Date().toUTCString(),
  });
};

export const rejeterLot = (
  lotId: string,
  commentaire: string,
): Promise<ResponseType<LotEntity>> => {
  return customFetch.put(API_ROUTES.LOTS.BASEID(lotId), {
    statut: 'rejete',
    commentaireRefus: commentaire,
    dateRefus: new Date().toUTCString(),
  });
};
