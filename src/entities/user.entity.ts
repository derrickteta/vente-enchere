export type TypeSuperficie = 'Grande' | 'Moyenne' | 'Petite';

export type Localisation = {
  longitude?: number;
  latitude?: number;
  ville: string;
  quartier: string;
  lieuxDit: string;
};

export class UserEntity {
  _id: string;
  proprietaire: string;
  typeSuperficie: TypeSuperficie;
  superficie: number;
  prix: number;
  images: string[];
  localisation: Localisation;
  accessibilite: boolean;
  etat: string;
  typeZone: string;
  morcellement: boolean;
  dateMiseEnVente: string;
  description?: string;
  dateAjout: string;

  constructor(user: UserEntity) {
    this._id = user._id;
    this.proprietaire = user.proprietaire;
    this.typeSuperficie = user.typeSuperficie;
    this.superficie = user.superficie;
    this.prix = user.prix;
    this.images = user.images;
    this.localisation = user.localisation;
    this.accessibilite = user.accessibilite;
    this.etat = user.etat;
    this.typeZone = user.typeZone;
    this.morcellement = user.morcellement;
    this.dateMiseEnVente = user.dateMiseEnVente;
    this.description = user.description;
    this.dateAjout = user.dateAjout;
  }
}
