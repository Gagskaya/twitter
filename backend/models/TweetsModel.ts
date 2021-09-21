import { model, Schema, Document } from "mongoose";

export interface TweetsModelI {
  _id?: string;
  user: {
    fullname: string;
    username: string;
    avatar: string;
  };
  text: string;
}

export type TweetsModelDocumentInterface = TweetsModelI & Document;
const TweetsSchema = new Schema({
  text: String,
  user: {
    fullname: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    avatar: {
      required: true,
      type: String,
    },
  },
});
export const TweetsModel = model<TweetsModelDocumentInterface>(
  "Tweets",
  TweetsSchema
);
