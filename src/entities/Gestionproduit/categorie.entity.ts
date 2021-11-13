export class CategorieEntity{
  nom:string;
  description:string;
  dateCreation:string;
  dateModification:string;
  dateSuppression:string;

  constructor(categorie:CategorieEntity){
    this.nom=categorie.nom;
    this.description=categorie.description;
    this.dateCreation=categorie.dateCreation;
    this.dateModification=categorie.dateModification;
    this.dateSuppression=categorie.dateSuppression;
  }
}
