export class ConnectionEntity {
  _id: string;
  user: string;
  salleEnchere: string;

  constructor(connection: ConnectionEntity) {
    this._id = connection._id;
    this.user = connection.user;
    this.salleEnchere = connection.salleEnchere;
  }
}
