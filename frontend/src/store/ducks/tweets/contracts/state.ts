import { LoadingStatus } from "../../../types";

export interface Tweet {
  _id?: string;

  text: string;
}
export interface Tweets {
  items: Tweet[];
  loadingStatus: LoadingStatus;
}
