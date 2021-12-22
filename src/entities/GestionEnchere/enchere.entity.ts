import { LotEntity } from '../Gestionproduit/lot.entity';

export type Typestatut = 'pas_commence' | 'en_cours' | 'termine';

export class EnchereEntity {
  _id: string;
  lots: LotEntity[];
  pas: number;
  dateOuverture: string;
  duree: number;
  statut: Typestatut;

  constructor(enchere: EnchereEntity) {
    this._id = enchere._id;
    this.lots = enchere.lots;
    this.dateOuverture = enchere.dateOuverture;
    this.duree = enchere.duree;
    this.pas = enchere.pas;
    this.dateOuverture = enchere.dateOuverture;
    this.duree = enchere.duree;
    this.statut = enchere.statut;
  }
}
