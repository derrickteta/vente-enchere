export class FeedbackEntity {
  _id: string;
  commentaire: string;
  note: string;
  lot: string;
  client: string;

  constructor(feedback: FeedbackEntity) {
    this._id = feedback._id;
    this.commentaire = feedback.commentaire;
    this.note = feedback.note;
    this.lot = feedback.lot;
    this.client = feedback.client;
  }
}
