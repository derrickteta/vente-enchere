import { ProduitEntity } from './produit.entity';

export class LotEntity {
  _id: string;
  numeroLot: number;
  prixFinalVente: string;
  statut: string;
  prixMin: string;
  nonVendu: boolean;
  dateMiseEnchere: string;
  produits: ProduitEntity[];
  commentaireRefus?: string;
  dateReception?: string;
  dateRefus?: string;
  dateCreation: string;
  dateModification?: string;
  dateSuppression?: string;

  constructor(lot: LotEntity) {
    this._id = lot._id;
    this.numeroLot = lot.numeroLot;
    this.prixFinalVente = lot.prixFinalVente;
    this.statut = lot.statut;
    this.prixMin = lot.prixMin;
    this.nonVendu = lot.nonVendu;
    this.dateMiseEnchere = lot.dateMiseEnchere;
    this.produits = lot.produits;
    this.commentaireRefus = lot.commentaireRefus;
    this.dateReception = lot.dateReception;
    this.dateRefus = lot.dateRefus;
    this.dateCreation = lot.dateCreation;
    this.dateModification = lot.dateModification;
    this.dateSuppression = lot.dateSuppression;
  }
}
