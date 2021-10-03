import { LoadingStatus } from "../../../types";

export interface Tweet {
  _id: string;
  user: {
    fullName: string;
    userName: string;
    avatar: string;
  };
  text: string;
}
export interface Tweets {
  items: Tweet[];
  loadingStatus: LoadingStatus;
}
