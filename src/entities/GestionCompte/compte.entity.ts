export class CompteEntity{
  email:string;
  password:string;
  isActivated:boolean;

  constructor (compte:CompteEntity){
    this.email=compte.email;
    this.password=compte.password;
    this.isActivated=compte.isActivated;
  }
}
