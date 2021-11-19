import { model, Schema, Document } from "mongoose";

export interface UserModelI {
  _id?: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;
  tweets?: string[];
}

export type UserModelDocumentI = UserModelI & Document;
const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  fullname: {
    required: true,
    type: String,
  },
  username: {
    unique: true,
    required: true,
    type: String,
  },
  location: {
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmHash: {
    required: true,
    type: String,
  },
  about: String,
  website: String,
  tweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
});
UserSchema.set("toJSON", {
  transform: function (_, obj) {
    delete obj.password;
    delete obj.confirmHash;
    return obj;
  },
});
export const UserModel = model<UserModelDocumentI>("User", UserSchema);
