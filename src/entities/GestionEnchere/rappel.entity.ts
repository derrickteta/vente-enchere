export class RappelEntity {
  _id: string;
  dateAjout: string;
  salleEnchere: string;
  client: string;

  constructor(rappel: RappelEntity) {
    this._id = rappel._id;
    this.dateAjout = rappel.dateAjout;
    this.salleEnchere = rappel.salleEnchere;
    this.client = rappel.client;
  }
}
