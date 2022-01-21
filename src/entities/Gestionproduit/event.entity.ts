import { VendeurEntity } from '../GestionCompte/vendeur.entity';
import { CategorieEntity } from './categorie.entity';
import { QuantityType } from './produit.entity';

export class EventEntity {
  _id: string;
  nom: string;
  description: string;
  quantite: QuantityType;
  vendeur: VendeurEntity;
  category: CategorieEntity;
  images: string[];
  estBio: boolean;
  periode: string;
  dateCreation: string;

  constructor(event: EventEntity) {
    this._id = event._id;
    this.nom = event.nom;
    this.description = event.description;
    this.quantite = event.quantite;
    this.vendeur = event.vendeur;
    this.category = event.category;
    this.images = event.images;
    this.estBio = event.estBio;
    this.periode = event.periode;
    this.dateCreation = event.dateCreation;
  }
}
