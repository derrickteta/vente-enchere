import { LotEntity } from '../Gestionproduit/lot.entity';

export type StatusType = 'en_cours' | 'termine';

export class EnchereEntity {
  _id: string;
  lots: LotEntity[];
  dateOuverture: string;
  duree: number;
  status: StatusType;

  constructor(enchere: EnchereEntity) {
    this._id = enchere._id;
    this.lots = enchere.lots;
    this.dateOuverture = enchere.dateOuverture;
    this.duree = enchere.duree;
    this.status = enchere.status;
  }
}
