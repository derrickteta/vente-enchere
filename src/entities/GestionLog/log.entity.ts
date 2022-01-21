export class LogEntity {
  _id: string;
  date_creation: string;
  action: string;
  createur: string;
  table: string;

  constructor(log: LogEntity) {
    this._id = log._id;
    this.date_creation = log.date_creation;
    this.action = log.action;
    this.createur = log.createur;
    this.table = log.table;
  }
}
