import { model, Schema, Document } from "mongoose";
import { UserModelDocumentI } from "./UserModel";

export interface TweetModelI {
  _id?: string;
  user: UserModelDocumentI;
  text: string;
}

export type TweetModelDocumentI = TweetModelI & Document;
const TweetsSchema = new Schema({
  text: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    ref: "User",
    type: Schema.Types.ObjectId,
  },
});
export const TweetModel = model<TweetModelDocumentI>("Tweet", TweetsSchema);
