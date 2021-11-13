export type LocalisationType = {
  pays: string;
  ville: string;
  adresse: string;
};

export class UserEntity {
  _id: string;
  nom: string;
  prenom: string;
  localisation: LocalisationType;
  telephone: string;
  email: string;
  pseudo: string;
  roles: string[];
  numeroCompte: string;
  numeroMomo: string;
  compte: string;
  dateAjout: string;

  constructor(user: UserEntity) {
    this._id = user._id;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.localisation = user.localisation;
    this.telephone = user.telephone;
    this.email = user.email;
    this.pseudo = user.pseudo;
    this.roles = user.roles;
    this.numeroCompte = user.numeroCompte;
    this.numeroMomo = user.numeroCompte;
    this.compte = user.compte;
    this.dateAjout = user.dateAjout;
  }
}
