import { UserEntity } from './user.entity';

export class CommissaireEntity{
  nombreEnchereOganisee:number;
  user:UserEntity;

  constructor (commissaire:CommissaireEntity){
    this.nombreEnchereOganisee=commissaire.nombreEnchereOganisee;
    this.user=commissaire.user;
  }
}
