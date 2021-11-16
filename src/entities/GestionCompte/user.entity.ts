import { CompteEntity } from './compte.entity';

export type Role='Client'|'Vendeur'|'Gerant';

export class UserEntity{
  _id:string;
  nom:string;
  prenom:string;
  localisation:string;
  pays:string;
  ville:string;
  telephone:string;
  email:string;
  pseudo:string;
  roles: Role;
  numeroCompte:string;
  numeroMomo:string;
  compte:CompteEntity;
  dateAjout:string;

  constructor(user: UserEntity){
    this._id=user._id;
    this.nom=user.nom;
    this.prenom=user.prenom;
    this.localisation=user.localisation;
    this.pays=user.pays;
    this.ville=user.ville;
    this.telephone=user.telephone;
    this.email=user.email;
    this.pseudo=user.pseudo;
    this.roles=user.roles;
    this.numeroCompte=user.numeroCompte;
    this.numeroMomo=user.numeroCompte;
    this.compte=user.compte;
    this.dateAjout=user.dateAjout;
  }
}
