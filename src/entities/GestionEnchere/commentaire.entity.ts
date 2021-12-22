export class CommentaireEntity {
  _id: string;
  content: string;
  salleEnchere: string;
  client: string;

  constructor(commentaire: CommentaireEntity) {
    this._id = commentaire._id;
    this.content = commentaire.content;
    this.salleEnchere = commentaire.salleEnchere;
    this.client = commentaire.client;
  }
}
