import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import {
  ResponseEntityType,
  ResponseType,
} from '../../../entities/Response.entity';
import { customFetch } from '../../../shared/customFetch';
import { API_ROUTES } from '../../shared/ApiRoutes';

export const validerLot = (lotId: string): Promise<ResponseType<LotEntity>> => {
  return customFetch.put(API_ROUTES.LOTS.BASEID(lotId), { statut: 'valide' });
};

export const fetchSallesEnchere = (): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.get(API_ROUTES.SALLES_ENCHERE.BASE);
};

export const fetchOneSallesEnchere = (
  enchereId: string,
): Promise<ResponseEntityType<EnchereEntity>> => {
  return customFetch.get(API_ROUTES.SALLES_ENCHERE.BASEID(enchereId));
};

export const getOneLot = (
  lotId: any,
): Promise<ResponseEntityType<LotEntity>> => {
  return customFetch.get(API_ROUTES.LOTS.BASEID(lotId));
};

export const createSalleEnchere = (
  salleEnchere: any,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.post(API_ROUTES.SALLES_ENCHERE.BASE, salleEnchere);
};

export const fermerSalleEnchere = (
  salleEnchereID: string,
): Promise<ResponseType<EnchereEntity>> => {
  const dataToPost = { statut: 'termine' };
  return customFetch.put(
    API_ROUTES.SALLES_ENCHERE.BASEID(salleEnchereID),
    dataToPost,
  );
};

export const ouvrirSalleEnchere = (
  salleEnchereID: string,
): Promise<ResponseType<EnchereEntity>> => {
  const dataToPost = { statut: 'en_cours' };
  return customFetch.put(
    API_ROUTES.SALLES_ENCHERE.BASEID(salleEnchereID),
    dataToPost,
  );
};

export const deleteSalleEnchere = (
  salleEnchereID: string,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.delete(API_ROUTES.SALLES_ENCHERE.BASEID(salleEnchereID));
};

export const updateSalleEnchere = (
  salleEnchere: any,
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.put(API_ROUTES.SALLES_ENCHERE.BASE, salleEnchere);
};

export const updateLotOfSalle = (
  salleEnchereId: string,
  newLots: any[],
): Promise<ResponseType<EnchereEntity>> => {
  return customFetch.put(API_ROUTES.SALLES_ENCHERE.BASEID(salleEnchereId), {
    lots: newLots,
  });
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
