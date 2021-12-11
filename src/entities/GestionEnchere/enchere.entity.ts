export type StatusEnchereType = 'en_cours' | 'termine';

export class EnchereEntity {
  _id: string;
  lots: string[];
  dateOuverture: string;
  duree: number;
  status: StatusEnchereType;

  constructor(enchere: EnchereEntity) {
    this._id = enchere._id;
    this.lots = enchere.lots;
    this.dateOuverture = enchere.dateOuverture;
    this.duree = enchere.duree;
    this.status = enchere.status;
  }
}
