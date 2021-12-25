type RoleType = 'client' | 'vendeur' | 'gerant' | 'commissaire' | 'admin';

export class ConnectedUserEntity {
  _id: string;
  authentifie: boolean;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  compteId: string;
  roles: RoleType[];
  token: string;
  nextAuthDate: number;

  constructor(user: ConnectedUserEntity) {
    this._id = user._id;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.authentifie = user.authentifie;
    this.telephone = user.telephone;
    this.email = user.email;
    this.compteId = user.compteId;
    this.roles = user.roles;
    this.token = user.token;
    this.nextAuthDate = user.nextAuthDate;
  }
}
