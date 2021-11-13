import { VendeurEntity } from '../GestionCompte/vendeur.entity';
import { CategorieEntity } from './categorie.entity';

export class ProduitEntity{
  nom:string;
  descirption:string;
  prixMin:string;
  vendeur:VendeurEntity;
  category:CategorieEntity;
  images:string[];
  estBio:boolean;
  statut:string;
  dateCreation:string;
  dateModification:string;
  dateSuppression:string;

  constructor(produit:ProduitEntity){
    this.nom=produit.nom;
    this.descirption=produit.descirption;
    this.prixMin=produit.prixMin;
    this.vendeur=produit.vendeur;
    this.category=produit.category;
    this.images=produit.images;
    this.estBio=produit.estBio;
    this.statut=produit.statut;
    this.dateCreation=produit.dateCreation;
    this.dateModification=produit.dateModification;
    this.dateSuppression=produit.dateSuppression;

  }
}