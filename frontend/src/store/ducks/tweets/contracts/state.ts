import { LoadingStatus } from "../../../types";

export interface Tweet {
  _id: string;
  user: {
    fullname: string;
    username: string;
    avatar: string;
  };
  text: string;
}
export interface Tweets {
  items: Tweet[];
  loadingStatus: LoadingStatus;
}
