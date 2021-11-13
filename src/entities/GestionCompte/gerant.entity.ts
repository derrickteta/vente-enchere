import { UserEntity } from './user.entity';

export class GerantEntity{
  nombreAccreditation:number;
  user:UserEntity;

  constructor(gerant:GerantEntity){
    this.nombreAccreditation=gerant.nombreAccreditation;
    this.user=gerant.user;
  }
}